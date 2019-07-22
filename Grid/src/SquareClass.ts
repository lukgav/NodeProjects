export class Square{

    private _xPos:number = 0;
    private _yPos:number = 0;
    private _length: number = 0;
    private _SidesArray = ["left", "top", "right", "bottom"];
    private _CornerArray = ["topLeft", "topRight", "botleft", "botRight"];
    // private _context: CanvasRenderingContext2D;

    public constructor(x:number, y: number, length: number){
        this.xPos = x;
        this.yPos = y;
        this.length = length; 
    }

    DrawMe():void {
        //Need a drawing library from here on.
        const  canvas = <HTMLCanvasElement>document.getElementById('canvas');
        if(canvas.getContext) {
            var ctx = canvas.
        }
    }
//#region Property Accessors
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
        return this.length;
    }
    set length(value: number) {
        this.length = value;
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