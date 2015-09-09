export default class LivingThing{

  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }


//   should have a method named name that returns the value of the private property _name
get name(){
    return this._name;
  }

// should have a method named name that sets the value of the private property _name
  set name( name ){
    this._name = name;
  }

// should have a method named uniCellular that returns a boolean value based on the private property _uniCellular
get uniCellular(){
  return this._uniCellular;
}

// should have a method named uniCellular that sets the value of the private property _uniCellular
set uniCellular(uniCellular){
  this._uniCellular = uniCellular;
}

// should have a method named multiCellular that returns a boolean value based on the private property _uniCellular
get multiCellular(){
  return !this._uniCellular;
}

// should have a method named multiCellular that sets the value of the private property _uniCellular
set multiCellular(multiCellular){
  this._uniCellular = !multiCellular;
}

// should have a method named eukaryote that returns a boolean value based on the private property _trueNucleus
get eukaryote(){
  return this._trueNucleus;
}

// should have a method named eukaryote that sets the value of the private property _trueNucleus
set eukaryote(trueNucleus){
  this._trueNucleus = trueNucleus;
}

// should have a method named prokaryote that returns a boolean value based on the private property _trueNucleus
get prokaryote(){
  return !this._trueNucleus;
}

// should have a method named prokaryote that sets the value of the private property _trueNucleus
set prokaryote(trueNucleus){
  this._trueNucleus = !trueNucleus;
}

// should have a method named anaerobic that returns a boolean value based on the private property _anaerobic
get anaerobic(){
  return this._anaerobic;
}

// should have a method named anaerobic that sets the value of the private property _anaerobic
set anaerobic(anaerobic){
  this._anaerobic = anaerobic;
}

// should have a method named aerobic that returns a boolean value based on the private property _anaerobic
get aerobic(){
  return !this._anaerobic;
}

// should have a method named aerobic that sets the value of the private property _anaerobic
set aerobic(anaerobic){
  this._anaerobic = !anaerobic;
}

// should have a method named asexual that returns a boolean value based on the private property _asexual
get asexual(){
  return this._asexual;
}

// should have a method named asexual that sets the value of the private property _asexual
set asexual(asexual){
  this._asexual = asexual;
}

// should have a method named sexual that returns a boolean value based on the private property _asexual
get sexual(){
  return !this._asexual;
}

// should have a method named sexual that sets the value of the private property _asexual
set sexual(asexual){
  this._asexual = !asexual;
}

// should have a method named mobile that returns a boolean value based on the private _mobile
get mobile(){
  return this._mobile;
}

// should have a method named mobile that sets the value of the private _mobile
set mobile(mobile){
  this._mobile = mobile;
}

// should have a method named immobile that returns a boolean value based on the private `
get immobile(){
  return !this._mobile;
}

// should have a method named immobile that sets the value of the private _mobile
set immobile(mobile){
  this._mobile = !mobile;
}
}