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
}
