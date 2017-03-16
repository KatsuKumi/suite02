/*

    search Area

    We give you a map, in array like:

    [
        "xxxxxxxxxxx",
        "xxxx...x..x",
        "xxxx...x..x",
        "xxxx...xxxx",
        "xxxxxxx..xx",
        "xx..xxxxxxx",
        "xx..xxxx.xx",
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    You need to find the biggest square we can draw in the map, by replace '.' in strings.
    The square size and square map can be various, and will be random at correction.

    '.' is for a free space.
    'x' is for walls.
    'o' is for the square resolution/composition.

    We expect that array in return:

    [
        "xxxxxxxxxxx",
        "xxxxooox..x", // here is 
        "xxxxooox..x", // a square
        "xxxxoooxxxx", // with 3x3 dimension
        "xxxxxxx..xx",
        "xx..xxxxxxx", // here is 
        "xx..xxxx.xx", // a square dimension 2x2 but not the biggest
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    There is only one possibility in this exemple. If there is more than one, take the last.

    Tips:
    Test your own maps !

*/

// write your own code below this comment
var point = ".";
function bigsquare(map) {
    var bigsquare = {
        width: 0,
        height: 0,
        coordonates: []
    };
    for (var line in map) {
        var lignnb = parseInt(line);
        var theligne = map[line];
        for (var box in theligne) {
            var colnb = parseInt(box);
            if (theligne[colnb] == point) {
                var squarewidth = GetSquareWidth(lignnb, colnb, map);
                var squareheight = GetSquareHeight(lignnb, colnb, map)
                    if (squareheight > squarewidth){
                        squareheight = squarewidth;
                    }
                    else if (squareheight < squarewidth){
                        squarewidth = squareheight;
                    }
                if (squarewidth > 1 && IsSquareFull(lignnb, colnb, squareheight, squarewidth, map)) {

                    if (squareheight >= bigsquare.height) {
                        bigsquare.height = squareheight;
                        bigsquare.width = squarewidth;
                        bigsquare.coordonates = GetCordonates(lignnb, colnb, squareheight, squarewidth);
                    }
                }
            }
        }
    }
    return Replacecoordmap(map, bigsquare);
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function Replacecoordmap(map, bigsquare) {
    for (var lineheight of bigsquare.coordonates) {
        map[lineheight[0]] = setCharAt(map[lineheight[0]], lineheight[1], 'o');;
    }
    return map;
}

function GetCordonates(ligne, col, height, width) {
    var coordonates = [];
    for (widthi = 0; widthi < width; widthi++) {
        for (heighti = 0; heighti < height; heighti++) {
            coordonates.push([(ligne + widthi), (col + heighti)])
        }
    }
    return coordonates;

}

function IsSquareFull(ligne, col, height, width, map) {
    for (widthi = 0; widthi < width; widthi++) {
        for (heighti = 0; heighti < height; heighti++) {
            if (map[ligne + widthi][col + heighti] != point) {
                return false;
            }
        }
    }
    return true;
}

function GetSquareWidth(ligne, col, map) {
    var width = 0;
    for (i = 0; i < Infinity; i++) {
        if (map[ligne][col + i] == point) {
            width++;
        }
        else {
            break;
        }
    }
    return width;
}

function GetSquareHeight(ligne, col, map) {
    var height = 0;
    for (i = 0; i < Infinity; i++) {
        if (map[ligne + i][col] == point) {
            height++;
        }
        else {
            break;
        }
    }
    return height;
}


console.log(bigsquare([
    "xxxxxxxxxxx",
    "xxxx...x..x",
    "xxxx...x..x",
    "xxxx...xxxx",
    "xxxxxxx..xx",
    "xx...xxxxxx",
    "xx...xxx.xx",
    "x....xxx..x",
    "xx.xxxx..xx",
    "xx.x.xx..xx",
    "xxxxxxxxxxx"
]));