import Counter from '../modules/Counter.mjs'
import EnemyFactory from '../modules/EnemyFactory.mjs'

const GameModule = (initialSeconds = 0, enemies = []) => {

   const _gameData = {
    initialSeconds: initialSeconds,
    secondsLeft: 0,
    currentLevel: 1,
    enemies:[],
    enemiesLeft: enemies.length,
    secondsLeft: initialSeconds,

   }

   const initiateGame = () => {

    console.log('Game initializing')

   }
   const getEnemies = () => {

   }
   const addEnemies = ([]) => {

   }

   return {
    initiateGame
   }
}

export default GameModule