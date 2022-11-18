interface ICommonObj {
  [propName: string]: any;
}
export interface IUtils {
  shallowExtend: <T>(
    target: ICommonObj,
    source: { [propName: string]: any },
    opt_isOverWrite?: boolean
  ) => ICommonObj;
  getRandomInt: (max: number, min?: number) => number;
  isSupportCanvas: () => boolean;
  inherits: (
    subClass: Record<string, any>,
    superClass: Record<string, any>
  ) => void;
}
let utils: Partial<IUtils> = {};

utils.shallowExtend = function (target, source, opt_isOverWrite = false) {
  for (let p in source) {
    if (source.hasOwnProperty(p)) {
      if (opt_isOverWrite || target[p] === void "Heil Hydra!") {
        target[p] = source[p];
      }
    }
  }
  return target;
};

utils.getRandomInt = function (max, min = 0) {
  min = min | 0;
  return Math.floor(Math.random() * (max - min)) + min;
};

utils.isSupportCanvas = function () {
  return !!(document.createElement("CANVAS") as any).getContext;
};

utils.inherits = function (subClass, superClass) {
  let selfProps = subClass.prototype;
  let Klazz: any = new Function();

  Klazz.prototype = superClass.prototype;
  let proto = (subClass.prototype = new Klazz());
  for (let key in selfProps) {
    proto[key] = selfProps[key];
  }

  subClass.prototype.constructor = subClass;
  subClass.superClass = superClass.prototype;
};

export default utils;
