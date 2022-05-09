export class Robot {
  readonly alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  readonly numbers = `0123456789`;
  public name: string;

  static releaseNames() {
    return this.name;
  }

  resetName() {
    this.name = "";
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

  constructor() {
    this.name = this.buildName();
  }
}
