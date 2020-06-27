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

  const updateTimeCountBar = (countNumber = 0) => {
    
    $(`#time-counter-number`).text(countNumber)
    if(countNumber < 5) {
      $(`#time-counter-number`).addClass('animate-pump yellow')
      setTimeout(function(){
        $(`#time-counter-number`).removeClass('animate-pump')
      },500)
    }else{
      $(`#time-counter-number`).removeClass('yellow')
    }
    
    
    
    return true
  }

  const renderEnemiesCountBar = (countNumber = 0) => {
    const $enemiesCount = $(`
                      <div id="enemies-count-bar">
                        <div id="enemies-count-text">
                          <span id="enemies-count-number">${countNumber} </span><span>Enemies Killed</span>
                        </div>
                      </div>
                    `)

    return $enemiesCount
  }

  const updateEnemiesCountBar = (countNumber = 0) => {
    $(`#enemies-count-number`).text(countNumber)
    return true
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

  const updateStartButton = (text) => {

      $('#btn-start').text(text)

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

  const updateLevelCounter = (level = 1) => {
    $(`#level-count-number`).text(level)
    return true
  }


  return {
    renderEnemiesCountBar,
    updateEnemiesCountBar,
    renderStartButton,
    updateStartButton,
    renderLevelCounter,
    updateLevelCounter,
    renderTimeCountBar,
    updateTimeCountBar
  }
}

export default GameElements