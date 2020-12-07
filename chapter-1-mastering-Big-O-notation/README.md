# Chapter-1 Big O -- Asymptotic Analysis

## Table of Contents
1.  [Module Introduction](#module-introduction)
2.  [What is Good Code](#what-is-good-code)
3.  [Big-O Scalability](#big-o-scalability)
4.  [Big-O Cheat Sheet](#big-o-cheat-sheet)
5.  [Linear - O(n)](#linear-O(n))
6.  [Constant - O(1)](#constant-O(1))
7.  [Big-O Exercise-1](#big-o-exercise-1)
7.  [Big-O Exercise-2](#big-o-exercise-2)

<br/>

## Module Introduction

The Big-O is a concept will be around for very long time, and something will
make you to be a better developer. Big companies all know Big-O, this which is
why you won't get by any of their interviews without encountering this topic.

Any coder can solve given enough time can solve a problem. What matters is
though how well the problem is solved; And this is where Big-O can help us. It
can tell us how well a problem is solved. We're gonna find out what that means
in this Module.

We going talk about Big-O, what it is? How we define it? And then we're going to
use Big-O and it's different notation to distinguish bad code from good code,
good code from great code. We are going to be comfortable with this topic, that
we are going to not to be surprised when this comes up in our interviews. But
we're also going to build this big foundation that is important to be a great
developer.

The reason this topic is at the beginning of this course is that you will see
the Big-O notation came up again and again as we go into topics such as _data
structures_ and _algorithms_.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## What is Good Code

There are two main things we talk about when we say this is good code. What
would you tell somebody if you're asking them to write good code?.
<br/>

![chapter-1-1.gif](./images/gif/chapter-1-1.gif "What is good code")
<br />

Code can be described in tow points, `[1]`**Readability**, is your code just
generally clean? Can others can understand your code?. `[2]`**Scalable Code**.
Big-O notation is what allows us to measure this idea of scalable; code that can
scale. Something that we're going to get into and you're going to become more
familiar with as we go through this section.

We also going to talk about readable code throughout this entire course, but
touch upon it a little bit more in the next section. For now, because this is
the Big-O section, we're focusing on this idea of scalable code. What does this
really mean thug?
<br/>

![chapter-1-2.gif](./images/gif/chapter-1-2.gif "What is good code")
<br />

Well I want you to imagine we have a task where we want to bake a cake. We have
a recipe, and this recipe we're going to use in our kitchen to bake a cake; And
there's a good way of baking a cake and a bad way. We give the instruction that
is their recipe, and hopefully this recipe and instruction work well with our
kitchen so that w can bake a cake quickly, and become a good cake.

Well computers are machines; And this machines need to works in order to produce
something for us; And the computers work in the same way. We have these
instructions that we give it through code, and these these instructions that we
give to our machine (computers) give these instructions that provide for us some
sort of an output, for example to turn on the light. We give the computer
instruction to say, hey turn ion the light in our room. A coder is someone that
gives these instructions just like there are many ways to take a cake into
a kitchen or just like there are many ways to bake a cake in the kitchen with
many recipes, ingredients and instructions, there are many ways to solve
a problem through code. They're efficient and inefficient ways to give
instructions.

We have an example of instruction that we're giving our computer called
[findNemo](./findNemo.js). We call this the runtime. How long does it takes to
run a certain problem through a function or a task? How can we measure the Big-0
with this findNemo function? Or the efficiency of this function?.

```javascript
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log(`We found ${array[i]} at index "${array.indexOf("nemo")}"`)
        };
    };
};
```

We're going to try and measure the performance of findNemo function and see what
happens when the arrays gets larger. We're going to tie things together as to
what scaleable means, and how Big-O allows us to measure the scalability.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Big-O Scalability


How we make sure that there is a away for use to measure in terms of efficiency?
What is good code? And what is bad code? And what is code that can scale? That
as the numbers of arrays or inputs increases. It doesn't slow down more and
more.

**_Big-O notation is the language we use for talking about how long algorithm takes
to run_**. We can compare two different algorithms or in this case functions using
Big-O and say which one is better then the other when it came to scale?
Regardless of our computer differences. We can measure Big-O like this chart,
<br/>

![chapter-1-1.png](./images/chapter-1-1.png "Big-O complexity Chart graph")
<br />

When we talk about Big-O and scalability of code, we simply mean when we grow
bigger and bigger with our input, how much does the algorithm or function slow
down? If the list of characters let's say **Elements** here that is "nemo", so
characters in finding "nemo" in our array as that increases how many more
**Operations** do we have to do? That's all it is.

This is what we call _algorithmic efficiency_. Big-O allow us to explain this
concept. Remember how in our function we initially had an array of just one
which is `const nemo = {"nemo"}` so that the number of **Elements** or number of
inputs in a function. As we increase that array to have more characters and then
we created that massive array of "100000" `const largeArray = new
Array(100000).fill("nemo")`. As that array increases, you saw that the number of
**Operations** or the number of things we do in the loop increased over and
over; And different functions have different Big-O complexities. That is these
number **Operations** can increase really really fast like like `O(n!)` which is
not good, and things that are quite good actually `O(n)` don't increase as much.

We're going to look at examples of different ones and how to actually measure
into Big-O complexity chart, and what this entire notation means.

**_Just remember this point_**, when we talk about Big-O and scalability of code we
simply mean when we grow bigger and bigger with our input; **_How much does the
algorithm slow down. The less it slows down or the slower it slows the better it
is_**.

```javascript
const measureTime = (array) => {

    const start = new Date();
    const hrstart = process.hrtime()
    const end = new Date() - start;
    const hrend = process.hrtime(hrstart);

    findNemo(array);

    console.info("Execution time: %dms", end);
    console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
};
```

Instead of using `performance.now()` or in NodeJS `process.hrtime()` to measure
the efficiency of our functions, we can just **_calculate how many operations
a computer has to perform_**, because each operations takes time on a computer.
**_Big-O allows us and concerns us with how many steps it takes in
a functions_**.


**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Big-O Cheat Sheet

### - Big Os -

**O(1)** Constant -- No loops <br/>
**O(log N)** Logarithmic -- Usually searching algorithm `log n` if they are sorted (Binary search) <br/>
**O(n)** Linear -- for loops, while loops through `n` items <br/>
**O(n log(n))** Log Linear -- Usually sorting operations <br/>
**O(n^2)**  Quadratic  -- Every element in a collection needs ti be compared to ever other element. Two nested loops<br/>
**O(2^n)** Exponential -- Recursive algorithms that solves a problem of size `N`  <br/>
**O(n!)** Factorial -- You are adding a loop for every elements <br/>

**NOTE:** <br/>
**_Iterating through half a collection is still O(n)_** <br/>
**_Two separate collections: O(a * b)_** <br/>


### - What can cause time in a function? -

Operations (+, -, *, /) <br/>
Comparison (<, >, ==) <br/>
Looping (for, while) <br/>
Outside Function call (function()) <br/>

### - Rule Book -

**Rule 1:** Always worst Case <br/>
**Rule 2:** Remove Constant <br/>
**Rule 3:** Different inputs should have different variables. `O(a+b)`, A and B arrays nested would be `O(a*b)` <br/>
`+` for steps in order <br/>
`*` for nesteds steps <br/>
**Rule 4:** Drop Non-dominant terms

### - What causes Space complexity?-

Variables <br/>
Data Structure <br/>
Function Call <br/>
Allocation <br/>

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Linear - O(n)

What would you say if I asked you what is the Big-O of the function
[findNemo](./findNemo.js)?

```javascript
const nemo = ["nemo"];
const everyone1 = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"]
const everyone2 = ["dory", "bruce", "marlin", "gill", "bloat", "nigel", "squirt", "darla", "hank", "nemo"]
const largeArray = new Array(100000).fill("nemo")

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log(`We found ${array[i]} at index "${array.indexOf("nemo")}"`)
        };
    };
};
```

As we said a **_runtime_** is simply how long something takes to run. How does
this function and its runtime grow as our input increases. As our inputs goes
from just a single item in an array `nemo`, to 10 items in array ` everyone1
| everyone2` to 100.000 `largeArray`. How does the efficiency of this
function increase?.
<br/>

![chapter-1-3.gif](./images/gif/chapter-1-3.gif "the efficiency of function increases")
<br />

> The above diagram is linear. As our number input `(Elements)` increase the number of `Operations` increase as well.

<br/>

We say that the `findNemo` functions has a Big-O notation of `O(n)` or we call
_Linear Time_. It takes linear time to find a `nemo`.

Where this `n` come from? This `n` can be anything really. It's just an
arbitrary letter, and we usually give `n` when it comes to Big-O. This is just
a standard that you'll see across the board and simply means _the Big-O depends
on the number of the inputs_.

If we just had the `nemo` array `const nemo` this `n` would just be `O(1)`; <br/>
If we had the `const everyone1 or const everyone2` array this `n` just be `O(10)`; <br/>
And if we had the `const largeArray` arrays this `n` just be `O(100000)` <br/>

As the inputs increase, you see that the number of `Operations` increase
linearly with it. `O(n)` it's probably the most common Big-O notation you'll
find if we go back to the [Big-O Complexity Chart](#big-o-scalability) you can
see that `O(n)` is in the yellow region, that's as _fair_. As the number of
elements increase, you see that is just a straight line. The number of
`Operations` increases by the same  amount, because; Keep this in mind, **_Big-O
doesn't measure things in seconds_**, Instead we're **_focusing on how quickly
our runtime grows_**.

We simply do this by using the size of the input, which we call `n` and compared
to the number of `Operations` that increase. **_That's what scalability
means_**, as things grow larger and larger, does it scale?

So the `findNemo` function is `O` of `n` and linear time. Another way to think
about it is this,
<br/>

![chapter-1-4.gif](./images/gif/chapter-1-4.gif "O(n) single element")
<br />

If we have the compression algorithm, let's say this `function()` is the little
compression, and the `Input` is the little box, what's the Big-O notation of
this function? Well if we had one element it will just compress one item.
<br/>

![chapter-1-5.gif](./images/gif/chapter-1-5.gif "O(n) multiple elements")
<br />

If we have multiple elements, again we still have to run each box through the
compression algorithm to compress the box.

```javascript
//ES5
function compressAllBoxes(boxes) {
    boxes.forEach(function(box) => {
        console.log(box);
    });
};

// ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
};
```

If we look at the function for the compress boxes while we're using ES5 and ES6
syntax above, we're essentially looping through each box, and in our case we're
just console logging it. But as you can see here, that all of these all we're
doing as the input increases; the number of boxes increases `(Elements)`, the
number of `Operations` increase; And that is `O(n)` - linear-time.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Constant - O(1)

What happen if we have a function like this,

```javascript
function compressFirstBox(boxes) {
    console.log(boxes[0]);
};
```

A function that says `compressFirstBox` that receives an array of boxes, and
this function simply has `console.log` boxes zero `boxes[0]`. So, that is it's
logging out just the first item in the box. What would you say the Big-O of this
function is? How many steps or operations does this function take if the boxes
increase from 0 to maybe 10, to maybe 100, to maybe 100000? What would happen
here?

> This is what we call `0(1)` - Constant Time.

That is no matter how many times the boxes increase or however many boxes we
have we're always just grabbing the first item in the array.
<br/>

![chapter-1-6.gif](./images/gif/chapter-1-6.gif "O(1) - Constant Time")
<br />

If we look at this on a graph, If we have one element or one box we do one
operation.  If we have three elements or three boxes we still do just one
operation because we're just grabbing the first item (`Elements`) in the array.
If we have five elements or five boxes or more boxes we just do have same number
of `Operations`.

It's not linear time like it was where it increases and increases with the
number of `Operations`, the number of `Operations` just stay flat. But I have
question here, what if we do something different? If we have a function like
below,

```javascript
const boxes = [1, 2, 3, ,4, 5, 6];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])
    console.log(boxes[1])
}

logFirstTwoBoxes(boxes);
```

How do we measure the Big-O of above function? What's the number of operation in
the function? Well we have

```javascript
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])       // O(1)
    console.log(boxes[1])       // O(1)
}

logFirstTwoBoxes(boxes);        // O(2)
```

Each time the `logFirstTwoBoxes` function runs two operations. So this function
in total is actually running `O` of `2` operations every time. So no matter how
big the boxes get, the number of operations here is going to be two.

If we looks at the graph,
<br/>

![chapter-1-7.gif](./images/gif/chapter-1-7.gif "O(1) - Constant Time")
<br />

Instead of having `O` of `1`, like we have before, we have `0` of `2`, and then
if we had three opertions it will just be `O` of `3`. But overall it's still
a **_flat line_**, and this is something we're going to get into later on. But
when it comes to constant time we don't care about the nitty gritty `O` of `1`,
`O` of `2`, or `O` of `3`, or `O` of `100`. We round this down to just simply
just saying `O` of `1`, that is we have _Constant Time_.

In term of scalability it's a flat line. It doesn't matter how big our inputs
are, we're always going to do the constant amount of time on a function. **_Keep
in mind: Inputs can be any type of data. Not just arrays_**. If we look at
[Big-O Complexity Chart](#big-o-scalability), we see that `O(1)` is the dark
green area, it's excellent. We love`0(1)` because it's very scaleable right. It
doesn't matter how many `Elements` we have it's always going to run the same.
Predictability when it comes to computing is very very nice and `O(1)` is
definitely excellent.

So we've learned about linear time `O(n)`, and constant time `O(1)`. Let's do
a bit of fun exercise to really solidify our knowledge.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Big-O Exercise-1

```javascript
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;                                       // 0(1)

  a = 50 + 3;                                       // 0(1)

    for (let i = 0; i < input.length; i++) {        // O(n)
        anotherFunction();                          // O(n)
        let stranger = true;                        // O(n)
        a++;                                        // O(n)

    };
      return a;                                     // O(1)
};

// Answer
// 3 + n + n + n === 3 + 4n
// Big-O (3 + 4n)
// Big-O: O(n)
```
**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Big-O Exercise-2
```javascript
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;                              // O(1)
    let b = 10;                             // O(1)
    let c = 50;                             // O(1)

    for (let i = 0; i < input; i++) {
        let x = i + 1;                      // O(n)
        let y = i + 2;                      // O(n)
        let z = i + 3;                      // O(n)
    };

    for (let j = 0; j < input; j++) {
        let p = j * 2;                      // O(n)
        let q = j * 2;                      // O(n)
    };
    let whoAmI = "I don't know";            // O(1)
}
    // Answer
    // 4 + n + n + n + n + n === 4 + 5n
    // Big-O (4 + 5n)
    // Big- O(n)

    // Or if we include for-loop
    // 4 + n + n + n + n + n + n + n === 4 + 7n
    // Big-O (4 + 7n)
    // Big-O: O(n)
```

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>
