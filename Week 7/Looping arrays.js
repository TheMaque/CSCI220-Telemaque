function range( start, end, increment ) {
  

    var result = [];

    if ( increment == undefined )
      increment = 1;
    

    numLoops = Math.abs( (end - start)/ increment ) + 1 ;
    

    for ( var i = 0; i < numLoops; i ++ ) {

      result.push( start );
       
 
      start += increment;
    }
    

    return result;
  }
  
  function sum( numArray ) {

    var arrayTotal = 0;
    

    numLoops = numArray.length;
    

    for ( var i = 0; i < numLoops; i ++ ) {
 
      arrayTotal += numArray[i];
    }
    return arrayTotal;
  }
  
  console.log(range(1, 10));

  console.log(range(5, 2, -1));

  console.log(sum(range(1, 10)));
