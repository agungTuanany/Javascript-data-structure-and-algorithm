// https://www.youtube.com/watch?v=XKu_SEDAykw

const array1 = [3, 1, 5, 4, 8]

// Naive
function hasPairWithSum(arr, sum) {

    var len = arr.length;

    for(var i = 0; i < len - 1; i++) {
        console.log("====>", arr[i]);

        for(var j = i + 1; j < len; j++) {

            if (arr[i] + arr[j] === sum) {
                console.log("==>", arr[i], arr[j])
                console.log(true);

                return true;
            };

            console.log("=>", arr[i], "+", arr[j], "=", arr[i] + arr[j]);
        };

    };

    console.log(false);
    return false;
}

hasPairWithSum([6,4,3,2,1,7], 15)
// hasPairWithSum(array1, 10)

// Better
function hasPairWithSum2(arr, sum) {

    const mySet = new Set();
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {

            console.log(true);
            return true;
        };

        mySet.add(sum - arr[i]);
        console.log(mySet)
    };

    console.log(false);
    return false;
}

// hasPairWithSum2([6,4,3,2,1,7], 9)
