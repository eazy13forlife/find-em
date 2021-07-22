const debounceLeading = function (function1, timer) {
  let timerId;
  return (...args) => {
    if (!timerId) {
      function1.apply(this, args);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = undefined;
    }, timer);
  };
};

const sayHi = (word) => {
  console.log(word);
};

const newDebounced = debounceLeading(sayHi, 800);
export { debounceLeading, newDebounced };
