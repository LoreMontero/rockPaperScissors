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