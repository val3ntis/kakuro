import { Component, OnInit } from '@angular/core';
import { states } from './Helpers';
import { BoardItem } from './classes/BoardItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board: BoardItem[][] = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}]
  ];

  activeTheme: any = {};


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

  chooseTheme(i: number): void {
    this.activeTheme = this.themes[i];
  }

  ngOnInit(): void {
    this.activeTheme = this.themes[0];
    this.newGame();
  }

  dataChanged(newObj: any, i: number, j: number): void {
    this.board[i][j].value = newObj;
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

  newGame(): void {
    const niz = states[this.getRandomArbitrary(0, states.length - 1)];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
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
  }

}
