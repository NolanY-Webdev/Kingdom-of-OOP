import Eukaryota from './Eukaryota.js';
export default class Protista extends Eukaryota{
  constructor (name, uniCellular, mobile, heterotroph){
    super(name, uniCellular, true, mobile, heterotroph); {
      this._name = name;
      this._uniCellular = uniCellular;
      this._mobile = mobile;
      this._heterotroph = heterotroph;
    }
  }
}