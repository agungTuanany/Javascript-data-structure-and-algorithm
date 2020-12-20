# Chapter-6 Data Structures Linked List

## Tables of Contents

1.  [Linked List Introduction](#linked-list-introduction)

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
