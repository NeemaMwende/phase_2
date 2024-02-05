//closures, functions inside functions

const myName = 'Angel';
function printName()
{
    console.log(myName)
}
printName();



function outerFunction(outerVariables)
{
    return function innerFunction(innerVariables)
    {
        console.log('Outer Variables: ' + outerVariables);
        console.log('Inner Variables: ' + innerVariables);
    }
}
const newFunction = outerFunction('outside')
newFunction('inside')

//anothr fuction is the fetch function



















