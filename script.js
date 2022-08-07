function makeSelection(selection) {
    console.log(selection)
    const youWin = winner(selection, computerChoice)
    const computerWins = winner(computerChoice, selection)
    console.log(computerChoice.name)
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

const winner = (selection, comp) => {
    return selection.beats === computerChoice.name
}

const randomizer = () => {
    const randomSelection = Math.floor(Math.random() * selections.length)
    return selections[randomSelection];
}
const computerChoice = randomizer();


// for (let rounds = 1; rounds === 5; rounds++) {
//     console.log(rounds);
// }