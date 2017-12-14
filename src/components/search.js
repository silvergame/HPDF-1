import './Search.css';
import './Adhr.jpg';
import './Pic2.jpg';
import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import {
    blue300,
    teal500,
    indigo200,
    darkBlack, 
    pink500,
    lightGreen500,
    red500,
    yellow500,
    brown500,
    deepOrange300,
    purple500,
    lightBlue50,
        } from 'material-ui/styles/colors';

const styles = {
                chip: {
                margin: 4,
                      },
                wrapper: {
                            display: 'flex',
                            flexWrap: 'wrap',
                         },
};
const rightIconMenu = (
                        <IconMenu
                                    iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                        <MenuItem primaryText="Tweet" />
                        <MenuItem primaryText="Add or remove" />
                <Divider />
                        <MenuItem primaryText="Mute" />
                        <MenuItem primaryText="Block" />
                        <MenuItem primaryText="Report" />
                <Divider />
                        <MenuItem primaryText="Embed this profile" />
        </IconMenu>
);
function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleClick() {
  alert('You clicked the Chip.');
}

export default class search extends React.Component {
 state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
         <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
           <Toolbar>
              <ToolbarGroup>
                <div className="navbar">
                  <a href="#"><b>Home</b></a>
                  <a href="#"><b>Notifications</b></a>
                  <a href="#"><b>Messages</b></a>
                </div>
              </ToolbarGroup>
           <ToolbarGroup>
                <div className='search'>
                    <form>
                        <input
                        type="text"
                        placeholder="Search Twitter"
                        style={{
                                marginRight: 5,
                                marginTop: 30,
                        }}
                        />
                    </form>
                </div>
                <List>
                    <ListItem
                    disabled={true}
                    rightAvatar={
                        <Avatar
                            className='lefta'
                            style={{
                            marginLeft: 10,
                        }}>VG
                    </Avatar>
                }
                > 
                    </ListItem>
                </List>
            
            <div>
                <RaisedButton label="Tweet" primary={true}
                style={{
                marginLeft: 5,
                marginTop: 10,
                width: '10%',
            }}/>
            </div>
        </ToolbarGroup>
    </Toolbar>
    <Toolbar  style={{ backgroundColor: blue300,}}>
            <ToolbarGroup>
                <ToolbarTitle className='sectool' text="aadhaar"/>
            </ToolbarGroup>
    </Toolbar>
    <Toolbar>
            <ToolbarGroup>
                <div className="thirdbar">
                  <a href="#" class='active'><b>Top</b></a>
                  <a href="#"><b>Latest</b></a>
                  <a href="#"><b>People</b></a>
                  <a href="#"><b>Photos</b></a>
                  <a href="#"><b>Videos</b></a>
                  <a href="#"><b>News</b></a>
                  <a href="#"><b>Broadcasts</b></a>
            </div>
            </ToolbarGroup>
            <ToolbarGroup>
                    <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    >
                    <MenuItem primaryText="Search settings" />
                <Divider />
                    <MenuItem primaryText="Save this search" />
                    <MenuItem primaryText="Embed this search" />
                    </IconMenu>
            </ToolbarGroup>
    </Toolbar>
    <Grid fluid>
            <Row>
                <Col md={3}>
                    <div>
                        <Paper style={{
                                backgroundColor: indigo200,      
                                height: 300,
                                width: 300,
                                marginLeft: 50,
                                marginTop: 10,  
                                textAlign: 'center',
                                display: 'inline-block',
                        }}
                        zDepth={3} 
                        >
                        <Card
                            style={{
                                        textAlign: 'left',
                                        height: 175,
                                        width: 250,
                                        marginLeft: 25,
                                        marginTop: 110,
                                }}
                         >
                         <CardMedia
                                    overlay={<CardTitle title="Search Filters" subtitle="Show" />}
                         >
                         </CardMedia>
                         <CardText>
                            <h2><b>Related Searches</b></h2>
                            <ul className='list'>
                                <li><a href="#">yamuna</a></li>
                                <li><a href="#">prime minister</a></li>
                                <li><a href="#">president</a></li>
                                <li><a href="#">#Chaupal</a></li>
                                <li><a href="#">indian cricket</a></li>
                            </ul>
                       </CardText>
                  </Card>
</Paper>
</div>
</Col>
     <Col md={3}>
                    <div>
                        <Paper 
                            style={{
                                    height: 300,
                                    width: 300,
                                    marginLeft: 50,
                                    marginTop: 10,         
                                    backgroundColor: indigo200,
                                    textAlign: 'center',
                                    display: 'inline-block',
                                  }} zDepth={3} >
                        <Card
                            style={{
                                    textAlign: 'center',
                                    height: 145,
                                    width: 250,
                                    marginLeft: 25,
                                    marginTop: 138,
                                }}
                        >
                        <CardMedia 
                            overlay={
                                    <div>              
                                    <List>
                                        <ListItem
                                            disabled={true}
                                            leftAvatar={
                                                        <Avatar
                                                        backgroundColor={purple500}
                                                        size= {50}
                                                        style={{ 
                                                            marginLeft: 0,
                                                            marginTop: 58,
                                                            }}>Adr
                                                        </Avatar>
                                                    }
                                        > 
                                    </ListItem>
                                </List>
                                <RaisedButton label="Follow" primary={true} 
                                                style={{
                                                marginLeft: 110,
                                                marginTop: 20,
                                                width: '10%',
                                            }}/>
                                <IconMenu
                                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                >
                                <MenuItem primaryText="Tweet to @UIDAI" />
                                <MenuItem primaryText="Add or remove" />
                        <Divider />
                                <MenuItem primaryText="Mute @UIDAI" />
                                <MenuItem primaryText="Block @UIDAI" />
                                <MenuItem primaryText="Report @UIDAI" />
                        <Divider />
                                <MenuItem primaryText="Embed this profile" />
                        </IconMenu>
                </div>
            }>
        </CardMedia>
                <CardTitle style={{textAlign: 'left',}} title="Aadhaar" subtitle="@UIDAI" />
                <CardText style={{textAlign: 'left',}}>
                Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.
                </CardText>
    </Card>
</Paper>
</div>
</Col>
    <Col md={3}>
                            <div>
                                <Paper 
                                    style={{
                                            backgroundColor: indigo200,
                                            height: 300,
                                            width: 300,
                                            marginLeft: 50,
                                            marginTop: 10, 
                                            textAlign: 'center',
                                            display: 'inline-block',
                                }} zDepth={3} > 
                                <Card
                                    style={{
                                    textAlign: 'center',
                                    height: 145,
                                    width: 250,
                                    marginLeft: 25,
                                    marginTop: 138,
                                }}
                                >
                                    <CardMedia 
                                        overlay={
                                        <div>              
                                        <List>
                                            <ListItem
                                                disabled={true}
                                                leftAvatar={
                                                    <Avatar
                                                        size= {50}
                                                        backgroundColor={red500}
                                                        style={{ 
                                                        marginLeft: 0,
                                                        marginTop: 58,
                                                    }}>Spd
                                                </Avatar>
                                                }
                                            > 
                                            </ListItem>
                                        </List>
                                        <RaisedButton label="Follow" primary={true} 
                                            style={{
                                                marginLeft: 110,
                                                marginTop: 20,
                                                width: '10%',
                                            }}/>
                                        <IconMenu
                                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                        >
                                        <MenuItem primaryText="Tweet to @stupid" />
                                        <MenuItem primaryText="Add or remove" />
                                <Divider />
                                        <MenuItem primaryText="Mute @stupid" />
                                        <MenuItem primaryText="Block @stupid" />
                                        <MenuItem primaryText="Report @stupid" />
                                <Divider />
                                        <MenuItem primaryText="Embed this profile" />
                            </IconMenu>
                            </div>
                        }>
                    </CardMedia>
                    <CardTitle style={{textAlign: 'left',}} title="#DestroyAadhaar" subtitle="@stupid" />
                    <CardText style={{textAlign: 'left',}}>
                            Engineer who takes pics,makes cartoons,talks on how to make and run free websites & a more stuff.
                    </CardText>
     </Card>
    </Paper>
</div>
</Col>
</Row>
<Row>
                    <Col md={3}>
                            <div>
                                <Paper 
                                    style={{
                                            backgroundColor: indigo200,      
                                            height: 550,
                                            width: 300,
                                            marginLeft: 50,
                                            marginTop: 20,  
                                            textAlign: 'center',
                                            display: 'inline-block',
                                          }} zDepth={3} >
                                    <h3>Who to follow?</h3>     
                                    <Chip
                                        onRequestDelete={handleRequestDelete}
                                        onClick={handleClick}
                                        style={styles.chip}
                                    >
                                    <Avatar size={10}backgroundColor={blue300}>DTP</Avatar>
                                    <b>Delhi Traffic Police</b> @DTrafficP
                                    </Chip>
                            <Divider />
                                    <Chip
                                        onRequestDelete={handleRequestDelete}
                                        onClick={handleClick}
                                        style={styles.chip}
                                    >
                                    <Avatar size={10}backgroundColor={deepOrange300}>BJP</Avatar>
                                    <b>Bhartiya Janta Party</b> @BJParty
                                    </Chip>
                            <Divider />
                                    <Chip
                                        onRequestDelete={handleRequestDelete}
                                        onClick={handleClick}
                                        style={styles.chip}
                                    >
                                    <Avatar size={10} backgroundColor={lightGreen500}>SRK</Avatar>
                                    <b>Shahrukh Khan</b> @iamshahrukh
                                    </Chip>
                            <Divider />
                         <Card
                                style={{
                                        textAlign: 'left',
                                        height: 250,
                                        width: 250,
                                        marginLeft: 25,
                                        marginTop: 110,
                                }}
                        >
                            <CardMedia
                                            overlay={<CardTitle title="Trends for you" subtitle="Change" />}
                                    >
                        </CardMedia>
                        <CardText>
                                <ul className='list'>
                                <li><a href="#">#Congress (11.2k Tweets)</a></li>
                                <li><a href="#">#BJP (11k Tweets)</a></li>
                                <li><a href="#">#President (10k Tweets)</a></li>
                                <li><a href="#">#Moscow (8.65k Tweets)</a></li>
                                <li><a href="#">#Houston (8k Tweets)</a></li>
                                <li><a href="#">#India (7k Tweets)</a></li>
                                <li><a href="#">#HappyHours (6k Tweets)</a></li>
                                <li><a href="#">#Legislative (5.5k Tweets)</a></li>
                                <li><a href="#">#Sunday (4.89k Tweets)</a></li>
                                <li><a href="#">#RulesLaws (4k Tweets)</a></li>
                            </ul>
                    </CardText>
            </Card>
</Paper>
</div>
</Col>
 <Col md={6}>
                    <div>
                        <Paper 
                            style={{
                                    height: 1890,
                                    width: 648,
                                    marginLeft: 50,
                                    marginTop: 20,         
                                    backgroundColor: indigo200,
                                    textAlign: 'center',
                                    display: 'inline-block',
                                  }} zDepth={3} >
                            <List>
                                <ListItem
                                leftAvatar={<Avatar size={45} backgroundColor={pink500}>RS</Avatar>}
                                rightIconButton={rightIconMenu}
                                primaryText={
                                        <p style={{textAlign: 'left',}}><b>Rahul Singh</b> 
                                        <span style={{color: lightBlue50}}>@rahulsingh1966</span><br />
                                            Finally. Good news from @UIDAI 
                                            <br /><br />
                                            If your Aadhaar Card is not linked with your marriage certificate before 31st December 2017, you will be considered single from 1st Jan 2018.
                                        <img src={require('./Pic2.jpg')} width="500" height="350" alt="aadhaar" />
                                        <div className="common">
                                            <a href="#"><b>Comments</b></a>
                                            <a href="#"><b>Re-tweets</b></a>
                                            <a href="#"><b>Likes</b></a>
                                            <a href="#"><b>Direct Messages</b></a>
                                        </div></p>
                                        } secondaryTextLines={2}
                                        />
                                <Divider/>
                                        <ListItem
                                        leftAvatar={<Avatar size={45} backgroundColor={teal500}>BB</Avatar>}
                                        rightIconButton={rightIconMenu}
                                        primaryText={
                                        <p style={{textAlign: 'left',}}><b>BeeBom</b> 
                                        <span style={{color: lightBlue50}}>@beebomco</span><br />
                                        65-year-old Sajidha Begum has lost her sight and fingers, and she has no way of submitting the necessary fingerprints and iris scans.
                                <br /><br />
                                In August, however, the Indian government sent a letter to her saying her pension was being taken away unless it was linked to an Aadhaar card. 
                                    <div className="common">
                                        <a href="#"><b>Comments</b></a>
                                        <a href="#"><b>Re-tweets</b></a>
                                        <a href="#"><b>Likes</b></a>
                                        <a href="#"><b>Direct Messages</b></a>
                                    </div></p>
                                                    } secondaryTextLines={2}    />
                                <Divider/>
                                 <ListItem
                                    leftAvatar={<Avatar size={45} backgroundColor={brown500}>BB</Avatar>}
                                    rightIconButton={rightIconMenu}
                                    primaryText={
                                    <p style={{textAlign: 'left',}}><b>Nikhil Pahwa</b> 
                                    <span style={{color: lightBlue50}}>@nixxin</span><br />
                                    1. If you don't have Aadhaar: notification extending deadline for you is expected tomo/day after. DONT LINK
                                    <br /><br />
                                        2. If you have Aadhaar: appeal against your linking is next week, so DONT LINK until SC passes an order next week. You still have 3 weeks for bank deadline so DONT PANIC 
                                        <div className="common">
                                            <a href="#"><b>Comments</b></a>
                                            <a href="#"><b>Re-tweets</b></a>
                                            <a href="#"><b>Likes</b></a>
                                            <a href="#"><b>Direct Messages</b></a>
                                        </div></p>
                                        } secondaryTextLines={2} />
                                <Divider/>
                                    <ListItem
                                    leftAvatar={<Avatar size={45} backgroundColor={darkBlack}>BV</Avatar>}
                                    rightIconButton={rightIconMenu}
                                    primaryText={
                                    <p style={{textAlign: 'left',}}><b>Bharat Verma</b> 
                                    <span style={{color: lightBlue50}}>@bharatV</span><br />
                                    If your debit card is stolen, you wouldn't know.
                                    <br/>
                                    Bank need not tell you.
                                    <br/>
                                    Bank won't (can't) replace your card or change the card number or the pin.<br/>
                                    You can only complain to the Bank's Call Center and only the Bank can (usually won't) call the cops.
                                        <br/>
                                        Bank=UIDAI
                                        Card=biometrics
                                        <img src={require('./Adhr.jpg')} width="500" height="350" alt="aadhar" />
                                        <div className="common">
                                            <a href="#"><b>Comments</b></a>
                                            <a href="#"><b>Re-tweets</b></a>
                                            <a href="#"><b>Likes</b></a>
                                            <a href="#"><b>Direct Messages</b></a>
                                    </div></p>
                                    } secondaryTextLines={2}
                                    />
                                <Divider/>  <ListItem
                                       leftAvatar={<Avatar size={45} backgroundColor={yellow500}>AS</Avatar>}
                                        rightIconButton={rightIconMenu}
                                        primaryText={
                                        <p style={{textAlign: 'left',}}><b>Anshul Saxena</b> 
                                        <span style={{color: lightBlue50}}>@anshulS</span><br />
                                            Two suspected Bangladeshi terrorists, arms dealer arrested with Fake Aadhaar card in Kolkata. Both are using Hindu Names. <br/>
                                        1) Samsad Mia alias Tushar Biswas.<br /><br />
                                        2) Riazul Islam alias Riaz alias Suman.
                                        Radicals using Hindu names to achieve Hindu Terror Agenda.
                                        Thanks to Mamata Didi.
                                        <div className="common">
                                                          <a href="#"><b>Comments</b></a>
                                                          <a href="#"><b>Re-tweets</b></a>
                                                          <a href="#"><b>Likes</b></a>
                                                          <a href="#"><b>Direct Messages</b></a>
                                                    </div></p>
                                                  } secondaryTextLines={2}
        
                                            />
                                    <Divider/>
        </List>
</Paper>
</div>
</Col>
</Row>
</Grid>
</MuiThemeProvider>
);}}