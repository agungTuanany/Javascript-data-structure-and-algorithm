# Chapter-4 Data Structures Arrays

## Table of Contents

1.  [Array Introduction](#array-introduction)

<br/>

## Array Introduction

### Array chart
<br/>

![chapter-4-1.png](./images/chapter-4-1.png "Array introduction")
<br/>

Arrays which sometimes called **_Lists organizes items sequentially_**, that means
one after another in memory.

Kind like what we have here, we have some sort of data at _index_ `0` say _Juice_
and then right after at _index_ `1` we have _Apple_, maybe this is a grocery list.
In our computers memory it will be one after another, because remember our RAM
is a lot bigger than just `7` slots. And the arrays are probably the simplest
and the most widely used data structure.

Lucky for us we're starting with this, because arrays have the **_least amount of
rules_**, and because they're **_stored in contiguous (neighboring) memory that is in
order_**, array also have the **_smallest footprint_ of any data structure**.

So, if all you need to _store some data_ and _iterate over it_, that is go one
by one step by step, Arrays are the best choice. Especially if you know the
indices (index) that is on the left `0, 1, 2, etc` of the items you are storing,


### example - Lookup

Just as quick glance (look through) and we'll go over the **_Lookup O(1)_** and
friends in more detail in later videos; But **_lookup_** or access with array
are _constant time_ of `O(1)` it's super super fast.  Others actions or methods
that we're going to go over so, like _Push_ are also fast. But _Insert_ and
_Delete_ are `O(n)` or linear time.

In order to demonstrate Arrays, let's actually use code to show you an example.

```javascript
const string = ["a", "b", "c", "d"]

strings[2]      // "c"

// 4 * 4 = 16 bytes of storage

// [O  | a]
// [1  | a]
// [2  | a]
// [3  | a]
// [4  | b]
// [5  | b]
// [6  | b]
// [7  | b]
// [8  | c]
// [9  | c]
// [10 | c]
// [11 | c]
// [12 | d]
// [13 | d]
// [14 | d]
// [15 | d]
```

We have an array `const string = ["a", "b", "c", "d"]`. Now looked on this and
based on what we've learned so far, we can make a couple assumptions. For
example, to store the letter `a`, `b`, `c`, and `d`, that `4` items; if we are
on `32 bit` system that is we have `4` shelf's to store the letter `a` in `0`
and `1`. Well if that's the case, we just multiplies `4`  by `4`; and each item
taking up `4` shelf's in our memory. That means we're using up `16 bytes` of
storage.

If we remember in our little example here, that with `32 bit` systems, we have
`4` shelf's to store this number `var a = 1`.
<br/>

![chapter-4-2.png](./images/chapter-4-2.png "Array introduction - 2")
<br />

Again this is a bit of simplified version of looking at it, but I hope you see
what we're doing here, we're simply storing `"a","b","c","d"` in sequential
order in our RAM.

So the computer now knows where to find variable these items, therefore when
I do `strings[2]`, I'm telling the computer, hey go to the array called
`strings`, you should know where that is, because underneath the hood you stored
it for me, and grab the _third item_, remember the indexes are `2`, so grab the
third item from where the array is stored on your memory.

If I run this, or in NodeJS console log it, I get an object `'c'`. The computer
is going to grab that information for me because it's stored for me `strings`,
and `strings[2]` it's grabbing it for me.

### example - Push

All right, so let's do a few more operations with arrays, and see what the pros
and cons are. In JavaScript we have a few methods that we can use with arrays.

`[1]` **_Push_**, _which simply allows us to add something at the end of the arra_.

```javascript
const string = ["a", "b", "c", "d"];

strings.push("e");          // O(1) - operation.

console.log(strings);       // [ 'a', 'b', 'c', 'd', 'e'  ]
```

If I run I get an array `[ 'a', 'b', 'c', 'd', 'e'  ]`. This `strings.push()`
operation, because it just adds it at the end of the array is an `O(1)`
operation. All we doing is adding whatever item we want at the end, we're not
looping through anything.  Hopefully that make sense why that would be `O(1)`
that's very convenient.

### Example - Pop

We can also use `[2]` **_Pop_**, and Pop is the opposite of Push. Pop will
simply mean to _remove the **last** item from the array_.

```javascript
console.log(strings);       // [ 'a', 'b', 'c', 'd', 'e'  ]

strings.pop();              // Time-Complexity: O(1)
console.log(strings);       // [ 'a', 'b', 'c', 'd' ]

strings.pop();              // Time-Complexity: O(1)
console.log(strings);       // [ 'a', 'b', 'c']
```

You can see the letter `e` was moved. If do `strings.pop()` again, we see that
this time around we've removed string `d`. What do you think the
Time-Complexity of this operation is? Once again is `o(1)`, because we not
looping through anything, we're just removing the last item, and remember our
computer knows where last item is stored.

### Example - Shift

What if we want to add an item at the _beginning_ of an array? Well, we have
something called `[3]` **_Unshift_** in JavaScript, and depending on your
language you will have perhaps something different.

```javascript
strings.unshift("x");       // 0(n)
console.log(srings)         // [ 'x', 'a', 'b', 'c']
```

We see that string `x` have been added at the beginning of our array. What do
you think the Time-Complexity of this operation is?;

By the way, as we go through data structures and because we know Big-O notation
is in it pretty cool that we're able to think about code beyond just 'oh, I'm
just doing this' `strings.unshift()`. We can think deeply about what happening
underneath the hood. Why `string.unshift()` operation be longer then
`strings.pop()` operation?. I find that fascinating, and when I first understood
this point, it really made me a better engineer; and I hope you're starting to
get this 'aha' moment for you as well, especially if this is your first time
with data structures.

What are we doing with _Unshift_? Well, remember variable `strings` are
essentially stored.

```javascript
const strings = ["a", "b", "c", "d"];
//index         [ 0,   1,   2,   3 ]
```

When I add letter `x` with _unshift()_, I'm all of sudden adding `x` into our
array.

```javascript
const strings = ["x", "a", "b", "c", "d"];
//index         [   ,  0,   1,   2,   3 ]
```

But we now have to _shift_ the _index number_, because the indexes still like
this. But this time around we have to say, OK `0` is for `x`; `a` is now index `1`;
`b` is now index `2`; `c` is now index `3`; `d` is now index `4`;

```javascript
const strings = ["x", "a", "b", "c", "d"];
//index         [ 0 ,  1,   2,   3,   4 ]
```

Just by me doing this, you might have seen something we just **iterated `loop`**
through everything, and  reassign the indexes; and I did _five_ moves or _five_
operations to realign the indexes; And this should give you a hint, that is
**_unshift()_** operation is `0(n)`, _depending on the size of the array_ that
how long it;s going to take to do that operation we're looping.

So, right away we know that with the arrays, maybe it's not the best data
structure for **_adding items at the beginning of the array_**.


### Example -

What if we wanted to add something in the middle of the array? So we can use
method `[4]` **_spilce()_**. With _spilce_ I can say `strings.splice()`

```javascript
const strings = ["x", "a", "b", "c"];

strings.splice(2, 0, "alien")
console.log(strings)            // [ 'x', 'a', 'alien', 'b', 'c'  ]
```

Again I get a hint of what I can do, the first is the **_start_** number, so
I want to start at index of `2`; and remember we have an array of `["x", "a",
"b", "c"]`, so we starting at `b` and the second parameter is the
**_deleteCount_**; What do we want to delete? Or how many things from this index
do we want to delete? In our case we don't want to delete anything, we want to
add, so I say `0`, and then the **_items_** that we want to add, we want to add
string that says `"alien"`.

So, _splice_ told us, go to index of `2`, where `b` was initially, and add
`alien` instead of `b` and just _shift_ things over.


```javascript
// [1]
const strings = ["x", "a", "b", "c", "d"];
//index         [ 0 ,  1,   2,   3,   4 ]

// [2]
const strings = ["x", "a", "alien", "b", "c", "d"];
//index         [ 0 ,  1,            2,   3,   4 ]

// [3]
const strings = ["x", "a", "alien", "b", "c", "d"];         // O(n/2) => mutated into O(n)
//index         [ 0 ,  1,     2,     3,   4,   5 ]


```

What we've done here is If we go back to our variable `strings` we have the `x`
in our array and we shifted these indexes of `x` and they are still the same,
but we shifted `b` over; `[w]` And  I want to add `alien`; `[3]` and we now had
to go over everything and say index `2` for `alien`, we want index `3` for `b`,
we want index `4` for `c`, we want index `5` for `d`.

So, what's our Big-O here? Our Big-O in this case, we did half of the operations
because we changed half the array with half loop through the array; it would be
`O(n/2)`. But remember our rules when it comes to Big-O , we remove constant and
simply just call `O(n)`. Worst case it's just going to be `O(n)` operation.

I want to leave this  for you,so you can play around and try different methods
on Arrays; but I hope you understand how they work and how that some good things
(pros) that we can do, such as **_accessing the array_** that is `O(1)`, because
it's well extremely fast, we know exactly where it is in memory; And we can
**_push_** and **_pop_**, but when it comes to **_unshifting_** or
**_splicing_** or even **_deleting_** because with _splice_ we can even do
_deletes_, that's going to be `O(n)`.

If we go back to our [chart](#array-chart), which we now have a better
understanding of why arrays `Lookup O(1)` are extremely fast we know where they
are. We know why `push O(1)` adding the end of the array is extremely fast, but
why `insert O(n)` and `delete O(n)` might my not be the best or the fastest when
t comes to arrays;

But here's the thing, there's actually two type of array, and in the next video
we're going to talk about these two types.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

