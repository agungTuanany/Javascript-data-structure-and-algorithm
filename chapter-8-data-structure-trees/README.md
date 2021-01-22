# Chapter-8 Data Structure Tree


## Table of Contents

1. [Tree Introduction](#tree-introduction)
2. [Binary Trees](#binary-trees)
3. [Big-O log of N](#big-o-log-of-n)
4. [Binary Search Tree](#binary-search-tree)
5. [Balanced vs Unbalanced BST](#balanced-vs-unbalanced-bst)
6. [BST Pros and Cons](#bst-pros-and-cons)
7. [Exercise Binary Search Tree](#exercise-binary-search-tree)
8. [Solution Insert method](#solution-insert-method)

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

We can represent a `BinaryTreeNode` simply having a value and then a left and a
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

A **Perfect Binary Tree** has _everything filled in_, that means all the leaf
nodes are full, and there's no node that only has one child; a node either has
zero children or two children; also the bottom layer of the Tree is completely
filled, nothing missing.

Versus a **Full Binary Tree** which simply says that _a node has either zero or
two children but never one child_.

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
talkie about Binary search Trees you're going to start seeing `O(log N)`
notation, but what that's mean?, in the next lecture I want to talk about
`O(log N)` and why Trees allow us to have some thing like this, and what the
implications are. I'll see you in the next one.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

### Big-O log of N

In previous lectures we talked about a special characteristic or properties of
Binary Trees; and because of the way Binary Trees are structured, there is
a certain way for us to calculate the number of nodes they have;


```javascript
Level 0: 2^0 = 1
```

For example, on `Level 0` of a Binary Tree, that is the very top level, where we
only have one Root node, we can calculate how many node they are by doing two to
the _power_ of the level which is `0`. So if I do `2^0` it's going to equal `1`,
that is we have one node.


```javascript
level 1: 2^1 = 2
```

If we go our level down, and say what about `Level 1`, how many levels do we
have? Well we have `2^1` which equal `2`.

```javascript
Level 2: 2^2 = 4
```

All right keeps going, what about `Level 2`, how many nodes in total do we have
on that level? Well we have `2^2` which is equal to `4`.

```javascript
Level 3: 2^3 = 8
```

Then one last level, let's say `Level 3`, how many level three in a perfectly
balanced Binary Tree? Well two to the power of three `2^3` is going to equal
`8`.

We just do some math here, and I promise that, this course is going to be mathy,
but bear with me here. I want to explain to you what `O(log N)` means.

Knowing what we just did now, and knowing that these are the total number of
nodes; if we imagine above data was in an array, that means that we have eight
places that we need to iterate through eight nodes that we need to check,
perhaps to search for something.

```javascript
# of nodes = 2^h - 1 = 7

log of nodes = height

// # = number
// h = height
```

> `h` starts from count of 1

Well, based on this formula here, that means that we can find out the number of
nodes in a Tree by doing `2^h` or the _height_ that is the level. If we know
how many levels are Binary Tree is, we can find out how many total nodes there
are with formula `2^h - 1`. Why this `-1`? Well if we go back to our diagram
(chapter-8-3.png), this Binary Tree we have `7` total nodes and the height of
the Tree it's **3 level deep**. So `2^h - 1` is `7` nodes.

```javascript
log of nodes = 100

log 100 = 2;

10^2 = 100

log of nodes = steps

```

If we actually simplify `2^h - 1` we can just simply say `log nodes = height` or
the _steps_. I use _log_ here just think is you wondering _log_ simply mean that
`log 100` is equal to `2`; because `10` to the _power_ of `2` (`10^2`) equal
`100`.

All I did was using this `10^2` and simplified, and said that `log nodes
= height` and we've dropped `-1` here, because it's insignificant, but `log
nodes` is the number of steps or height; let's just change to _steps_ that we
would use in a Tree.

Let's me show you on a diagram.

</br>

![chapter-8-2.gif](./images/gif/chapter-8-2.gif "Leaf level steps")
</br>

`log N` is simply means that based on the height, the maximum number of
decisions; let's say we're looking for a specific node that we're going to take
is `log N`, and that means is The Root node we are looking for? No, then we
either go Left leaf or Right leaf of node, unless we go Left leaf and say, "Is
this the node that we're looking for?" (that's our second steps), if the answer
is _no_ then either to go Left or Right, and we say is this node we are looking
for? Yes, so we have maximum `3` steps here; instead of, if we went `7` steps,
you can see that there's some sort of efficiencies here.



Coming up, we're going to learn about **binary Search Tree** where we're able to
minimize those steps, instead of visiting every single node. So, when you see
the notation of `O(log N)` don't get startled (shocked); all that saying is,
that the choice of the next element on which to perform some sort of action is
_one of several possibility_ and only one needs to be chosen; we don't have to
check both.

In a good way to think about `log N` is when you're looking through
a _phone-book_. You don't actually check every single person in a phone-book do
you? Instead you can simply do what's called **Divide and Conquer** by looking
based on where their names alphabetically begin. You would open up the book to
where you think the letter will start with the name will start with, and then
keep dividing and conquering until you get that person. You only need to
explore a _subset of each section_ before you eventually find someone's phone
number. Just think of that. `O(log N)` is just like looking through a phone
book.

The reason I just talked about `O(log N)` in such detail is, because it's an
important concepts, it's really really fast, as you can see

</br>

![chapter-8-7.png](./images/chapter-8-7.png "Tree Big-O notation")
</br>

`O(log N)` is in the light green good area, that's even better than `O(n)`
linear time, because we don't need to check every single element.

In the next lecture, we're going to talk about the most common Tree that you're
going to see in a lot of places called Binary Search Tree. As the name suggests,
it allows us to search really efficiently and just by looking at above graph,
you might be able to think about how a place like Google, and Google search
might find this extremely useful. When we search through Google, they have a ton
of Websites, a ton of nodes to search through. How are they able to give us an
answer to our searches so fats? If they used `O(n)` complexity it's going to
take a lot of time, and it's going to be really expensive for them.  So instead
they use a Tree structure or Tree data structure; so that our search can be
a lot faster with something like `O(log N)`.

**[⬆ back to top](#table-of-contents)**
</br>
</br>


## Binary Search Tree

Let's continue our discussion with the most common Tree data structure. That is
the Binary Search Tree, which is a subset of Binary Tree which we talked about.
What is a Binary Search Tree?

Well, a Binary Search Tree are really really good as the name suggests at
searching, they're great for comparing things. Now, why would this better than,
let's say hash table? Where we can just give it a key and get the item right
away; well, this data structure preserves (maintain) relationship, just like you
wouldn't want your folders on your computer to be a hash table data structure,
because there is no sort of relationship, instead you want your folders to have
relationships, to have a parent folder and a subfolder and in a subfolder.

</br>

![chapter-8-6.png](./images/chapter-8-6.png "Binary Search Tree Rules")
</br>


A thing like Binary Search Tree allows us to preserve these relationship. When it
comes to Binary Search Trees, these are the rules:

1. All child nodes in the Tree to the Right of the Root node must greater than
   current node.

   Than means if I keep going to the Right leaf, the number or the value of the
   node constantly increases. You can see above diagram from `101` to `105` to
   `144`.

   If I keep going in `Level 2` here, the Right leaf start from `33` to `37`,
   that is increasing.

   If I go to the Left leaf, from Root Tree from `101` to `33` to `9`, that
   always decreasing.

   Same with `Level 2` on Right Leaf, start from `105` to `54`,

   If I go to the Left leaf it's decreases, to Right leaf it's increases.

2. A node can only have up to two children.

   Because, it's a Binary Tree.

The advantage of a Binary Search Tree is that, well it should be obvious (clear)
with the name right? Searching and Lookup is very easy to find what you're
looking for, because if I'm looking for let's say number `37` I can start at
`101`, and say is `37` less then `101` (`37 < 101`)? Yes, okay then go to the
Left leaf; is `33` less than `37` (`33 < 37`)? No, then go to the Right leaf,
and I find `37`.

I don't have to iterate in a linear fashion through each node, and that is what
Lookup means. `Lookup O(log N)` is simply means that I can search for an item
a lot faster than, let's say an array, where I have to iterate and loop through
every single item.

What about `Insert O(log N)` and  `Delete O(log N)`?, in hash table I can do
insert and delete really fast at `O(1)` constant time, but with a Binary Search
Tree it looks like I can only do `O(log N)`, that should be obvious right?
Because in order for us to insert or delete something in a Binary Search Tree,
we need to figure out where to insert the item, or where the items is before we
delete it.

For example, with `105`, let's say we want to delete `105`, well we have to
first from the Root node get to `105` and then we have to decide which node is
going to take it's place, in this case because `54` is less then `144`, `144` is
going to come up over at `105` place.

As you can imagine, this operation although seems simple right now, if we had
a lot of children and a lot of nested nodes, a lot of reordering needs to
happen, and shift our nodes around. Don't worry, we're actually going to code
this so you understand this, just like we have in previous data structure; but
I want to demonstrate instead of me just using my cursor here, a nifty little
tool to visualize how Binary Search Tree work, and how their operations are
`O(log N)`.

We're going to use [visualgo](https:visualgo.net), again and I'll link this and
I highly recommend that you all play around with Binary Search Trees, but let's
do a couple of operations here.

</br>

![chapter-8-3.gif](./images/gif/chapter-8-3.gif "Binary Search Example")
</br>


See that it generated a random Binary Search Tree for me, let's say I want to do
an Insert, and I want to insert, let's say the number `1`, by click go, it's
going to traverse, figure out where it wants to insert and it's going to insert
`1`.

</br>

![chapter-8-4.gif](./images/gif/chapter-8-4.gif "Binary Search Example")
</br>

What if I want to insert perhaps number `44`, this time around, if I hit go,
a traverses figures out where `44` should go, and places it on the Right leaf
with parent node `38`. So we're always traversing and figuring out using `O(log
N)`, where we should place the item.

</br>

![chapter-8-5.gif](./images/gif/chapter-8-5.gif "Binary Search Example")
</br>

What about removing? Let's add one more node, I add `51` so it will add on the
Right leaf for parent node `50`. Let's say we want to delete `50`, now if
I remove `50`, I hit go, I find `50`, remove it, and then I have to replace with
`51` and go up.

So there's a bit of a tough little logic happening there. We're gonna have to
incorporate and we're gonna get to that, but for now as I end this lecture,
I recommend that you go to visualgo and play around with Binary Search Tree, so
that you get accustomed to; and as you play with it, see if you notice a problem
that we might encounter with Binary Search Tree, because we going to discuss it
in the next lecture.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Balanced vs Unbalanced BST

While playing with visualgo did you notice a problem with Binary Search Trees?
If not let me demonstrate something to you.

</br>

![chapter-8-8.png](./images/chapter-8-8.png "Balanced vs Unbalanced Binary Search Tree")
</br>

Let's say I keep inserting here, let's say `86` and then while that's going,
I'll also insert `90`, Finally I'll insert `99`. What is the problem with this
Binary Search Tree? Well, you can imagine a situation where we have this really
**_Unbalanced Binary Search Tree_**, where all the nodes just keep getting added
to the **Right Leaf**. If we imagine we don't have the **Left leaf Tree
section**, all of sudden _turn into a Link List_, where we're just loop through
every single node.

</br>

![chapter-8-6.png](./images/chapter-8-6.png "Balanced Binary Search Tree Rules")
</br>

This is a big problem that comes with Binary Search Trees, that is you can have
_Balanced Search Tree_ like the one above, that gives us this `O(log N)`, and
performance,

</br>

![chapter-8-8.png](./images/chapter-8-9.png "Unbalanced Binary Search Tree")
</br>


But then also have _Unbalanced_ ones, where it sort of turns into a long linked
list, where instead of being able to do the `O(log N)` operations, you now have
to move through every single node and Lookup, and Insert become `O(n)` or linear
time, and you even saw in our visualgo demonstration how slow it took to insert
items because they had to loop through so many things.

One of the keys that you'll have to remember and this is a question that you
might get asked in interviews is, **why Unbalanced Binary Search Tree is bad?**,
and I hope this demonstrate why it's not a good idea.

</br>

![chapter-8-10.png](./images/chapter-8-10.png "Binary Search Tree Cheatsheet")
</br>

Ideally we want to balance our Search Trees, so that we can have `O(log N)`
performance optimization. If we go to our [Big-O
Cheatsheet](https://www.bigocheatsheet.com/), we see that with Binary Search
Trees, that we have all `O(log N)` for most things, which is average, but when
it comes to **worst case**, when we have _Unbalanced Tree_ that all operations are
`O(n)` or linear time.

So, you might be asking yourself, **how do you balance a Tree?** And luckily for
us, there's algorithms that help us do that. It is really _advanced_, and we
will talk about it after we build our own Tree, and some of the options that we
have.

</br>

![chapter-8-11.png](./images/chapter-8-11.png "Binary Search Tree Road map")
</br>

For example, we have things like, **AVL Tree**, and **Red Black Tree**, that
allow us to make sure that our Binary Search tree is going to be balanced;
luckily for us they are built in most programming languages (libraries and
tools), and in interview question, they won't really ask you to Balance a Binary
Search tree, because well it can get pretty complicated, and time consuming and
interviews usually don't have enough time to get you to do that. The idea is to
able to talk about it, and know that there are ways top balance a Search Tree,
and able to talk about the trade offs just like we did.

Now, we're going to talk about these two ways of balancing this Search Trees in
upcoming lecture; but for now let's just focus on the basics in the next
lecture.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## BST Pros and Cons

</br>

![chapter-8-12.png](./images/chapter-8-12.png "Binary Search Tree Pros and Const")
</br>

Before we code our Binary Search Tree, let's just go over the performance
implications and why we might want to use it over the data structures.

It's strengths are that it has really good performance across the board.You saw
that most operations or all operations in a **Binary Search Tree are better then
`O(n)`**, assuming that the Binary Search Tree is Balanced. It is also
**Ordered**, and because we can place the node anywhere in memory, we can just
have **flexible size**, we can keep growing our Tree.

The downside is, as you may have noticed it has **No `O(1)` operation**. We
usually have to do some sort of traversal through the Tree for any sort
operation; so compared to an array, a _Lookup_ for example, will be a lot faster,
because we have  `O(log N)` for searches versus of if we iterate through an
entire array, if the _array is unsorted_. _Inserts_ and _Deletes_ are also
faster then an array, unless the array is adding to the end, otherwise array
have to shift all the indexes versus Binary Search Tree that is just `O(log n)`.

What about Binary Search Tree versus Hash Tables (hash map)? Well, although hash
tables allow us to Insert Search at constant time `O(1)`, with Binary Search
Trees we have _sorted data_, and we also have this structure **Parent** and
**Child** relationship that you won't be able to get to much with hash tables.
A good thing to keep in mind is, that Binary Search Tree aren't fastest for
anything; remember their operations are usually always `O(log N)`.

On average an array or an object will have faster operations, but there are
certain condition where they do outperform objects in arrays `{[]}`, so Binary
Search tree do perform really well, as long as you make sure that you stay away
from the cases that we discussed and we balance our Binary Search Tree.

Enough talk, enough slides, I think to fully grasp and understand how Trees
work, we should code our own, I'll see you in the next lecture.

Enough talk, enough slides, I think to fully grasp and understand how Trees
work, we should code our own, I'll see you in the next lecture.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Exercise Binary Search Tree

It's time to write our own Binary Search Tree. In this exercise I'm going to
challenge you to write your own before you read the solution.

Keep in mind, that just like with Linked Lists, it's going to require us to keep
track of the nodes to the _Left_ and to the _Right_ of the current node; and also we
have a _value_ associated with a node.

I recommend you actually dray  this out on a piece of paper to understand,
because keeping ever thing in your head and the calculations, might be a little
bit difficult.

```javascript
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // Code here
    }

    lookup(value) {
        // Code here
    }

    // remove(value) {
        // Code here
    // }
}


function traverse(node) {
    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? traverse.(node.rigth);
    console.log(tree)

    return tree;
};
```

I have started here with all the essentials you need. We've created a Binary
Search Tree class, We have Node class that we ca use. We start our Binary Search
Tree with `this.root` of `null`, because we don't have anything yet; but
remember we have the Root which is our top most node, which currently is empty.

We're going to initialize our Binary Search Tree, and hopefully we're able to
_create two methods_, `[1]` _Insert_ and `[2]` _lookup_.

Our goal is to create this tree over below,

```
               9

        4             20

     1     6     15        170
```

`9` as the Root node, then `4` and `20` as it's children, an then `4` has `1`
and `6` as it's children; and `20` has `15` and `170` as it's children.

So ideally, if we implement Insert correctly, we can say or run the command
below,

```javascript
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
```

Then, Ideally after running above command, you're be able to create this Tree
data structure.

At the bottom here, I create a small little function for you called
`traverse()`, for now I want you just ignore it, because we're using something
called recursion here, which we haven't got into yet; But I only create this
function, for you to be able to test out your code, and to make sure that it
actually works.

All you need to do in order for you to verify that this is working is, to say
`JSON.stringify(traverse(tree.root))`. We just give the Root node of our Tree,
and it's going to traverse and printout everything into a string, so that you
can check in the console that your Tree actually is working.

In the solution lecture, I'm going to demonstrate how this works, but I've added
this `traverse()` function as a little helper for you in case you want to double
check your work to make sure that it's correct.

By the way, the `lookup()` method should simply be return the node that we're
looking for, and if it doesn't find the node, then we can _return normal or
false_, whichever you want.

I've added `remove()` method here, which we're going to talk about later,
because it's a little bit difficult; so for now just worry about Insert and
Lookup, and I'll see you in the solution lecture.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Solution Insert method

Final `insert()` method,

```javascript

insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
        this.root = newNode;
    };

    console.log(newNode);
};

const tree = new BinarySearchTree();

tree.insert(9);

// Result
// Node { left: null, right: null, value: 9  }
```

Well comeback, hopefully that wasn't too bad. Keep in mind that when it come
into interviewing, interviewers want you to know that you understand the
_contents_. You won't necessarily have to code a Binary Search Tree from
scratch; Most of the time, at least. Because in real life you have things like
this [library](#https://github.com/afiore/arboreal), that somebody else created
that allows to use Tree Traversal Manipulation techniques, because this has
already been done before, and you can see by using a library like this, that you
can just use it and create the Tree that you want.

Most likely you're not implement it from scratch by yourself, but we do want to
understand the fundamentals and how it works. So, if this challenging to you,
don't get frustrated, this doesn't make you a bad engineer or a bad coder,
you're just working towards building those fundamentals, so that you can use
tools like library that I mentioned to you earlier in the future, and still
understand how it works.


### Chunked Code


Let's get to the answer, I want to create a tree that looks like below,

```
               9

        4             20

     1     6     15        170
```

So the first things I'm going to do is, work on the `insertion()` method.

```javascript
const newNode = new Node();
```

Now, Within this the very first thing I want t do is to say, well, we want to
create the `newNode` and we'll say `new Node()` will be the value; so, we just
creating a new node class instantiating with the value, and that's are our new
node now, so we have references to it.

The first thing we want to check, well, if the Tree is empty and there's no Root
node, well we should add this as our Root node.


```javascript
if (this.root === nuill) {
    this.root = newNode;
};
```

So I'm going to say, `this.root === null`, if that the case, then simply make
the Root node, our current node that we inserted; Nice and easy, an just to
check that this is working.


```javascript
tree.insert(9);
// Result
// Node { left: null, right: null, value: 9  }
```

I run this command `tree.insert(9)` and click run, there you go, our Node has
a `value` of `9`; `left` as `null`, `right` as `null`, because it's the only
note;

For now, we see that our `insert()` is working, only for if the Root node is
`null`;

```javascript
if {
    // ....
    // ....
}
else  {
    while(true) {
        if () {

        }

    }
}
```


Let's continue if that's not the case, we'll say, `else {}`, if the root node is
already fill, we'll say that the `currentNode` will be the `this.root`, because
we have to traverse this node, and we won't how how long we're going to traverse
the node, and we will know how long we going o traverse this node for; We want
to keep traversing until find a place to insert this.

This is a bit tricky, bu something you'll get used to, when you're building
Trees. We ant to use `while()` loop, and the condition we're going to use is
`true`; that means, just keep looping every time, because `true` is always going
to equal to `true`; and we have to be careful here, if we do this, we want to
make sure that there is a way for us to exit out of this loop, otherwise we're
going to have an infinite loop, and will crash our little page here.

So, what are the condition that we're going to loop through? We want to traverse
through the Tree; well, the first check we're going to do is say, if `value
< currentNode.value`, remember `value` is what we insert. If `value` is less than the
`currentNode.value`


