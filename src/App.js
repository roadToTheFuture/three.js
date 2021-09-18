import Three from "./Three";

export default class App {
  constructor() {
    this.three = new Three();
  }

  init() {
    this.three.init();
    this.three.animate();
  }
}
