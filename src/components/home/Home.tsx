const Home = () => {
    let numbers = [34, 22, 11, 444, 55, 3, 2, 7]
    let number: number = 9;
    let fName: string = "izhak lijalem";
    let ifClassArivved: boolean = true;
    let arrayNum: number[] = [87, 90, 65, 100];
    const PopUpAlert = (): void => {
        alert("wellcome sir");
    }
    const GetAllData = (): void => {
        alert(`${fName} ${number} ${ifClassArivved} ${arrayNum}`)
    }
    const GetParmater = (fName: string): boolean => {
        if (fName.length > 4) return true;
        return false
    }
    const GetNameAge = (fName: string, age: number): string => {
        if (age > 15) return fName;
        return "Class is not right";
    }
    const GetfnameLname = (fName: string, lName: string, age: number = 0): string => {
        return `${fName} ${lName} ${age}`;
    }
    const GetData = (teacherName: string, ...restPupileNames: string[]): void => {
        console.log(teacherName + " " + restPupileNames);
    }
    const GetFullName = (fName: string, lName?: string, grade: number = 60, ...restFriendsArray: string[]): void => {
        lName ?
            console.log(fName + " " + lName + " " + grade + " " + restFriendsArray) :
            console.log("alart");
    }
    const GetArrayNumbers = (numbers: number[]): number => {
        let sum = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > sum) sum = numbers[i];
        }
        return sum;
    }
    const GetNumbersAndName = (fName: string, numbers: number[]): string => {
        let sum = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < sum) sum = numbers[i];
        }
        return `${fName} ${sum}`;
    }
    const GetArrayName = (name: string, ...restArrayNames: string[]): string => {
        let fName = ""
        restArrayNames.forEach(element => {
            if (name == element) fName = name;
        });
        return fName;
    }

    const GetNumberAndArrayNames = (room?: boolean, ...restArrayNames: string[]): String[] => {
        if (room) { return restArrayNames.sort((a, b) => { return a.length - b.length }) }
        else { return restArrayNames.sort((a, b) => { return b.length - a.length }) }
    }

    const GetNumberWithDefaultValue = (num: number = -1,): string => {
        let counter: number = 0;
        let str: string = "";
        let numbersArray: number[] = [];
        while (counter < 5) {
            numbersArray.push(Math.floor(Math.random() * 10))
            counter++
        }
        numbersArray.forEach(item => {
            if (item == num) {
                str = "yes the number exist in array"
            }
        });
        return str
    }

    // const GetObjects = (...restObjects: object[]): void => {
    //     let num: number = 0;
    //     let newObject: object = {};
    //     restObjects.forEach(item => {
    //         if (item.age > num) {
    //             num = item.age;
    //             newObject = item;
    //         }
    //     });
    //     console.log(newObject);
    // }

    // const GetObjectsAndName = (fName: string, ...restObjects: object[]): void => {
    //     restObjects.forEach(item => {
    //         if (item.name == fName) {
    //           console.log("yes");
    //         }
    //     });
    // }

    
    return (
        <div onLoad={PopUpAlert}>
            <h1>{number}</h1>
            <h1>{fName}</h1>
            <h1>{ifClassArivved}</h1>
            <h1>{arrayNum}</h1>
            <h2>{GetParmater("izhak")}</h2>
            <h1>{GetNameAge("izhak", 12)}</h1>
            <h1>{GetfnameLname("izhak", "lijalem")}</h1>
            {GetData("jacob", "izhak", "shay", "gidon")}
            {GetFullName("jacob", "undefined", undefined, "ddd")}
            <h1>{GetArrayNumbers(numbers)}</h1>
            <h1>{GetNumbersAndName("izhak", numbers)}</h1>
            <h2>{GetArrayName("i", "s", "tt", "e", "i")}</h2>
            <h1>{GetNumberAndArrayNames(false, "fd ", "dfd ", "s ", "ddddd ", "sa ", "q ")}</h1>
            <h1>{GetNumberWithDefaultValue(6)}</h1>
            {/* {GetObjects({ name: "izhak", room: "lijalem", age: 27 }, { name: "shimon", room: "avrham", age: 90 }, { name: "gidon", room: "din", age: 91 })} */}
            {/* {GetObjectsAndName("izak",{ name: "izhak", room: "lijalem", age: 27 }, { name: "shimon", room: "avrham", age: 90 }, { name: "gidon", room: "din", age: 91 })} */}
            <button onClick={GetAllData}>CLICK</button>
        </div>
    )
}
export default Home;