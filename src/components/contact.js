import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilepic from './kauser.jpg'

class Contact extends Component {
    render () {
        return ( 
            <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kauser Ahmed</h2>
            <img
              src={profilepic}
              alt="avatar"
              style={{height: '250px'}}
              />

             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello! 
             I'm Kauser Ahmed, a software developer based of New York. 
             I enjoy building things for people. I have build Andriod Apps, Websites, 
             and other software. Currently I'm studying at City universtiy in New York.
             After graduating from college, I'm interesting to do more daily basis 
             project. I'm also interesting in AI. Currently I'm self studying about AI.
             In the future I want to build something that will help others.
             </p>
             </Cell>
             </Grid>
             </div>
        )
    }
}

export default Contact;