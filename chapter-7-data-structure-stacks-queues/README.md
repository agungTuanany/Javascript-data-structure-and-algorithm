# Chapter-7 Data Structure Stacks and Queues

## Table of Contents

1. [Stacks and Queues Introduction](#stacks-and-queues-introduction)
2. [What is Stacks](#what-is-stacks)
3. [What is Queues](#What-is-Queues)
4. [Exercise Stacks Vs Queues](#exercise-stacks-vs-queues)
5. [How JavaScript Works](#how-javascript-works)

</br>

## Stacks and Queues Introduction

</br>

![chapter-7-1.png](./images/chapter-7-1.png "Stacks and Queues Introduction")
</br>

We're going to learn two data structures at the same time, stack and queues;
because they're very similar. They are both what we call **linear data
structures**. Linear data structures allow us to traverse, that is go through
data elements sequentially one by one, in which only one data element can be
directly reached. This become more clear to you as we talk more about stacks and
queues the next couple lecture.

The reason that these are very similar is that they can be **implemented in
similar ways**; and the **main different** is only how **items get removed**
from this data structure.

Unlike an array, in stacks and queues, there's **no random access operations**.
You mainly use stacks and queues to run command like **push**, **peak**,
**pop**. All of which deal exclusively with the element at the beginning or the
end of the data structure.

Now, after I said that, was you first thought? Does it kind of sound limiting,
that with stacks and queues we usually can access the first or the last element
in the data structure. Why would we ever want to use something like this?. This
is an important topic in Computer Science. You will see that we can build things
like stacks and queues which are using arrays or linked lists, except unlike
arrays and linked lists we have less methods or less actions that we can perform
on stacks and queues.

Sometimes it's good to have these higher level data structures that built on top
of lower like linked list and arrays to limit the operations you can do on them.
That's actually a benefit.

In Computer Science having this limited ability on a data structure is an
advantage, because you can control, that whoever uses this data structure,
performs only the right operations that are efficient. If you give somebody all
the tools in the world, it's a lot harder for them to operate, than  if you just
give them two or three, so that they know exactly what they need to do.

Let's talk about stacks and queues throughout the next couple lectures to really
understand how they work, and then finally code our own.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## What is Stacks

</br>

![chapter-7-1.gif](./images/gif/chapter-7-1.gif "What is stacks")
</br>

Let's talk about stacks. Stacks is a type of data structure that you can think
of hem as plate's; that is, we have one piece of data and then another piece of
data comes along and get stacked on top of that piece of data, it's keep
goings. You can think of it as these plates stacked on top each other vertically
and you can only touch the top plate.

You can't really access anything from the bottom, the way you can access data
from a stack is, to grab the first plate from the top, and second plate, and
keep goings until you've gone through all the stack.

This is called _LIFO_, or _Last In First Out_, because the last item that comes
in is the first one that comes out. You're thinking to yourself why is this
useful? When will we actually use something like a stack? They're actually
useful in quite a surprising number of ways. They're very good obviously when
you **need to know the very last value was seen or added**; and stacks are very
important in language specific engines. You might heard something like Stack
Overflow, a website that a lot of engineers visit.

Now most of programming languages are modeled with the stack architecture in
mind; and when functions get called in a programming language, usually they
follow this model, of last in first out. A function within a function within
a function gets called; and then we start popping those functions until we get
to the very beginning. Don't worry this is going to be a little bit more clear
when we actually code our own stack.

Another useful way that we might use stacks is such as browser history,where you
go back and forth from one website to another, and then you hit the back button
or the front button that's using stacks; or maybe you're writing a piece of
text and you want to undo something so you can click the undo option to go back
or forward to redo, ever wonder how that works?

Well, the idea comes from stacks, that is you store the previous state over your
work, and the memory in such order that the last one appears first. This is
something we can do with stacks.

As you can see, stacks that usually come with **three types of methods**.
There's a few others but these are the main ones, **pop**, **push**, and
**peak**; **pop** is remove the last item, that is remove the plate; **push** is
how to plate; and **peak** is simply view the top most  plate. I've added
**lookup** in here just to show you that it's Big-O `O(n)`, because you usually
don't want to traverse through entire stack; but just so you now if we wanted
to do that, it's going o be a heavy operations.

Let's talk queues in next lectures.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## What is Queues

</br>

![chapter-7-1.gif](./images/gif/chapter-7-2.gif "What is queues")
</br>

The best way to think about queues is like an entrance to a rollercoaster. The
first person that arrives in line gets to go first on the rollercoaster, and
ten the second person, the third, the fourth, the fifth, and the six finally
gets to go.

It's the opposite of stacks, in that we access _First In First Out_. The
first item in the queue gets access first that is first out, we call that FIFO;
and queues are used again a lot in programming problems and interview questions.
For example, if you had any sort of wait list app to perhaps buy tickets for
a concert that uses queues. What about the restaurant app, where you check into
the restaurant to see if you can get a table, that uses queues. What about Uber
our Lift when you want to grab a ride, well the person that requested the ride
first, will get priority and then you'll get second. Finally the most common
example of queues is a printer, if you had a printer at home, and you have three
people on three different computers at you home, let's say your family members
and you press print and each person prints different items, the person that
click prints first should have their first print out, same with the second
person that goes next, and the third person.

Now on the right above diagram, I have a couple of words that are different then
_push_ and _pop_, and I'm using a bit of standard here. You can use _push_ for
**enqueue**, which means add  to the queue, that is add a person in line which
is `O(n)`; and **dequeue** which you can think of as _pop_, which is remove
person from line.  However _dequeue_ unlike _pop_ doesn't take the last person
in line, it takes the first person.

So that stacks and queues differs; and we have these names to make sure that we
understand the differences, but we have **peak** which once again tells us
what's the first item that's going to come up, that is the first person in the
list versus a queue that is the last played, which was the last in first out.

Once again **lookup** in queue usually don't do, because you're only interested
in _enqueuing_ and _dequeueing_.  You can see here, our Big-O notation is quite
fast.

We actually going to demonstrate this in code, but I want you to try and answer
this question, why would you not to use an array to build a queue? Well, the
answer is that it's very inefficient, because we're removing the first item from
the list. If you remember arrays, if you unshift something you remove the first
item, you're going to shift shift all those indexes.

So create ting a queue from arrays, although you can do it, it is really really
bad. That something we'll talk a little bit more about when we actually code.

OK, that enough for queue, let's go to our first exercise.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Exercise Stacks Vs Queues

Let's do a quick exercise before we actually create our own stacks and queues,
because JavaScript doesn't have its own stacks or queues data structure.

```javascript
// Stacks

// google
// udemy
// youtube
```

I mentioned that there's two ways that we can build stacks and queues, If we
talk about stacks we can think of it as our browser history, let's say we visit
`[1]` Google first then `[2]` Udemy and then `[3]` we visit youtube. In
a stack because Google was the first item, it would actually be placed on the
stack like,

```javascript
// Stack placed

twitter
youtube
udemy
google
```

Then we go to udemy, so we'd be placed on the stack, on top, and then we go
to youtube. Now if we want to go to a new website let's say we go to `[4]`
twitter, but then we decide I want I want to go back,

```javascript
// Stack placed

youtube
udemy
google
```

Well we remove twitter with press back button on our browser, and we get
youtube, and if we press back again,

```javascript
// Stack placed

udemy
google
```

We get to udemy and then back again,

```javascript
// Stack placed

google
```

We go back to Google. So stacks has a **top** and a **bottom**, and we can build
it either with **arrays** or **linked lists**. My question to you is, why would
we want to build stacks with arrays? That is will create a class of stacks that
has the data being held in arrays versus using linked lists and vice versa.
Think about that.

```javascript
// Queues

Matt -- Joy -- Samir -- Pavol
```

What about queues? Let's say we have a queues, I'm creating a waitlist app, and
here we have a couple of people that want to on the waitlist. First person that
shows up is `Mat`, and then all the sudden `Joy` comes in lines up, and then
perhaps we have `Samir` that comes and waits in line, and then we have `Pavol`.

In this case, we want `Matt` to be first then `Joy`, and `Sumir`, then `Pavel`,
and with queues we can once again use **arrays** and **linked list** to
implement it. Which one do you think will be better for queues?  Is there one
better or they both equal? I want you think about this.

In next lecture, I'm going to answer this for you, but I recommend taking time
to think about what you know about arrays and linked list, and how they might
benefit or might not benefit stacks and queues.

### Stack pros and cons

I said that with stacks they can be implemented using **arrays** or **linked
lists**, in this case both arrays and linked lists are going to work fairly
well. In the end it depends what you prefer, and what your priorities are. By
this points you should understand the pros and cons of arrays, and pros and cons
of linked lists.

So, we don't need to go into much detail, since we've talked about it before;
But one major thing is that **arrays allow something called _cache locality_**,
which makes them technically faster when accessing its items in memory, because
they're right next to each other versus a linked list that has scattered all
over memory, and also **linked list have _extra memory associated_ with them**,
because we have to hold them on to those pointers, in other hand, they have more
dynamic memory. We can keep adding to the list versus an array where you have
either a static array or dynamic array that has certain amount of memory, and as
soon as it's about to reach its limit, it's going to have to double up their
memory and create new space for it, somewhere in memory.

So, you have to think about what sort of operations you're going to do, and why
your priorities are to decide which one you want; but they could both work.
We're going to build stack data structure with both of these coming up.

### Queues pros and cons

Queues in other hand is a very simpler answer. You **never want to build it with
an _array_**, or if you do, while that's not necessarily a good idea, and
ideally you want to implement them with linked lists; Why is that? Well, if you
remember, arrays have indexes associated with them,

```javascript
0.      1.     2.       3.
Matt -- Joy -- Samir -- Pavel
```

If we have `[Matt] | 0`, `[Joy] | 1`, `[Samir] | 2`, `[Pavel] | 3` that are in
queue, if this was in an array data structure, and `Matt` was the first in line,
we need to remove `Matt` from from the queue; well, once we remove `Matt` we now
need to shift the indexes over,

```javascript
0.     1.       2.       3.
Joy -- Samir -- Pavel
```

So, we have to go one by one, and say, all right, `Joy` is now in index of `0`,
`Samir` is now in index of `1`, and `Pavel` is now in index of `2`, and there's
nothing in index of `3`. We just shifted those arrays, it's `O(n)` operation or
linear time versus something like linked list where all we have is a pointer.

```javascript
Head                    Tail
Matt -- Joy -- Samir -- Pavel
```

We have a pointer to the `Head`, and then perhaps we have a pointer to the
`Tail`.

```javascript
   Head            Tail
-- Joy -- Samir -- Pavel
```

All we need to do is say, `Head` is `Matt`, we want to remove `Matt`, and `Joy`
is going to be the `Head`, and nothing else changes, and that's an `O(1)`
operation or constant time.

I hope you are able to get the answer, otherwise at least now you know; and this
is a very common interview question that you might get asked that hopefully you
have an answer to now. Enough talking I think it's time to build these data
structures from the ground up.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## How JavaScript Works

How does JavaScript actually work? Imagine getting this question during an
interview, or how about this, **explain the difference between asynchronous and
synchronous in JavaScript?** or maybe they ask you to explain this statement.
**JavaScript is a single thread language that can be non-blocking?**

In this optional lectures we're going to help you to answer those question.
Maybe you need to visit a few times as you progress to really get it. So, don't
fell discourage if you don't fell 100% confident.

Now we don't need to know how JavaScript works internally to write a program;
but it is important to learn. I see a loot of people who have been developers
for years and not know this (how JavaScript works); it's like being a pilot and
not knowing an airplane can fly. OK that's a little bit dramatic there; But you
get my point.

</br>

![chapter-7-2.png](./images/chapter-7-2.png "How JavaScript works | What is a Program")
</br>

First, what is a program? Well, a program has to do some simple things. `[1]` it
has to **allocate memory**, otherwise we would be able to have variables or even
have a file on our computer. `[2]` It also **have to parse and execute
scripts**, which means read and run commands.

</br>

![chapter-7-3.png](./images/chapter-7-3.png "How JavaScript works | JavaScript Engine")
</br>

Now, we also know that form our previous discussion, there's the JavaScript
engine, that each browser implements, in chrome it's the `V8`; and the `V8`
engine reads the JavaScript that we write in changes into machine executable
instruction for the browser. Now the engine consists of two parts, `[1]`
a **Memory Heap** and `[2]` a **Call Stack**.

The _Memory heap_, this is where the _memory allocation_ happens; and the _Call
Stack_  this is where your code is _read and execute it_; it tells you where you
are in the programs.

Let's simplify this and show you what I mean.

### Memory Leak

```javascript
// Memory Heap
const a = 1:
const b = 10:
const c = 100:
```

For us to allocate the memory in the Memory Heap; well it's a simple as dong
`const a = 1`, we've just allocate a memory; now when we assign this, the
JavaScript engine is going to remember that, "oh ya, `a` has value of `1`".
We've just use up the Memory Head, and I can keep going on and on, keep copying,
pasting, and changing these variables to `const b = 1`, `const c = 1`.  I can
change value `cons c = 100`, may be `const b = 10`.

Now, what's an issue that we see with this? There's something called **Memory
Leak**, that you're going to hear as you become a developer; and what we've done
here is, we've created all these variables, these global variables that are in
the in the Memory Heap, but you see this Memory Heap box (chapter-7.3.png), and
with all the memory we have a limited amount that we can actually have. So, by
increasing the number of variables that we have, imagine if I had just this page
full of variables, and instead of just numbers, they're like very very big
arrays.

Well, **Memory Leak happen when you have _unused memory_**, such as let's say
we're now not using a variable `a`, but It's going it's still there. Well, by
having unused memory, just laying around it fills up this Memory Heap. That's
why you hear that **global variables are bad**. Global variables are bad,
because if we don't forget to clean up after ourselves, we fill up this Memory
Heap; and eventually the browser will not be able to work.

### Call Stack Example

Alright, that's memory. Let's talk about the Call Stack, what is that? Well,
with a Call Stack, we can have something like this,

```javascript
// Call Stack
console.log("1");
console.log("2");
console.log("3");
```

We have three console logs that stack with each others, if I run this code in
the browser terminal,

</br>

![chapter-7-3.gif](./images/gif/chapter-7-3.gif "Call Stack example - 1")
</br>

Well, I get `1`, `2`, `3`. So, the Call Stack if you remember that's what it
reads and execute our scripts.

</br>

![chapter-7-4.gif](./images/gif/chapter-7-4.gif "Call Stack example - 2")
</br>


So, What the Call Stack does, it reads the first
line console log, it get puts in the Call Stack. So the JavaScript engines says,
console log has been added, let's pop it onto this Call Stack; and then it runs
it, and create `1`, then it says, OK, I'm removing the first console log as
I just finished running it,

I'm going to place the _second console log_ into my Call Stack, adds it on, and
says, Yap, execute `2`., and then it removes that, ti pops it, and then get the
third console log, and logs console log three with result `3`.






**[⬆ back to top](#table-of-contents)**
</br>
</br>

