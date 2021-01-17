# Chapter-8 Data Structure Tree


## Table of Contents

1. [Tree Introduction](#tree-introduction)
2. [Binary Trees](#binary-trees)

</br>

## Tree Introduction

Welcome back, it's time to learn another data structure. This is a big one, and
exciting one at that, because it's going to introduce a low more new topics,
especially when we get into our algorithms as well, they're called Trees,

</br>

![chapter-8-1.png](./images/chapter-8-1.png "Trees Introduction")
</br>

Trees are data structure that have what we call a **hierarchical structure**, as
opposed to something like linked list or arrays which are **linear**. Trees can
**have zero or more child nodes**.

You see, a Tree usually start with a _single_ **Root**  node, or a **Parent**
node, and every child of the Tree descends from this Root node, so it's kind
like an inversed Tree like above; and every **Child** of a node descends from only
one Parent.

So you have a Parent child relationship that you see is, you need directional,
that is it's going one way; and you also have **Leaf** nodes which are the very
end of a three data structure.

Finally, within a tree you can have things like **Subtrees**, such as the area
over here circled in red `3, 6, 7` from a Subtree.

Tree data structure are very important, because you work with them every day.
If we go t twitter.com or any website, for that matter and we open the developer
tools, if I go to the Elements tab, you see our web pages are created by
something called **DOM** (document object model), and this is a Tree data
structure. It's doesn't look like a tree that I just showed you, but the browser
is just making it look nice, but underneath it, we have `<head>` and `<body>`
that are children of the `<html>` tag; inside the  `<body>` we have all these
children, and inside these children we have more children and more children, and
they're all connected hierarchical to one another.

I'm sure everybody has tried to play chess online versus a computer; well,
a computer in a chess game at least back in the day before we had things like
machine learning, used a Tree data structure to make a decision. Should I make
this move?; or should I make that move?; and it would pick moves based on which
move had the better outcome. Facebook comment for example are a Tree data
structure, where I can comment on a friends photo, and their friend can comment
on my comment.

Family Trees can be represented in a Tree data structure; and for us engineers
and programmers, you might have heard of the [abstract syntax
Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree), if I google abstract
syntax tree in an image tab, this is how program are and code is usually being
run. Usually we write code and then it gets broken down by the machine into this
abstract syntax tree, so that it understands what we wrote down.

The beauty of Trees is, that we **use the same principle as we did in linked
list**, that is we have Nodes, and these Nodes can contains any type of
information that we want, we can have user information, we can just have numbers
like we have in picture above, anything we want we can contain within a node.

</br>

![chapter-8-2.png](./images/chapter-8-2.png "Linked list Trees examples")
</br>

Now you might be thinking, this kind reminds me of a linked list and you'd be
right, linked list is technically a type of Tree, but with just one single path
and it's linear, there's only one way to go from top to bottom, versus what
we've seen before in a normal tree like (pic: chapter-8-1.png).

Now the thing to keep in mind here, there might be different than linked list
is, that a node can only point to a child as you can see all the arrow point
down. There's always one entry point, which is the Root, but nodes don't really
have to reference their parent.

Now, just like in real life, there are many types of Three data structures that
we can have. If you go to Wikipedia and you look for all the [Tree data
structures](https://en.wikipedia.org/wiki/Tree_data_structure), it's going to
well intimidate you, that's for sure, because look how many different types of
Trees we have.

Just like in real life how we have all these different types of Trees, there's
different types of Trees that we can have for a specific use case, but don't get
overwhelmed. In this course we're going to go over the main ones that get used,
I would say 90% of the time, and the ones that you're most likely going to
encounter during an interview, because at the end of the day, once you
understand what a Tree data structures like, how to create it, how to perhaps
use some actions on it, then all the other Trees that you saw are just minor
alterations to what we know.

I want to warn you back in the day, when I took a class on data structures,
these parts especially Trees, really really dragged on, and made me not
interested in data structures, because there's so many things you can talk about
when it comes to Trees. I'm going to try and keep engaged to the best of my
ability and try be an efficient, through this section; and show you the
important to know for an interview and to lay the foundation, not to teach you
every single Tree that is which is not going to benefit. With that in mind I'll
see you in next lecture.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Binary Trees

We're now into the Tree data structure section, if we go to our [mind
map](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link).
As we can see, Trees or linked lists are a type of a Tree that we've already
talked about, but there's a few others that we  haven't yet to talk about, we're
going to cover that and get familiar with the main different types by starting
off with Binary Tree, let's get in to it.

</br>

![chapter-8-3.png](./images/chapter-8-3.png "Binary Tree")
</br>

A Binary Tree is something you've likely seen before, and it's a type a Tree
with a few rules that are applied to it; But they're quite straight forward,
each node can only have either `0`, `1` or `2` nodes, and each child can only
have one parent. Above diagram is a Binary Tree.

</br>

![chapter-8-4.png](./images/chapter-8-4.png "Not a Binary Tree")
</br>

Above diagram is not a Binary Tree, because it has three children, or at least
one of the nodes have three children.

If we go to look up at Binary Tree diagram, **each node represents a certain
state**, and this is very similar to what we've done in the past, especially
with linked list, if we take a look with an example below,

```javascript
function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
```

In order for me to create a Binary Tree, I can just create a function called
`BinaryTreeNode`, and this `BinaryTreeNode` perhaps will get a `value` and will
simply have `this.value` associated with it, which is the `value` that we give it
inside of the function. We have two other properties which is a pointer to the
left side of the Tree `this.left = null`, and a pointer to the right side of the
Tree `this.right = null`. That's it.

We can represent a `BinaryTreeNod` simply having a value and then a left and a
right property. Very similar to what we did, or very similar principle to what
we did with linked lists.

We're going to actually code a Tree and create a Tree data structure like we
have for past data structures; but I want to also point out a few
**_terminology_** we might come across and that are **_important_**. In this
case we're looking at something called a Tree is **completely full**, that means
there no gaps in the Tree. Let me show you what I mean,

</br>

![chapter-8-5.png](./images/chapter-8-5.png "Tree terminology")
</br>

A **Perfect Binary Tree** has everything filled in, that means all the leaf
nodes are full, and there's no node that only has one child; a node either has
zero children or two children; also the bottom layer of the Tree is completely
filled, nothing missing.

Versus a **Full Binary Tree** which simply says that a node has either zero or
two children but never one child.

Why is this important?, because this (Perfect Binary Tree) is really really
efficient and something that is desirable (hoped-for); when Binary Tree are
perfect like this, they have **two really interesting properties**:

> `[1]` the number of total nodes on each level doubles as we move down the Tree

For example here, we have one node in the next level we have two; so we just
doubled the nodes. In the next level we have `4` nodes, so we doubled `2` to
`4`; if we had another level that's a perfect Binary Tree, we'd have `8` nodes,
so were doubling every time.

> `[2]` the number of nodes on the last level is equal to sum of the number of
> nodes on all the other levels  plus one `(+1)`

What I mean, if I take a bottom level that is `4` for the second property states
that all the nodes above it `+1` is going to equal the bottom level, which means
other words, that about half of our node are on the last level; and this is
brings up a really interesting point; by organizing our data in this way, we
have half of this data in the bottom level, if somehow we can avoid visiting
every node even if the node we're looking for is at the very bottom, perhaps
there is some efficiencies that we can have and you'd be right. Because of this
type of structure you're going to see a new notation of Big-O,

</br>

![chapter-8-6.png](./images/chapter-8-6.png "Tree Big-O notation")
</br>

Something that we've been waiting for a long time `O(log N)`. When we start
talkie about Binary search Trees you're going to start seeing `0(log N)`
notation, but what that's mean?, in the next lecture I want to talk about
` 0(log N)` and why Trees allow us to have some thing like this, and what the
implications are. I'll see you in the next one.

**[⬆ back to top](#table-of-contents)**
</br>
</br>
