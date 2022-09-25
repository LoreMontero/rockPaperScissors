const selectionButtons = document.querySelectorAll('[data-selection]')
const resultColumn = document.querySelector('[data-result-column]')
const yourScore = document.querySelector('[data-your-score]')
const computerScore = document.querySelector('[data-computer-score]')
const yourScoreTitle = document.querySelector('#yourScoreTitle')
const compScoreTitle = document.querySelector('#compScoreTitle')
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

const yourResult = (selection, winner) => {
    const yourDiv = document.createElement('div')
    yourDiv.innerText = selection.emoji
    yourDiv.classList.add('result-selection')
    if (winner) yourDiv.classList.add('winner')
    yourScoreTitle.after(yourDiv)
}

const compResult = (selection, winner) => {
    const compDiv = document.createElement('div')
    compDiv.innerText = selection.emoji
    compDiv.classList.add('result-selection')
    if (winner) compDiv.classList.add('winner')
    compScoreTitle.after(compDiv)
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
    
    compResult(computerChoice, computerWins)
    yourResult(selection, youWin)

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