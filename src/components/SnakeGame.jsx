import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const SnakeGame = () => {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const gameStateRef = useRef({
    snake: [[10, 10], [10, 11], [10, 12]],
    direction: 'UP',
    nextDirection: 'UP',
    food: [15, 15],
    touchStartX: 0,
    touchStartY: 0
  })

  const GRID_SIZE = 20
  const TILE_SIZE = 20

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const spawnFood = () => {
      let food
      do {
        food = [
          Math.floor(Math.random() * GRID_SIZE),
          Math.floor(Math.random() * GRID_SIZE)
        ]
      } while (gameStateRef.current.snake.some(segment => 
        segment[0] === food[0] && segment[1] === food[1]
      ))
      return food
    }

    const draw = () => {
      const { snake, food } = gameStateRef.current
      
      // Limpiar canvas
      ctx.fillStyle = '#0A0A0A'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Grid
      ctx.strokeStyle = '#1a1a2e'
      ctx.lineWidth = 1
      for (let i = 0; i <= GRID_SIZE; i++) {
        ctx.beginPath()
        ctx.moveTo(i * TILE_SIZE, 0)
        ctx.lineTo(i * TILE_SIZE, canvas.height)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, i * TILE_SIZE)
        ctx.lineTo(canvas.width, i * TILE_SIZE)
        ctx.stroke()
      }
      
      // Serpiente
      snake.forEach((segment, i) => {
        ctx.fillStyle = i === 0 ? '#FF6EC7' : '#A855F7'
        ctx.fillRect(
          segment[0] * TILE_SIZE + 2,
          segment[1] * TILE_SIZE + 2,
          TILE_SIZE - 4,
          TILE_SIZE - 4
        )
      })
      
      // Comida
      ctx.fillStyle = '#00E5FF'
      ctx.fillRect(
        food[0] * TILE_SIZE + 2,
        food[1] * TILE_SIZE + 2,
        TILE_SIZE - 4,
        TILE_SIZE - 4
      )
    }

    const update = () => {
      if (gameOver) return

      const state = gameStateRef.current
      state.direction = state.nextDirection

      const head = [...state.snake[0]]
      if (state.direction === 'UP') head[1]--
      else if (state.direction === 'DOWN') head[1]++
      else if (state.direction === 'LEFT') head[0]--
      else if (state.direction === 'RIGHT') head[0]++

      // Colisiones
      if (head[0] < 0 || head[0] >= GRID_SIZE || 
          head[1] < 0 || head[1] >= GRID_SIZE ||
          state.snake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true)
        return
      }

      state.snake.unshift(head)

      // Comida
      if (head[0] === state.food[0] && head[1] === state.food[1]) {
        setScore(s => s + 10)
        state.food = spawnFood()
      } else {
        state.snake.pop()
      }

      draw()
    }

    const gameLoop = () => {
      update()
      animationId = setTimeout(() => requestAnimationFrame(gameLoop), 150)
    }

    draw()
    gameLoop()

    return () => clearTimeout(animationId)
  }, [gameOver])

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        'ArrowUp': 'UP',
        'ArrowDown': 'DOWN',
        'ArrowLeft': 'LEFT',
        'ArrowRight': 'RIGHT'
      }
      
      const newDir = keyMap[e.key]
      if (newDir) {
        e.preventDefault()
        const opposites = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' }
        if (gameStateRef.current.direction !== opposites[newDir]) {
          gameStateRef.current.nextDirection = newDir
        }
      }
    }

    const handleTouchStart = (e) => {
      gameStateRef.current.touchStartX = e.touches[0].clientX
      gameStateRef.current.touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - gameStateRef.current.touchStartX
      const dy = e.changedTouches[0].clientY - gameStateRef.current.touchStartY
      
      const opposites = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' }
      let newDir
      
      if (Math.abs(dx) > Math.abs(dy)) {
        newDir = dx > 30 ? 'RIGHT' : dx < -30 ? 'LEFT' : null
      } else {
        newDir = dy > 30 ? 'DOWN' : dy < -30 ? 'UP' : null
      }
      
      if (newDir && gameStateRef.current.direction !== opposites[newDir]) {
        gameStateRef.current.nextDirection = newDir
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const canvas = canvasRef.current
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const restartGame = () => {
    gameStateRef.current = {
      snake: [[10, 10], [10, 11], [10, 12]],
      direction: 'UP',
      nextDirection: 'UP',
      food: [15, 15],
      touchStartX: 0,
      touchStartY: 0
    }
    setScore(0)
    setGameOver(false)
  }

  return (
    <section id="game" className="min-h-screen py-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-display text-5xl mb-4" style={{ color: '#FF6EC7' }}>
          🐍 SNAKE GAME
        </h2>
        <div className="text-2xl mb-4" style={{ color: '#00E5FF' }}>
          Score: {score}
        </div>
        
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="border-4 mx-auto"
          style={{ 
            borderColor: '#A855F7',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            touchAction: 'none',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
        
        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4"
          >
            <p className="text-3xl mb-4" style={{ color: '#FF6EC7' }}>GAME OVER</p>
            <p className="text-xl mb-4" style={{ color: '#00E5FF' }}>Final Score: {score}</p>
          </motion.div>
        )}
        
        <button
          onClick={restartGame}
          className="mt-6 px-8 py-4 text-xl font-bold rounded-lg"
          style={{
            background: 'linear-gradient(135deg, #A855F7, #FF6EC7)',
            color: 'white',
            border: 'none'
          }}
        >
          Restart Game
        </button>
        
        <p className="mt-4 text-sm" style={{ color: '#9CA3AF' }}>
          Desktop: Arrow Keys | Mobile: Swipe
        </p>
      </motion.div>
    </section>
  )
}

export default SnakeGame
