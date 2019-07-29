class Square {
    // private _contgitext: CanvasRenderingContext2D;
    constructor(x, y, length) {
        this._yPos = 0;
        this._length = 0;
        this._SidesArray = ["left", "top", "right", "bottom"];
        this._CornerArray = ["topLeft", "topRight", "botleft", "botRight"];
        this.xPos = x;
        this.yPos = y;
        this.length = length;
    }
    DrawMe() {
        //Need to learn how to draw to HTML from here on.
        const canvas = document.getElementById('grid');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(this.xPos, this.yPos, this.length, this.length);
        }
        else {
            console.log('This canvas is nt supported');
        }
    }
    //#region Property Accessors
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
        return this.length;
    }
    set length(value) {
        this.length = value;
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
// module.exports = Square;
//# sourceMappingURL=SquareClass.js.map