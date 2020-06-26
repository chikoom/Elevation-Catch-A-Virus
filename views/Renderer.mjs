import WelcomeScreen from '../views/WelcomeScreen.mjs'
import GameScreen from '../views/GameScreen.mjs'

const welcomeScreen = WelcomeScreen()
const gameScreen = GameScreen()


const Renderer = () => {

  

  const renderInitialLoad = () => {
    welcomeScreen.renderWelcomeScreen()
  }

  const renderGameScreen = elementContainer => {
    gameScreen.renderGameScreen(elementContainer)
  }

  return {
    renderInitialLoad,
    renderGameScreen
  }
}

export default Renderer