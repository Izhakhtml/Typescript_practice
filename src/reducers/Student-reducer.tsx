import { IStudent } from '../models/IStudent.interface'
export const UserArray:IStudent[] =
[
    {fName:"IZHAK",lName:"LIJALEM",age:25},
    {fName:"MARCOS",lName:"BAZBICH",age:23}
] 

export const Reducer =(state:any,action:any)=>{
    switch (action.type) {
        case "show":
          return action.payload;
        default:
            return state;
    }
} 