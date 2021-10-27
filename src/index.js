import _ from 'lodash'
import printMe from "./print";
import "./style.scss"

function component () {
    const element = document.createElement('div')
    const btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add("color")

    btn.innerHTML = 'Click me'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())