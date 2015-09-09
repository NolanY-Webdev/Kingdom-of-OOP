import LivingThing from './LivingThing.js';
export default class Bacteria extends LivingThing{
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, true, false, false, true, false); {
      this._name = name;
    }
  }
}
