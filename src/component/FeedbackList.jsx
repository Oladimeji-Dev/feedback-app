import Feedback  from "./Feedback"
import {AnimatePresence,motion} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"



function FeedbackList() {
    
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && feedback.length === 0){
        return <p className="container">no list yet</p>
    } 
    

    return isLoading ? <Spinner /> :  (
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