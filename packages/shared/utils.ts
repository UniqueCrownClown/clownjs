// 防抖

export const debounce = (fn: () => void, wait: number, immediate: boolean) => {
  let timeout: NodeJS.Timeout | undefined;
  return function (this: any) {
    const context: any = this,
      args = arguments;
    timeout && clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = undefined;
      }, wait);
      if (callNow) {
        fn.apply(context, args as any);
      }
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args as any);
      }, wait);
    }
  };
};
// 节流
export const throttle = (fn: () => void, wait: number, immediate: boolean) => {
  let timeout: NodeJS.Timeout | undefined;
  let previous = 0;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (immediate) {
      const now = Date.now();
      if (now - previous > wait) {
        fn.apply(context, args as any);
        previous = now;
      }
    } else {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = undefined;
          fn.apply(context, args as any);
        }, wait);
      }
    }
  };
};

// window.addEventListener("scroll", () =>
//   throttle(() => console.log("scroll"), 500)
// );
