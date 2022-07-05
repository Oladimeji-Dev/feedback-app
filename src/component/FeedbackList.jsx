import Feedback  from "./Feedback"
function FeedbackList({feedback}) {
    if(!feedback && feedback.length === 0){
        return <h1>no list yes</h1>
    }

  return (
    <div>
        {
            feedback.map((item)=>(
                <Feedback key={item.id} data={item}/>
            ))
        }
    </div>
  )
}

export default FeedbackList