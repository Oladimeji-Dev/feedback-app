import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import FeedbackData from "./FeedbackData";
import FeedbackList from "./component/FeedbackList";
function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    return(
        <div>
            <Header />
            <FeedbackList feedback = {feedback}/>
        </div>
    )
}

export default App