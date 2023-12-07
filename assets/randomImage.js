const images = {
  1: require("./img2.png"),
  2: require("./img3.png"),
  3: require("./img4.png"),
  4: require("./img5.png"),
  5: require("./img6.png"),
  6: require("./img7.png"),
  7: require("./img8.png"),
  8: require("./img9.png"),
  9: require("./img10.png"),
};

export default function randomImage() {
  let min = 1;
  let max = 10;
  let dif = max - min;
  let random = Math.floor(Math.random() * dif) + min;
  return images[random];
}
