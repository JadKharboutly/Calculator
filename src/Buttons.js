import React,{ useState } from 'react'
import Display from './Display';
function Buttons() {
    const [currentNum,updateCurrentNum] = useState(0);
    const [pressed,updatePressed] = useState(false);
    const [operation,updateOperation] = useState();
    const [firstNum,updateFirstNum]= useState();
    const [firstNumStatus,updateFirstNumStatus] = useState(false);
    const [answerStatus,updateAnswerStatus] = useState(false);
    const [answer,updateAnswer] = useState();


    const getCurrentNum = (e) =>{
        if(currentNum === 0 | (firstNumStatus === true & pressed === false)){
            updateCurrentNum(parseInt(e.target.value))
            updateAnswerStatus(false)
            updatePressed(true)
        }else{
            updateCurrentNum(prev => parseInt(prev+e.target.value))
        }
    }
    const clear = () =>{
        updateCurrentNum(0);
        updateFirstNumStatus(false);
        updateAnswerStatus(false);
        updateAnswer(0);
        updateFirstNum(0);
    }
    const getOperation = (e) =>{
        updateOperation(e.target.value);
        if(answerStatus === false){
            updateFirstNum(currentNum);
        }else{
            updateFirstNum(answer);
        }
        updateFirstNumStatus(true);
        updatePressed(false)
    }
    
    const getAnswer = () =>{
    if(answerStatus === false){
        switch(operation){
            case "+":
                updateAnswer(firstNum + currentNum);
                break;
            case "-":
                updateAnswer(firstNum - currentNum);
                break;
            case "X":
                updateAnswer(firstNum * currentNum);
                break;
            case "/":
                updateAnswer(firstNum / currentNum);
                break;
            default:
                updateAnswer(0);
        }
    }else{

        switch(operation){
            case "+":
                updateAnswer(answer + currentNum);
                break;
            case "-":
                updateAnswer(answer - currentNum);
                break;
            case "X":
                updateAnswer(answer * currentNum);
                break;
            case "/":
                updateAnswer(answer / currentNum);
                break;
            default:
                updateAnswer(0);
        }

    }
    updateAnswerStatus(true);  
    updateFirstNum(answer);
    updatePressed(false)
}
    return (
        <>
        <Display num={currentNum} answer={answer} answerStatus={answerStatus} />
        <div className="buttons">
            <div className="Row">
            <button className= "button-func" onClick={clear} value="AC">AC</button>
            <button className= "button-func" onClick={getCurrentNum} value="+/-">+/-</button>
            <button className= "button-func" onClick={getCurrentNum} value="%">%</button>
            <button className= "button-op" onClick={getOperation} value="/">/</button>
 

            <button className= "button-row" onClick={getCurrentNum} value="7">7</button>
            <button className= "button-row" onClick={getCurrentNum} value="8">8</button>
            <button className= "button-row" onClick={getCurrentNum} value="9">9</button>
            <button className= "button-op" onClick={getOperation} value="X">X</button>


            <button className= "button-row" onClick={getCurrentNum} value="4">4</button>
            <button className= "button-row" onClick={getCurrentNum} value="5">5</button>
            <button className= "button-row" onClick={getCurrentNum} value="6">6</button>
            <button className= "button-op" onClick={getOperation} value="-">-</button>


            <button className= "button-row" onClick={getCurrentNum} value="1">1</button>
            <button className= "button-row" onClick={getCurrentNum} value="2">2</button>
            <button className= "button-row" onClick={getCurrentNum} value="3">3</button>
            <button className= "button-op" onClick={getOperation} value="+">+</button>

            <button className= "button-row-0" onClick={getCurrentNum} value="0">0</button>

            <button className= "button-row" onClick={getCurrentNum} value=".">.</button>
            <button className= "button-op" onClick={getAnswer} value="=">=</button>
            </div>
        </div>
        </>
    )
}

export default Buttons
