import { useState, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import {useContext} from 'react'
import FeedbackContext  from "../context/FeedbackContext" 
function FeedbackForm() {
    const [text, setText] = useState('')
    const [message, setMessage] = useState("")
    const [btnisDisabled, setIsDisable] = useState(true)
    const [rating, setRating] = useState(10)
    const {AddFeedback, feedbackEdit} = useContext(FeedbackContext)
    useEffect(function(){
        if(feedbackEdit.edit ===true){
            setIsDisable(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    },[feedbackEdit])


    function handleChangetext(e){
        if (text === ""){
            setIsDisable(true)
            setMessage("the character is less than 10")
        }else if(text !== "" && text.trim().length < 10){
            setIsDisable(true)
            setMessage("the character is less than 10")
        }else{
            setIsDisable(false)
            setMessage("")
        }
        setText(e.target.value)
    }
    function handleOnSubmit(e){
        e.preventDefault()

        if(text.trim().length >= 10){
            const feedData = {
            text,
            rating
            }

            AddFeedback(feedData)
            setText('')
        }else{
            setIsDisable(true)
            setMessage("the character is less than 10")
        }
        
    }
  return (
    <Card>
            <form onSubmit={handleOnSubmit}>
                <h2>How Would Rate Your Service With Us ?</h2>
                <RatingSelect selectRating={(select)=> setRating(select)}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleChangetext} value={text}/>
                    <Button type="submit" isDisabled={btnisDisabled}>submit</Button> 
                </div>
                {message && <div className="message">{message}</div>}
            </form>
    </Card>
  )
}

export default FeedbackForm