const GameOver = () => {

  const renderGameOver = (state) => {

    const $gameOverContainer = $(` 
                                  <div id="game-over-conatiner">
                                    <div id="game-over-inner">
                                      <h2 class="game-over-heading">Game Over!</h2>
                                      <h3> Your Score: </h3>
                                      <p>Level: ${state.currentLevel}<br>Killed: ${state.score}
                                    </div>
                                  </div>
                                `)

    $('#game-area-container').append($gameOverContainer)
    return $gameOverContainer
  }

  return {
    renderGameOver
  }

}

export default GameOver