import React from 'react'

function Display(props) {
    const {
        num,
        answer,
        answerStatus
    } = props
    console.log(answerStatus)
    return (
        <div className="display">
            {(answerStatus && <h1>{answer}</h1>) || (answerStatus || <h1>{num}</h1>)}
        </div>
    )
}

export default Display
