import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './kauser.jpg';
//import resume from './Resume.pdf';


class Resume extends Component {
    render () {
        return ( 
            <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src={profilepic}
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Kauser Ahmed</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> Engaged, 
             energetic, creative computer science experience. Seeking to leverage 
             exemplary leadership skills, analytical skills, and excellent coding 
             skills. Computer expertise in front desk, cashier, troubleshooting, 
             fixing computer, internet troubleshooting, and helping both employee 
             and customer with technical issue.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3150 Decatur ave Bronx, NY 10467</p>
            <h5>Phone</h5>
            <p>(917) 946 6264 </p>
            <h5>Email</h5>
            <p>kauserahmed97@gmail.com</p>
            <h5>Web</h5>
            <p>Coming soon</p>
            <p>
            <a href= "https://drive.google.com/file/d/1-wYR8tEEDJpIUxZ2MPzlnr9666etvNed/view?usp=sharing" className="button"><i className="fa fa-download"></i>Download Resume</a>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          </Grid>
          </div>
        )
    }
}

export default Resume;