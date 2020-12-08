import React from 'react'
import Logo from "../images/logo.svg"
import  "./Styles/Styles.css"
function Container(props) {
    return (
        <div className="font">
            <div className="text-center">
            <img className="logo"  src={Logo} alt="logo"/>
            </div>
            
            <div>
                <h2 className={"intro"}>
                   {props.title}
                </h2>
            </div>
            <div>
                <p className="p">
               {props.paragraph}
                </p>
            </div>
            <div className="pb-4">
                {props.mid}
               
            </div>
            
        </div>
    )
}

export default Container
