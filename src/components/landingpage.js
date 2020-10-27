import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={"https://avatars0.githubusercontent.com/u/61078512?s=400&u=f2c44be8e1125e4c7a286a3a2c77e08c2bbc2ef8&v=4"}
              alt="avatar"
              className="avatar-img"
              />

              <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MySQL | MongoDB  </p>

              <div className="social-links">

              {/*LinkedIn*/}
              <a href="https://www.linkedin.com/in/leslie-lawson-b04860a6/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square"  aria-hidden="true"/>             
              </a>

              {/*Github*/}
              <a href="https://github.com/Mssanoko" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square"  aria-hidden="true"/>             
              </a>

              {/*Email*/}
              <a href="mailto:lawsonjleslie@gmail.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-envelope"  aria-hidden="true"/>             
              </a>

               {/*My Resume*/}
               <a href="https://drive.google.com/file/d/1xkOVWKW0GNWCAWJOecSkEKIozlJjVeCn/view?usp=sharing" rel="noopener noreferrer" target="_blank">
               <i className="fa fa-file-text"  aria-hidden="true"/>             
             </a>
             
              {/*Phone Number*/}
              <a href="tel:+1-862-448-4900" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-mobile"  aria-hidden="true"/>             
              </a>

              </div>
               </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;