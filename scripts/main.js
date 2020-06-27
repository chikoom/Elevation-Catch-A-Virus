import Counter from '../modules/Counter.mjs'
import EnemyFactory from '../modules/EnemyFactory.mjs'
import Renderer from '../views/Renderer.mjs'
import GameModule from '../modules/GameModule.mjs'

console.log('Main Started')

const renderer = Renderer()
renderer.renderInitialLoad()


const gameModule = GameModule()
gameModule.initiateGame(1,5,[{type:1,amount:5}],renderer.timeTick,renderer.endGame)



/*
  A common technique is to put the game loop method into an own class named Game or similar and create a new Game in the main-method. An advantage of this architecture is that you can have multiple Games which exist independent of each other.

You might also consider moving your update-method into a GameState class and your render-method into a Renderer class and pass the gamestate to it (renderer.render(gameState);). 
*/


    
const audioElement = document.createElement('audio')
audioElement.setAttribute('src', '../assets/sounds/1_d.mp3')



$('body').on('click', '#btn-close-welcome', function(){

  console.log('BTN: Enter Game')
  renderer.renderGameScreen($('#root-container'),gameModule.getState())
  renderer.renderGameArea($('#game-container-middle'),gameModule.getState())

  const audioElement = document.createElement('audio')
    audioElement.setAttribute('src', '../assets/sounds/2_d.mp3')
    audioElement.play();

})

$('body').on('click', '#btn-start', function(){

  console.log('BTN: Start Game')

  gameModule.btnStartClicked()
  renderer.btnStartClick(gameModule.getState())
  renderer.renderGameScreen($('#root-container'),gameModule.getState())
  renderer.renderGameArea($('#game-container-middle'),gameModule.getState())

})


$('body').on('click', '.enemy', function(){

  if(!$(this).hasClass('dead') && gameModule.getState().gameOn){

    

    const newEnemies = gameModule.enemyClicked($(this).data().id)
    renderer.enemyDead($(this))
    renderer.addEnemies(newEnemies)
    renderer.enemiesLeft(gameModule.getState().score)
    renderer.levelUpdate(gameModule.getState().currentLevel)

    const audioElement = document.createElement('audio')
    audioElement.setAttribute('src', `../assets/sounds/${$(this).data().type}_d.mp3`)
    audioElement.play();

  }
  

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

