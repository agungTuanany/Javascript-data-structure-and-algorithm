# Chapter-6 Data Structures Linked List

## Tables of Contents

1.  [Linked List Introduction](#linked-list-introduction)
2.  [What is a Linked List](#What is a Linked List)

<br/>


## Linked List Introduction
<br/>

![chapter-6-1.png](./images/chapter-6-1.png "Linked list Introduction")
<br/>

It's time to talk about our third data structure, and we're going to be talking
about two types of linked list in the next coming lectures. `[1]` **Singly**,
and `[2]` **Doubly** linked list. What problem do we encounter with arrays?
Well, with **static arrays**, we only had a certain amount of data, or memory
that can be allocated next to each other in memory. But then in both dynamic
arrays and static arrays can increase their memory (space) once it hits certain
limit, and double up that memory in another location; but that operation once in
while of doubling up the array in order to create more memory had a performance
implication, it's cost us all of `O(n)`, additionally arrays also had bad
performance for any sort of operations, like **_insert_** and **_delete_**, that
had to **_shift indexes_** over, especially when you inserted or deleted any
word that **wasn't the end of the array**.

Then came hash tables, they were great, we were pretty much store things
wherever we wanted in memory, and hash tables would just take care of it for us,
and know where to place it in memory. We didn't have to worry about some
problems that came with the arrays, life was good, but unfortunately they
weren't really ordered. How to solve this problems? Linked list to the rescue.

So, does mean this we all should just be using linked list all the time and
disregard arrays and hash tables, because linked list are the best data
structure? No, _as always there are **tradeoffs** when it comes to data
structures_. In the next coming lectures, let's learn more about them, so we can
get a clear picture.
<br/>

![chapter-6-2.png](./images/chapter-6-2.png "Linked list Introduction")
<br/>

By the way, remember this above diagram, that I showed you in the has table
chapter? And I said that when we had **collision**, one way to solved it was
using something like `152` arrow into new data structure. We had no idea what
this data structures was. Well this `John Smith` to `Sandra Dee` and little
arrow pointing, that's a linked list. So get started and learn what linked list
are.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

## What is a Linked List
<br/>

![chapter-6-1.png](./images/chapter-6-1.png "Linked list Introduction")
<br/>

What is a linked list? As the name suggests it's a list that is linked; that's
answer is not very helpful can you actually explain it to us? Alright, as
above diagram.

A list or in this case we'll find out soon a singly linked list, **contains
a set of nodes**, and think of nodes as a **block**, both _red_ and _green_ block
together is a _node_. These nodes have two elements, the `[1]` **value of the
data** you want to store, in this case the number `5` and `[2]`a **pointer** to
the _next node in line_.

So, you can see the _green block_ points to the next node. The first node is
called the **head**, and the last node is called the **tail**. Now, depending on
some people like to call the _tail_ anything after the head, including the this
block (the middle node, before the tail), but I prefer the term _tail_ referring
to the very last node. Finally linked list are we call **null terminated**,
which signifies that it's the end of the list. So we know this is the _tail_ node
because it points to _null_, there's nothing coming after it.

Now, **pointer** is a term you hear a lot; i Programming and Computer Science,
we have lecture coming up discussing what a _pointer_ actually is. The focus
just for linked list for now, you can see that it's a simple data structure.
It's simply an element that links to the next element, that links to the next
element, and keeps going, keeps going until the last element that points to
_null_. You can have them (nodes/ elements) **sorted**, and you can have
**unsorted**, and you can have them nodes it's pretty much contain any sort of
data type.

Let's take a look at some pseudo code,

```javascript
const basket = ["apples", "grapes", "pears"]

/*
|-----------------|
|-- pseudo code --|
|-----------------|

linked list: apples --> grapes --> pears.

apples
8947 --> grapes
         8742 --> pears
                  372 --> null
*/
```

Up until now we learned how arrays work, and here I can just create a simple
array, let's say a `basket` that contains our grocery list. We have _apples_, we
have _grapes_ and we have _pears_.

Now, how can we have a _basket_ that's not an array but in linked list? Well, we
can say that our linked list and this is not actual code, just pseudo code.
I can say that our linked list will contains _apples_ that then points to
_grapes_ that then point to _pears_.

These little arrows `-->`, are essentially _pointers_ saying, _apples_ to
_grapes_ to _pears_. Remember this isn't actually code, I'm just creating a nice
diagram for you.

A more accurate diagram might be something like this, where we have _apples_ in
memory space let's say `8947`, and this node points to the next node, which is
_grapes_ that is at `8742` in memory, and then that node point to _pears_ that
is at `372` location in memory, because _pears_ is the end of the list, the tale
it points to _null_.

You just thinking to your self, how come I'm not just coding this in JavaScript,
just show us how linked list work in JavaScript and stop with this pseudo code
gibberish. Well, JavaScript doesn't actually come with linked lists built in.
Remember what I said, _different language have different tools available to
them_. Languages like Java have linked list, while JavaScript doesn't come
pre-built linked list.

Luckily for us, we can build one, and this is why you typically do in
programming, when you don't have something, you build it!. We have the building
block to be able to build a linked list, an that's what we're going to do as
part of an exercise coming up.

Before we code our own linked list, and create our own linked list data
structure, let's do a fun little exercise.

**[⬆ back to top](#table-of-contents)**
<br/>
<br/>

