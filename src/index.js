const userPath = require('path');

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
  const dirPath = userPath.join(__dirname, '/assets/quotes');
  var quotes = require(`${dirPath}/q_${assetName}.json`);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return `${quote} - ${character}`;
};

const image = async (path) => {
  const character = characters[Math.floor(Math.random() * characters.length)];
  const assetName = character.replace(/\ .*/g, "$'").toLowerCase();
  const dirPath = userPath.join(__dirname, '/assets');
  var quotes = require(`${dirPath}/quotes/q_${assetName}.json`);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const phrase = `${quote} - ${character}`;

  let maxWidth = 200;
  let maxHeight = 50;
  const Jimp = require('jimp');
  const image = await Jimp.read(`${dirPath}/img/${assetName}.jpg`);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
  image.print(
    font,
    10,
    250,
    {
      text: phrase.replace('-', '\n'),
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
    },
    maxWidth,
    maxHeight
  );
  image.write(`${path}/${character}.png`);
};

module.exports = { quote, image };
