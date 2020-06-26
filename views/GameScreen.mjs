import GameArea from './GameArea.mjs'
import GameElements from './GameElements.mjs'

const gameArea = GameArea()
const gameElements = GameElements()

const GameScreen = () => {

  const renderGameScreen = (parentContainer) => {
    $(parentContainer).empty()

    const $gameContainer = $('<div id="game-container"></div>')

    const $topContainer = $('<div id="game-container-top"></div>')
      .append(gameElements.renderTimeCountBar(5))
    $gameContainer.append($topContainer)

    const $middleContainer = $('<div id="game-container-middle"></div>')
      .append(gameArea.renderGameArea()) 
    $gameContainer.append($middleContainer)

    const $bottomContainer = $('<div id="game-container-bottom"></div>')
      .append(gameElements.renderEnemiesCountBar())
      .append(gameElements.renderStartButton())
      .append(gameElements.renderLevelCounter())
    $gameContainer.append($bottomContainer)
    
    $(parentContainer).append($gameContainer)
  }

  return {
    renderGameScreen
  }
}

export default GameScreen