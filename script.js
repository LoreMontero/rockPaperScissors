const selections = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]

const computerChoice = () => {
    const randomSelection = Math.floor(Math.random() * selections.length)
    return selections[randomSelection];
}

const computerSelection = computerChoice();
console.log(computerSelection);