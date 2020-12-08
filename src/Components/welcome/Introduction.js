import React from 'react'
import  "../../Components/welcome/Styles/Styles.css"
import Container from "../../Components/welcome/Container"
// import {Link} from "react-router-dom"

function Introduction(props) {
    return (
        <div>
            <Container 
            title={<div >Introduction To Online Assessment For <br/>NIRSAL AGSMEIS</div>} 
            paragraph={<div className="text-left">
                This tool conducts online assessment for the applicants<br/><br/>
                The Online Assessment presents a set of questions that tests your ability to run a sustainable business and pay back your loan.
            <br></br>
            <ul className="text-left list-unstyled"><b>There are steps to complete the online assessment:</b>
            <br/>
            <br/>
                <li>
              <b>Step 1:</b>  Introduction
                </li>
                <li>
                <b>Step 2:</b>  Pre-Assessment Form
                </li>
                <li>
                <b>Step 3:</b>  Assessment Test
                </li>
            </ul>
            <div className="pt-1">
                <b>
                This screen can only be accessed after successfully submitting your Loan Application and Business Plan.
                </b>
                </div>
            </div>} 

        //     mid={ 
        // }
        
            />
           
            
        </div>
    )
}

export default Introduction
