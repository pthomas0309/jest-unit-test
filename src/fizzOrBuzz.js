export default function fizzOrBuzz(number) {
    
    if (number < 0 || number > 0) {

        const operands = [3, 5]

        let response = ''

        for (let operand of operands){

            const isDivisible = number % operand === 0;

            if (isDivisible && operand === 3) {

                response += 'Fizz';
            }
            else if (isDivisible && operand === 5) {

                response += 'Buzz';
            }
            else {

                console.log('not divisible');;
            };
        };

        if (response != '') {

            return response;
        }
        else {

            return number;
        }
    }
    else if (number === 0) {

        return undefined;
    }
    else {
        
        return NaN;
    }
};