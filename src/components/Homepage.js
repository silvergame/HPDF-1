import './Homepage.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem'
import React, {
    Component
} from 'react';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {
    Grid,
    Row,
    Col
} from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';

import {
    blue300,
    teal500,
    indigo200,
    lightGreen500,
    deepOrange300,
    pink400,
    purple500,
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

function handleRequestDelete() {
    alert('You clicked the delete button.');
}

function handleClick() {
    alert('You clicked the Chip.');
}

export default class Homepage extends React.Component {
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
        return ( <
            MuiThemeProvider muiTheme = {
                getMuiTheme(lightBaseTheme)
            } >
            <
            Toolbar >
            <
            ToolbarGroup >
            <
            div className = "navbar" >
            <
            a href = "#"
            class = 'active' > < b > Home < /b></a >
            <
            a href = "#" > < b > Notifications < /b></a >
            <
            a href = "#" > < b > Messages < /b></a >
            <
            /div> < /
            ToolbarGroup > <
            ToolbarGroup >
            <
            div className = 'search' >
            <
            form >
            <
            input type = "text"
            placeholder = "Search Twitter"
            style = {
                {
                    marginRight: 10,
                    marginTop: 30,
                }
            }
            /> < /
            form > <
            /div> <
            List >
            <
            ListItem disabled = {
                true
            }
            rightAvatar = { <
                Avatar

                className = 'lefta'
                backgroundColor = {
                    purple500
                }
                style = {
                    {
                        marginLeft: 10,
                    }
                } > VG <
                /Avatar>
            } >
            <
            /ListItem> < /
            List >

            <
            div >
            <
            RaisedButton label = "Tweet"
            primary = {
                true
            }
            style = {
                {
                    marginLeft: 5,
                    marginTop: 10,
                    width: '10%',
                }
            }
            /> < /
            div > <
            /ToolbarGroup> < /
            Toolbar >

            <
            div >
            <
            Grid fluid >
            <
            Row >
            <
            Col md = {
                3
            } >
            <
            div >
            <
            Paper style = {
                {
                    backgroundColor: indigo200,
                    height: 500,
                    width: 300,
                    marginLeft: 50,
                    marginTop: 10,
                    textAlign: 'center',
                    display: 'inline-block',
                }
            }
            zDepth = {
                3
            } >
            <
            Card style = {
                {
                    textAlign: 'left',
                    height: 140,
                    width: 250,
                    marginLeft: 25,
                    marginTop: 80,
                }
            } >

            <
            CardMedia overlay = { <
                div >
                <
                List >
                <
                ListItem
                disabled = {
                    true
                }
                leftAvatar = { <
                    Avatar

                    backgroundColor = {
                        purple500
                    }
                    size = {
                        50
                    }
                    style = {
                        {
                            marginLeft: 0,
                            marginTop: 20,
                        }
                    } > VG <
                    /Avatar>
                } >
                <
                /ListItem> < /
                List > <
                /div>

            } >
            <
            /CardMedia> <
            CardTitle className = 'user'
            style = {
                {
                    textAlign: 'left',
                    marginTop: 0,
                    marginLeft: 45,
                }
            }
            title = "vrinda"
            subtitle = "@vrinda" / >
            <
            CardText >

            <p className = 'common' >Tweets Following Followers
            <
            /p> <p className = 'counts' > < b > 9 8 7 < /b></p >
            <
            /CardText> < /
            Card > <
            Card style = {
                {
                    textAlign: 'left',
                    height: 160,
                    width: 250,
                    marginLeft: 25,
                    marginTop: 110,
                }
            } >

            <
            CardMedia overlay = { < CardTitle className = 'tw'
                title = "Tweets for you"
                subtitle = "Change" / >
            } >

            <
            /CardMedia> <
            CardText >
            <
            ul className = 'list' >
            <
            li > < a href = "#" > #Congress(11.2 k Tweets) < /a></li >
            <
            li > < a href = "#" > #BJP(11 k Tweets) < /a></li >
            <
            li > < a href = "#" > #President(10 k Tweets) < /a></li >
            <
            li > < a href = "#" > #Moscow(8.65 k Tweets) < /a></li >
            <
            li > < a href = "#" > #Houston(8 k Tweets) < /a></li >
            <
            li > < a href = "#" > #India(7 k Tweets) < /a></li >
            <
            li > < a href = "#" > #Sunday(6 k Tweets) < /a></li >
        

            <
            /ul> < /
            CardText > <
            /Card> < /
            Paper > <
            /div> < /
            Col >

            <
            Col md = {
                6
            } >
            <
            div >
            <
            Paper style = {
                {
                    height: 360,
                    width: 580,
                    marginLeft: 50,
                    marginTop: 10,
                    backgroundColor: indigo200,
                    textAlign: 'center',
                    display: 'inline-block',
                }
            }
            zDepth = {
                3
            } >
            <
            Card style = {
                {
                    textAlign: 'center',
                    height: 220,
                    width: 535,
                    marginLeft: 25,
                    marginTop: 120,
                }
            } >
            <
            CardMedia overlay = { <
                div className = 'happening' >
                <
                form >
                <
                input
                type = "text"
                placeholder = "What's happening?"
                style = {
                    {
                        marginRight: 10,
                        width: 500,
                        height: 50,
                        marginTop: 20,
                        marginBottom: 20,
                    }
                }
                /> < /
                form > <
                /div>
            } >
            <
            /CardMedia> <
            CardTitle title = "What? No Tweets yet?"
            subtitle = "This empty timeline won’t be around for long. Start following people and you’ll see Tweets show up here." / >
            <
            CardActions >
            <
            RaisedButton label = "Find people to follow"
            primary = {
                true
            }
            /> < /
            CardActions > <
            /Card> < /
            Paper > <
            /div> < /
            Col >

            <
            Col md = {
                3
            } >
            <
            div >
            <
            Paper style = {
                {
                    backgroundColor: indigo200,
                    height: 420,
                    width: 280,
                    marginRight: 60,
                    marginTop: 10,
                    textAlign: 'center',
                    display: 'inline-block',
                }
            }
            zDepth = {
                3
            } >
            <
            h3 > Who to follow ? < /h3>      <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                pink400
            } > TOI < /Avatar> <
            b > Times of India < /b> @TimesOfIndia < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                blue300
            } > DTP < /Avatar> <
            b > Delhi Traffic Police < /b> @DTrafficP < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                deepOrange300
            } > BJP < /Avatar> <
            b > Bhartiya Janta Party < /b> @BJParty < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                lightGreen500
            } > SRK < /Avatar> <
            b > Shahrukh Khan < /b> @iamshahrukh < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            } > AK < /Avatar> <
            b > Akshay Kumar < /b> @akshaykumar < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                pink400
            } > BOB < /Avatar> <
            b > Bank Of Baroda < /b> @BOfBaroda < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                purple500
            } > LPY < /Avatar> <
            b > Lalu Prasad Yadav < /b> @LPYadav < /
            Chip > <
            Divider / >
            <
            Chip onRequestDelete = {
                handleRequestDelete
            }
            onClick = {
                handleClick
            }
            style = {
                styles.chip
            } >
            <
            Avatar size = {
                10
            }
            backgroundColor = {
                teal500
            } > HT < /Avatar> <
            b > Hindustan Times < /b> @HindustanT < /
            Chip > <
            Divider / >
            <
            /Paper> < /
            div > <
            /Col> < /
            Row > <
            Row >
            <
            Col md = {
                3
            } >
            <
            div >
            <
            Paper style = {
                {
                    textAlign: 'center',
                    display: 'inline-block',
                }
            }
            zDepth = {
                3
            } >
            <
            /Paper> < /
            div > <
            /Col> <
            Col md = {
                6
            } >
            <
            div >
            <
            Paper style = {
                {}
            }
            zDepth = {
                3
            } >
            <
            /Paper> < /
            div > <
            /Col> <
            Col md = {
                3
            } >
            <
            div >
            <
            Paper style = {
                {
                    height: 70,
                    width: 280,
                    marginRight: 50,
                    marginTop: -10,
                    textAlign: 'center',
                    display: 'inline-block',
                }
            }
            zDepth = {
                3
            } >
            <
            h6 > ©2017 Twitter About Help Center Terms CookiesAds BlogStatusAppsJobsMarketingBusinessesDevelopers Advertise with Twitter < /h6> < /
            Paper > <
            /div> < /
            Col > <
            /Row> < /
            Grid > <
            /div> < /
            MuiThemeProvider >

        );
    }
}
