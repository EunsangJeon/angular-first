export class Point2D {
    // private x: number;
    // private y: number;
    // public private protected like java
    
    constructor(private _x?: number, private _y?: number) {
        // this.x = x;
        // this.y = y;
    }
    // if a pram is optional right side of it must be optional

    get x() {
        return this.x;
    }

    set x(value: number) {
        if(value < 0) {
            throw new Error('no below 0')
        }
        this._x = value;
    }

    draw() {
        console.log('x: ' + this._x + ' y: ' + this._y);
        // ...
    }

    getDistance(another: Point) {
        // ...
    }
}
