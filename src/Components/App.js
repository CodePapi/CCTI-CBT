import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Landing from './welcome/Landing';
import Instruction from './welcome/Instruction';
import SignIn from './welcome/SignIn';
import { Redirect } from 'react-router-dom';
import './App.css';
import "../Components/welcome/Styles/Styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
const styles = theme => ({
  root: {
    maxWidth: '600px',
    
  },
  subContainer: {
    marginTop: -90,
   
  },
 
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  
  landing: {
    marginBottom: 30
  },
  signIn: {
    marginBottom: 30
  },
  instruct: {
    marginBottom: 30
  }
}); 

// function getSteps() {
//   return ['Introduction', 'Pre-Assessment Form', 'Instruction'];
// }
function getSteps() {
  return ['', '', ''];
}


function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "";
    case 1:
      return 'By clicking on next, You validate the information above';
    default:
      return '';
  }
}

class App extends React.Component {
  state = {
    activeStep: 0,
    hasCandidate: false,
    authenticated: false
  };

  componentWillMount() {
    localStorage.setItem('regNo', '');
    localStorage.setItem('programType', '');
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleGuestSignIn = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
    localStorage.setItem('guest', 'guest');
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  authenticated = (response) => {
    if (response === "true") {
      this.setState({
        authenticated: true
      })
      localStorage.setItem('authenticated', 'true');

    } else if (response === "false") {

      this.setState({
        authenticated: false
      })
      localStorage.removeItem('authenticated');
    }
  }


  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root+ " container"} >
        {this.state.hasCandidate === true ? <Redirect to="/test" /> : null}
        <Stepper activeStep={activeStep} alternativeLabel >
          {steps.map(label => {
            return (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={" container mt-3 pb-1 "} style={{marginTop:"-100", background:"#fafafa"}}>
          {this.state.activeStep === 0 ? (
            <div className={classes.landing}>
              <Landing />
              <center style={{marginTop:"-50px"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className="text-center pt-2">
                 
  
                  <button variant="contained" className="btn btn-size btn-success mb-1" color="primary" onClick={this.handleNext}>
                    {activeStep === steps.length - 1 ? 'Start Test' : 'Proceed to take the test now'}
                  </button>
                  <br/>
                  <button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={ "btn btn-size btn-danger text-white"}
                  >
                    
                            I will take the test later
               
              </button> 
                </div>
              </center>
            </div>
          ) : this.state.activeStep === 1 ?
              <div className={classes.signIn}>
                <SignIn authenticated={(response) => this.authenticated(response)} />
                {this.state.authenticated === true ? <center>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div >
                    <button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton + " btn btn-size btn-danger"}
                    >
                     
                      Back
                </button>

                    <Button variant="contained" color="primary" onClick={this.handleNext}>
                      {activeStep === steps.length - 1 ? 'Start Test' : 'Next'}
                    </Button>

                  </div>
                </center> : null}
                {this.state.authenticated === true ? null : <center style={{marginTop:"-100px"}}>
                  <Typography variant="subheading" gutterBottom>
                    Or
                  </Typography>
                  <button className="btn btn-size btn-success mb-1" onClick={this.handleGuestSignIn}>
                    {activeStep === steps.length - 1 ? 'Start Test' : 'Sign in as guest'}
                  </button>
                  <br/>
                  <button className="btn btn-size btn-danger mb-1" onClick={this.handleBack}>
                    {activeStep === steps.length + 1 ? 'Start Test' : 'Cancel'}
                  </button>
                </center>}
              </div>
              : (
                <div className={classes.instruct}>
                  <Instruction />
                  <center>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

                    <div style={{marginTop:"-30px"}}>
                      <button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={"btn btn-size btn-danger mb-1"}
                      >
                        I am not ready
                    </button>
                      {/* <Button onClick={() => this.setState({ hasCandidate: true })} variant="contained" color="primary">
                        Start Test
                        </Button> */}
                    </div>
                  </center>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(App);
