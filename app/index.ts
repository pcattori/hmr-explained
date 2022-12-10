import { greet } from './greet'
import { friend } from './friend'

let element = document.querySelector<HTMLHeadingElement>('#message')
if (element) element.innerText = greet(friend)
