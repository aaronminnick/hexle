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
}