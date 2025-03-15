let mat1 = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];

let mat2 = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];
var i;
var j;
r=[];
for(i=0;i<mat1.length;i++){
   // document.write(mat1[i]+"<br>");
    for(j=0;j<mat1.length;j++){
        document.write(mat1[i][j]+mat2[i][j]+" ");
    }
}
