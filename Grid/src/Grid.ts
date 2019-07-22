class Grid{
    private _squareArray: [];
    private _rows: number;
    private _cols: number;

    public constructor(noOfRows: number, noOfColumns: number){
        this._rows = noOfRows;
        this._cols = noOfColumns;
        //TODO: Make an array of squares
        // this._squareArray = Square[5];
    }

    public DrawMe(): string[]{
        //TODO: Draw array of squares to make grid form
        //foreach square in squareArray

        let args = ["test Grid Draw"];
        return args;

    }
}
module.exports = Grid;