import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Porfolio extends Component {
    constructor(props) {
        super (props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div ClassName="porfolio-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>What am I eating?</CardTitle>
                    <CardText>
                    Utilizing this web application will provide users a randomized meal and cocktail after using androp down selection menu to find a meal closer to their preference.
                    </CardText>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/*Project 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Binvoice</CardTitle>
                    <CardText>
                   As a contractor I would like an affordable app to help me generate invoices for my customers.
                    </CardText>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>

            )
        } else if(this.state.activeTab === 1) {
            return(
                <div ClassName="porfolio-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Weather Dashboard</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Day Planner</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Code Quiz</CardTitle>
                <CardActions border>
                    <Button colored>Link</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#d8bfd8'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Password Generator</CardTitle>
            <CardActions border>
                <Button colored>Link</Button>
                <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color:'#d8bfd8'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Good ReadMe Generator</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Team Profile Generator</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Note Taker</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Employer Tracker</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Burger App</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Fitness Tracker</CardTitle>
                <CardActions border>
                    <Button colored>Link</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#d8bfd8'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>Progressive Budget</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url() center / cover'}}>User Directory</CardTitle>
                    <CardActions border>
                        <Button colored>Link</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
}

    
    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>PROJECTS</Tab>
                <Tab>ASSIGNMENTS</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
            </div>
        )
    }
}

export default Porfolio;