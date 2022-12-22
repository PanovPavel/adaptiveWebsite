import React from "react";
import './footer.css'

export default class Footer extends React.Component{
    render() {
        return(
            <>
                <footer>
                    <div className={`footerInto`}>
                    <a className={`tel`} href="tel:+79001111111">+7-900-111-11-11</a>
                    <a className={`mail`} href="mailto:mail@xxxx.ru">mail@mail.ru</a>

                    </div>
                </footer>
            </>
        )
    }
}