const orange = document.querySelector('.orange')
const blue = document.querySelector('.blue')

const playagain = document.querySelector('.playagain')
const blur = document.querySelector('.blur')
const winner = document.querySelector('.winner')
const winnerMsg = document.querySelector('.winnerMsg')

orange.style.width = '50%'
blue.style.width = '50%'

document.addEventListener('keyup', (e) => {
    let orangeWidth = parseInt(orange.style.width)
    let blueWidth = parseInt(blue.style.width)

    let winner = ''

    if(e.key === "ArrowRight" && orangeWidth < 100)
    {
        orangeWidth += 5
        blueWidth -= 5

        orange.style.width = orangeWidth + '%'
        blue.style.width = blueWidth + '%'
        
        if(orangeWidth === 100)
        {
            winner = 'orange'
            toggleWinner("THE WINNER IS " + winner)
        }
            
    }

    else if(e.key === "ArrowLeft" && blueWidth < 100)
    {
        orangeWidth -= 5
        blueWidth += 5

        orange.style.width = orangeWidth + '%'
        blue.style.width = blueWidth + '%'

        if(blueWidth === 100)
        {
            winner = 'blue'
            toggleWinner("THE WINNER IS " + winner)
        }
            
    }
        
})


playagain.addEventListener('click', () => {
    orange.style.width = '50%'
    blue.style.width = '50%'

    blur.style.display = 'none'
    winner.style.display = 'none'

})

function toggleWinner(msg)
{
    winnerMsg.innerHTML = msg

    blur.style.display = 'block'
    winner.style.display = 'block'
}