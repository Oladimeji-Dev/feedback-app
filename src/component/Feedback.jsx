import {FaTimes, FaEdit} from "react-icons/fa"
import Card from "./shared/Card"
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function Feedback({data}) {
  const {removeFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse = {false}>
            <div className="num-display">{data.rating}</div>
            <button onClick={() =>removeFeedback(data.id)} className="close" >
              <FaTimes color="purple" />
            </button>
            <button className="edit" onClick={()=>editFeedback(data)}><FaEdit color="purple"/></button>
            <div className="text-display">{data.text}</div>
    </Card>
   
  )
}

export default Feedback