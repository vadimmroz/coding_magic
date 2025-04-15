const dino = document.createElement("figure")
const game = document.getElementById("game")
const cactus = document.createElement("figure")
const imageDino = document.createElement("img")
const imageCactus = document.createElement("img")
const scoreCounter = document.createElement("h1")
const gameOverText = document.createElement("p")

gameOverText.innerText = "Game Over"
gameOverText.className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden"
dino.className = "absolute bottom-0 left-10"
cactus.className = "absolute bottom-0 right-0 w-16 h-16"

imageDino.src = "./src/images/dino.png"
imageDino.className = "aspect-1 h-16"

imageCactus.src = "./src/images/cactus.png"
imageCactus.className = "aspect-1 h-16"

cactus.appendChild(imageCactus)
dino.appendChild(imageDino)
game.appendChild(dino)
game.appendChild(cactus)
game.appendChild(scoreCounter)
game.appendChild(gameOverText)


function startGame() {
    game.removeEventListener("click", startGame)
    cactus.classList.add("cactus_animation")
    gameOverText.classList.add("hidden")
    let jump = false
    const dinoJump = () => {
        if (!jump) {
            dino.classList.add("dino_jump")
            jump = true
            setTimeout(() => {
                dino.classList.remove("dino_jump")
                jump = false
            }, 1000)
        }
    }
    game.addEventListener("click", dinoJump)
    let score = 0
    const gameInterval = setInterval(() => {
        const dino_x = dino.getBoundingClientRect().x
        const dino_y = dino.getBoundingClientRect().y + 64

        const cactus_x = cactus.getBoundingClientRect().x
        const cactus_y = cactus.getBoundingClientRect().y

        if (dino_y < cactus_y || (dino_x + 64 < cactus_x || dino_x - 64 > cactus_x)) {
            score = score + 0.01
            scoreCounter.innerText = Math.floor(score)
        } else {
            gameOver()
        }
    }, 10)


    function gameOver() {
        clearInterval(gameInterval)
        dino.classList.remove("dino_jump")
        cactus.classList.remove("cactus_animation")
        gameOverText.classList.remove("hidden")
        game.removeEventListener("click", dinoJump)
        game.addEventListener("click", startGame)
    }
}

game.addEventListener("click", startGame)