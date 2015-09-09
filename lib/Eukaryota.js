import LivingThing from './LivingThing.js';
export default class Eukaryota extends LivingThing{
  constructor (name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile); {
      this._name = name;
      this._uniCellular = uniCellular;
      this._asexual = asexual;
      this._mobile = mobile;
      this._heterotroph = heterotroph;
    }
  }

// should have a method named heterotroph that returns a boolean value based on the private property _heterotroph
get heterotroph(){
  return this._heterotroph;
}

// should have a method named heterotroph that sets the value of the private property _heterotroph
set heterotroph(heterotroph){
  this._heterotroph = heterotroph;
}

// should have a method named autotroph that returns a boolean value based on the private property _heterotroph
get autotroph(){
  return !this._heterotroph;
}

// should have a method named autotroph that sets the value of the private property _heterotroph
set autotroph(autotroph){
  this._heterotroph = !autotroph;
}

}
