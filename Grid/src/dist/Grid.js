import { Square } from './SquareClass';
// const SquareClass = require("./SquareClass")
class Grid {
    constructor(noOfRows, noOfColumns) {
        var lGridColRatio = 1 / noOfColumns;
        var lGridRowRatio = 1 / noOfRows;
        this._rows = noOfRows;
        this._cols = noOfColumns;
        this._canvas = document.getElementById('canvas');
        this._context = this._canvas.getContext("2d"); //TODO: Make an array of squares        
        var lGridColRatio = 1 / noOfColumns;
        this._colLength = lGridColRatio * this._canvas.width; //columns
        this._rowLength = lGridRowRatio * this._canvas.height; //rows
        //test number of Squares.
        // this._squareArray = new Square[noOfColumns];
        this._squareArray = new Square[10];
        var square = new Square[2];
        for (var i = 0; i < this._squareArray.length; i++) {
            this._squareArray[i] = new SquareClass(i * noOfColumns, i * noOfRows, this._colLength);
        }
        // this._squareArray = Square[5];
    }
    DrawMe() {
        //TODO: Draw array of squares to make grid form
        //foreach square in squareArray
        let args = ["test Grid Draw"];
        return args;
    }
    get sName() {
        return this._sName;
    }
    set sName(value) {
        this._sName = value;
    }
}
module.exports = Grid;
//# sourceMappingURL=Grid.js.map