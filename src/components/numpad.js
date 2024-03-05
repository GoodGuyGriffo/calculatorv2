import "./numpad.css"
import NumBtn from "./numBtn"

export default function Numpad() {
    return (
        <div className="numpad">
            <NumBtn>7</NumBtn>
            <NumBtn>8</NumBtn>
            <NumBtn>9</NumBtn>
            <NumBtn>4</NumBtn>
            <NumBtn>5</NumBtn>
            <NumBtn>6</NumBtn>
            <NumBtn>1</NumBtn>
            <NumBtn>2</NumBtn>
            <NumBtn>3</NumBtn>
            <NumBtn>0</NumBtn>
            <NumBtn>.</NumBtn>
        </div>
    )
}