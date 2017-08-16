import { sayHelloTo } from './hello'
const span = document.createElement('span')
span.innerText = sayHelloTo('JS Developer')

document.body.appendChild(span)