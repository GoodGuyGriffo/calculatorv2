import "./operationBtn.css"
import React from "react"
import { AppContext } from "../App"

export default function OperationBtn({ children }) {

    const { setOp } = React.useContext(AppContext)

    return (
        <button className="op-btn" onClick={() => setOp(children)}>
            {children}
        </button>
    )
}