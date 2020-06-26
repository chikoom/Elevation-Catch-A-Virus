import Counter from '../models/Counter.mjs'
import EnemyFactory from '../models/EnemyFactory.mjs'

console.log('Main Started')

const counter = Counter(50)
const enemyFactory = EnemyFactory()



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

