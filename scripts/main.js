import Counter from '../models/Counter.mjs'

console.log('Main Started')

const counter = Counter(50)



$('#test1').click(function(){
  //counter.stopCounting()
})

$('#test2').click(function(){
  //counter.startCounting(1000)
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

