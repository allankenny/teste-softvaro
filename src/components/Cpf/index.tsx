
export function displayFormat(cpf: string): string {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

export function checkDigit(numbers: string): number {
    const numberList = numbers.split("").map((number) => parseInt(number, 10));

    const modulus = numberList.length + 1;

    const multiplied = numberList.map(
        (number, index) => number * (modulus - index),
    );

    const result = multiplied.reduce((buffer, number) => buffer + number) % 11;

    return result < 2 ? 0 : 11 - result;
}

export function cpfIsValid(cpf: string): boolean {
    const cpfOnlyNumber = cpf;

    if (!cpfOnlyNumber) 
        return false;
 
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) 
        return false

    var numbers = cpfOnlyNumber.substr(0, 9);
    numbers += checkDigit(numbers);
    numbers += checkDigit(numbers);

    return numbers.substr(-2) === cpfOnlyNumber.substr(-2);
}

export default {
    displayFormat,
    cpfIsValid,
}
