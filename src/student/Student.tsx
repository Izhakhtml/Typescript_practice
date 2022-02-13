import { useReducer } from "react";
import { Reducer,UserArray } from "../reducers/Student-reducer";
import { StudentAction } from "../actions/Student-action";
import { IStudent } from "../models/IStudent.interface";
const Student =()=>{
const[object,dispatch] = useReducer(Reducer,[])   
const Click = ()=>{
  dispatch(StudentAction(UserArray));  
}
return(
    <div>
        {
            object.map((item:IStudent)=><h1>{item.fName} {item.lName}</h1>)
        }      
        <button onClick={Click}>CLICK</button>  
    </div>
)    
}
export default Student;