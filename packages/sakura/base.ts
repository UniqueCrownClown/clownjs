import util, { IUtils } from "./util";

class Base {
  public config: any;
  constructor(config: any, _defaultConfig: any) {
    this.config = (util as IUtils).shallowExtend(config || {}, _defaultConfig);
    this._calcInitValues();
  }
  public _calcInitValues() {}
  public setConfig(config: any) {
    (util as IUtils).shallowExtend(this.config, config, true);
  }
}

export default Base;
