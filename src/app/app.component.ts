import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board: string[][] = [
    ['', '2', '', '', ''],
    ['', '', '', '', '3'],
    ['', '', '', '', ''],
    ['', '', '7', '', ''],
    ['', '', '', '', ''],
  ];

  activeTheme: any = {

  };


  themes: any = [
    {
      bg: 'bg-red-300',
      text: 'text-red-900',
      table_bg: 'bg-red-900',
      table_border: 'border-red-900',
      title: 'text-red-900',
      btn_bg: 'bg-red-900 border-black hover:bg-red-600',
      field_bg: 'bg-pink-200'

    },
    {
      bg: 'bg-indigo-900',
      text: 'text-indigo-900',
      table_bg: 'bg-fuchsia-900',
      table_border: 'border-fuchsia-900',
      title: 'text-purple-400',
      btn_bg: 'bg-purple-400 border-purple-400 hover:bg-gray-700',
      field_bg:'bg-purple-200'
    }
  ];

  chooseTheme(i: number): void {
  this.activeTheme = this.themes[i];
  }

  ngOnInit(): void {
    this.activeTheme = this.themes[0];

  }

  dataChanged(newObj:any,i:number ,j:number): void {
    this.board[i][j] = newObj;
}



}
