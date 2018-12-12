//import { observable } from 'mobx';

class User {
//   @observable _displayName;
//   @observable _age;
//   @observable _job;

  _displayName;
  _age;
  _job;

  get displayName() {
    return this._displayName;
  }

  set displayName(value) {
    this._displayName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get job() {
    return this._job;
  }

  set job(value) {
    this._job = value;
  }
}

export default User;
