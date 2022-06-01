export default class Color {
  constructor() {
    this.red = Math.floor(Math.random()*255);
    this.redhex = this.red.toString(16);
    this.green = Math.floor(Math.random()*255);
    this.greenhex = this.green.toString(16);
    this.blue = Math.floor(Math.random()*255);
    this.bluehex = this.blue.toString(16);
    this.hex = this.redhex + this.greenhex + this.bluehex;
  }

  shuffledHexCharArray() {
    let shuffleArray = this.hex.split('');
    /* shuffle array in-place using Durstenfeld shuffle algorithm */
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffleArray[i];
      shuffleArray[i] = shuffleArray[j];
      shuffleArray[j] = temp;
    }
    return shuffleArray;
  }

  shuffledHexPairArray() {
    let shuffleArray = [this.redhex, this.greenhex, this.bluehex];
    /* shuffle array in-place using Durstenfeld shuffle algorithm */
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffleArray[i];
      shuffleArray[i] = shuffleArray[j];
      shuffleArray[j] = temp;
    }
    return shuffleArray;
  }
}