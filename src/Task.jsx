
import "./Task.css";
function Task({content,del,hup,hdo,index}){

    return(
        <div className="task">
        <div>{++index}.</div>
            <div>
            <p> {content}</p>
                
            </div>
            <div className="taskbtns">
                <button onClick={()=>del()} className="btn del">❌</button>
                <button onClick={()=>hup()} className="btn up"> ☝️</button>
                <button onClick={()=>hdo()} className="btn down">👇</button>

            </div>
        </div>
    )
}

export default Task;