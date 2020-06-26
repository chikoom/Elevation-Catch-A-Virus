const CounterBar = () => { 

  const returnCounterBar = (countNumber = 0) => {
    const $counterBar = $(`
                      <div id="counter-bar">
                        <div id="counter-text">
                          <span>You Have: </span><span id="counter-number">${countNumber} </span><span>Seconds Left</span>
                        </div>
                      </div>
                    `)

    return $counterBar
  }

  const removeSecond = () => {

  }

  return {
    returnCounterBar,
    removeSecond
  }
}

export default CounterBar