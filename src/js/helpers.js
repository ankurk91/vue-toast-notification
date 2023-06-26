import {h, render} from 'vue';

export function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else {
    el.parentNode?.removeChild(el)
  }
}

export function createComponent(component, props, parentContainer, slots = {}) {
  const vNode = h(component, props, {
    default: () => h(slots.default.component, slots.default.props)
  })
  const container = document.createElement('div');
  container.classList.add('v-toast--pending')
  parentContainer.appendChild(container);
  render(vNode, container);

  return vNode.component
}

export function getOptions(message, options) {
  const messageObj = typeof message === 'string' ? { message } : message
  return Object.assign({}, messageObj, options)
  // let messageObj = null
  // if (typeof message === 'string') {
  //   messageObj = {
  //     message
  //   }
  // } else {
  //   messageObj = message
  // }
  // return Object.assign({}, messageObj, options)
}

