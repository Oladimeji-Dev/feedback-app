import Card from "./shared/Card"

function Feedback({data}) {
    
  return (
    <Card reverse = {true}>
            <div className="num-display">{data.rating}</div>
            <div className="text-display">{data.text}</div>
    </Card>
   
  )
}

export default Feedback