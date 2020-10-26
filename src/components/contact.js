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
            src={"./avatar.png"}
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
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> 
            <i className="fa fa-envelope" aria-hidden="true"/> lawsonjleslie@gmail.com
            </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
            <i className="fa fa-phone-square" aria-hidden="true"/> (862) 448-4900
            </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
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