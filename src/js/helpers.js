const removeElement = (el) => {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else {
    el.parentNode.removeChild(el)
  }
};

// custom timer with pause, resume ability
// thanks to: https://stackoverflow.com/a/3969760
class Timer {
  constructor(callback, delay) {
    this.startTime = Date.now();
    this.callback = callback;
    this.delay = delay;

    this.timer = setTimeout(callback, delay);
  }

  pause() {
    this.stop();
    this.delay -= Date.now() - this.startTime;
  }

  resume() {
    this.stop();
    this.startTime = Date.now();
    this.timer = setTimeout(this.callback, this.delay);
  }

  stop() {
    clearTimeout(this.timer);
  }
}

export {removeElement, Timer}
