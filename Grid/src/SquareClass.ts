export class Square{

    private _sName: string = "Sour Face";
    // private _canvas: HTMLCanvasElement = document.getElementById('grid');

    private _xPos: number = 0;
    private _yPos: number = 0;
    private _length: number = 0;
    private _sidesArray = ["left", "top", "right", "bottom"];
    private _cornerArray = ["topLeft", "topRight", "botleft", "botRight"];
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    // private _contgitext: CanvasRenderingContext2D;

    public constructor(x:number, y: number, length: number){
        this.xPos = x;
        this.yPos = y;
        this.length = length; 
        this.sName = "Sour Eyes";

        this._canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this._canvas.getContext("2d");

        // this._canvas = lCanvas;
        // this.context = lContext;
     }

    public DrawMe(): string {
        let strTest = "Drawing Square TEST";
        console.log(strTest);
        this.context.rect(this.xPos, this.yPos, this.length, this.length);
        this.context.stroke();
        return strTest;
    }
//#region Property Accessors


    get sName(): string{
        return this._sName;
    }
    set sName(value: string) {
        this._sName= value;
    }

    get xPos(): number {
        return this._xPos;
    }
    set xPos(value: number) {
        this._xPos = value;
    }

    get yPos(): number {
        return this._yPos;
    }
    set yPos(value: number) {
        this._yPos = value;
    }

    get length(): number {
        return this._length;
    }
    set length(value: number) {
        this._length = value;
    }
    get sides(): string[] {
        return this._sidesArray;
    }
    set sides(value: string[]){
        this._sidesArray = value;
    }
    get corners(): string[] {
        return this._cornerArray;
    }
    set corners(value: string[]) {
        this._cornerArray = value;
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }
    set canvas(value: HTMLCanvasElement) {
        this._canvas = value;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
    set context(value: CanvasRenderingContext2D) {
        this._context = value;
    }

}
//#endregion

//send to server side
module.exports = Square;

//Send to client side
// var mySquare = new Square(0, 0, 100);

// window.onload = config;
// function config() {
//     square = new Square(0, 0, 100);
// }