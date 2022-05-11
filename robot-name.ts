interface IRobot {
  name: string;
}

export class Robot implements IRobot {
  name: string;
  static usedNames = new Set<string>();
  static releaseNames() {
    this.usedNames.clear();
  }
  constructor() {
    this.name = this.uniqueRandomName;
  }

  resetName() {
    this.name = this.uniqueRandomName;
  }

  private get uniqueRandomName() {
    let newName;
    do {
      newName = this.randomName;
    } while (Robot.usedNames.has(newName));
    Robot.usedNames.add(newName);
    return newName;
  }

  private get randomName() {
    return `${this.twoRandomLetters}${this.threeRandomDigits}`;
  }

  private get twoRandomLetters() {
    const letter1 = this.randomLetter;
    const letter2 = this.randomLetter;
    return `${letter1}${letter2}`;
  }

  private get randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = Math.floor(Math.random() * 26);
    return letters[number];
  }

  private get threeRandomDigits() {
    return `${this.randomNumber}${this.randomNumber}${this.randomNumber}`;
  }

  private get randomNumber() {
    const digits = "0123456789";
    const position = Math.floor(Math.random() * 10);
    return digits[position];
  }
  /*
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
*/
}
