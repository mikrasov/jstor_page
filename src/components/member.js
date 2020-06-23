import React from 'react'
import Img from 'gatsby-image'


import './member.css'


export default function(props) {


    return <div className="member">

        <div className={"box "+props.className}>
            <Img className="photo" fixed={props.photo}/>
            <h3>{props.name} <br/>{props.position}</h3>

            <div className="about"><p>{props.children}</p></div>
        </div>
    </div>

}
