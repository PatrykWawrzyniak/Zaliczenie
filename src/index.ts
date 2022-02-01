import './index.css'

let equation = document.createElement('div')
let result = document.createElement('div')

equation.classList.add('equation')
result.classList.add('result')

let a:number = 5;
let b:number = 2;

equation.innerHTML = `${a} + ${b} = `;
result.innerHTML = String(a+b);

document.body.appendChild(equation)
document.body.appendChild(result)