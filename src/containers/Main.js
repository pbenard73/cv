import React from "react"

import { Windows } from "react-windows-dashboard"
import hoc from "./../hocs/main"
import Dashboard from "./Dashboard"

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	setActiveBindThis(uuid) {
		this.props.setActive(uuid)
	}

    render() {
        const dashboard = <Dashboard />

        const decorator = props => (
            <div className={`window`} style={props.style}>
                <div className='decorator'>
                    <span className='title'>{this.trans(props.data.title)}</span>
                    {props.actions}
                    <span className='decorator_minimize' onClick={() => props.minimize(props.data.uuid)} />
                    {props.resizable === false ? null : <span className='decorator_toggle' onClick={props.toggle}></span>}
                    <span className='decorator_close' onClick={props.onClose}></span>
                </div>
                <div className='window_content'>{props.children}</div>
            </div>
        )

        return (
            <Windows
                decorator={decorator}
                dashboard={dashboard}
                windows={this.props.windows}
                onClose={this.props.removeWindow}
                active={this.props.active}
                setActive={this.setActive}
            />
        )
    }
}

export default hoc()(Main)