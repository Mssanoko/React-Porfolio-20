import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Leslie Lawson</h2>
            
            <img 
            src={"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/122432945_994896521029889_8354084647848811756_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=Y9FhlNZMoyoAX9L8MOH&_nc_ht=scontent-lga3-1.xx&oh=f9f1851982a1ec03ce53b222cc2158d7&oe=5FBD75D8"}
            alt="moi"
            style={{height: '250px'}}
            />
            <p style={{width: '75px', margin: 'auto', paddingTop: '1em'}}>Web Developer Full Stack</p>
            </Cell>

            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
            <ListItem>
            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}> 
            <i className="fa fa-envelope" aria-hidden="true"/> lawsonjleslie@gmail.com
            </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
            <i className="fa fa-phone-square" aria-hidden="true"/> (862) 448-4900
            </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    lilsly95
            </ListItemContent>
            </ListItem>
            </List>
            </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Contact;