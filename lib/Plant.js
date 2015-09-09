import Eukaryota from './Eukaryota.js';
export default class Fungi extends Eukaryota{
  constructor (name){
    super(name, false, true, false, false); {
      this._name = name;
    }
  }
}