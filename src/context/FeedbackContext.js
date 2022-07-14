import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState([{
        id: 1,
        text:'this is from the context',
        rating:10
    }])

    const removeFeedback = (id) =>{
        if(window.confirm("Are you sure you want to delete ?")){
            setFeedback(feedback.filter((item)=> item.id !==id))
        }
    }

    const AddFeedback = function(addedFeedback){
        addedFeedback.id = uuidv4()
        setFeedback([addedFeedback, ...feedback])
        
    }

    return<FeedbackContext.Provider
        value={{
            feedback,
            removeFeedback,
            AddFeedback
        }}
    >
            {children}
        </FeedbackContext.Provider>

}

export default FeedbackContext