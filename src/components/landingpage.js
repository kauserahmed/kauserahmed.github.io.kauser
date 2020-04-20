import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './kauser.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profilepic}
              
              alt="Profilepic"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Kauser Ahmed</h1>
           
            <hr/>

          <p>Software Developer</p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;