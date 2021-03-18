# Chapter-12 Algorithms Searching BFS + DFS

## Table of Contents
1. [Searching + Traversal Introduction](#searching-+-traversal-introduction)
2. [Linear Search](#linear-search)
3. [Binary Search](#binary-search)

</br>

## Searching + Traversal Introduction

</br>

![chapter-12-1.png](./images/chapter-12-1.png "Searching introduction")
</br>

We've talked about Recursion and Sorting, we have a few more to go. In this
section, we're going to talk about **Searching and Traversal**, including
**Breadth First Search** and **Depth First Search**.

Searching is something we do a lot on our computers. When we talked about
Sorting, some of you may have been like, "man, it doesn't really sound that
useful"; but Searching, we use that every day, don't we? We look for files in
our computer, we run command `f` and search for things, search for words and
documents, we search Google, we search Youtube, we search hashtag `#` on
Twitter and Instagram; Searching is a big part of our lives;

But, how are all these computers and programs able to search things so fast.
There's more and more data in this world, more and more Websites to search for.
How are we able to do these things so fast? How is google able to do these
things so fast?

Well, in this section we're going to build this foundation of how it all works.

</br>

![chapter-12-2.png](./images/chapter-12-2.png "Searching introduction")
</br>

We're going to be talking about a few types of Searching and Traversal, and
hopefully by the end of it all, you're going to understand how places like,
Facebook, Google, and Google Maps work when it comes to Searching at
**fundamental level**.

Let's get started.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## linear Search

Let's talk about the very first type of Search, Linear Search. In Computer
Science Linear Search or **Sequential Search** is a **method of finding a target
value within the list**, and we should be familiar with this; before, because
through out the course we've loop through arrays to find items. It sequentially
checks each element of the list for the target value until a match is found, or
until all the elements have been searched.

Let's take a look at visual,

</br>

![chapter-12-1.gif](./images/gif/chapter-12-1.gif "Linear Search")
</br>

Linear Search is simply this. We have items that can be nodes, that can be
numbers, that can be anything, and we go one by one looking through the list.

We check the first item, then the second item, then the third, the fourth, the
fifth, and the sixth. In the **best case** scenario, we find what we're looking for
in `o(1)` time, because it's at the very beginning of the list, such as if we're
looking for `6` over here.

However, in **worst case** scenario, we have to go through the entire list, if
we are looking for `9`, and check every single node, or if we're looking for
something that doesn't exist, we still have to check every single item, and this
type of Sorting is very familiar to us.

For example, if we take a look at JavaScript,

```javascript
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item) {
  return item === 'Godzilla';
});

beasts.find(function(item) {
  return item === 'Godzilla';
});

beasts.includes('Godzilla');
```

I have a list above, of `beasts`, and let's say, we're looking for `Godzilla`.
There's many way that I could search for this item `Godzilla` in this list. One
way of doing it in JavaScript is using **`indexOf()`**, which gives me the index
where I can find `Godzilla`, this uses Linear Search to try and find the Item.

Another way is to use **`findIndex()`**, that takes a function with a condition
that the item **must equal** `Godzilla`, and it's something going to return
**true** when it find something, again if I run this I get `1`.

Another way is to use **`find()`** function, giving it same function as we did
above; but this time it's going to return the actual item instead of the index.

Finally, we also have this way of searching, the **`includes()`** method, that
simply says, does `beast` include `Godzilla`?, and it's going to give me
**true** or **false**, and in this case it's **true**.

Your language have different ways to implement this type of Search. But all of
this searches are _Linear Search_; that is worst case, we're going through the
entire list, and as you know, our inputs or our list can get really really
large, with Linear Time `O(n)` is OK, but it's not the fastest.

We **can't** use Linear Search to index Websites like Google, or search for
friends like Facebook, because it's going to cost us a lot of time.

</br>

![chapter-12-2.gif](./images/gif/chapter-12-2.gif "Linear Search")
</br>

Is there a better way? Well, what if the list of our data here was, perhaps
sorted, would that help us in any way? Would we be able to improve, let's say
we're looking for `9` now, and we knew that the **list was sorted**. Let's
answer that question in the next chapter.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Binary Search

In the last chapter we ask the question, is there a better way to find number in
a Sorted  List?

Just for this example, let's add an extra number to our list,

</br>

![chapter-12-3.png](./images/chapter-12-3.png "Binary Search")
</br>

Let's say I was looking for `34`, and I knew that my list, let's say **array was
sorted**. What's a better way to go about it, instead of checking every single
item one by one from left to right?

Well, we can use something called Binary Search, because we know _list is
sorted_, we can discard half the items instead of one at a time, let me sow
you.

</br>

![chapter-12-3.gif](./images/gif/chapter-12-3.gif "Binary Search Animation")
</br>

We can start in the middle of the list, and say is `9` higher or lower than
`34`? Well, `34` is higher than `9`, so let's discard everything to the left of
it.

</br>

![chapter-12-4.gif](./images/gif/chapter-12-4.gif "Binary Search Animation")
</br>

Then, we go to the middle index again, in this case there's no technically
a medium, so let's just choose `12`, go the left of the media. Is `12` higher or
lower than `34`? Well, it's definitely lower, so let's remove everting to the
left of it.

</br>

![chapter-12-5.gif](./images/gif/chapter-12-5.gif "Binary Search Animation")
</br>

Then, let's find the middle index; and, Oh we just found `34`. Instead of going
through the item one by one, we did that in **three operations**, and this looks
familiar right?

</br>

![chapter-12-4.png](./images/chapter-12-4.png "Binary Search")
</br>

It's something we learned about when we talked about Trees, specifically Binary
Search Trees, because if our data is sorted, we can do better than `O(n)` or
_linear time_,

</br>

![chapter-12-6.gif](./images/gif/chapter-12-6.gif "Binary Search Animation")
</br>


Because this Sorted List might remind of something. We're essentially creating
a Binary Search Tree.

Unlike Linear Search, we can discard half the items, instead one of the time;
and you might be thinking, well, that's a ridiculous, because in order for us to
even searches, we have to Sort the list first, and that takes computational
power right?

But, storing data in a _Data Structure_ like a Tree instead of _Linear Data
Structure_ like an array is actually **more efficient**; and this is something
we've are already discussed with _Tree Data Structure_.

As we **insert items**, if we **sorted** them, it's actually gives us better
performance then adding it to an on **unsorted List** that we have to search
through one day; and because in a Tree, where we make a decision, should we go
left or right?, and we discard half the items every step, this should trigger
something in your brain saying, "oh, this is a Divide and Conquer approach",
which gives us a `O(log n)` time.  Because `O(log n)` comes from the fact that,
we're not visiting all nodes. Each step down the Tree, we're eliminating nodes.

So, this is the deal with Binary Search, `[1]` you split a list, over sorted
item, `[2]` and decide from there, whether item you're looking for is in the
left or the right of the list?, and because the List is Sorted, you can make
that decision very easily, with just comparing things;

</br>

![chapter-12-7.gif](./images/gif/chapter-12-7.gif "Binary Search Animation")
</br>

We just keep going until we find what we want, in this case number `34`. We make
`3` decisions.

With this, it's make sense; because, if you're a teacher that's looking at stack
of essays and papers by students; if that stack of paper is _not organized_,
then you have to go through in one by one to find, let's say _Timmy paper_; but,
if the stack of paper is _sorted alphabetically_, then you can find _Timmy_ by
dividing the papers half each time until you get to _Timmy_.

Just like a phone book, we start with `n` element, then we step down, we have
`n` divide by _two elements_ remaining; and as we step down, we have `n` divided
by _four elements_ remaining, and we keep going until we find our element.

In the Sorting section, we learn that Merge Sort and Quick Sort are doing the
same thing.

We also learned how actually Search through this Tree in our [Data
Structure](../chapter-8-data-structure-trees/BinarySearchTree.js) section right?
With Linear Search we have `for-loops`. With Binary Search Tree, we have our
'lookup()' method, where we checked the **_left node_** and the **_right
node_**, and divide up the list using a `while-loop` in half each time.

</br>

![chapter-12-2.png](./images/chapter-12-2.png "Searching or Traversals")
</br>

So, we know how to do Linear Search and Binary Search. We know that Binary
Search is going to be `O(Log n)` Time Complexity **versus** Linear Search which
is `O(n)`.

But, what about the rest? Well up until this point, we've talked a out when we're
Searching for an item, where we know that `34` exists; our list is Sorted in
a Binary Search Tree; and we know where to go, left or right;

But sometimes, we have to do something call **Traversals**, and Traversals
simply means, well, going from node to node, either finding a specific thing, or
making sure that you touch every single node. Perhaps we don't want to add
a color attribute to each node here. Perhaps we want to update these numbers and
multiply them by two, in that case we have to visit every single node. How we do
that?

Let's find out in the next chapter.

**[⬆ back to top](#table-of-contents)**
</br>
</br>
