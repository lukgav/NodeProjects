//Require modules

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

//Variabls from modules
//jsdom
class Canvas{

    private _options: object = null;
    private _dom: any = null;
    private _element: any = null;
    
    public constructor(pElement: any){
        this._element = pElement;
    }

    public DrawTest(){
        if(this.canvasElement.getContext){
           var ctx = this.canvasElement.getContext('2d');
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);
        }
        else{
            alert("Your browser does not support the <canvas> element")
        }
    }
//#region Property Accessors

    get dom(): any {
        return this._dom;
    }
    set dom(value: any) {
        this._dom = value;
    }

    get canvasElement(): any {
        return this._element;
    }
    set canvasElement(value: any) {
        this._element= value;
    }
//#endregion Property Accessors
}
module.exports = Canvas;
