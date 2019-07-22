class Square{

    private _sName: string = "Sour Face";
    // private _canvas: HTMLCanvasElement = document.getElementById('grid');

    private _xPos: number = 0;
    private _yPos: number = 0;
    private _length: number = 0;
    private _SidesArray = ["left", "top", "right", "bottom"];
    private _CornerArray = ["topLeft", "topRight", "botleft", "botRight"];
    // private _contgitext: CanvasRenderingContext2D;

    public constructor(x:number, y: number, length: number){
        this.xPos = x;
        this.yPos = y;
        this.length = length; 
        this.sName = "Sour Eyes";
    }

    public DrawMe(): string {
        let strTest = "Drawing Square TEST";
        console.log(strTest);
        return strTest;
        //Need to learn how to draw to HTML from here on.
        // this._canvas = <HTMLCanvasElement>document.getElementById('grid');
        // if(this._canvas.getContext) {
        //     var ctx = this._canvas.getContext('2d');
        //     ctx.clearRect(this.xPos, this.yPos, this.length, this.length);
        // } else {
        //     console.log('This canvas is nt supported');
        // }
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
        return this._SidesArray;
    }
    set sides(value: string[]){
        this.sides = value;
    }
    get corner(): string[] {
        return this._CornerArray;
    }
    set corner(value: string[]) {
        this._CornerArray = value;
    }
}
//#endregion

// window.onload = () => {
//     HTMLElement el = document.getElementById('grid');
//     var greeter = new Square(el);
//     greeter.start();
// };

module.exports = Square;