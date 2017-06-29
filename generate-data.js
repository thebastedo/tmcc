const fs = require('fs')
const faker = require('faker')
const commandLineArgs = require('command-line-args')

const optionDefs = [
  { name: 'numberOfEnties', alias: 'n', type: Number, defaultOption: 1000 }
]

const options = commandLineArgs(optionDefs)

const randomText = () => {
  switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
      return faker.internet.url()
    case 2:
    case 3:
    case 4:
      return faker.random.word()
    case 5:
      return faker.lorem.sentence()
  }
}

let entities = []

for (let i = 0; i < options.numberOfEnties; i++) {
  let entity = {
    timestamp: faker.date.recent(),
    Number1: faker.random.number(),
    Number2: faker.random.number(),
    Number3: faker.random.number(),
    Number4: faker.random.number(),
    Number5: faker.random.number(),
    Number6: faker.random.number(),
    Number7: faker.random.number(),
    Number8: faker.random.number(),
    Number9: faker.random.number(),
    Number10: faker.random.number(),
    AlphaNumeric1: faker.random.alphaNumeric(),
    AlphaNumeric2: faker.random.alphaNumeric(),
    AlphaNumeric3: faker.random.alphaNumeric(),
    AlphaNumeric4: faker.random.alphaNumeric(),
    AlphaNumeric5: faker.random.alphaNumeric(),
    AlphaNumeric6: faker.random.alphaNumeric(),
    AlphaNumeric7: faker.random.alphaNumeric(),
    AlphaNumeric8: faker.random.alphaNumeric(),
    AlphaNumeric9: faker.random.alphaNumeric(),
    AlphaNumeric10: faker.random.alphaNumeric(),
    Text1: randomText(),
    Text2: randomText(),
    Text3: randomText(),
    Text4: randomText(),
    Text5: randomText(),
    Text6: randomText(),
    Text7: randomText(),
    Text8: randomText(),
    Text9: randomText(),
    Text10: randomText(),
    Text11: randomText(),
    Text12: randomText(),
    Text13: randomText(),
    Text14: randomText(),
    Text15: randomText(),
    Text16: randomText(),
    Text17: randomText(),
    Text18: randomText(),
    Text19: randomText(),
    Text20: randomText()
  }

  entities.push(entity)
}

fs.writeFile('./data.json', JSON.stringify(entities), (err) => {
  if (err) {
    return console.log('Error writing file')
  }

  console.log('File Saved')
})
