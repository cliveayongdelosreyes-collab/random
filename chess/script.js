// Unicode Chess Symbols
const PIECES = {
  r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟',
  R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙'
};

const initialBoard = [
  ['r','n','b','q','k','b','n','r'],
  ['p','p','p','p','p','p','p','p'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['P','P','P','P','P','P','P','P'],
  ['R','N','B','Q','K','B','N','R']
];

let board = [];
let turn = 'white'; // 'white' or 'black'
let selectedSquare = null;

function isWhite(piece) {
  return piece && piece === piece.toUpperCase();
}

function isBlack(piece) {
  return piece && piece === piece.toLowerCase();
}

function createBoard() {
  board = JSON.parse(JSON.stringify(initialBoard));
  turn = 'white';
  selectedSquare = null;
  render();
}

function render() {
  const boardEl = document.getElementById('board');
  const turnEl = document.getElementById('turn-display');
  boardEl.innerHTML = '';
  turnEl.textContent = `${turn.charAt(0).toUpperCase() + turn.slice(1)}'s Turn`;

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const square = document.createElement('div');
      const isLight = (r + c) % 2 === 0;
      
      square.className = `square ${isLight ? 'light' : 'dark'}`;
      if (selectedSquare && selectedSquare.r === r && selectedSquare.c === c) {
        square.classList.add('selected');
      }

      const piece = board[r][c];
      square.textContent = PIECES[piece] || '';

      square.addEventListener('click', () => handleClick(r, c));
      boardEl.appendChild(square);
    }
  }
}

function handleClick(r, c) {
  const piece = board[r][c];

  // If selecting own piece
  if (piece && ((turn === 'white' && isWhite(piece)) || (turn === 'black' && isBlack(piece)))) {
    selectedSquare = { r, c };
    render();
    return;
  }

  // If a piece is selected, move it to target square
  if (selectedSquare) {
    board[r][c] = board[selectedSquare.r][selectedSquare.c];
    board[selectedSquare.r][selectedSquare.c] = '';
    selectedSquare = null;
    turn = turn === 'white' ? 'black' : 'white';
    render();
  }
}

document.getElementById('reset-btn').addEventListener('click', createBoard);

// Initialize game
createBoard();