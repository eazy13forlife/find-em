const debounceLeading = function (function1, timer) {
  let timerId;
  console.log(function1);
  return (...args) => {
    if (!timerId) {
      console.log(function1);
      function1.apply(this, args);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      console.log("mik");
      timerId = undefined;
    }, timer);
  };
};

const sayHi = (word) => {
  console.log(word);
};

const newDebounced = debounceLeading(sayHi, 800);
export { debounceLeading, newDebounced };
