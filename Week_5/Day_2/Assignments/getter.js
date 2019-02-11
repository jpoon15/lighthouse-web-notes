var obj = {
  log: ['example','test'],

  get latest() {
    if (this.log.length == 0) return undefined;

    return this.log[this.log.length - 1];
  }
}

console.log("get", obj.latest); // "test".


var language = {
  set current(name) {
    this.log.push(name);
  },

  log: []
}

language.current = 'EN';
language.current = 'FA';

console.log("set", language.log);
// expected output: Array ["EN", "FA"]
