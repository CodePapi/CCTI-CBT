import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import SignInForm from '../form/SignInForm';
// import Candidates from '../Candidates';
import Container from "../welcome/Container"
import FormImg from "../images/FormPic.svg"
import "../../Components/welcome/Styles/Styles.css"
import { Input } from 'antd';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    textAlign: 'center',
    margin: '60px 50px'
  },
  text: {
    margin: 10
  }
});


class Register extends React.Component {

  render() {
    // const { classes, authenticated } = this.props;

    return (
      <div className={"pt-5 pb-5"} style={{background:"#fafafa", marginTop:"-50px"}}>
       
        <div>
            <Container 
            title={"Pre-assessment Form"} 
            // paragraph={"Fill the pre-assessment form."} 
            paragraph={<div className="text-center" style={{marginTop:"-10px"}}>
              
              {/* <div>
        <div className={classes.root} elevation={0}>
          <h3  className="h5">
            ENTER YOUR DATA
              </h3>
          
          <SignInForm
          style={{maxWidth:"200px"}}
            candidates={Candidates}
            authenticated={authenticated} />
        </div>
</div> */}
<p className="text-center">
  <Input placeholder="Enter Access Code" style={{maxWidth:"300px"}} /> <br/><img alt="formpic" style={{maxWidth:"200px"}} src={FormImg}/></p>
              
              <br/>
            <div>
                {/* <button onClick={props.next} className="btn btn-size btn-success mb-1"> Submit</button><br/>
                <Link onClick={props.prev} className="btn btn-size btn-danger "> Cancel</Link><br/> */}
                </div></div>}
            />
           
            
        </div>
      </div>
    );

  }

}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
