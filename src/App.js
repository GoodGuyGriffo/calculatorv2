import './App.css'
import React from "react"
import DisplayBar from "./components/DisplayBar"
import Numpad from './components/numpad'
import OperationsBar from './components/OperationsBar'

const AppContext = React.createContext()
export { AppContext }


function App() {

  const [firstNum, setFirstNum] = React.useState("")
  const [seccondNum, setSeccondNum] = React.useState("")
  const [operation, setOperation] = React.useState("")


  function setNum(num) {
    if (operation) {
      setSeccondNum(prevNum => prevNum + num)
    }
    else {
      setFirstNum(prevNum => prevNum + num)
    }
  }

  function setOp(op) {
    setOperation(op)
  }

  function calculate() {
    let answer = ""
    if (operation === "+") {
      answer = parseFloat(firstNum) + parseFloat(seccondNum)
    }
    else if (operation === "-") {
      answer = parseFloat(firstNum) - parseFloat(seccondNum)
    }
    else if (operation === "*") {
      answer = parseFloat(firstNum) * parseFloat(seccondNum)
    }
    else if (operation === "/") {
      answer = parseFloat(firstNum) / parseFloat(seccondNum)
    }

    setFirstNum(answer.toString())
    setSeccondNum("")
    setOperation("")
  }

  function deleteNum() {
    if (operation) {
      // if operation is selected then delete from seccond word
      if (seccondNum) {
        setSeccondNum(prevNum => prevNum.slice(0, -1))
      }
      else {
        // if there is no seccond word delete operation
        setOperation("")
      }
    }
    else {
      setFirstNum(prevNum => prevNum.slice(0, -1))
    }

    // if operation is not selected delete from first word
  }

  function clear() {
    setFirstNum("")
    setSeccondNum("")
    setOperation("")
  }


  return (
    <AppContext.Provider value={{ setNum, firstNum, seccondNum, setOp, operation }}>
      <div className="App"> 
        <div className="calc">
          <DisplayBar />
          <div className="center-calc">
            <Numpad />
            <OperationsBar />
          </div>
          <div className="footer">
            <button className="footer-btn" onClick={deleteNum}>
              Delete
            </button>
            <button className="footer-btn" onClick={clear}>
              Clear
            </button>
            <button className="footer-btn" onClick={calculate}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
