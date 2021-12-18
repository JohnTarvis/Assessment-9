fnction unroll(squareArray) {
    let length = squareArray.length;
    const unrolled = [];

    let loc = {x:0,y:0}
    let step = {y:1,x:-1}

    function show(){
        console.log(`locx: ${loc.x} locy: ${loc.y} `);
    }

    for(let count = 0; count < length; count++){
        // loc.x += step.x;
        unrolled.push(squareArray[0][count]);
        show();
    }


    loc.x = length - 1;

    for(let line = length; line >= 0; line--){

        for(let count = 1; count < line; count++){
            loc.y += step.y;
            unrolled.push(squareArray[loc.y][loc.x]);
            show();
        }

        for(let count = 1; count < line; count++){
            loc.x += step.x;
            unrolled.push(squareArray[loc.y][loc.x]);
            show();
        }

        step.x *= -1;
        step.y *= -1;

    }
    return unrolled;
}

const sarr = [[1,2,3],[4,5,6],[7,8,9]];

module.exports = unroll;
