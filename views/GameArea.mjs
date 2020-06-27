import EnemyRender from './EnemyRender.mjs'
const enemyRender = EnemyRender()

const GameArea = () => {

  const renderGameArea = gameState => {

    
    console.log(`Rendering games area with enemies:`)
    console.log(gameState)
    
    const $gameAreaContainer = $('<div id="game-area-container"></div>') 

    for (let enemy of gameState.enemies) {

      $gameAreaContainer.append(enemyRender.renderEnemy(enemy))
    }
    
    return $gameAreaContainer
  }

  const addEnemies = (enemies) => {
    for(let enemy of enemies){
  
      $('#game-area-container').append(enemyRender.renderEnemy(enemy))
    }
  }



  return {
    renderGameArea,
    addEnemies
  }
}



export default GameArea