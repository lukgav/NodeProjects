//Require modules

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

//Variabls from modules
//jsdom
class Canvas{
    private _element: any = null;
    
    public constructor(){
        this._element = null;
    }

    public DrawTest(){
        if (this.element.getContext){
            var ctx = this.element.getContext('2d');
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);
        }
        else{
            alert("Your browser does not support the <canvas> element");
        }
    }

//#region Property Accessors
    get element(): any {
        return this._element;
    }
    set element(value: any) {
        this._element= value;
    }
//#endregion Property Accessors
}
module.exports = Canvas;