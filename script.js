function makeSelection(selection) {
    console.log(selection)
    console.log()
}

const selectionButtons = document.querySelectorAll('[data-selection]')
const selections = [
    {
        name: "rock",
        emoji: "✊", 
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "🖐",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "✌️",
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})


const randomizer = () => {
    const randomSelection = Math.floor(Math.random() * selections.length)
    return selections[randomSelection];
}
const computerChoice = randomizer();
console.log(computerChoice);


// for (let rounds = 1; rounds === 5; rounds++) {
//     console.log(rounds);
// }