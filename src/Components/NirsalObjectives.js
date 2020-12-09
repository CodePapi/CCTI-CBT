import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: 50
  }, 
  formControl: {
    margin: theme.spacing.unit * 3,
    [theme.breakpoints.only('xs')]: {
      margin: 0
    },
    [theme.breakpoints.between('xs, sm')]: {
      margin: 0
    }
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
    // name:""
  };

  handleChange = (event, isAnswer, quesNo) => {
    this.setState({ value: event });
    // this.setState({name:event})
// ans=false
    if (event===isAnswer) {
       
      this.props.response(quesNo);
      console.log(isAnswer)
    } else {
      this.props.checkQuestionNo(quesNo);
    }
    console.log(event+ " for event")
    console.log(isAnswer+ " for isAnswer")
    console.log(quesNo+ " for quesNo")
  }

  render() {
    const { classes, objective } = this.props;
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            // aria-label="Gender"
            // name="gender1"
            // name={this.state.name}
            className={classes.group + " container"}
            value={this.state.value}
            onChange={(e) => this.handleChange(e.target.value, objective[0].optionText?objective[0].isAnswer:objective[1].optionText?objective[1].isAnswer:objective[2].optionText?objective[2].isAnswer:objective[3].optionText?objective[3].isAnswer:null,  objective[0].optionText?objective[0].questionOptionOID:objective[1].optionText?objective[1].questionOptionOID:objective[2].optionText?objective[2].questionOptionOID:objective[3].optionText?objective[3].questionOptionOID:null)}
          >
            <FormControlLabel  value={objective[0].optionText} control={<Radio style={{color:"white"}}/>} label={objective[0].optionText} style={{background:"gray", maxWidth:"900px"}} />
            <FormControlLabel  value={objective[1].optionText} control={<Radio style={{color:"white"}}/>} label={objective[1].optionText} style={{background:"gray", maxWidth:"900px"}}/>
            {objective[2].optionText === undefined ? null
              :
              <FormControlLabel  value={objective[2].optionText} control={<Radio style={{color:"white"}}/>} label={objective[2].optionText} style={{background:"gray", maxWidth:"900px"}}/>}
            {objective[3].optionText === undefined ? null :
              <FormControlLabel  value={objective[3].optionText} control={<Radio style={{color:"white"}}/>} label={objective[3].optionText} style={{background:"gray", maxWidth:"900px"}}
              

              
              />}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
