import "./numBtn.css"
import React from "react"
import { AppContext } from "../App"

export default function NumBtn({ children }) {

    const { setNum } = React.useContext(AppContext)

    return (
        <button className="num-btn" onClick={() => setNum(children)}>
            {children}
        </button>
    )
}