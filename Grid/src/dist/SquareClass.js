class Square {
    // private _contgitext: CanvasRenderingContext2D;
    constructor(x, y, length) {
        this._sName = "Sour Face";
        // private _canvas: HTMLCanvasElement = document.getElementById('grid');
        this._xPos = 0;
        this._yPos = 0;
        this._length = 0;
        this._SidesArray = ["left", "top", "right", "bottom"];
        this._CornerArray = ["topLeft", "topRight", "botleft", "botRight"];
        this.xPos = x;
        this.yPos = y;
        this.length = length;
        this.sName = "Sour Eyes";
    }
    DrawMe() {
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
    get sName() {
        return this._sName;
    }
    set sName(value) {
        this._sName = value;
    }
    get xPos() {
        return this._xPos;
    }
    set xPos(value) {
        this._xPos = value;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(value) {
        this._yPos = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    get sides() {
        return this._SidesArray;
    }
    set sides(value) {
        this.sides = value;
    }
    get corner() {
        return this._CornerArray;
    }
    set corner(value) {
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
//# sourceMappingURL=SquareClass.js.map