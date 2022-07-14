// Written by Saliman Abdul-wasiu oladimeji
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./component/pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIcon from "./component/AboutIcon";
function App(){
    return(
        <div>
            <FeedbackProvider>
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element = {
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats/>
                                    <FeedbackList />
                                </>  
                            }>
                            </Route>
                            <Route path="/about" element = {<AboutPage />} />
                        </Routes>
                        <AboutIcon />
                    </div>
                </Router>
            </FeedbackProvider>
        </div>
    )
}

export default App