# Chapter-10 Algorithms Recursion

## Table of Contents
1. [Introduction to Algorithms](#introduction-to-algorithms)
2. [Recursion Introduction](#recursion-introduction)
3. [Stack Overflow](#stack-overflow)


</br>

## Introduction to Algorithms

Welcome to the algorithm section; this us a word that immediately just sounds
nice right?  All the companies are using it these days to sound like they're
doing something really really important. Everybody has a secret algorithm, that
they use to make a machine learning models, analyze user data; make companies
lots of money.

But underneath the hood, algorithms are just functions that programmers write.
A two line functions technically an algorithm, a thousand line algorithm that
sort through images us also algorithm.

Algorithms is simply steps in a process that we take to perform a desired action
with computers. If we go to Wikipedia and search lists of algorithms, the list
is pretty endless, there are a lot of algorithms, it's impossible to know all
of them. You can create your own algorithms, you can use other algorithms that
are popular and well established.

Let's get back to our question of what are algorithms? If we combine our
knowledge of data structures, the ones that we worked on in the previous
section; algorithms allow us to use language built in data data structures like
arrays and objects, or primitive such as integers and boolean, and even custom
data types like we did when we use the class keyword to create Stacks, Queues,
Binary Search Trees. Algorithms allow us to use these data structures to perform
actions on that data.

</br>

![chapter-10-1.png](./images/chapter-10-1.png "Introduction to algorithms)
</br>

Remember this right, **Data Structure and Algorithms create Programs**. In this
course we're going to talk about the most common interview algorithms, so that
long list on Wikipedia won't be as intimidating, because we're only going to
focus on the want that matter, especially for interviews; but also the ones that
matter most in you career; specifically we're going to go over these topics,
when it comes to algorithms.

</br>

![chapter-10-2.png](./images/chapter-10-2.png "Introduction to algorithms)
</br>


Now, whey are these algorithms so common in interviews, and especially in big
companies; Well, you can get away with not knowing these topics for a long time
as a programmer, but as we have learned Big-O and scalability of code, is
important as companies get larger and larger. By learning these listed
algorithms we're able to do majority of the scaling, we need to improve our
programs. Remember our Big-O cheat-sheet, and how we haven't really talked about
`O(log N)`, and `O(N log N)`.

Certain algorithms allow us to simplify our Big-O complexity into smaller or
better time complexity. So, by using the right algorithms I could take a
function that has a Big-O `O(N^2)` down to something of `O(N log N)` or
something that has a linear time complexity to `O(log N)`; and these are used
everywhere in large companies, because large companies handle a lots of inputs,
lots of data; so, this topics is extremely important to them, and as your career
grows and grows, these topics will be more and more important to you.

**[⬆ back to top](#table-of-contents)**
</br>
</br>


## Recursion Introduction

I'm actually starting with a bit of a trick here; recursion, which we're going
to talk about in the next couple of lectures, isn't technically an algorithm,
it's more of a concept that we are going to use throughout this section of the
course to write some really interesting algorithms when we get into _sorting_
and _searching_ through a Binary Search Tree, we're going to be using recursion
a lot; so, I want to prepare you, and obviously it's also a common topic in
interviews.  Actually this is the most popular topics I would say when it comes
to interview.


Now, what is Recursion? Really, when you're searching for files on a computer;
for example, if you're on your desktop and you want to find all music files
you're using MP3 files on your computer, you can't do it by just looking at one
folder, you want to look at folders recursively to find all your music. Let me
show you what I mean.


I have the [project
here](htttps://github.com/aneagoie/smart-brain-boost-api-dockerized) that we've
used for one of my other courses and it's a back-end API in Docker. Now,, life
cloned this repository, and I have it right here on my desktop, now If I want to
search through all the files in this project I can simply type an `ls` to show
me the files; but as you see, in blue here we also have folders that inside of
them also have files, how can I also see the files in this blue folders? I can
do something called `ls -R`, `-R` stand for recursively, if I do press Enter
loot at that, I get also the files inside of the folders. You see I have a
controllers folder with `.js` files, I have postgres folder with some
`Dokcerfile`, some  `.sql` file, and with in those I also have another folder that
has different files but, because I was able to lust items recursively, my
computer went inside of each folder and printed out the files.


So, what is Recursion? Well, recursion is when you define something in terms of
itself, simply it's a function that refers to itself inside of the function.
Alright there's no way you get that right? That's probably the most confusing
definition ever.

```javascript
function inception() {
    inception();
};
```

Again, let me show you a different example; If I open the console on browser, a
recursive function is a functions that refers to itself. So i can create a
function called, let's say `inception()`, and this function is recursive if I
refer to itself inside of it.  This is a recursive function; because, when this
function runs, it's going to call itself and run again.

The problem with recursion, and why people find it so difficult is, that it's
and intimidating topic when people start talking about math and theoretical
applications; instead, let's focus here on how recursion helps us to solve
problems. Recursion is really good for tasks that have repeated subtasks to do
that, that it. It kind of like when we looked at the folders inside of this
project, and the reason recursion is so important and the reason that I talk
about it first in this section before we dive into all the other algorithms is,
that this concepts us going to be used in _searching_ and _sorting_  algorithms
that we're going to be talking about; for example, _traversing a Tree_, if you
think about it, are simply same tasks that we do over and over again.

```javascript
function traverse(node) {
    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    console.log(tree)

        return tree;
};
```

Remember when we build our own Tree data structure, our Binary Search Tree, and
I gave you a little function at the end called `traverse()` that allowed us to
print out our Tree, so we can verify our answer. If we look at this closer, we
see that we're using recursion here.

I have `traverse()` functions that calls itself within here, and this is
something that we're going to demonstrate a lot when we talk about _searching_
and _sorting_ in the upcoming sections.

Recursion is everywhere. When we do DOM traversal on a Website, if we go to
elements here, when we do this traversal on an HTML Document Object Model we're
using recursion. In JavaScript, when we have a nested object, so an object
inside of an object; well, we use recursion, but the key to getting recursion is
to understand, hat it's not that complex, as long as you practice it a little
bit, once you get it, and get over the initial hump, then it becomes second
nature; and my goal by the end this lectures, that you're going to get
recursions, so let's get started.

**[⬆ back to top](#table-of-contents)**
</br>
</br>


## Stack Overflow

I'm about to show you my favorite animation of the course, I'm very proud of it;
So, don't laugh at me if you think it's so.

I like to think Recursion as this scenario, where you have this top pouring
water into a glass for this little man that's sitting on the couch watching TV;
and when I think about Recursion, I like to think that they have two big
problems. One, is that, well they're kind of difficult to understand at first.
The Second, is that, we can have a case like this, where I'm pouring water into
a glass and pouring water and that is me calling the function over and over and
over; and as we keep going fills up the cup, past it's limit, it keep going, it
doesn't stop, it keep calling the function, keeps going to function until the
man is drowned.

What just happened here? This called Stack Overflow. Let's go back to some code.

```javascript
function inception() {
    inception()
}

// Result:
// Uncaught RangeError: Maximum call stack size exceeded
```

Remember the function `inception()` that we created, I run this function and
simply I'll get an error. I get an error saying "Maximum call stack size
exceeded". My browser is smart enough to say, "all right, you've got to stop
this madness, I'm just calling this inception function over and over and over",
because remember our function just calls itself, and eventually if my browser
doesn't stop , this going to crash; and in the past, that's what would happen if
I run this function, the browser would crash, and I would have to restart it;
but, they've added a safeguards here saying, "hey, you've called the maximum
call stack size, you've got stop what you're doing".

Now, this is called stack overflow, why is that? Let's dive deeper into this
topic.


```javascript
function inception() {
    debugger;
    inception();
}

```

This time, I'm going to add a keyword called `debugger` that the browser is
going to detect and pause the function when it sees this word `debugger`. So,
I'm going to run this function and you'll notice that as soon they hit enter
it's going to stop and give me a little panel here where I can control the
function; let's hit enter, there you go, I'm now in debugger mode, and you'll
see here a few things, _One_, will show me where I am, and the function and also
show me something called **Call Stack**. Now, from the name Stack Overflow, this
might give you a bit of hint.

Right now, we've called the `inception()` function, we haven't called it the
second time around, if I click on the _step over_ icon, it's going to go to the
next line of code; it's going to go to the next; and now it's going to call the
next `inception()` function.

Have a look over here at the **Call Stack**, as to what's going to happen next.
Did you see that? I just added another function on the **Call Stack**, and as we
know about Stack data structure we're just adding the function call on top of
the older one, and if I click _step over_, a third function call, and if I keep
going over and over again, you'll see I'm just adding more and more things to
the Stack.

There's a problem here right? Nothing's getting popped from the stack; instead
the function just keeps running until we run out of memory. Remember Stack in
this case, is grabbing a piece of memory from our computer, and adding
`inception()` to the Stack, and as you know memory is limited, we don't have
infinite amount. So, as we keep goings, it's going to Stack Overflow, and throw
an error; and this is one of the biggest problem with Recursion, that we're
going to get into later on.

As you see here though, it can be very very dangerous, because we can run
programs that overflow, that never stop, that have infinite loops essentially
that crash our programs. You also see here, that this costs memory, a Stack is
holding these function calls, and Recursion, one of it's downside is that, we
have to hold onto these calls and remember them one by one, which can get really
expensive.

So, if you ever get asked this question in an interview about Recursion, maybe a
possible problem with Recursion, you can simply say, "Well, the computer need to
allocate memory to remember things, Stack Overflow can occur when we have
Recursion and there's no way to stop this recursive call", it's simply the
computer saying, "I'm not remember anymore things, cause I'm out of memory, I'm
just calling error out".

In the next lecture, we're going to try and solve this problem and learn about
something called a **Base Case**, I think that you have to have in a recursive
function to stop it form out of memory, and not keep the function all in a Call
Stack.











**[⬆ back to top](#table-of-contents)**
</br>
</br>
