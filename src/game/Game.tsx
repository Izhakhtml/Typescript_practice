import { useState } from "react"

const Game = () => {
    let [min, setMin] = useState(0)
    let [max, setMax] = useState(0)

    const GetFromUser = (): void => {
        let userNum = Number(prompt("enter number"));
        let arrayNumbers: number[] = [];
        while (userNum != 0) {
            arrayNumbers.push(userNum);
            userNum = Number(prompt("enter number"));
            if (userNum == 0) {
                arrayNumbers.sort((a, b) => { return a - b });
                setMin(arrayNumbers[0])
                setMax(arrayNumbers[arrayNumbers.length - 1])
            }
        }
    }

    const EvenNumbers = (...restArrayNumbers: number[]): number[] => {
        let arrayNumbers: number[] = [];
        let counter: number = 0;
        while (counter < restArrayNumbers.length) {
            if (restArrayNumbers[counter] % 2 == 0) arrayNumbers.push(restArrayNumbers[counter]);
            counter++;
        }
        return arrayNumbers;
    }

    const GetNumber = (num: number): string => {
        let arrayNumbers: number[] = [];
        let counter: number = 0;
        let str: string = "";
        while (counter < 100) {
            arrayNumbers.push(Math.floor(Math.random() * 100))
            if (arrayNumbers[counter] == num) {
                str = `you are success`
                break;
            } else {
                str = "you are loozer"
            }
            counter++;
        }
        return str;
    }

    const GetUserName = (name: string):string => {
            switch (name[0]) {
                case "A".toLowerCase():
                    return "NICE";
                case "Z".toLowerCase():
                    return "GOOD";
                default:
                    return "TRY AGAIN"
            }
    }

   
    return (
        <div>
            <h1>Even numbers:{EvenNumbers(1, 2, 80, 4, 5, 6, 7, 8, 9, 10)}</h1>
            <h1>min:{min}</h1>
            <h1>max:{max}</h1>
            <h1>{GetNumber(9)}</h1>
            <h1>{GetUserName("z")}</h1>
            <button onClick={GetFromUser}>click</button>
        </div>
    )
}
export default Game;