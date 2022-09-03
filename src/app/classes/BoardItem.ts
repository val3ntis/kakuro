export class BoardItem {
  public row?: number;
  public col?: number;
  public value: number = 0;
  public up?: boolean;
  public hasValue?: boolean;

  constructor(data?: any) {
    Object.assign(this, data);
  }


}
