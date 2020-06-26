const GameElements = () => {

  const renderTimeCountBar = (countNumber = 0) => {

    const $timeCounterBar = $(`
                      <div id="time-counter-bar">
                        <div id="time-counter-text">
                          <span class="align-right">You Have: </span><span class="center" id="time-counter-number">${countNumber} </span><span class="align-left">Seconds Left</span>
                        </div>
                      </div>
                    `)

    return $timeCounterBar

  }

  const renderEnemiesCountBar = (countNumber = 0) => {
    const $enemiesCount = $(`
                      <div id="enemies-count-bar">
                        <div id="enemies-count-text">
                          <span id="enemies-count-number">${countNumber} </span><span>Enemies Left</span>
                        </div>
                      </div>
                    `)

    return $enemiesCount
  }

  const renderStartButton = (text = 'START') => {
    const $startButton = $(`
                      <div id="btn-start-container">
                        <button id="btn-start">
                          ${text}
                        </button>
                      </div>
                    `)

    return $startButton
  }

  const renderLevelCounter = (level = 1) => {
    const $levelCount = $(`
                      <div id="level-count-bar">
                        <div id="level-count-text">
                        <span>Level </span><span id="level-count-number">${level}</span>
                        </div>
                      </div>
                    `)

    return $levelCount
  }


  return {
    renderEnemiesCountBar,
    renderStartButton,
    renderLevelCounter,
    renderTimeCountBar
  }
}

export default GameElements