
const EnemyFactory = () => {

  const _factoryData = {
    currentEnemies: []
  }

  let _enemyIds = 0;

  const getEmenyOriginalPosition = () => {

    let newEnemyPosition = [
      Math.floor(Math.random() * 85)+5,
      Math.floor(Math.random() * 85)+5
    ]
    
    for(enemy of _factoryData.currentEnemies)
      if (newEnemyPosition[0] === enemy.position[0] 
          && newEnemyPosition[1] === enemy.position[1])
          newEnemyPosition = getEmenyOriginalPosition()

    return newEnemyPosition
  }

  //[{type:1,amount:5}]
  const createEnemies = (enemytypes) => {

    const newEnemies = []

    for(let i = 0 ; i < enemytypes.length ; i++) {
      for(let j = 0 ; j < enemytypes[i].amount ; j++){

        newEnemies.push({
          type:enemytypes[i].type,
          position:getEmenyOriginalPosition(),
        })
        _enemyIds++
      }
    }

    console.log(`Enemies created:`)
    console.log(newEnemies)
    

    return newEnemies
  }

  const setEnemies = (newEnemies) => {

    _factoryData.currentEnemies = newEnemies

    console.log(`Enemies in factory:`)
    console.log(_factoryData.currentEnemies)

    return _factoryData.currentEnemies.length
  }

  const getEnemies = () => {
    return _factoryData.currentEnemies
  }

  return {
    createEnemies,
    setEnemies
  }

}

export default EnemyFactory