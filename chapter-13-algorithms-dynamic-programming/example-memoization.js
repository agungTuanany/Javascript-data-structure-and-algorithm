function addTo80(n) {
    console.log("took a long time");

    return n + 80
}

let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    }
    else {
        cache[n] = n + 80;

        console.log(cache, {n}, " ==> it takes long time");
        return cache[n]
    }
}

console.log("[!] - 1", memoizedAddTo80(5))
console.log("[!] - 2", memoizedAddTo80(5))
console.log("[!] -" ,memoizedAddTo80(5));
console.log("[!!] -" ,memoizedAddTo80(2));
console.log("[!!!] -" ,memoizedAddTo80(3));
console.log("[!] -" ,memoizedAddTo80(5));
console.log("[!!] -" ,memoizedAddTo80(2));
