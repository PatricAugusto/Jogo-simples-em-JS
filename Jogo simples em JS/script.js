const gameBoard = document.getElementById('game-board');
const message = document.getElementById('message');

const boardSize = 5;
let playerPosition = { x: 0, y: 0 };
let itemPosition = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };

function createBoard() {
    gameBoard.innerHTML = '';
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (x === playerPosition.x && y === playerPosition.y) {
                cell.classList.add('player');
            }
            if (x === itemPosition.x && y === itemPosition.y) {
                cell.classList.add('item');
            }
            gameBoard.appendChild(cell);
        }
    }
}

function movePlayer(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (playerPosition.y > 0) playerPosition.y--;
            break;
        case 'ArrowDown':
            if (playerPosition.y < boardSize - 1) playerPosition.y++;
            break;
        case 'ArrowLeft':
            if (playerPosition.x > 0) playerPosition.x--;
            break;
        case 'ArrowRight':
            if (playerPosition.x < boardSize - 1) playerPosition.x++;
            break;
    }
    checkItem();
    createBoard();
}

function checkItem() {
    if (playerPosition.x === itemPosition.x && playerPosition.y === itemPosition.y) {
        message.textContent = 'You found the item!';
        itemPosition = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };
    }
}

document.addEventListener('keydown', movePlayer);
createBoard();
