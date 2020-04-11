const arr1 = [ 2, 2, 0, 1, 1, 0 ];
const arr2 = [2, 1, 2, 0, 1, 0, 2];

const sortArr = arr => {
  const c = [0, 0, 0];
  console.log('Output: ',  arr.map( el => ++c[el] )
                              .map( ( _, i ) => i < c[0] ? 0 : i < c[0] + c[1] ? 1 : 2 )
  ); 
}

sortArr(arr1);
sortArr(arr2);
