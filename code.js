function mergesort(array) {
    var n = array.length;
    if (n == 0) {
        return array;
    }
    var tmpLength = 1;

    while (tmpLength < n) {
        var i = 0;
        while (i < n) {
            var L1 = i;
            var R1 = i + tmpLength - 1;
            var L2 = i + tmpLength;
            var R2 = i + 2 * tmpLength - 1;
            
            if (L2 >= n) { break; }
            if (R2 >= n) { R2 = n - 1; }

            var temp = merge2(array, L1, R1, L2, R2);

            i = i + 2 * tmpLength;
        }
        tmpLength *= 2;
    }
    return temp;
}


function merge2(array, L1, R1, L2, R2) {
    var tmpHold = 0;
    var index1 = L1;
    while (L1 <= R1 && L2 <= R2 && index1 < L2 && L2 < array.length) {
        if (array[index1] <= array[L2]) { 
            index1 += 1;         
            }
        else {                          
            tmpHold = array[L2];
            R1 += 1;
            L2 += 1;
            index1 += 1;      
            for (var i = R1; i > index1-1; i--) { 
                array[i] = array [i-1];
            }
            array[index1-1] = tmpHold;
        }
    }
    return array; 
}

