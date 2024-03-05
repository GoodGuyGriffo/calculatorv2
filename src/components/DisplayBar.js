import "./DisplayBar.css"
import React from "react"
import { AppContext } from "../App"

export default function DisplayBar() {

    const {firstNum, seccondNum, operation} = React.useContext(AppContext)

    return (
    <div className="display-bar">
        {firstNum + " " +  operation + " " + seccondNum}
    </div>
    )
}