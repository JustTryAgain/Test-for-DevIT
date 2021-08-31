let testArr = [1,2,3,4,5,7.8,'Hi'];
let subArr = [];
function chunkArray(arr,chunk) {

  if(Array.isArray(arr)){
    for(let i = 0;i < Math.ceil(arr.length/chunk);i++){
    subArr[i] = arr.slice((i*chunk), (i*chunk) + chunk);}
  } else return false;
  
  console.log(subArr);

}

chunkArray(testArr,2);