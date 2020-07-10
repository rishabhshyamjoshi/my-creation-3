var w = 24; 
var angle = 0;
var ma;

function setup(){
   createCanvas(400, 400, WEBGL);
    ma = atan(1/sqrt(2));
}
function draw(){
    background(100);
 
    ortho(-200, 200, 200, -200, 0, 500);

    rotateX(QUARTER_PI);
    rotateY(ma);

    var offset = 0;
    for(z = 0; z < height; z += w){
    for(x = 0; x < width; x += w){
        push();
        normalMaterial();
        var a = angle + offset;
        var h = map(sin(a), 1, -1, 0, 100);
        translate(x - width/2, 0, z - height / 2);
        box(w - 2, h, w - 2);
        pop();
    }
    offset += 0.1;

}    
angle += 0.1;

}

