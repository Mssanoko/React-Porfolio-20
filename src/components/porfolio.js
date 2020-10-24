import React, { Component } from 'react';
import {Tabs, Tab } from 'react-mdl';

class Porfolio extends Component {
    constructor(props) {
        super (props);
        this.state = { activeTab: 0 };
    }

    render() {
        return(
            <div className= "category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>REACT</Tab>
                <Tab>NODEJS</Tab>
                <Tab>MYSQL</Tab>
                <Tab>MONGODB</Tab>
                </Tabs>

                <section className="porfolio-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Porfolio;