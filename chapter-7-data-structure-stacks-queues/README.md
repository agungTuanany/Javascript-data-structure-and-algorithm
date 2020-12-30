# Chapter-7 Data Structure Stacks and Queues

## Tables of Contents

1. [Stacks and Queues Introduction](#stacks-and-queues-introduction)
2. [What is Stacks](#what-is-stacks)

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
