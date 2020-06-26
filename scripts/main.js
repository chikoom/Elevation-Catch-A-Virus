import Counter from '../modules/Counter.mjs'
import EnemyFactory from '../modules/EnemyFactory.mjs'
import Renderer from '../views/Renderer.mjs'
import GameModule from '../modules/GameModule.mjs'

console.log('Main Started')


const gameModule = GameModule()
gameModule.initiateGame()

const renderer = Renderer()
renderer.renderInitialLoad()

$('body').on('click', '#btn-close-welcome', function(){

  console.log('BTN: Enter Game')
  renderer.renderGameScreen($('#root-container'))

})




const counter = Counter(50)
const enemyFactory = EnemyFactory()


//renderer.initialLoad()







$('#test1').click(function(){
  //counter.stopCounting()
  
  enemyFactory.setEnemies(enemyFactory.createEnemies([{type:1,amount:5}]))
})

$('#test2').click(function(){
  console.log(enemyFactory.getEnemies())
})

$('#test3').click(function(){
  //counter.resetCounter(20)
})
$('#test4').click(function(){
  //counter.addSeconds(20)
})
$('#test5').click(function(){
  //counter.setSeconds(45)
})
$('#test6').click(function(){
  //console.log(`getting: ${counter.getSeconds()}`)
})

