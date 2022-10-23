
class Rectangle{

  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  area(){
    console.log(this.w * this.h);

  }
}

class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

let obj = new Square(5);
obj.area();