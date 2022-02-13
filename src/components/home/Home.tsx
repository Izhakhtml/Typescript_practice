const Home =()=>{
let numbers = [34,22,11,444,55,3,2,7]
let number:number = 9;   
let fName:string = "izhak lijalem"; 
let ifClassArivved:boolean = true;
let arrayNum:number[] = [87,90,65,100];
const PopUpAlert= ():void=>{
alert("wellcome sir");
} 
const GetAllData =():void=>{
alert(`${fName} ${number} ${ifClassArivved} ${arrayNum}`)    
}
const GetParmater =(fName:string):boolean=>{
if(fName.length>4)return true;
return false
}
const GetNameAge =(fName:string,age:number):string=>{
if(age>15)return fName;
return "Class is not right";    
}
const GetfnameLname =(fName:string,lName:string,age:number=0):string=>{
return `${fName} ${lName} ${age}`;   
}
const GetData =(teacherName:string,...restPupileNames:string[]):void=>{
console.log(teacherName+" "+restPupileNames);
}
const GetFullName =(fName:string,lName?:string,grade:number=60,...restFriendsArray:string[]):void=>{
    lName?
    console.log(fName+" "+lName+" "+grade+" "+restFriendsArray):
    console.log("alart");     
}   
const GetArrayNumbers =(numbers:number[]):number=>{
let sum = numbers[0]
for (let i = 0; i < numbers.length; i++) {
if (numbers[i]>sum)sum = numbers[i];}
return sum;
}
const GetNumbersAndName =(fName:string,numbers:number[]):string=>{
let sum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
if(numbers[i]<sum)sum = numbers[i];}
return `${fName} ${sum}`;    
}

return(
    <div onLoad={PopUpAlert}>
    <h1>{number}</h1>
    <h1>{fName}</h1>
    <h1>{ifClassArivved}</h1>
    <h1>{arrayNum}</h1>        
    <h2>{GetParmater("izhak")}</h2>
    <h1>{GetNameAge("izhak",12)}</h1>
    <h1>{GetfnameLname("izhak","lijalem")}</h1>
    {GetData("jacob","izhak","shay","gidon")}
    {GetFullName("jacob","undefined",undefined,"ddd")}
    <h1>{GetArrayNumbers(numbers)}</h1>
    <h1>{GetNumbersAndName("izhak",numbers)}</h1>
    <button onClick={GetAllData}>CLICK</button>
    </div>
)
}
export default Home;