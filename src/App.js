// App.jsx
 
import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import Main from './components/main';
import { Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Leslie Lawson</Link>} scroll>
              <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/porfolio">Porfolio</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer className= "header-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Leslie Lawson</Link>}>
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/porfolio">Porfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
      </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}
 
export default App;



