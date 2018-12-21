let interval = 1000/10
let width = 50
let height = 35

const renderFullLine = () => {
    const line = '--------------------------'
    console.log(line)
}

const renderCurrentMap = () => {

}

const renderGame = () => {
    console.clear()
    console.log('--------------------------')
    console.log('-------- Sokoban ---------')
    console.log('--------------------------')
    console.log('|                        |')
    console.log('--------------------------')
}


setInterval(() => {
    renderGame()
}, interval)