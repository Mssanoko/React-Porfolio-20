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
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/65003712/88004517-28d34280-cad5-11ea-8031-5ec6cb0e2977.png) center / cover'}}>What am I eating?</CardTitle>
                    <CardText>
                    Utilizing this web application will provide users a randomized meal and cocktail after using androp down selection menu to find a meal closer to their preference.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://aholanda12.github.io/what-am-i-having/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                        <Button colored><a href="https://github.com/Mssanoko/Project1" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                {/*Project 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/93558396-5a3c8300-f94b-11ea-9b93-ee7a8594b38d.png) center / cover'}}>Binvoice</CardTitle>
                    <CardText>
                   As a contractor I would like an affordable app to help me generate invoices for my customers.
                    </CardText>
                    <CardActions border>
                    <Button colored><a href="https://evening-plains-51887.herokuapp.com/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Project2" rel="noopener noreferrer" target="_blank">Github</a></Button>
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
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/87215033-557ea180-c300-11ea-9bc6-6516b1820f84.png) center / cover'}}>Weather Dashboard</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://mssanoko.github.io/WeatherDashboard6/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/WeatherDashboard6" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/86534906-55b71100-beaa-11ea-85af-4596b67a0696.png) center / cover'}}>Day Planner</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://mssanoko.github.io/DayPlanner5/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/DayPlanner5" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/85745992-20553b00-b6d4-11ea-92c2-d30247f56336.png) center / cover'}}>Code Quiz</CardTitle>
                <CardActions border>
                <Button colored><a href="https://mssanoko.github.io/Code-Quizz" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                <Button colored><a href="https://github.com/Mssanoko/Code-Quizz" rel="noopener noreferrer" target="_blank">Github</a></Button>
                </CardActions>
                <CardMenu style={{color:'#d8bfd8'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://github.com/Mssanoko/Updated-Porfolio/blob/master/Assets/Images/Password-Generator.png?raw=true) center / cover'}}>Password Generator</CardTitle>
            <CardActions border>
            <Button colored><a href="https://mssanoko.github.io/Password-generator/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
            <Button colored><a href="https://github.com/Mssanoko/Password-generator" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color:'#d8bfd8'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://github.com/Mssanoko/Updated-Porfolio/blob/master/Assets/Images/Good-ReadMe-Generator.png?raw=true) center / cover'}}>Good ReadMe Generator</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://mssanoko.github.io/Good-README-Generator9/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Good-README-Generator9" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/89740128-3173c480-da54-11ea-863d-35bb5c0115c5.png) center / cover'}}>Team Profile Generator</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://mssanoko.github.io/Team-Profile-Generator10-/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Team-Profile-Generator10-" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/90325931-eb38cc80-df4f-11ea-88ad-7449afbff721.png) center / cover'}}>Note Taker</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://note-taker-app-ll.herokuapp.com/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Note_Taker_11" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/90971699-8a296f80-e4e0-11ea-946b-664a34841a39.gif) center / cover'}}>Employer Tracker</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://github.com/Mssanoko/Employee_Tracker12" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/91626352-68b30280-e97c-11ea-815e-cf5b5dfb63fe.png) center / cover'}}>Burger App</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://mange-le-burgerapp.herokuapp.com/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Burger13" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/94942720-abe52180-04a4-11eb-9b90-b3916c024989.png) center / cover'}}>Fitness Tracker</CardTitle>
                <CardActions border>
                <Button colored><a href="https://cryptic-tundra-90014.herokuapp.com/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                <Button colored><a href="https://github.com/Mssanoko/Fitness-Tracker17" rel="noopener noreferrer" target="_blank">Github</a></Button>
                </CardActions>
                <CardMenu style={{color:'#d8bfd8'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/95669781-3f2bf000-0b52-11eb-981b-2fe1faebb605.png) center / cover'}}>Progressive Budget</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://murmuring-sierra-73946.herokuapp.com/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Progressive_Budget_18" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#d8bfd8'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#d8bfd8", height: '176px', background: 'url(https://user-images.githubusercontent.com/61078512/96355004-23bd6980-10ab-11eb-84c8-daf1d8ca0076.png) center / cover'}}>User Directory</CardTitle>
                    <CardActions border>
                    <Button colored><a href="https://mssanoko.github.io/Employee_Directory_19/" rel="noopener noreferrer" target="_blank"> Link </a></Button>
                    <Button colored><a href="https://github.com/Mssanoko/Employee_Directory_19" rel="noopener noreferrer" target="_blank">Github</a></Button>
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