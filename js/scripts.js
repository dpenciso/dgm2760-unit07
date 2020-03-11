// function tellStory() {
    // nounArray = querySelector('#noun')
    // lowercase
    // string split()
    // repeat for adjectives and verbs


    

    // tellStory()

    // get a reference to the querySelector('#story') = myStory
// }

    // const nouns = document.querySelector('#noun')
    // const nounArray = nouns.split(' ')
    // console.log(nounArray)

function tellStory() {

const nounArray = document.querySelector('#noun')
const nouns = nounArray.value.toLowerCase()
noun = nouns.replace(/\s+/," ").split(/\s+|\n/)



const adjectiveArray = document.querySelector('#adjective')
const adjectives = adjectiveArray.value.toLowerCase()
adjective = adjectives.replace(/\s+/," ").split(/\s+|\n/)



const verbArray = document.querySelector('#verb')
const verbs = verbArray.value.toLowerCase()
verb = verbs.replace(/\s+/," ").split(/\s+|\n/)



const myStory = `Once upon a time there were four ${noun[0]} brothers named Bingo, Bango, Bongo, and Bengo. The brothers had two ${noun[1]}s each. Not only did they have those, but they had ${noun[2]}s too. The brothers were known for being very ${adjective[0]}. They were also known for loving to ${verb[0]}. One day the brothers found a ${noun[3]}, a ${noun[4]}, and a few ${noun[5]}s. This made the brothers very ${adjective[1]} and ${adjective[2]}. They decided to go to ${noun[6]} to ${verb[1]} and ${verb[2]}. THE END.`


console.log(myStory)



story = document.querySelector('#story')
story.textContent = myStory


}    