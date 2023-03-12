const cohere = require('cohere-ai'); // This is your trial API key
cohere.init('MqiXub4lmuVuYw8wwxDcd3Cy1jIjrD9CMIvkWOt5');

const BAD = 'Inappropriate';
const GOOD = 'Safe';
const threshold = 0.85;

const examples = [
  { text: "you are hot trash", label: BAD },
  { text: "go to hell", label: BAD },
  { text: "get rekt moron", label: BAD },
  { text: "dick", label: BAD },
  { text: "that sucked", label: BAD },
  { text: "shut up", label: BAD },
  { text: "that sucked", label: BAD },
  { text: "are you really this dumb", label: BAD },
  { text: "get a brain and use it", label: BAD },
  { text: "pussy", label: BAD },
  { text: "i will kill you", label: BAD },
  { text: "this is awesome", label: GOOD },
  { text: "that is so cool", label: GOOD },
  { text: "let's get some pasta", label: GOOD },
  { text: "i love swimming", label: GOOD },
  { text: "i am free tonight", label: GOOD },
  { text: "you are so sweet", label: GOOD },
  { text: "you have a cute dog", label: GOOD }
];


async function checkMessageToxicity(input) {
    const response = await cohere.classify({
      model: 'large',
      inputs: [input],
      examples: examples
    });

    let prediction = GOOD;

    if (response.body.classifications[0].prediction == BAD) {
      if (response.body.classifications[0].confidence >= threshold) {
        prediction = BAD;
      }
    }

    console.log("The given text: " + "'" + input + "'" + " has been flagged as " + prediction);
  }


async function main() {
  checkMessageToxicity('hello this is cool');
  checkMessageToxicity('you suck ass');
  checkMessageToxicity('coochie');
  checkMessageToxicity('bitch');
  checkMessageToxicity('i want to strangle you');
  checkMessageToxicity('wanna eat me instead');
  checkMessageToxicity('lets try cup stacking');
}

// Call the main function
main();

