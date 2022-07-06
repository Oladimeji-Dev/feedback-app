import Feedback  from "./Feedback"
function FeedbackList({feedback, handleFeedback}) {
    if(feedback.length === 0){
        return <h2 className="container">no list yet</h2>
    }

  return (
    <div>
        {
            feedback.map((item)=>(
                <Feedback key={item.id} data={item} deleteFeedback ={handleFeedback}/>
            ))
        }
    </div>
  )
}

export default FeedbackList