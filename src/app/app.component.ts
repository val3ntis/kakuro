import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { states } from './Helpers';
import { BoardItem } from './classes/BoardItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board: any = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}]
  ];

  activeTheme: any = {};
  semaphores: any = {
    won: false,
    lost: false,
    displayNewGamePopUp: false
  };

  timeLeft: number = 0;
  minutesLeft: number = 0;
  interval: any;
  dimension: number = 5;


  themes: any = [
    {
      bg: 'bg-red-300',
      text: 'text-red-900',
      table_bg: 'bg-red-900',
      table_border: 'border-red-900',
      title: 'text-red-900',
      btn_bg: 'bg-red-900 border-black hover:bg-red-600',
      field_bg: 'bg-pink-200',
      board_01: 'bg-red-600',
      board_02: 'bg-red-400',
      line: 'bg-red-900',
      numbers: 'text-red-900'

    },
    {
      bg: 'bg-indigo-900',
      text: 'text-indigo-900',
      table_bg: 'bg-fuchsia-900',
      table_border: 'border-fuchsia-900',
      title: 'text-purple-400',
      btn_bg: 'bg-purple-400 border-purple-400 hover:bg-gray-700',
      field_bg: 'bg-purple-200',
      board_01: 'bg-indigo-500',
      board_02: 'bg-indigo-400',
      line: 'bg-fuchsia-900',
      numbers: 'text-fuchsia-900'
    }
  ];

  startTimer(minutes?: number): void {
    this.interval = setInterval(() => {
      if (this.timeLeft === 0) {
        this.semaphores.lost = true;
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


  chooseTheme(i: number): void {
    this.activeTheme = this.themes[i];
  }

  ngOnInit(): void {
    this.activeTheme = this.themes[0];
    this.chooseTime(5);
  }

  dataChanged(newObj: any, i: number, j: number): void {
    this.board[i][j].value = newObj;
      if (this.checkWinner()) {
      window.alert('won');
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
    this.semaphores.displayNewGamePopUp = true;
  }

  newGame(minutes?: number): void {

    const niz = states[this.getRandomArbitrary(0, states.length - 1)];
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


@Pipe({name: 'DecimalPipe'})
export class NumNotRoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value * 100) / 100;
  }
}
