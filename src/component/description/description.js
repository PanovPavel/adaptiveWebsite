import React from "react";
import style from './description.module.css'
import './description.css'
const Description = ()=>{
    return(
        <>
            <main className={style.container}>
                <div className={`titleMyName`}>My name is</div>
                <div className={`title`}>Dmitry Valak and I’m <mark> Web Developer </mark> </div>
                <div className={'description'}>It is a long established fact that a reader will be distracted. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</div>
                <button className={`contactMe`}>Contact me</button>
            </main>
        </>
    )
}
export default Description;