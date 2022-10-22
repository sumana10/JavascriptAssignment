class Shape{
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
  }
}
class Cylinder extends Shape{
  constructor(radius, height){
    super(radius, height);
  }
  getVolume(){
    console.log(3.14*this.radius*this.radius*this.height);
  }
}
class Sphere extends Shape{
  constructor(radius){
    super(radius);
  }
  getVolume(){
    console.log((3.14*this.radius*this.radius*this.radius*4)/3);
  }
}
class Cone extends Shape{
  constructor(radius, height){
    super(radius, height);
  }
  getVolume(){
    console.log((3.14*this.radius*this.radius*this.height)/3);
  }
}
let obj = new Cylinder(20, 40);
obj.getVolume();
let obj2 = new Sphere(20);
obj2.getVolume();
let obj3 = new Cone(20, 40);
obj3.getVolume();