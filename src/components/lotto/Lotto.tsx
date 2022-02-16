import { useState } from "react";

const Lotto = () => {
    let [arrayNumbers, setArrayNumbers] = useState([]);
    let [lottery, setLottery] = useState<number[]>([]);    
    let [nameUser, setNameUser] = useState("");
    let [massage, setMassage] = useState("");
    let [onlytill100, setOnlytill100] = useState("");
    let [guess,setGuess] = useState("")
    const GetNumbersAndName = (arrayNumbers: number[]):void => {
        let userName: string = String(prompt("Enter name sir"));
        setNameUser(userName)
        let counter: number = 0;
        while (counter < 5 ) {
        let userNumbers: any = Number(prompt("Enter 10 numbers between 1-100"));
        if (userNumbers > 101) {
            setOnlytill100("Only till 100 sir")
           break;      
        }else{
            setOnlytill100("")
            arrayNumbers.push(userNumbers);
            counter++;            
        }
        }
        setMassage("") 
    }

    const CheckNumbersIsRepeat = ():any => {
        GetNumbersAndName(arrayNumbers);
        setArrayNumbers(arrayNumbers);
        for (let i = 0; i < arrayNumbers.length; i++) {
            for (let j = i + 1; j < arrayNumbers.length; j++) {
                if (arrayNumbers[i] == arrayNumbers[j]) {
                    let catchNum:number = arrayNumbers[i];
                    setMassage(`try again you repeat on same numbers ${catchNum} `)
                    setNameUser("")
                    setArrayNumbers([])
                    break;
                }
            }   
        }
        GrilNumbers(arrayNumbers)
        setGuess(guess)
    } 

    const GrilNumbers = (arrayNumbers: number[]):string =>{
           let arr:number[] = [1,2,3,4,5,6,7,8,9] 
           let arrss:number[] = [] 
           let counter:number = 0;
           while (counter<arr.length) {
            if (arr[counter] == arrayNumbers[counter]) {
                arrss.push(arr[counter]);
            }   
            counter++;
           }
           guess = `your guesses is ${arrss.length}`
           return guess;
    }
    // const LotteryNumbers = (arrayNumbers: number[]):number[]=>{
    // let counter:number = 0;
    // while (counter<51) {
    // arrayNumbers.push(Math.floor(Math.random()*100))    
    // counter++;    
    // }    
    // return arrayNumbers;
    // } 

    // const GetData =():void=>{
    // LotteryNumbers(lottery)
    // setLottery(lottery);
    // }

    return (
        <div> 
            {/* <button onClick={GetData}>send</button>  */}

            <button onClick={CheckNumbersIsRepeat}>Click</button> 
            <h1>{nameUser}</h1>
            <h1>{massage}</h1>
            <h1>{onlytill100}</h1>
            <h1>{guess}</h1>
            {/* {
                arrayNumbers.map((item) => <b>{item}</b>)
            }  */}

        </div>
    )
}
export default Lotto;