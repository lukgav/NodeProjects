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
/*         this._options =
        {
            contentType: "text/html",
            includeNodeLocations: true,
            storageQuota: 10000000
        }
        this._dom = JSDOM
                    .fromFile("./templates/views/index.hbs", this._options)
                    .then(dom => {
                        console.log(dom.serialize());
                    }); */
        this._element = pElement;
    }

    public DrawTest(){
        if(this.canvasElement.getContext){
           var ctx = this.canvasElement.getContext('2d');
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);
        }
        else{
            alert("Dein Browser unterstützt das <canvas> Element nicht")
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

   /*  get xPos(): number {
        return this._xPos;
    }
    set xPos(value: number) {
        this._xPos = value;
    }

    get xPos(): number {
        return this._xPos;
    }
    set xPos(value: number) {
        this._xPos = value;
    } */
//#endregion Property Accessors

module.exports = Canvas;
}

//-------------------------Canvas---------------------//
// const Canvas = require('canvas');
// var image = Canvas.Image;
// const canvas = new Canvas;
// const canvas = Canvas.Create;
// const ctx = canvas.getContext('2d');

// //Other vars
// var r = Math.floor((Math.random() * 256));
// var color = "rgb(" + r +  ")";

// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Hello Canvas!', 50, 100)


// var dataURL = canvas.dataUrl

// document.getElementById('canvasImg').src = dataURL;