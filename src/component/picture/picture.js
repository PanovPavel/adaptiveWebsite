import React from "react";
import './picture.css'
import me from './me.png'
export default class Picture extends React.Component{
    render() {
        return(
            <>
                <img className={`pictureAuthor`} src={me} />
            </>
        )
    }
}