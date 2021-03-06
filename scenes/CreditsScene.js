import Phaser from "phaser";
import { Scene } from "phaser";

const fontStyle = {
  fontSize: "12px",
  color: "#fff",
  stroke: "#000",
  strokeThickness: 2
};

let CREDITS_STRING = "Code: Dev Launchers\nArt: Dev Launchers";

export default class CreditsScene extends Scene {
  constructor() {
    super("CreditsScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    this.add
      .bitmapText(centerX, centerY - 20, "teeny-tiny-pixls", "Credits", 10)
      .setOrigin(0.5, 0.5);

    this.add
      .bitmapText(centerX, centerY, "teeny-tiny-pixls", CREDITS_STRING, 10)
      .setOrigin(0.5, 0);

    this.input.on("pointerdown", () => {
      this.scene.manager.stop("CreditsScene");
    });
  }
}
