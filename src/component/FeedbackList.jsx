import Feedback  from "./Feedback"
import {AnimatePresence,motion} from 'framer-motion'
function FeedbackList({feedback, handleFeedback}) {
    if(feedback.length === 0){
        return <h2 className="container">no list yet</h2>
    }

  return (
    <div>
        <AnimatePresence>
            {
                feedback.map((item)=>(
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0}}
                        animate= {{opacity: 1}}
                        exit = {{opacity: 0}}
                    >
                        <Feedback key={item.id} data={item} deleteFeedback ={handleFeedback} />
                    </motion.div>
                ))
            }
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList