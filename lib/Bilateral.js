import Animal from './Animal.js';
export default class Bilateral extends Animal{
  constructor (name, body){
    super(name, 'bilateral', body); {
      this._name = name;
      this._body = body;
    }
  }

  get body() {
  return this._body;
}
set body(body){
  this._body = body;
}

}

