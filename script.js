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

let score = 0

const buttons = document.querySelectorAll('[data-selection]')
buttons.forEach(buttons => {
    buttons.addEventListener('click', e => {
        const selectionName = buttons.dataset.selection
    })
})

const yourChoice = selections[]
console.log(yourChoice);

const randomizer = () => {
    const randomSelection = Math.floor(Math.random() * selections.length)
    return selections[randomSelection];
}
const computerChoice = randomizer();
console.log(computerChoice);

// for (let rounds = 1; rounds === 5; rounds++) {
//     console.log(rounds);
// }

if 