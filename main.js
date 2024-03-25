//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const insertZ = ['the soup kitchen', 'Disneyland', 'the White House'];



//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    // Get random values from arrays
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace placeholders with random values
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);


    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);

    }

    if(document.getElementById("uk").checked) {
        // Convert weight from pounds to stone
        const weight = Math.round(300 * 0.071429) + ' stone';
        // Convert temperature from Fahrenheit to Celsius
        const temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
        // Replace weight and temperature in the story
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}