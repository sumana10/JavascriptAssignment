function checkTriangle(a, b, c)
{
     
    // Equilateral triangle
    if (a === b && b === c)
        console.log("Equilateral Triangle");
 
    // Isosceles triangle
    else if (a === b || b === c|| c === a)
        console.log("Isosceles Triangle");
 
    // Scalene triangle
    else
        console.log("Scalene Triangle");
}

checkTriangle(6, 7, 8);