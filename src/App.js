// Written by Saliman Abdul-wasiu oladimeji
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import FeedbackData from "./FeedbackData";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./component/pages/AboutPage";
import AboutIcon from "./component/AboutIcon";
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
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element = {
                            <>
                                <FeedbackForm handleAddFeedback = {AddFeedback}/>
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback = {feedback} handleFeedback = {removeFeedback} />
                            </>  
                        }>
                        </Route>
                        <Route path="/about" element = {<AboutPage />} />
                    </Routes>
                    <AboutIcon />
                </div>
            </Router>
        </div>
    )
}

export default App