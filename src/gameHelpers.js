export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']),
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //1. Verifica a célula (cell) que esta atualmente o Tetramoni 
      if (player.tetromino[y][x] !== 0) {
        if (     
          //2. Verifia se o nosso movimento está dentro da Height das áreas de jogo (y)
          // Não deve passar pela parte inferior da área de jogo
          !stage[y + player.pos.y + moveY] ||
          //3. Verifica se o nosso movimento está dentro da Width das áreas de jogo (x)          
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //4. Verifica se a célula se move para não está definida para limpar e manter travada
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
};