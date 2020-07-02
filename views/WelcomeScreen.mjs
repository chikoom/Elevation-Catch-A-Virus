const WelcomeScreen = () => {

  const renderWelcomeScreen = () => {
    $('#root-container').append(
      $(
        `<div id="welcomeContainer">
          <div id="welcome-message">
            <h1 id="game-name">Catch The Virus</h1>
            <button id="btn-close-welcome">ENTER GAME</button>
          </div>
        </div>`
      )
    )
  }

  return {
    renderWelcomeScreen
  }
}

export default WelcomeScreen