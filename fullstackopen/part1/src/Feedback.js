import React, { useState } from 'react'


const Feedback = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);




    // const handleGood = () => handleCount(good, setGood)
    // const handleNeutral = () => handleCount(neutral, setNeutral)
    // const handleBad = () => handleCount(bad, setBad)

    // const handleGood = () => setGood(good + 1)
    // const handleNeutral = () => setNeutral(neutral + 1)
    // const handleBad = () => setBad(bad + 1)

    const handleFeedback = (feedbackCount, feedbackHandler) => () => {
        setTotal(total + 1)
        feedbackHandler(feedbackCount + 1)
    }

    return (
        <div>
            <h3>Exercises 1.6.-1.14.</h3>
            <h1>GIVE FEEDBACK</h1>
            <FeedbackButton buttonFunction={handleFeedback(good, setGood)} buttonName='Good' />
            <FeedbackButton buttonFunction={handleFeedback(neutral, setNeutral)} buttonName='Neutral' />
            <FeedbackButton buttonFunction={handleFeedback(bad, setBad)} buttonName='Bad' />
            <h3>statistics</h3>
            <FeedbackCount good={good} neutral={neutral} bad={bad} total={total} />
        </div>
    )
}

const FeedbackButton = ({ buttonName, buttonFunction }) => {
    return (
        <div>
            <button onClick={buttonFunction}>
                {buttonName}
            </button>
        </div>
    )
}

const FeedbackCount = ({ good, neutral, bad, total }) => {

    const countAverage = () => {
        let average = (good - bad) / total;
        return isNaN(average) ? 0 : average
    }

    const countPositive = () => {
        let positiveRate = (good)/ total * 100;
        return isNaN( positiveRate ) ? '0 %' : `${positiveRate} %`
    }

    return (
        <div>
            {
                total === 0 
                ? 
                <p>No feedback given</p>
                :
                <div>
                    <p>good {good}</p>
                    <p>neutral {neutral}</p>
                    <p>bad {bad}</p>
                    <p>total {total}</p>
                    <p>Average {countAverage()}</p>
                    <p>Positive {countPositive()}</p>
                </div>
            }
            <hr/>
        </div>
    )
}

export default Feedback