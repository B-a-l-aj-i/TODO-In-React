
import "./Todo.css"
import Task from "./Task";
import { useEffect, useState } from "react";
function Todo(){

    let [tasks,setTasks]=useState(["eat","sleep",]);
    let [task,setTask]=useState("");

    function handleTask(e){
        setTask(e.target.value);

    }

    function handleAddTask(){
        if(task!=""){
            setTasks([...tasks,task]);
            setTask("")
        }
    }
    useEffect(()=>{
        document.title="Todo-List"
    })
    useEffect(()=>{
        document.addEventListener("keyup",(e)=>{
            if(e.code=="Enter"){
                handleAddTask();
            }
        })
    },[task,document])

    function deleteTask(index){
        setTasks([...tasks.filter((_,i)=>i!=index)]);
    }

    function swap(arr,a,b){
        return [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    function handleUp(a){
        let b=a-1;
        if(a>0){
            swap(tasks,a,b);
            setTasks([...tasks])
        }
    }
    
    function handleDown(a){
        let b=a+1;
        if(a<tasks.length-1){        
            swap(tasks,a,b);
            setTasks([...tasks])
        }
    }
    return(
        <div className="mainContainer">
           <center> <h1>T0DO-LIST</h1></center>
           <main>
             <div className="ip">
                <input onChange={handleTask} value={task} placeholder="Enter a task" />
                <button onClick={handleAddTask} className="add">Add</button>
             </div>
                <div className="allTasks">
                {tasks.length && tasks.map((a,i)=><Task  
                                 hdo={()=>handleDown(i)} 
                                 hup={()=>handleUp(i)} 
                                 del={()=>{deleteTask(i)}} 
                                 key={i} 
                                 index={i}
                                 content={a.toUpperCase()}  
                                 />)||
                                 <center><h2 style={{color:"black"}}>NO TASKS LEFT</h2></center>}
                </div>
           </main>
        </div>
    )
}

export default Todo;