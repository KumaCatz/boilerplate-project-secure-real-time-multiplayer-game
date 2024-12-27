class Player {
  constructor({x, y, score, id}) {
    this.x = x
    this.y = y
    this.score = score 
    this.id = id
  }

  movePlayer(dir, speed) {
    switch (dir) {
      case 'left':
        this.x -= speed
        break
      case 'right':
        this.x += speed
        break
      case 'up':
        this.y += speed
        break
      case 'down':
        this.y -= speed
        break
    }
  }

  collision(item) {
    if (this.x == item.x && this.y == item.y) {
      return true
    }
  }

  calculateRank(arr) {
    const playersByScore = arr.sort((a, b) => b.score - a.score)
    const playerPosition = playersByScore.findIndex(player => player.id == this.id) + 1
    return `Rank: ${playerPosition}/${arr.length}`
  }
}

export default Player;
