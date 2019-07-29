class Square{

    private _sName: string = "Sour Face";
    // private _canvas: HTMLCanvasElement = document.getElementById('grid');

    private _xPos: number = 0;
    private _yPos: number = 0;
    private _width: number = 0;
    private _height: number = 0;
    private _sidesArray = ["left", "top", "right", "bottom"];
    private _cornerArray = ["topLeft", "topRight", "botleft", "botRight"];
    private _context: CanvasRenderingContext2D;
    // private _contgitext: CanvasRenderingContext2D;

    public constructor(x: number, y: number, width: number, height: number, context: CanvasRenderingContext2D){
        this.xPos = x;
        this.yPos = y;
        this.width = width;
        this.height = height; 
        this.sName = "Sour Eyes";
        // console.log(canvas);
        // this._canvas = canvas;//document.getElementById('canvas') as HTMLCanvasElement;
        this.context = context;

        // this._canvas = lCanvas;
        // this.context = lContext;
     }

    public DrawMe(): string {
        let strTest = "Drawing Square TEST";
        console.log(strTest);
        this.context.rect(this.xPos, this.yPos, this.width, this.height);
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

    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }
    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
    }
    get sides(): string[] {
        return this._sidesArray;
    }
    set sides(value: string[]){
        this._sidesArray = value;
    }

    // get canvas(): HTMLCanvasElement {
    //     return this._canvas;
    // }
    // set canvas(value: HTMLCanvasElement) {
    //     this._canvas = value;
    // }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
    set context(value: CanvasRenderingContext2D) {
        this._context = value;
    }
}
//#endregion

// //send to server side
// module.exports = Square;

//Send to client side
// var mySquare = new Square(0, 0, 100);

// window.onload = config;
// function config() {
//     square = new Square(0, 0, 100);
// }