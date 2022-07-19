import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState([
        {
            id: 1,
            text:'this is from the context 1',
            rating:10
        },
        {
            id: 2,
            text:'this is from the context 2',
            rating:9
        },
        {
            id: 3,
            text:'this is from the context 3',
            rating:7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    // Remove Feedback
    const removeFeedback = (id) =>{
        if(window.confirm("Are you sure you want to delete ?")){
            setFeedback(feedback.filter((item)=> item.id !==id))
        }
    }

    //Add Feedback
    const AddFeedback = function(addedFeedback){
        addedFeedback.id = uuidv4()
        setFeedback([addedFeedback, ...feedback])
        
    }

    //Edit Feedback
    const editFeedback = function(item){
        setFeedbackEdit(
            {
                item,
                edit:true
            }
        )
        

    }

    //update the Feedback
    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updateItem}: item)))
        
    }


    return<FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            removeFeedback,
            AddFeedback,
            editFeedback,
            updateFeedback
        }}
    >
            {children}
        </FeedbackContext.Provider>

}

export default FeedbackContext