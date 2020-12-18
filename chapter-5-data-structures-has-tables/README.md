# Chapter-5 Data Structures Hash Tables

## Table of Contents

1.  [Hash Tables Introduction](#Hash-Tables-Introduction)
2.  [Hash Function](#hash-function)
3.  [Hash Collision](#hash-collision)
4.  [Hash Tables in Different Languages](#hash-tables-in-different-languages)
5.  [Exercise Implement a Hash Table](#exercise-implement-a-hash-table)

<br/>

## Hash Tables Introduction

It's time for our next data structure _hash tables_. Hash tables or _hash map_,
_maps_, _maps on_, _unordred maps_, _dictionaries objects_, there are many ways
to call this data structure, and different languages ave have different names
for it, and slight variations on the hash tables. **_Objects_** for example, in
**_JavaScript_** are a **_type of hash tables_**.

The reason I'm starting the course with arrays and objects or hash tables is,
because these two are the two are most common interview question. You're _going
to use them in any coding question_.

Me personally, I have yet to be part of an interview that you didn't have to
know these. They are an absolute MUST. Luckily for us, pretty much every
language has a built in hash table, just like arrays. In Python they're called
_dictionaries_, JavaScript as we said are Objects. Java has maps, Ruby has
_hashes_; and hash tables are very important all across computer science. You
see them a lot in databases, in caches, and they're extremely useful. So what
are they?

Also you may wondering, what does the name hash table mean? Where did this name
come from? Well let's look at an example,
<br/>

![chapter-5-1.gif](./images/gif/chapter-5-1.gif "Hash tables example")
<br />

Imagine you're going grocery shopping, and you have an object here, basket
(`basket.grapes`) and you want to add grapes as the property of the baskets
object; again, we're using JavaScript syntax, but this should look familiar to
you.

We wanted to set, that `baskter.grapes` is going to equal `10000`. We're buying
`10000` grapes, because you can never have too may grapes. Now first of,
thinking about how we would store this with arrays, it will to be a little bit
more difficult right?. In the array we have an _index_ that's numbered and the
_value_. With hash tables or an objects, we get to set a _key_ which is grapes,
and a _value_; so we get to set a _key value pair_. So, right away we see some
benefits in here.

A way hash table works, is we have the _key_ which is grapes, and this **key is
used as the _index_** of where to find the values in memory. Remember with the
arrays we have the index, which was the number, but with hash tables we use
_grapes_ as a way to find it in our memory shelf.


This is done this way, with something called a **_ has function_**. But for now
we just assume this (has function) is a _black-box_, we don't know what going on
with hash function (black-box). All that's happen is we're going to pass
_grapes_ into this black-box, this black-box is going to do some magic, and out
of it, comes a key into an index, where we want to store this (grapes) values.

Now, our `10000` grapes can be stores and this memory address `711`. Technically
it actually stores both grapes (key) and the value (`10000`), her I've just
simplified it to `10000` just so it's a little bit cleaner; But keep in mind,
that **_it's going to store both key and value_**; I'll show you a diagram
showing this later on.

So, this black-box gets to decide where to put the data on our memory in our
computers. But you might be wondering, what is this thing (hash function)? And
why does he get to decide where to put all this information?

For that I'll see you in the next lectures.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Hash Function

There are some key aspects of hash functions, `[1]` **_is one way_**, in the
sense that if I give somebody a hashed number they will have no idea what the
input was, and practically impossible for me to have any clue as to what the
input.  `[2]` **_No matter how many times your input, there it's going to be the
same_**; but as soon as you change one thing is going completely change the output,
this is what we call **_in-dept content_** or  **_idempotent_**. In fancy way of
saying, it's a function _given an input always output the same output_.

The one benefit and why we would want to use hash function in a data structure
is that we get **_really fast data access_**, because all we have to do to find
_grapes_ or `basket.grapes` is to pass grapes into something like _[MD5
Hash](http://www.miraclesalad.com/webtools/md5.php)_, it's generates a random
number for me, and I immediately know where it is in my memory on my computer.

Technically a has functions that we use for hash table is going to be take
_grapes_ generate some sort of gibberish number and then converted to an
**_index space_** or and **_address space_** that it has based on the hashed
number.

Unlike arrays where we just had _ordered indexes_, with has tables all we need
to do is give it a **key** and we know exactly where that item is in our memory.
But you might be wondering, this hash function doesn't just slow things down?
Because every time we want to add a _property_ and a _value_ `grapes = 10000` to
a _hash table_ we have to run it through the has function, so we can decide
where to put it in memory. If you noticed that, good job that is a big factor
you don't want to hashing function take a very long time, because every time you
add a property to memory or retrieve a property to memory, we add both times,
were sending the _key_ grapes into hash function, to find where to get it from.

Underneath the hood, remember because **hash tables** exist in all language,
they're implemented with an optimum hashing function, that's really really fast,
as a side note hash function like **Sha-256** take a really long time to
generate a hashed number, and it is an overlay complex hashing function that is
used a lot in places like cryptography where you want the hashed number to take
longer, but that is outside the scope of this course.

### Summary hash function

To review, we have a **key** that is _grapes_, we send it through a hash function
that is going to hash something really really fast, and then **_map whatever the
hash came out to be into a memory address_** where we want to store our data,
`basket.grapes = 10000`. When it comes to hashing functions you typically leave
this to whatever framework or languages you're using, and we usually assume
a time complexity or Big-O `n(1)` because this happens really fast.

Now that we understand what hash function does, let's us talk little but more
about hash tables, why they're useful, and why in some cases are better than
arrays?.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Hash Collision

### Hash Tables
<br/>

![chapter-5-1.png](./images/chapter-5-1.png "Hash Collision")
<br/>

Looking at hash functions you can start to think about what actions they perform
and how fast it can be done? When it comes to `[1]` **_inserting_** something in
our memory space, well it's going to be `O(1)`. We hash the _key_ such as grapes
through the hash function, and places it automatically into the address spaces
that it comes up with. `[2]` **_lookup_**, is the exact same `O(1)`, we access
the property, that property is going to get hashed, and direct us exactly to the
address to find the values. `[3]` With **_delete_**, it's same thing `O(1)`, we
simply use the key right away we know where to delete the item from, and because
it isn't ordered, we don't have to shift indexes like we did with arrays,
everything is just nice and simple. `[4]` with **_searching_**, it's give us
Big-O `O(`1`)`, if we want to find something in our basket like _apples_ that
easy to, we use hash function.

```javascript
let user = {
    age: 54,
    name: "kylie",
    magic: true,
    scream: function () {
        console.log("")
    }
}

user.age                        // O(1)
// result: 54

user.spell = "abra kadabra";    // O(1)
user.spell                      // O(1)
// result:
// "abra kadabra"

user                            // O(1)
//result:
// {
//   age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream: [Function: scream],
//   spell: 'abra  kadabra'
// }

user.scream()                   // O(1)
// result:
// aahh!
```

If we go to our playground, in JavaScript I can create an object `let user
= {}`, and this _user_ will have property of age, `age: 54`, let say we have the
property of name `name: "kylie"`,let say Kylie does a magic skills so we set
property of magic `magic: true`, and for fun let's say that we have a function
`scream` that just console logging the scream `"ahhh!"` as a string.

When I run this object, I've created a _user_ object, and all this object
property are all going to get placed somewhere in memory with different
addresses. I can access this user really really fast, by saying `user.age` which
is going to give me `54` at `O(1)`.

Perhaps adding a new property, I can just simply say `user.spell = abra
kadabra`, if we check this user, now user have the properties of `spell` with
value `abra kadabra`, this is access of all `O(1)`, because take it through the
hash functions and the computer decided where to put both `speel` and `"abra
kadabra"` in memory.

If I firearm `user.scream()`; same thing, I get to access this function in
memory really really fast at `O(1)`, how amazing is that? I know what you're
thinking, hash table are amazing, we should be using them all the time, and
you're right, we should be using them in a lot of cases, but as we know there's
always _pros_ and _cons_.

Let me talk to you one of the **main problem with hash tables**,  I link to
[hash table
animation](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html), so you
can play around with it later.
<br/>

![chapter-5-2.gif](./images/gif/chapter-5-2.gif "Hash tables animation")
<br />

I have a little animation here, where we have _12 memory spaces_. Remember, our
computer has limited space, and when we create an object or hash table, the
computer decides how much space to allocate, it's not going to allocate all the
space to the hash table, it's going to bit allocate a bit of it. I'll show you
later on when we implement our own hash table, how we can adjust the size.

Seeing that there is only _12 spaces_ you can imagine, if I insert `1`, I'm
going to insert the number `3`, let's do insert number `55`, what happen there?
Do you see that, the hash function randomly assigned a space in memory and put
it in space `[3]`; remember, there's nothing telling the hash function to evenly
distribute until everything is full. Although hash function are optimized to try
to distribute this data all over, it also matter what we put into it.

When `55` get hashes, well this hash function generates the address location of
space `[3]` to put in it, and because we already have hashed number `3` there,
it does something funny here. Let's keep adding here and see what happens, I'll
`2`, I add `12`, and add `14`. It did the same thing again.

What we just noticed here, it's something called **_Collision_**.

### Hash collision user
<br/>

![chapter-5-2.png](./images/chapter-5-2.png "Hash Collision")
<br/>

The **_Collision_** looks something like above. We have the **_keys_**, let's
say we inserting the **_name_**, the **_phone number_**  of a user; and we
initially place `John Smith`, this key for `John Smith` gets hashed, gets placed
in the address space of `152` and get stored. Remember how I said, it actually
stores both _keys_ and _values_. It stores in something called **_bucket's_**
`John Smith` with the value, that is phone number. We keep going with `Lisa
Smith`, then `Sam Doe`, than `Sandra Doe`. As soon we has `Sandra Dee` it becomes
the same address space as `John Smith` and we have a collision.

Because of this collision, we need a way to store both users somehow in this
address space `152`, and something funky is going on here, this _little black
circle_ and then a point and _Sandra Dee_.

Just a **hint here**, The key space of `152` is actually a _new data structure_,
that we're going to learn about called **_Linked List_** coming up soon.  You
see, with hash tables **we can't avoid these collisions, with enough data with
limited memory we always going to have this collision**.

So, there is a possibility if we go back to our example. I start a new hashes
visualization,
<br/>

![chapter-5-3.gif](./images/gif/chapter-5-3.gif "Hash Collision")
<br />

If we constantly just keep adding to the same memory space, which slows down our
ability to access or insert information, because now if I want to check what's
in this address space `[1]`, I have to go 5 deep. Theoretically when you have
a collision it slows down reading and writing a hash table with `O(n/k)`, where
`k` is the size of your hash table, and remember because we remove constant, and
simplify things it, becomes `O(n)`.

Collision will likely happen in any hash table implementation. Luckily for you,
you're never going to have really implemented yourself, and it's not very common
interview question, but you do want to know about it, so you can talk about it.


### Dealing with Hash Table Collision

There's two common ways to deal with these collision, I showed you one of them
with something called `[1]` Linked List, which we'll talk about it later on. If
we go to [hash table Wikipedia page](https://en.wikipedia.org/Hash_table) and
look at _Collision Resolution_, you can see that there's a ton of different ways
to solve collisions. The way that I showed you is called _Separate Chaining_,
but there's different methods like _Open Addressing_, and _Robinhood Hashing_
that you can read about it, if you're really interested in the topic.

The point I want to make is that there is a bit of a downside when we talk about
fast `Lookup O(1)` in hash tables, occasionally depending on the hash function
it might change on to `Lookup O(n)`.

Let's keep going, expand our knowledge of hash tables at next chapter.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Hash Tables in Different Languages

Hash tables are implemented differently in different languages, but most of the
time, the **_key_** and the **_value_** can be any type of data structure.

```javascript
scream : function() {
    console.log("aahh!")
}
```

We saw above that we can have a **_function_** as a value, we can ha another
object  as a value.

```javascript
sceam: new Array(15),
```

We can have an array as a value if we want, you can do this in arrays as well.
We don't just have numbers and strings in arrays. We can have arrays of objects.
You can also sometimes have _keys_ that more than just string. You can
potentially have functions as keys, and a value that is also a function or
perhaps a number or an array whatever you want.

### Map() and Sets()

In JavaScript in an object like `user` we have, if we pass a key that is
a number or a function it actually gets a `stringify` and it only allows string
keys, but with the new version of JavaScript and ES6 you actually have something
called `Map()` and `Sets()` which also familiar with in other languages.

```javascript
const a = new Map()
```

A `Map()` is created like above; and the difference between a `Map()` and an
Objects, is the fact that a `Map()` allows you to save any data type as the key.
Remember with an object you can only save the key as _string_, with `Map()` it
allows us, if we want to even have functions as keys or arrays as keys.

Another benefit of `Map()` is that it **_maintains insertion order_**. What does
that means? Well, within object, there is no order. If we go back to our
[diagram](#hash-tables), our data is inserted randomly in different places. If
we go back to our [user example](#hash-collision-user) we see that there is
definitely **no order**, when we grab all the values of an object. We start with
`Lisa Smith` which was entered second, then `John Smith` then perhaps `Sandra
Dee`, `Sam Doe` gets selected last. There is no order like there was with
arrays.

There are some version of hash tables like `Map()` in JavaScript that maintain
the order of _insertion_, so that when we loop through items in an object we
have this maintained order.

```javascript
const b = new sets()
```

`Sets()` is another feature, very similar to `Map()`, the only difference is
that **_it only stores the keys no values_**. So, you see here, each language as
we mentioned comes with own pre-built versions of data structure. But at the end
of the day, all of them are hash tables.

In order to truly understand how hash tables work, I think we should build one
in the next section we are just going to do just that.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## Exercise Implement a Hash Table

It's time for us to implement our own hash table, but let's do a bit of an
exercise, and this maybe difficult, so don't get upset if you're not able to
finish it. As extra challenge, I have created a template for you,

```javascript
class hashtable {
    constructor(size) {
        this.data = new array(size);
    };

    _hash(key) {
        let has = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        };

        return hash;
    };
};

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);

myHashTable.get("grapes")
```
A new `HashTable` that we're going to create. Yes I know JavaScript already has
objects and we can just simply create one like we've seen before. This
`HashTable` has a constructor that will receive a `size`. So when we create this
hash we're going to **give it a memory space size** of `50`, let's say we only
want `50` shelf's of memory. We're going to create `this,data` where our data
are will live and within it, it's going to create a new array, and this array is
going to hold our information for us.

In example, we would have something like `[[grapes, 10000]]`, as our bucket. So
the first item in the array will be an array that is `[grapes, 10000]`. Remember
if we looked at the [diagram](#hash-collision-user) we have these **_buckets_**
that our data lives in, and because right now we're implementing our own
`HashTable` we're using arrays instead of objects.

The idea is that using a new method that **you'll have to create** which will be
called `.set()`. You are going to be able to set _grapes_ as the first index of
the array, and the number of _grapes_ (`10000`) as the second index in  the
array.

From there, we can have another method `get()` which retrieves the _grapes_ and
return `10000`.

Now you're probably wondering what is `_hash()` method do?  I wrote this ahead
of time for you, because it's not really important as part of the course. But
remember we need a hash function in order to create a hash table, and I've
created here the smallest tiniest hash function you can think of.

We're going to talk about what `_hash()` method actually does in the solution.
For now all you have to know is, that it's going to just generate a hash for us.

```javascript
myHashTable._hash("abrakadabra");           // result: 39
myHashTable._hash("grapes");                // result: 23
```

So, your challenge here, is to create these two new method `set()` and `get()`
that adds to `this.data` and retrieves from `this.data`. If you're not super
familiar with JavaScript, this may be hard but give it try.


### Exercise Answer

```javascript
// Task:
// Create set() and get() methods to store key value pair, and retrieve a value with hashing.
// Solve the collision on hash tables

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    };

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        };

        return hash;
    };

    set(key, value) {

        // Store the key
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        };

        this.data[address].push([key, value]);
        console.log("====> --", this.data[address])

        return this.data;
    };

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];

        // Check if currentBucket not empty
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {

                if (currentBucket[i][0] === key) {
                    console.log("c-3 shelf's: %d ,key: %s, value: %d", address, currentBucket[i][0], currentBucket[i][1])

                    return currentBucket[i][1]
                };
            };
        };

        return undefined;

    };

};

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000)
myHashTable.get("grapes")

console.log("==============")
console.log("")

myHashTable.set("orange", 2500)
myHashTable.get("orange")

console.log("==============")
console.log("")

myHashTable.get("papaya")
```

OK, let's chunks the code.

### Private method

Before we get started I do want to mention something that you may be wondering
about underscore (`_`) over `_hash()` method, what does that mean? In most other
language like Java, when you create a class, you can have **_private
properties_**, that is properties I can't access outside of this class.

So, I wouldn't be able to do `myHashTable._hash()` and access the `_hash()`
property or method. Now, with JavaScript and ES6 that's not really possible;
There;s a _common standard_ which is to put underscore (`_`) in a properties or
methods, and in JavaScript world which says, this `_hash()` is a private
property.

This underscore in `_hash()` just meaningless really, I can still access the
`_hash()` method, but it is a developer standard or convention in programming
world, and in the JavaScript community to let other developers know that, "Hey,
you shouldn't be accessing this", even though you technically you can. There are
ways to make it works, and half private properties but it requires things like
closure symbols or
[WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
which again is beyond the scope of this course, and we don't need to worry
about. That's where the underscore is coming from.

Let's talk a little bit about what `_hash()` function does. If I enter

```javascript
_hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;

        console.log("===>", hash)
    };

    return hash;
};

_hash("grapes")

// result:
// ===> 0
// ===> 14
// ===> 8
// ===> 44
// ===> 48
// ===> 23
```


First, create a new variable that is `let hash = 0` and then this `key` as
parameter are we're going to grab the length of grapes so that is `6` characters
of length. We are to going add `0` which comes from the `hash+key.charCodeAt()`,
[charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
simply gives us an integer between `0` and this `6535` representing the UTF-16
code, so that's just encoding. It's pretty much saying, give me characters code
because remember in memory a string or letter represented as a number.
`charCodeAt()` method allows us to say at index whatever we put in parameter, so
let's say we looking at `charCodeAt(i)` at index `[i]` the very first on will be
a letter `g`. We're going to get the character code for `g` that is a number we
multiply that by the index `i`, again just to make sure makes a unique and then
we use what's called the [modulo
operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
`%` to make sure that `this.data.length` stays within the length of `50` the
size of our data; and then we return the `hash`.

An easy way to see what's happening here, is to simply console logging `hash`,
if I run this we see that it's going to loop through our _grapes_ character by
character. It's going to generate some sort of hash, and because this hash
constantly looped over we include whatever the generated, let's see the first one
is `0`, and the next iterations is going to equal `14`, generate something else
which `8`, and keeps going until we get `23`. You can take your time and go
through this code if you really want to.

### Create set() method

Final result `set()` method.

```JavaScript
set(key, value) {

    // Store the key
    let address = this._hash(key);

    if (!this.data[address]) {
        this.data[address] = [];
    };

    this.data[address].push([key, value]);
    console.log("====> --", this.data[address])

    return this.data;
};

const myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000)
```

Using our hash function, let's do our very first method. Let's create the
`set()`. This method is going to receive a `key` and a `value`. The first thing
we want to do is create a variable called `let address` which represent where we
want to store information, and we'll say `this._hash(key)`. All we're saying is,
store this data `"grapes", 10000` that we're going to insert the _key_ _value_
in this `address` space, that is created by our `_hash()` function, and we give
it the key of _grapes_. Remember our little animation, we're sending the
_grapes_ to into that magic little box hat has the hash function.

```javascript
set(key, value) {

    // Store the key
    let address = this._hash(key);

    if (!this.data[address]) {
        this.data[address] = [];
        this.data[address].push([key, value]);

        console.log(this.data)          // result: [ <23 empty items>, [ [ 'grapes', 10000  ]  ], <26 empty items> ]

    };
};

const myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000)        // result: undefined.
```

From there, we simply say if `this.data[address]`, if it doesn't exist, and
there's noting there, because _remember in a hash table we can have collision_,
and because we only have `50` spaces or shelf's, we **might have these collision
with enough data**. So we're going to check if there is nothing in
`this.data[address]` in that case I'll just simply add that data; we're going to
say `this.data` is going to be an array (`this.data = []`); And in this new
address space we're going to simply to add by doing `push([key, value])`.

Let's run this code and see what happens, I get `undefined`. If I just
`console.log(this.data)` I get `[ <23 empty items>, [ [ 'grapes', 10000  ]  ],
<26 empty items> ]`. We have `23` empty items; on the `24` item we have an array
with value `grapes, 10000`; and then `26` empty items after that. Remember we
have `50` shelf's in our memory, and we have `23` plus `1` is not an empty array
plus `26` that's `50`.

But, what happen if `this.data[address]` is already exists? If I change the
`HashTable()` let's say `2` memory space.

```javascript
myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000)
//result:
// [ <1 empty items>, [ [ 'grapes', 10000  ]  ] ]
```

If I change this around, Check out what happens to my hash table.

```javascript
myHashTable = new HashTable(2);

myHashTable.set("grapes2", 10000)
//result:
// [ <1 empty items>, [ [ 'grapes2', 10000  ]  ] ]
```

Great, it just **deleted my previous entry**. We **have collision**, but we're
not doing anything about it; And we've just deleted our data. That could been
really important to user data, we definitely don't want that.

So in order to solve that, we simply say, because we're checking here (`if
(!this.data[address])`) if there is nothing in that `address` space do
`this.data[address].push()`. Otherwise simply add on to that array.

```
set(key, value) {

    // Store the key
    let address = this._hash(key);

    if (!this.data[address]) {
        this.data[address] = [];
        this.data[address].push([key, value]);

        console.log(this.data)          // result: [ <1 empty items>, [ [ 'grapes', 10000  ] ] ]

    }
    else {
        this.data[address].push([key, value]);
    };
};

const myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000)        // result: [ <1 empty items>, [ [ 'grapes', 10000  ] ] ]
```

Run the same command in `else` block, but we can make more nicer and cleaner way
of doing this. Is to actually just take out the `else` block, because regardless
we're always going to be pushing `push()` (adding)  _key_ and _value_ that we
set add to the data.

All we do just remove the `this.data[address].push([key, value])` on `if` block,
and wipe the `else` statement.

```javascript
set(key, value) {

    // Store the key
    let address = this._hash(key);

    if (!this.data[address]) {
        this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
};

const myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000)        // result: [ <1 empty item>, [ [ 'grapes', 10000  ] ] ]
myHashTable.set("apple", 56)            // result: [ <1 empty item>, [ [ 'grapes', 10000  ], [ 'orange', 2500 ] ] ]
```
Just we know what's happening here, let's add `return this.data`, and we add
`apple, 56`, if I run this you see what happen here. If you look closely, we
have `<1 empty item>`, and then an array that contains inside of it, the first
index that is an array, and a second index that is another array, _because we've
just pushed on to our **existing array**_, because our memory space is only `2`.

Very cool, that's not too bad.


#### Create get() method

Well, I want to be able to grab _grapes_ and _apples_. We can use the `get()`
method here, which will receive a _key_; and this method is going to do the
exact same thing, in that we running it through that black box (buckets) where
we're going to create, or we're going to use the `_hash()` function to get the
address of where we want to go.

Now we have the address to where we want to grab our information from. However
remember, that we store this information in a _bucket_, so we have `grapes
10000`, how do we grab that? We know where to get from, we have the `address`
but we need to loop over and grab `[grapes, 10000]` or `[appels, 56]`.

```javascript
get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address]

    console.log(currentBucket)          // [ [ 'grapes', 10000  ], [ 'orange', 2500 ] ]
}
```

We create a variable saying `currentBucket` that was just be
`this.data[address]`, so we don't repeat our self, and we have reference to this
address or the _address and the data value_; so, this means if we logging
`currentBucket` I have the two items in the same bucket; Remember that it is
technically just within its own bucket within one array,


We're grabbing all the information, but all we want to do is have `10000` being
returned, that how hash tables work, or the `get()` hash function works. Well
all we need to do is to say,

```javascript
if (currentBucket.length) {

}
return undefined
```

If `currentBucket.length` has something in it, in that case we are going to do
something, otherwise we're going just return `undefined`, because there's
nothing in the bucket. We're checking if `grapes, 10000` is actually exists. So
if nothing in the array, if the length is `0` and the array is empty, while then
we're not interested in it.

As a matter of fact, we actually don't even need the `.length` here, because
remember initially it's just going to be an empty array with undefined.

```javascript
constructor(size) {
    this.data = new Array(size);
}
```

And we add an array to each slot or shelf's, whenever we set something, and it's
an empty address.

```javascript
set(key, value) {

    // Store the key
    let address = this._hash(key);

    if (!this.data[address]) {
        this.data[address] = [];
    };
}
```

So, we can just leave it like this,

```javascript
if (currentBucket) {
    for (let i = 0; i < currentBucket.length; i++) {

        if (currentBucket[i][0] === key) {
            console.log("c-3 shelf's: %d ,key: %s, value: %d", address, currentBucket[i][0], currentBucket[i][1])

            return currentBucket[i][1]
        };
    };
};

return undefined:
```

Because if it's undefined it'll skip over and return undefined.

Now inside the `if` block, we will do `for-loop`, because **_remember we might
have multiple items in this bucket_**, like we saw when we have `2` memory
spaces in which cases. So we need to loop over, we are going to say as long as
`i` is less than `currentBucket.length` just increment by.

Within `for` block, this is little bit tricky, so hopefully you follow. I'm
going to say if `currentBucket[i]` by which is the index; So remember is going
to say index `0` is going to grab `[ [ "grapes", 10000 ] ]`; then index `1`
which going to grab `[ [ "apples", 56 ] ]`.

If I do `currentBucket[i][0]` that means grab the first, in our case the  `i` so
it's going to be `0` first, grab this first array (`[ [ "grapes", 1000 ] ]`)
which will be _grapes_; and then once it's loops the next time around and `i` is
`1`, it's going to be _apples_ check that _against_ the `key`. Remember the key
we receive in `get(key)`, that we are looking for.  So if _grapes_ the key
matches with the shelf's item, in that case just return the
`currentBucket[i][1]` because we want to return `10000`.

Hopefully you follow here, because if I run `myHashTable.get("grapes")` I get
`10000`; If I run `myHashTable.get("apples")` I get `56`.

### Example Summary

By looking a this code, I hope you understand on a deeper level, the time
complexity implication of hash tables. Even though we're doing a loop within the
`_hash()` function, remember that `_hash()` function are really really fast.
We're just looping over the `key`, so we don't consider this `_hash()` function
to be `0(n)`, this is very very fast. This `_hash()` function is `O(1)`.

When we set something within `set()` function, there's no loop there. We just
adding it to our data, we're just pushing it, so that is `O(1)`.

If we go to `get()` method, most of the time, if there's **no collision** it's
going to be `O(1)`, and in real life you can consider that it is `O(1)`. But in
our really bad example, with just `2` memory spaces, and not a very good hash
function well, this `get()` function can become `O(n)`.  We have `for-loop` in
`get()` might create the list, we saw in our [user list
example](#hash-collision-user) that will be `O(n)` if this (collision) `152`
just kept going and growing.

But there is one other method I want us to build, and to showcase to you, one
other downside of hash tables. What if we wanted to go through all the key of
the hash table? How would we do that? We going to try implement that in the next
chapter.


**[⬆ back to top](#table-of-contents)**
<br/>
<br/>
