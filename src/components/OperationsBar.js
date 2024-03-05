import "./OperationsBar.css"
import OperationBtn from "./operationBtn"

export default function OperationsBar() {
    return (
        <div className="operations-bar">
            <OperationBtn>+</OperationBtn>
            <OperationBtn>-</OperationBtn>
            <OperationBtn>*</OperationBtn>
            <OperationBtn>/</OperationBtn>
        </div>
    )
}