let count = 0;
const ID_PREFIX="vue_toast_notification_"
const removeElement = (el) => {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else {
    el.parentNode.removeChild(el)
  }
};

const getElementId = () => {
  count++;
  return `${ID_PREFIX}${count}`;
}

export {removeElement, getElementId}
