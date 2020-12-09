import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SubmitDialog from './SubmitDialog';
import Alarm from '@material-ui/icons/Alarm';
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../Components/images/logo.svg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 100
  },
  text: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between"
  },
  headline: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 18,
      marginLeft: 14
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
      marginLeft: 18
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: 16,
      marginLeft: 22
    },
  }
});

function SimpleAppBar(props) {
  const { classes, examTime, submit } = props;
  return (
    <section className="pt-5">
    <div className={" container pt-2 mt-3 pb-3"} style={{background:"#fafafa"}} >
      <div color="default">
        <div className={classes.text}>
          {/* <Typography className={classes.headline} variant="headline" color="inherit">
            CCTI CBT {new Date().getFullYear()}
          </Typography> */}
          <img src={Logo} alt="logo"/>
          <div style={{ display: "flex", flexWrap:"wrap"}}>
            <div style={{ margin: "22px 18px", display: "flex" }}>
              <Alarm />
              <Typography color="inherit" >Time: {examTime} </Typography>
            </div>
            <SubmitDialog submit={submit} />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
