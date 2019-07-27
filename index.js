  
function fizzBuzz( start= 1, stop = 3)
{
    let result = '';
    
    if (stop < start || start < 0 || stop < 0) {
        throw new Error('Invalid arguments');
    }
    
    for (let i = start; i <= stop; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
            continue;
        }
        
        if (i % 3 === 0) {
            result += 'Fizz';
            continue;
        }
        
        if (i % 5 === 0) {
            result += 'Buzz';
            continue;
        }
        console.log(result)
        result += i;
    }
    
    return result;
}


console.log(fizzBuzz())

module.exports ={
    helloWord,
    fizzBuzz
}