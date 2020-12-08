import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import image from '../images/instructor.jpg';
// import Typing from 'react-typing-animation';
import Container from "../welcome/Container"
import { Checkbox } from 'antd';
import {Link} from "react-router-dom"
import {  message } from 'antd';

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


const Instruction =()=> {

  // render() {
  //   const { classes } = this.props;
  //   const candidate = JSON.parse(localStorage.getItem('candidate'));
  //   const guest = localStorage.getItem('guest');
  // const[quizLink, setQuzeLink]=useState("")
    const [messages, setMessage]=useState(`${""}`)
useEffect(() => {
    // "you must agree before proceeding to the quiz"
   
})
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    // e.target.checked?setQuzeLink("quiz"):setQuzeLink("")
    e.target.checked&&setMessage(`${message.success('Continue to quiz!')}`)
    !e.target.checked&&setMessage(`${message.info('you must agree before proceeding to the quiz')}`)
  }
    return (
      <div style={{marginTop:"-50px"}} className="pt-4">
        {/* <Paper className={classes.root} elevation={0}>
        <img src={image} alt="instructor" style={{width: "200px", marginBottom: 10}} />
          <Typing>
            <Typography variant="headline" component="h3">
            <Typing.Delay ms={500} />Hi - <Typing.Delay ms={1000} />
              {candidate === null || candidate.length === 0 ? guest : candidate[0].fullName}
              <Typing.Delay ms={500} />
            </Typography>
            <Typography className={classes.text} variant="body2" component="p">
              You have 50 questions <Typing.Delay ms={1000} />
            </Typography>
            <Typography className={classes.text} variant="body2" component="p">
              30 minutes to answer all <Typing.Delay ms={1000} />
            </Typography>
            <Typography className={classes.text} variant="body2" component="p">
              Click on <strong> Start Test</strong> to start
            </Typography>
          </Typing>
        </Paper> */}

<div>
            <Container 
            title={"Instructions for the Assessment "} 
            paragraph={<div><div className="pb-3 text-left"><b>Find below the instructions for the assessment:</b></div>
            <div  ><ul className="ul text-left font-italic ">
                
                <li>You have <b>30 minutes </b>to complete the set of questions.</li>
                <li>You <b>MUST</b> complete all the questions at a seating.</li>
                <li>The applicant must do the assessment by himself or herself. There are built-in mechanisms to figure this out.</li>
                <li>Any form of cheating will lead to automatic disqualification of the applicant.</li></ul>
                <br/></div>

                <p className="text-left">
                <Checkbox onChange={onChange}><b>I agree</b></Checkbox>
                </p>
            </div>
        
        
        } 
        mid={ <div className="text-center">
          <Link  to={"/test"} onClick={()=>messages } className="btn btn-size btn-success mb-1"> Start Assesment now</Link><br/>
          {/* <Link onClick={props.prev} className="btn btn-size btn-danger "> I am not ready</Link><br/> */}
          </div>}
         
           
            />
           
            
        </div>
      </div>
    );
  }



Instruction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instruction);
