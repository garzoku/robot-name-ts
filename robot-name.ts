export class Robot {
  readonly alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  readonly numbers = `0123456789`;
  name: string;
  static usedNames: string[];

  static releaseNames() {
    return this.name;
  }

  resetName() {
    this.name = this.deliverName();
  }

  buildName() {
    let randomName = ``;
    for (let index = 0; index < 2; index++) {
      randomName += this.alphabet.charAt(Math.floor(Math.random() * 26));
    }
    for (let index = 0; index < 3; index++) {
      randomName += this.numbers.charAt(Math.floor(Math.random() * 10));
    }
    return randomName;
  }

  checkName(randomName: string) {
    let nameIsNew = true;
    if (Robot.usedNames !== undefined) {
      Robot.usedNames.forEach((usedName) => {
        if (randomName === usedName) {
          nameIsNew = false;
          return;
        }
      });
    }
    if (!nameIsNew) console.log(nameIsNew);
    return nameIsNew;
  }

  deliverName() {
    let newName = this.buildName();
    while (!this.checkName(newName)) {
      newName = this.buildName();
    }
    return newName;
  }

  saveName(name: string) {
    Robot.usedNames.push(name);
  }

  constructor() {
    this.name = this.deliverName();
    Robot.usedNames = [];
    this.saveName(this.name);
  }
}
