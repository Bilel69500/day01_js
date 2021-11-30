function tabTriCarre(array){


    array.sort();
    
    const result1 = array.map(x => x * x);
    return result1;
    }
    array = [ 1, 2, 3, 4, 5];
    console.log(tabTriCarre(array))
    exports.tabTriCarre =  tabTriCarre;