import arrayMove from 'array-move'

const thunks = {
    setActive: uuid => (dispatch, getState, uuid) => {
        let state = getState()
        let order = [...state.order]
        const index = order.indexOf(uuid)
        order = arrayMove(order, index, order.length - 1)

        dispatch("setOrder", order)
        dispatch("setActiveInner", uuid)
    },
    addWindow: windowData => (dispatch, getState, windowData) => {
        const state = getState()
        const windows = { ...state.windows }
        let order = [...state.order]
        const uuid = windowData.uuid

        if (windows[uuid] !== undefined) {
            dispatch("setActive", uuid)
            return
        }

        const index = order.indexOf(uuid)
        if (index === -1) {
            order.push(uuid)
        } else {
            order = arrayMove(order, index, order.length - 1)
        }

        windows[uuid] = windowData

        dispatch("setOrder", order)
        dispatch("setWindows", windows)
        dispatch("setActive", uuid)
    },
    removeWindow: uuid => (dispatch, getState, uuid) => {
        const state = getState()
        const windows = { ...state.windows }
        let order = [...state.order]

        if (windows[uuid] === undefined) {
            return
        }

        delete windows[uuid]

        const index = order.indexOf(uuid)
        dispatch("setWindows", windows)

        if (index !== -1) {
            order.splice(index, 1)

            dispatch("setOrder", order)
        }

        if (order.length > 0) {
            dispatch("setActive", order[order.length - 1])
        }
    },
}

export default thunks
