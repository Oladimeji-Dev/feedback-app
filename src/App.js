import React from "react";
import { useState } from "react";
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
    const handleAddFeedback = function(addedFeedback){
        
        
    }

    return(
        <div>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback = {feedback} handleFeedback = {removeFeedback} handleAddFeedback = {(addfeedback)=>{}}/>
            </div>
            
        </div>
    )
}

export default App