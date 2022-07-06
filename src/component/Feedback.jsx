import {FaTimes} from "react-icons/fa"
import Card from "./shared/Card"

function Feedback({data, deleteFeedback}) {
    
  return (
    <Card reverse = {false}>
            <div className="num-display">{data.rating}</div>
            <button onClick={() =>deleteFeedback(data.id)} className="close" >
              <FaTimes color="purple" />
            </button>
            <div className="text-display">{data.text}</div>
    </Card>
   
  )
}

export default Feedback