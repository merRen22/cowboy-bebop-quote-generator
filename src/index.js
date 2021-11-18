class Quote {
  constructor(author, phrase) {
    this.author = author;
    this.phrase = phrase;
  }
}

const quotes = [
  new Quote('Keiko Nobumoto', 'Whatever happens, happens.'),
  new Quote('Spike Speigel', "I'm watching a dream I'll never wake up from."),
  new Quote(
    'Keiko Nobumoto',
    'Hackers are nerdy, pasty, tubby, little geeks with triple thick glasses and this is probably a demented otaku with smelly feet. So catching him will be a breeze!'
  ),
  new Quote(
    'Vicious',
    'Angels banished from heaven have no choice but to become devils.'
  ),
  new Quote(
    'Jet Black',
    "Radical Edwards's profile? He's a seven-foot tall ex-basketball pro hindu guru drag-queen alien."
  ),
  new Quote(
    'Jana Richman',
    'We are all in the perpetual quest for keeping oneself occupied, entertained, and important—which burns at the edge of addiction.'
  ),
  new Quote('Spike Spiegel', 'Bang...'),
  new Quote(
    'Spike Spiegel',
    'Hey, Jet, did you know that there are three things that I hate? Kids... animals... and women with atitude.'
  ),
];

const randomMsg = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`${quote.phrase} - ${quote.author}`);
};

module.exports = { randomMsg };
