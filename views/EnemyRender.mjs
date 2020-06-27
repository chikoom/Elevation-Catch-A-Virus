const EnemyRender = () => {

  const enemiesImgsPath = '../assets/enemies/'
  const enemiesImgs = [
    enemiesImgsPath+'1.png',
    enemiesImgsPath+'1.png',
    enemiesImgsPath+'2.png'
  ]

  const renderEnemy = (enemy) => {
    const $enemy = $(`<div class="enemy animate-float" data-id="${enemy.id}"></div>`)
    $enemy.css('top', `${enemy.position[0]}%`)
    $enemy.css('left',`${enemy.position[1]}%`)

    const enemySizeW = Math.abs(50-enemy.position[0])
    const enemySizeH = Math.abs(50-enemy.position[1])
    const enemySize = 0.1*(enemySizeW+enemySizeH)


    $enemy.css('width', `${enemySize}vw`) 
    $enemy.css('height', `${enemySize}vw`)
    $enemy.css('background-image',`url(${enemiesImgs[parseInt(enemy.type)]})`)
    return $enemy
  }

  return {
    renderEnemy
  }

}

export default EnemyRender