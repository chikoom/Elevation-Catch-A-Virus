import Counter from '../modules/Counter.mjs'
import EnemyFactory from '../modules/EnemyFactory.mjs'

const enemyFactory = EnemyFactory()
const counter = Counter()

const GameModule = () => {

   const _gameState = {
    initialSeconds:0,
    secondsLeft: 0,
    currentLevel: 1,
    enemies:[],
    enemiesLeft: 0,
    score: 0,
    gameOn: false,
    gameOver: false,
    gameStart: false,
    gameTickRenderFnc: function(){},
    gameEndRenderFnc: function(){}
   }

   const initiateGame = (currentLevel = 0, initialSeconds = 0, types = [{type:1,amount:1}], timeTickCallback, endGameCallback) => {
    
    console.log('Game initializing')

    _gameState.initialSeconds = initialSeconds
    _gameState.secondsLeft = initialSeconds-1
    _gameState.currentLevel = currentLevel
    _gameState.score = 0
    _gameState.gameOn = false
    _gameState.gameOver = false
    _gameState.gameStart = true
    _gameState.enemies = enemyFactory.createEnemies(types)
    _gameState.enemiesLeft = _gameState.enemies.length
    _gameState.gameTickRenderFnc = timeTickCallback
    _gameState.gameEndRenderFnc = endGameCallback


    console.log(_gameState)

    return _gameState

   }

   const gameEnd = () => {
    console.log('gameFinished')
    _gameState.gameEndRenderFnc(_gameState)
   }


   const gameTick = () => {
      console.log('Game Tick')
      _gameState.gameTickRenderFnc(_gameState)

      if(_gameState.secondsLeft>0){
        --_gameState.secondsLeft
      }else{
        counter.stopCounting()
        _gameState.gameOver = true;
        _gameState.gameOn = false;
        _gameState.gameEndRenderFnc(_gameState)
      }
      //gameTickCallback(_gameState)
      
      return _gameState 
    }

   const btnStartClicked = () => {

    if(_gameState.gameOver) {
      console.log('Reinitiating Game')
      initiateGame(1,5,[{type:1,amount:_gameState.initialSeconds}],_gameState.gameTickRenderFnc,_gameState.gameEndRenderFnc)
      
      return _gameState
    }
    
    _gameState.gameStart = false

    if (_gameState.gameOn) {

      console.log('Game already On')
      counter.stopCounting()
      _gameState.gameOn = false

    } else {

      console.log('Game turned On')
      _gameState.gameOn = true
      counter.setSeconds(_gameState.secondsLeft)
      counter.startCounting(gameTick,gameEnd)
      

    }

    return _gameState

   }

   
    const getEnemies = () => {
      return _gameState.enemies
    }

    const getState = () => {
      console.log('returning state '+_gameState)
      return {
        initialSeconds: _gameState.initialSeconds,
        secondsLeft: _gameState.secondsLeft,
        currentLevel: _gameState.currentLevel,
        enemies: _gameState.enemies,
        enemiesLeft: _gameState.enemiesLeft,
        gameOn: _gameState.gameOn,
        gameOver: _gameState.gameOver,
        gameStart: _gameState.gameStart,
        score: _gameState.score,
       }
    }

    const enemyClicked = (enemyId) => {

      console.log("Enemy clicked with id:"+enemyId)
      _gameState.score++
      if(_gameState.enemiesLeft > 1){
        _gameState.enemiesLeft--
        for(let i in _gameState.enemies){
          if(_gameState.enemies[i].id === enemyId){
            _gameState.enemies.splice(i,1)
          }
        }
        return []
      }else{
        _gameState.secondsLeft = _gameState.initialSeconds + _gameState.currentLevel -1 
        counter.addSeconds(_gameState.secondsLeft)
        for(let i in _gameState.enemies){
          if(_gameState.enemies[i].id === enemyId){
            _gameState.enemies.splice(i,1)
          }
        }
        switch (_gameState.currentLevel) {
          case 2:
            _gameState.enemies = enemyFactory.createEnemies([
                                                              {type:1,amount:-1+5+(_gameState.currentLevel++)},
                                                              {type:2,amount:1}
                                                            ])
            break;
          
          case 2:
            _gameState.enemies = enemyFactory.createEnemies([
                                                              {type:1,amount:-2+5+(_gameState.currentLevel++)}, 
                                                              {type:2,amount:2}
                                                            ])
            break;

          default:
            _gameState.enemies = enemyFactory.createEnemies([{type:1,amount:5+(_gameState.currentLevel++)}])
        }
          
        
        _gameState.enemiesLeft = _gameState.enemies.length
        console.log("new enemies created:"+_gameState.enemies)
        return _gameState.enemies
      }

      console.log(_gameState)

      return _gameState.enemies
    }

    


   return {
    initiateGame,
    btnStartClicked,
    getEnemies,
    getState,
    enemyClicked
   }
}

export default GameModule