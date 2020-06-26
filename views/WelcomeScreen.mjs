const WelcomeScreen = () => {
  const renderWelcomeScreen = () => {
    const $welcomeContainer = $('<div id="welcomeContainer"></div>')
    const $btnInitiateGame = $('<button id="btn-close-welcome">ENTER GAME</button>')
    $welcomeContainer.append($btnInitiateGame)
    $('#root-container').append($welcomeContainer)
  }

  return {
    renderWelcomeScreen
  }
}

export default WelcomeScreen