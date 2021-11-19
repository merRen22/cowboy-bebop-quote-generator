const characters = [
  'Andy Von De Oniyate',
  'Laughing Bull',
  'Faye Valentine',
  'Gren',
  'Jet Black',
  'Spike Spiegel',
  'Vicious',
  'Vincent Volajau',
];

const quote = () => {
  const character = characters[Math.floor(Math.random() * characters.length)];
  const assetName = character.replace(/\ .*/g, "$'").toLowerCase();
  var quotes = require(`./q_${assetName}.json`);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return `${quote} - ${character}`;
};

const image = async (path) => {
  const phrase = quote().replace('-', '\n');
  var quotes = require(`./assets/quotes/q_${assetName}.json`);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  let maxWidth = 200;
  let maxHeight = 50;
  const Jimp = require('jimp');
  const image = await Jimp.read(`./assets/img/${quote}.jpg`);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
  image.print(
    font,
    10,
    250,
    {
      text: pharse,
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
    },
    maxWidth,
    maxHeight
  );
  await image.writeAsync(path);
};

module.exports = { quote, image };
