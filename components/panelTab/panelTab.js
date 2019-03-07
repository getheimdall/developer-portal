import React from 'react'
import Row from './../row'
import Col from './../col'

import './panelTab.scss'

class PanelTab extends React.Component {

    state = {
        tabActive: 0
    }

    changeTabActive = tab => {
        this.setState({ ...this.state, tabActive: tab })
    }

    render() {

        const { tabs, tabsContent } = this.props

        return (
            <div className="panelTab">
                <div className="tabs">
                    { tabs.map((tab, index) => {
                        return (
                            <div key={index} onClick={() => this.changeTabActive(index)} className={this.state.tabActive === index ? 'active': ''}>{tab}</div>
                        )
                    })}
                </div>
                <div className="panelTab-content">
                    {tabsContent.map((tabContent, index) => {
                        return (
                            <div key={index} className={`tab-content ${this.state.tabActive === index ? 'active' : ''}`}>
                                {tabContent}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

PanelTab.defaultProps = {
    tabs: [
        "tab 1", "tab 2", "tab 3" , "tab 4"
    ],
    tabsContent: [
        <div>Content 1</div>,
        <div>Content 2</div>,
        <div>Content 3</div>,
        <div>Content 4</div>,
    ]
}

export default PanelTab