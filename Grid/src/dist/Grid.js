/*
import { Square } from './SquareClass.js';
// const SquareClass = require("./SquareClass.ts");

class Grid{
    private _squareArray: Array<Square>;
    private _rows: number;
    private _cols: number;
    private _colLength: number;
    private _rowLength: number;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    public constructor(noOfRows: number, noOfColumns: number){
        var lGridColRatio = 1/noOfColumns;
        var lGridRowRatio  = 1/noOfRows;
        this._rows = noOfRows;
        this._cols = noOfColumns;

        this._canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this._context = this._canvas.getContext("2d");        //TODO: Make an array of squares
        
        var lGridColRatio = 1 / noOfColumns;
        this._colLength = lGridColRatio * this._canvas.width; //columns
        this._rowLength = lGridRowRatio * this._canvas.height; //rows
        
        this._squareArray = new Array<Square>(noOfColumns);

        // // var squareArray1 = Square[] = new Square(0, 0, 0); //geht nicht
        // var squareArray2 = new Array<Square>(10);
        // // var square = new Square[2];
        
        for (var i= 0; i < this._squareArray.length; i++ ) {
            this._squareArray[i]= new Square(i*noOfColumns, i*noOfRows, this._colLength);
        }
        // this._squareArray = Square[5];
    }

    public DrawMe(): string[]{
        //TODO: Draw array of squares to make grid form
        //foreach square in squareArray

        let args = ["test Grid Draw"];
        return args;
    }
    // get sName(): string {
    //     return this._sName;
    // }
    // set sName(value: string) {
    //     this._sName = value;
    // }
}
// module.exports = Grid; */ 
//# sourceMappingURL=Grid.js.map