# Chapter-5 Data Structures Hash Tables

## Table of Contents

1.  [Hash Tables Introduction](#Hash-Tables-Introduction)
2.  [Hash Function](#hash-function)
3.  [Hash Collision](#hash-collision)

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

To review, we have a key that is _grapes_, we send it through a hash function
that is going to hash something really really fast, and then map whatever the
hash came out to be into a memory address where we want to store our data,
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
Big-O `O(``)`, if we want to find something in our basket like _apples_ that
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
<br/>

![chapter-5-2.png](./images/chapter-5-2.png "Hash Collision")
<br/>

The **_Collision_** looks something like above. We have the **_keys_**, let's
say we inserting the **_name_**, the **_phone number_**  of a user; and we
initially place _John Smith_, this key for _John Smith_ gets hashed, gets placed
in the address space of `152` and get stored. Remember how I said, it actually
stores both _keys_ and _values_. It stores in something called **_bucket's_**
_John Smith_ with the value, that is phone number. We keep going with _Lisa
Smith_, then _Sam Doe_, than _Sandra_. As soon we has _Sandra Dee_ it becomes
the same address space as _John Smith_ and we have a collision.

Because of this collision, we need a way to store both users somehow in this
address space `152`, and something funky is going on here, this _little black
circle_ and then a point and _Sandra Dee_.

Just a **hint here**, The `152` is actually a new data structure, that we're
going to learn about called **_Linked List_** coming up soon.

You see, with hash tables we can't avoid these collisions, with enough data with
limited memory we always going to have this collision.

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

