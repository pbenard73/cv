import fr from "./../translations/fr"
import en from "./../translations/en"
import it from "./../translations/it"
import common from "./../translations/common"

const mainReduxer = new (class {
    state = {
        active: null,
        windows: {},
        order: [],
        locale: "fr",
        messages: { fr: { ...common, ...fr }, en: { ...common, ...en }, it: {...common, ...it} },
    }

    actions = {
        setActiveInner: (state, active) => ({ ...state, active }),
        setWindows: (state, windows) => ({ ...state, windows }),
        setOrder: (state, order) => ({ ...state, order }),
        setLocale: (state, locale) => ({ ...state, locale }),
    }
})()

export default mainReduxer
