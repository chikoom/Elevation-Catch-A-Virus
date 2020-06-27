import WelcomeScreen from '../views/WelcomeScreen.mjs'
import GameScreen from '../views/GameScreen.mjs'
import GameArea from './GameArea.mjs'
import GameElements from './GameElements.mjs'
import GameOver from './GameOver.mjs'

const gameArea = GameArea()
const gameElements = GameElements()

const welcomeScreen = WelcomeScreen()
const gameScreen = GameScreen()

const gameOver = GameOver()


const Renderer = () => {

  

  const renderInitialLoad = () => {
    welcomeScreen.renderWelcomeScreen()
  }

  const renderGameScreen = (elementContainer, state) => {
    if(state.gameStart === true)
    {
      elementContainer.empty()
      elementContainer.append(gameScreen.renderGameScreen())
    }
    
    
  }

  const renderGameArea = (elementContainer, state) => {
    console.log('renderGameArea')
    console.log(state)
    console.log(state.enemies)

    if(state.gameOver)
      renderGameScreen(elementContainer, state)
    elementContainer.empty()
    elementContainer.append(gameArea.renderGameArea(state))

    
    
  }

  const enemyDead = (enemy) => {
    $(enemy).addClass('dead')
    $(enemy).removeClass('animate-float')
    $(enemy).css('background', `url(../assets/enemies/${$(enemy).data().type}_d.png)`)
    
    $(enemy).css('background-size', `100%`)
    $(enemy).fadeOut()
  }

  const addEnemies = (enemies) => {
    gameArea.addEnemies(enemies)
  }

  const enemiesLeft = (numOfenemies) => {
      gameElements.updateEnemiesCountBar(numOfenemies)

  }

  const levelUpdate = (level) => {
    gameElements.updateLevelCounter(level)
  }

  const btnStartClick = (state) => {


    if(!state.gameOver){
      if(state.gameStart === true){
        gameElements.updateStartButton('START')
      }else{
        gameElements.updateStartButton((state.gameOn)?"PAUSE GAME":"RESUME")
      }
    }else {
      gameElements.updateStartButton('START GAME')
    }
    
  }

  const clockUpdate = (seconds) => {
    gameElements.updateTimeCountBar(seconds)
  }

  const timeTick = (gameState) => {
    console.log("RENDER TIME TICK")
    gameElements.updateTimeCountBar(gameState.secondsLeft)
    //clockUpdate(gameState.secondsLeft)
  }

  const endGame = (gameState) => {
    console.log("RENDER GAME END")
    gameElements.updateStartButton('START NEW')
    gameOver.renderGameOver(gameState)

    //clockUpdate(gameState.secondsLeft)
  }


  return {
    renderInitialLoad,
    renderGameScreen,
    renderGameArea,
    enemyDead,
    addEnemies,
    enemiesLeft,
    levelUpdate,
    timeTick,
    endGame,
    btnStartClick
  }
}

export default Renderer