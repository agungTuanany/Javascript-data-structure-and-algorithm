const example2 = () => {

    const array1 = ["a", "b", "c", "x"]
    const array2 = ["z", "y", "a"]

    function containsCommonItem(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {

                    console.log(arr2[j], arr1[i])
                    return true;
                };
            };
        };

        console.log(arr2[j], arr1[i])
        return false;
    };
    // Big-O: O(a * b) | Big-O mutated: O(n^2)
    // Space-Complexity: O(1)
    // Time-Complexity: O(n^2)

    // containsCommonItem(array1, array2);

    // Result containsCommonItem:
    // This solution in terms of Time Complexity: is heavy
    // This solution in terms of Space Complexity: is fast


    // ========================================================================//

    function mapArrayToObject(arr1) {

        let map = {}

        for (let i = 0; i < arr1.length; i++) {

            if (!map[arr1[i]]) {
                const item = arr1[i]
                map[item] = true
            };
        };
        console.log(arr1)
    };

    function compareArrayToObject(arr2) {
        let map = {}

        for (let j = 0; j < arr2.length; j++) {
            if (map[arr2[j]]) {

                console.log(arr2[j]);
                return true
            };
        };
        console.log(arr2)
        console.log(true)
    };

    // NOTE: Tracking key Value P

    function containCommonItemMap(arr1, arr2) {

        let map = {} // Space-Complexity: O(n)

        // @TODO: Modularize the code | break into chunk of functions
        // Loop through first array and create object properties === items in the array
        // mapArrayToObject(arr1);


        for (let i = 0; i < arr1.length; i++) {

            if (!map[arr1[i]]) {
                const item = arr1[i]
                map[item] = true
            };
        };

        // Loop through second array and check if item in second array exists on
        // created object
        // compareArrayToObject(arr2)

        for (let j = 0; j < arr2.length; j++) {
            if (map[arr2[j]]) {

                console.log(arr2[j]);
                console.log(true);
                return true
            };
        };
        console.log(false)
        return false;
    };
    // Time Complexity: O(a + b)
    // Space Complexity: O(a)
    // Big-O: O(a + b)

    containCommonItemMap(array1, array2)

    // Result containCommonItemMap:
    // Down side to this solution is Only Number, String and Boolean can
    // used correctly. Because we're using an object, especially in JavaScript
    // and adding properties.
    // This solution in terms of Time Complexity: is faster
    // This solution in terms of Space Complexity: is heavy


    // ========================================================================//

    function containCommonItemMap2(arr1, arr2) {
        return arr1.some(item => {

            // console.log(arr2.includes(item));
            arr2.includes(item);
            console.log(arr2.item);
        });
    };

    // containCommonItemMap2(array1, array2);
};

example2()
