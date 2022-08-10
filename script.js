const selectionButtons = document.querySelectorAll('[data-selection]')
const resultColumn = document.querySelector('[data-result-column]')
const yourScore = document.querySelector('[data-your-score]')
const computerScore = document.querySelector('[data-computer-score]')
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

const winner = (selection, compSelection) => {
    return selection.beats === compSelection.name
}

const result = (selection, champGoesHere) => {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (champGoesHere) div.classList.add('winner')
    resultColumn.after(div)
}

const randomizer = () => {
    const randomSelection = Math.floor(Math.random() * selections.length)
    return selections[randomSelection];
}

function incrementScore(scores) {
    scores.innerText = parseInt(scores.innerText) + 1
}

function makeSelection(selection) {
    const computerChoice = randomizer();
    console.log(selection)
    console.log(computerChoice)
    const youWin = winner(selection, computerChoice)
    const computerWins = winner(computerChoice, selection)
    
    result(computerChoice, computerWins)
    result(selection, youWin)

    if (youWin) incrementScore(yourScore)
    if (computerWins) incrementScore(computerScore)
}


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = selections.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})


// for (let rounds = 1; rounds === 5; rounds++) {
//     console.log(rounds);
// }