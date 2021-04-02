# Chapter-13 Algorithms Dynamic Programming

<!--{{{ ## Table of Contents-->
## Table of Contents
1. [Dynamic Programming Introduction](#dynamic-programming-introduction)
1. [Memoization](#memoization)

</br>
<!--}}}-->

<!--{{{ 1 ## Dynamic Programming Introduction-->
## Dynamic Programming Introduction

Welcome to our last section on algorithm's. The last missing piece and that is
"Dynamic Programming". Sounds very important doesn't it.

With these section we're going to go over the very last piece of our "mind map"
to complete our entire knowledge Graph.

It's last little piece of Dynamic Programming specifically **Memoization** that
we're going to be talking about. But what is it?

<!--{{{ chapter-13-1.png-->
</br>

![chapter-13-1.png](./images/chapter-12-1.png "What is Dynamic Programming")
</br>
<!--}}}-->

Dynamic Programming is just an **"optimization technique"**. Here's a fun fact.
Dynamic Programming actually mean nothing. It's completely "garbage - Buzzword",
and I'm not kidding here. I'll link to a funny article on how the name came to
be, but Dynamic Programming at the end of the day is just an **optimization
techique** using something called **caching**.

If you have something that you can "cache". Well then, he can use Dynamic
Programming.

Now, we're going to get into details of what that means throughout the next
lesson, but at a higher - level programming is a way to solve problems by
breaking it down into a **collection of "sub - problems"**. Solving each of
those problems just once and storing their solutions in case next time the same
sub - problems occurs. But let's get into hat and understand what it means, how
we can implement it to become better interviewers, better engineers and better
programmers.

I'll see you in the next lecture.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

<!--}}}-->

<!--{{{ 2 ## Memoization-->

## Memoization

<!--{{{ chapter-13-2.png-->
</br>

![chapter-13-2.png](./images/chapter-12-1.png "What is Memoization")
</br>
<!--}}}-->

In order to understand how Dynamic Programming works, we need to understand what
"**Caching means**". **Caching** is, a way to store value so you can use them
later on. Ideally you can think **Caching** is as a "backpack" they take to
school. Instead o going all the way home when you need something like
a "pencil". You have a "small - box" on your back that holds items that you
need. So that when you got to school, you can just reuse them fast over and
over. That's a but of a silly example.

**Caching** is just a way for us to "speed up" - programs and hold some piece
of data in an easily accessible box; and **Memoization** is, a specific **form**
of Caching that we're going to be talking about. Because we use it a lot in
Dynamic Programming.

Instead of talking about it. Let's actually demonstrate it in code.

<!--{{{ function addTo80()-->
```javascript
function addTo80() {

    return n + 80;
}

addTo80(5);
```
<!--}}}-->

The way we can "Cache" - things. Well, let's imagine we have a function that
says we want `*"addTo80()"*`; and this function takes a number `*"n"*`; and all
it does is return the value of `*"n"*` (that is a parameter we give it); and
adds `80` to it.

So that when we run the function `addTo80()`, and let's say we put in `5`. We
get `85`. Nice and simple right!.

<!--{{{ function addTo80()-->
```javascript
function addTo80(n) {
    console.log("took a long time");

    return n  + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)

// Result
took a long time
took a long time
took a long time
```
<!--}}}-->

But if I run this function again, I'll have to go through this step again
`return n + 80` and add `80` to that answer, and will do the same thing again
and again. I've ran the calculation three - times.

But, what if this operation `n + 80` took a really really long time?. What if
I add a `console.log()` above the operation? We can imagine that this operation
takes multiple seconds. It takes a long time.

Every time when I run this function, we'll have to run long time "three-times",
and go trough the step one by one. Even though we've done the exact same
calculation "three times". Is there a way that we can optimize this?.

This is where we can use **Caching** and **Memoization**. Let's improve above
function by doing something different.

<!--{{{ function memoizedAddTo80()-->
```javascript
let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        retrun cache.n;
    }
    else {
        cache[n] = n + 80;
    }
}
```
<!--}}}-->

I'm going to create a new Object called '"cache"`, that's going to hold empty
Object `{}`.

We're also going to have a function that is now going to be called
`"memoizedAddTo80()"`, taht takes a `n` - number. Inside this function, we're
going to do something a little bit different than the `addTo80()` function.

We're still going to add thorugh `80`. But we're going to do it in a special
way. I'm going to say that if `n in cache`, and this is away to check if
a property exists in an Object, in JavaScript. So it's similar to me doing
`"cache.n"`. But we I keep use with `"n in cache"` for readabilty.

So if `n` is exist in `cache`. So if we've cached before. Then simply `"return
cache[n]", or `"cache[n]"`. So we return the `cache` - value.

But obviously it's empty. The first time around, so this is not going to work.

If there's nothing in the `cache`, which is the case. Well, we have an `else`
statement; and in this `else` - block statement, we're going to have our
`cache[n]`- Object of an array which doesn't exist yet, and assign it `n + 80`.

So that after this. If we called `memoizedAddTo80(5)`.

<!--{{{ let cache = { "5": 85 }-->
```javascript
let cache = {
    "5": 85
}
```
<!--}}}-->

Is going to say `5 + 80`. So `cache` now have the property `"5"` to have a value
of `85`, which is what we doing in `else` block.

So that, the next time arround, we call `memoizedAddTo80(80)`. We go through the
`if` block, and find the `cache`. That in fact `cache` have already calculated
`"5"`, and do simple "property - access", which as we know is `O(1)` - Time. It
is "Super - Fast" with a "hash table" like this.

Now, Let's complete this example to show you how it works.

<!--{{{ function memoizedAddTo80()-->
```javascript
let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        retrun cache.n;
    }
    else {
        cache[n] = n + 80;

        console.log(cache, n, " ==> It takes long time");
        return cache.n;
    }
}
```
<!--}}}-->

I'm just simply going to `return cache[n]` in this `else` block statement; and
let just have a `console.log*()` here to show us what is the `cache` condition
value in every operation, With `n` value, and with a String "It takes long
time". To see that we're doing the "calculation - long time"

<!--{{{ memoizedAddTo80(5);-->
```javascript
memoizedAddTo80(5);

//Result
{ '5': 85 } 5  ==> it takes long time
```
<!--}}}-->

The first time I run this function, I get back "It takes long time". The first
pass through, it went through `else` - block, bad did this calculation that
hypothetically is going take a really long time.

Again, we're using a nice easy example here. Bit you can imagine this being
a calculation that takes a long time many seconds.

What if we do this again with `n` is same value which is `5`. We do
`console.log()` here to make sure we capture these value; and we label them `1`
as first log, and `2` for the second log. So we can distinguish them. So the
first call, and the second call.

<!--{{{ memoizedAddTo80(5);-->
```javascript
console.log("[!] - 1, memoizedAddTo80(5))
console.log("[!] - 2, memoizedAddTo80(5))

//Result
{ '5': 85 } 5  ==> it takes long time
[!] - 1 85
[!] - 2 85
```
<!--}}}-->

If I hit run, look at that. First - time around we call `"it took long time"`,
and we calculate to `85`. But the second - time, because this value (`5`) was in
the `cache`. We didn't have to do this long calculation and we just return it
immediately.

So, what is "Memoization" exactly? Well, "Memoization" is a specific form of
"Caching" that **involves Caching the return value**. All the function that is
the "return - value" of this function (`memoizedAddTo80()`) based in its
parameters;


If the parameter of this function doesn't change like it is above, then it's
"Memoization". That is, it uses the "Cache", because it's calculated the same
thing before. with the same parameter and it will return a  "`cache` - version"
of the function. It's "Memoize".

<!--{{{ memoizedAddTo80(5);-->
```javascript
console.log("[!] - 1, memoizedAddTo80(5))
console.log("[!] - 2, memoizedAddTo80(6))

//Result
{ '5': 85 } 5  ==> it takes long time
[!] - 1 85
{ '6': 86 } 5  ==> it takes long time
[!] - 2 86
```
<!--}}}-->

IF the paramter *changes*. Like above example. Well, it's a different parameter
that it's never seen before. So it's going to calculate both times. Different
things.

So remember this. "Memoization" is simply a "**way to remember a solution to
a solved problem**". So you don't have to calculate it again.

**[⬆ back to top](#table-of-contents)**
</br>
</br>
<!--}}}-->
