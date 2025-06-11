const arr = [1,2,5,3,4,null,6]; //16, 14, 10, 8, 7, 9, 3, 2, 4, 1
// const arr = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; //16, 14, 10, 8, 7, 9, 3, 2, 4, 1
const temp = [];
const twoDimensionalArr = [[1,3,5,8], [4,2,1,7], [4,3,2,3]];
const cache = [[0,0,0,0], [0,0,0,0], [0,0,0,0]];
// heap(0);
// console.log(minCost(twoDimensionalArr, 2, 3));
console.log('non-unique ways', countWays(13));
console.log('unique ways', countUniqueWays(13));

function minCost(arr, x, y) {
    if(cache[x][y] != 0){
        return cache[x][y];
    }

    if(x == 0 && y == 0){
        return arr[x][y];
    }
    if(x == 0){
        cache[x][y] = minCost(arr, x, y - 1) + arr[x][y];
        return cache[x][y];
    }
    if(y == 0){
        cache[x][y] = minCost(arr, x - 1, y) + arr[x][y];
        return cache[x][y];
    }

    const a = minCost(arr, x - 1, y);
    const b = minCost(arr, x, y - 1);
    const c = minCost(arr, x - 1, y - 1);
    cache[x][y] = Math.min(a, b, c) + arr[x][y];
    return cache[x][y];
}

function getMin(a, b, c) {
    let temp = Math.min(a, b);
    return Math.min(temp, c);
}

function countRecur(n, i, points) {
    
    // Base cases
    if (n === 0) return 1;
    if (n < 0 || i === 3) return 0;

    // take points[i] point 
    let take = countRecur(n - points[i], i, points);

    // skip point 
    let noTake = countRecur(n, i + 1, points);

    return take + noTake;
}

function countWays(n) {
    if (n < 0) {
        return 0;
    }
    if(n == 0){
        return 1;
    }

    return countWays(n - 10) + countWays(n - 5) + countWays(n - 3);
}

function countUniqueWays(n) {
    let points = [3, 5, 10];
    return countRecur(n, 0, points);
}

function heap(i) {
    temp.push(arr[i]);
    const l = left(i);
    const r = right(i);
    if(l < arr.length && arr[l]){
        heap(l);
    }
    if(r < arr.length && arr[r]){
        heap(r);
    }
}

function left(i){
    return (2 * i) + 1;
}

function right(i) {
    return (2 * i) + 2;
}

// console.log(temp);