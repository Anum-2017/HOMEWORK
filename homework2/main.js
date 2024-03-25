import inquirer from 'inquirer';
// Function to perform addition
const add = (a, b) => a + b;
// Function to perform subtraction
const subtract = (a, b) => a - b;
// Function to perform multiplication
const multiply = (a, b) => a * b;
// Function to perform division
const divide = (a, b) => {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return a / b;
};
// Function to perform exponentiation
const exponentiate = (a, b) => Math.pow(a, b);
// Function to perform modulus
const modulus = (a, b) => a % b;
// Function to calculate BMI
const calculateBMI = (weight, height) => {
    const bmi = weight / Math.pow(height, 2);
    return bmi.toFixed(2);
};
// Inquirer prompts for the user
const calculatorPrompt = async () => {
    const operationChoices = [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division',
        'Exponentiation',
        'Modulus',
        'BMI Calculator',
    ];
    const operationAnswer = await inquirer.prompt({
        type: 'list',
        name: 'operation',
        message: 'What operation would you like to perform?',
        choices: operationChoices,
    });
    if (operationAnswer.operation === 'BMI Calculator') {
        const bmiInputs = await inquirer.prompt([
            {
                type: 'number',
                name: 'weight',
                message: 'Enter your weight (in kilograms):',
            },
            {
                type: 'number',
                name: 'height',
                message: 'Enter your height (in meters):',
            },
        ]);
        const bmi = calculateBMI(bmiInputs.weight, bmiInputs.height);
        console.log(`Your BMI is: ${bmi}`);
    }
    else {
        const numbers = await inquirer.prompt([
            {
                type: 'number',
                name: 'firstNumber',
                message: 'Enter the first number:',
            },
            {
                type: 'number',
                name: 'secondNumber',
                message: 'Enter the second number:',
            },
        ]);
        let result;
        switch (operationAnswer.operation) {
            case 'Addition':
                result = add(numbers.firstNumber, numbers.secondNumber);
                break;
            case 'Subtraction':
                result = subtract(numbers.firstNumber, numbers.secondNumber);
                break;
            case 'Multiplication':
                result = multiply(numbers.firstNumber, numbers.secondNumber);
                break;
            case 'Division':
                result = divide(numbers.firstNumber, numbers.secondNumber);
                break;
            case 'Exponentiation':
                result = exponentiate(numbers.firstNumber, numbers.secondNumber);
                break;
            case 'Modulus':
                result = modulus(numbers.firstNumber, numbers.secondNumber);
                break;
        }
        console.log(`Result: ${result}`);
    }
};
// Run the calculator
calculatorPrompt();
