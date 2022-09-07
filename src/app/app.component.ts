import { Component, OnInit } from '@angular/core';
import { niz3x3, niz4x4, states } from './Helpers';
import { themes } from './themes';
import { BoardItem } from './classes/BoardItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board: any;

  activeTheme: any = {};
  semaphores: any = {
    won: false,
    lost: false,
    displayNewGamePopUp: false,
    displayLevelSelector: true
  };

  timeLeft: number = 0;
  minutesLeft: number = 0;
  interval: any;
  dimension: number = 5;


  startTimer(minutes?: number): void {
    this.interval = setInterval(() => {
      if (this.timeLeft === 0) {
        this.semaphores.lost = true;
        window.alert('You lost');
        this.stopTimer();
      }
      if (this.timeLeft > 0) {
        this.minutesLeft = Math.trunc(this.timeLeft / 60);
        this.timeLeft--;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  chooseDimension(dimension: number): void {
    this.dimension = dimension;
    this.semaphores.displayLevelSelector = false;
    this.semaphores.displayNewGamePopUp = true;
  }


  chooseTheme(i: number): void {
    this.activeTheme = themes[i];
  }

  ngOnInit(): void {
    this.activeTheme = themes[0];
  }

  dataChanged(newObj: any, i: number, j: number): void {
    this.board[i][j].value = newObj;
    if (this.checkWinner()) {
      setTimeout(() => {
        window.alert('won');
        this.semaphores.won = true;
      }, 750);
      this.stopTimer();
    }
  }

  findBoardItem(arr: BoardItem [], i: number, j: number): BoardItem | undefined {
    return arr.find((boardItem: BoardItem) => {
      return boardItem.row === i && boardItem.col === j;
    });
  }

  getRandomArbitrary(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  initNewGame(): void {
    this.stopTimer();
    this.semaphores.displayLevelSelector = true;
  }

  newGame(minutes?: number): void {

    let niz: any = [];

    if (this.dimension === 5) {
      this.board = [
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}]
      ];
      niz = states[this.getRandomArbitrary(0, states.length - 1)];
    }

    if (this.dimension === 3) {
      niz = niz3x3[this.getRandomArbitrary(0, niz3x3.length - 1)];
      this.board = [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}]
      ];

    } else if (this.dimension === 4) {
      this.board = [
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}]
      ];
      niz = niz4x4[this.getRandomArbitrary(0, niz4x4.length - 1)];
    }

    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        const boardItem = this.findBoardItem(niz, i, j);
        if (boardItem !== undefined) {
          this.board[i][j] = boardItem;
        } else {
          this.board[i][j] = new BoardItem({
            row: i,
            col: j,
            value: 0,
            up: false,
            hasValue: false
          });
        }
      }
    }
    this.startTimer(minutes);
  }

  chooseTime(minutes: number): void {
    this.timeLeft = minutes * 60 - 1;
    this.minutesLeft = Math.trunc(this.timeLeft / 60);
    this.newGame(minutes);
    this.semaphores.displayNewGamePopUp = false;
  }

  checkWinner(): boolean {
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (this.board[i][j].hasValue && this.board[i][j].up) {
          if (!this.checkRow(i, j)) {
            return false;
          }
        } else if (this.board[i][j].hasValue && !this.board[i][j].up) {
          if (!this.checkColumn(i, j)) {
            return false;
          }
        }
      }
    }
    return true;
  }

  checkColumn(i: number, j: number): boolean {
    let totalSumInCol = 0;
    let row = i + 1;
    while (row < this.dimension && !this.board[row][j].hasValue && this.board[row][j].value !== -1) {
      totalSumInCol = totalSumInCol + +this.board[row][j].value;
      row++;
    }
    return totalSumInCol === this.board[i][j].value;
  }

  checkRow(i: number, j: number): boolean {
    let totalSumInRow = 0;
    let col = j + 1;
    while (col < this.dimension && !this.board[i][col].hasValue && this.board[i][col].value !== -1) {
      totalSumInRow = totalSumInRow + +this.board[i][col].value;
      col++;
    }
    return totalSumInRow === this.board[i][j].value;
  }
}
