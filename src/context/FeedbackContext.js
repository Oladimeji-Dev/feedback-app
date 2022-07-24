import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{

    const [isLoading, setIsLoading] = useState(true)
    const [feedback,setFeedback] = useState([])
    
    useEffect(()=>{
        fetchFeedback()
    },[])

   const fetchFeedback = async ()=>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    } 
    

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    // Remove Feedback
    const removeFeedback = async (id) =>{
        if(window.confirm("Are you sure you want to delete ?")){
            await fetch(`/feedback/${id}`,{
                method: "DELETE"
            })
            setFeedback(feedback.filter((item)=> item.id !==id))
        }
    }

    //Add Feedback
    const AddFeedback = async function(addedFeedback){
        const response = await fetch('/feedback',{
            method:"POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(addedFeedback)
        })
        const data = await response.json()

        setFeedback([data, ...feedback])
        
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
    const updateFeedback = async (id, updateItem) => {
        const response = await fetch(`/feedback/${id}`,{
            method: "PUT",
            headers: {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(updateItem)
        })
        const data  =  await response.json()
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data}: item)))
        
    }


    return<FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            isLoading,
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