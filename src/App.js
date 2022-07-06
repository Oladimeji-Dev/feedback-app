import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./component/Header";
import FeedbackData from "./FeedbackData";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const removeFeedback = (id) =>{
        if(window.confirm("Are you sure you want to delete ?")){
            setFeedback(feedback.filter((item)=> item.id !==id))
        }
    }
    const AddFeedback = function(addedFeedback){
        addedFeedback.id = uuidv4()
        setFeedback([addedFeedback, ...feedback])
        
    }

    return(
        <div>
            <Header />
            <div className="container">
                <FeedbackForm handleAddFeedback = {AddFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback = {feedback} handleFeedback = {removeFeedback} />
            </div>
            
        </div>
    )
}

export default App