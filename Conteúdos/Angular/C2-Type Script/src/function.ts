function addNumber(x: number, y: number): number{
    return x + y;
}

function addToHello (name: string): string{
    return `Hello ${name}`;
}

let soma: number = addNumber(5, 7);
console.log(soma);

console.log(addToHello("Gabriel"));

//Function Multi Type
function callToPhone(phone: number | string): number | string{
    return phone;
} 

let soma2: number = addNumber(4, 7);
console.log(callToPhone)

//Function Async
async function getDatabase(id: number): Promise<string> {
    return "Gabriel";
}