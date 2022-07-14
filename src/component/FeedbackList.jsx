import Feedback  from "./Feedback"
import {AnimatePresence,motion} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"




function FeedbackList({handleFeedback}) {
    const {feedback} = useContext(FeedbackContext)

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
                        <Feedback key={item.id} data={item} />
                    </motion.div>
                ))
            }
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList