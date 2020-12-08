import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Intro from "../welcome/Introduction"
// import Divider from '@material-ui/core/Divider';
// import AppLogo from "../images/logo.svg"
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    textAlign: 'center',
    // margin: '60px 50px',
    // background:"gray",
    [theme.breakpoints.only('xs')]: {
      margin: 10
    },
    [theme.breakpoints.between('xs, sm')]: {
      margin: 10
    }
  }
});

class Landing extends React.Component {
  componentWillMount() {
    this.checkAndInitializeCandidatesRecord();
  }

  checkAndInitializeCandidatesRecord() {
    const getCandidateRecord = JSON.parse(localStorage.getItem('candidatesRecord'));

    if (getCandidateRecord === null) {
      localStorage.setItem('candidatesRecord', JSON.stringify([]));
    }

  }

  render() {
    // const { classes } = this.props;
    return (
      <div className="container pt-4" style={{marginTop:"-50px", background:"#fafafa"}}>
    
      <Intro/>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
