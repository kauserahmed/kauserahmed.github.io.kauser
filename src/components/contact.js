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

             <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (917) 946 6264
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    kauserahmed97@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>

            <div className="row">
            <div className="email-body">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName"><b>Name  </b> <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="52" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail"> <b>Email  </b><span className="required">*</span></label>
						   <input type="text" defaultValue="" size="52" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject"><b>Subject  </b> <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="52" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage"><b>Message </b><span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit"><b>Submit</b></button>
                     <span id="image-loader">
                        <img alt="" src="./loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

           </div>
          </Cell> 
        </Grid>
        </div>
           
        )
    }
}

export default Contact;