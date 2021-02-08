# Chapter-9 Data Structure Graph

## Table of Contents

1. [Graph Introduction](#graph-Introduction)
2. [Types of Graphs](#types-of-graphs)
3. [Exercise Guess The Graph](#exercise-guess-the-graph)

</br>

## Graph Introduction

Let's learn about the last data structure in this course, Graphs; Graphs are one
of the most useful and most used data structure in computer science. When it
come to modeling real life.

</br>

![chapter-9-1.png](./images/chapter-9-1.png "Graphs Introduction")
</br>

In short a Graph is simply a set of values that are related in a pair wise
fashion; and you can see above, it's look a little network, there's connection
to different nodes. In Graph, each item is called a **node** or a **vertex**.

</br>

![chapter-9-1.gif](./images/gif/chapter-9-1.gif "Graphs vertex/node and edges")
</br>

Node are then connected with **edges**. As you can imagine. Graph are great data
structure to model real world relationships. We're presenting length's, Graphs
are ideal for cases when you're working with things that connect to other
things, kind like how the internet works. We can use Graphs to represent maybe
Friendships, maybe Family Tree; we can use Graphs to represent networks in the
worldwide web, or we can use Graphs to represent roads one city to another and
the roads that are connected.

As you can imagine Facebook uses it for their social network, Amazon uses it for
their recommendation engines; and Google Maps uses Graphs for determining the
shortest path to where you want to go.

So, let me ask you a question, do you think above diagram is a Graph? Well, yeah
obviously we just went through it.

</br>

![chapter-9-2.gif](./images/gif/chapter-9-2.gif "Graphs kinds")
</br>

What about above? Yep they are all Graphs. Even the (blue dot) that kind of
looks like a linked list, that's a Graph.

As you can see in our Mind Map diagram, Graphs encompass things that we've
learned before, such as Trees and Linked List. Linked List are type of Tree.
Trees are a type of Graph.

So, in the next couple lectures, let's learn all about Graphs.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Types of Graphs

As we saw, there are many types of Graphs but there are certain characteristics
that allow us to describe, let's go over them.

</br>

![chapter-9-2.gif](./images/gif/chapter-9-2.gif "Types of Graphs Directed vs
Undirected")
</br>

One thing that you really want to get yourself familiar with, is the ida of
**Directed** and **Undirected**. These types of Graphs are useful for describing
traffic flow for example; of some kind of a system in which movement is not by
directional, that means like where I can go back and forth between nodes, I can
only go in one direction.

A good think about Undirected Graph is, to think of as a highway between two
cities, where you can go back and forth. On the other hand Directed Graphs will
be a one way street, where you can only go one way.

Another way to think about it, is Facebook, what kind of Graph do you think
Facebook has? Well, it has an Undirected Graph, because when I'm connected to a
friend, that friend is also connected to me, it's not one way.

What about Twitter? Twitter is more Directed, because if I have my profile,
people can follow me, and I can follow people, but if somebody follows me I
don't automatically follow them. So Twitter is more Directed.

</br>

![chapter-9-3.gif](./images/gif/chapter-9-3.gif "Types of Graphs Unweighted  vs
Weighted")
</br>

Another way to describe Graph is, the idea of Weighted Graphs, Unweighted
Weighted Graphs; and as you can see from above images, values can be applied to
various aspects of a Graph, not just the nodes; remember the nodes can carry any
type of information but with Graphs you can also have information in the Edges,
and the connections. Maybe you're going on a trip, and try to figure out the
most efficient way to visit sites that interest you. Well in that case, Google
Maps would use a Weighted Graph to decide what is the shortest path for you to
get there.  These sort of Graphs are used a lot in calculating optimal paths,
the fastest way to get to let's say `1` to `6`.

</br>

![chapter-9-4.gif](./images/gif/chapter-9-4.gif "Types of Graphs Cyclic  vs
Acyclic")
</br>

Lastly, another way to describe Graph is Cyclic or Acyclic; when you have
vertices connected in a circular fashion, it called a cycle; when you can go
from one node to another to another and then back to that original; versus
Acyclic where you can't do that.

Cyclic Graphs are really common in, an especially Weighted Graphs, such as
Google Maps, because most of the time there is a way to get back.

So, now that we understand a few ways to describe Graphs, let me show you my
favorite Graphs of all time.

</br>

![chapter-9-5.gif](./images/gif/chapter-9-5.gif "Types of Graphs")
</br>

Above images is my Favorite Graphs. It's by the _Opti project_, and it is a
partial map of the internet.

If you look on detail here, you see that we have IP addresses connecting to IP
addresses, and these are all nodes connected to create the internet, pretty
spectacular right? 

That is the best example of a Graph. 

So, now we understand or at least have a basic understanding of Graphs, let's do
a nice fun exercise.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

## Exercise Guess The Graph


We have our best friend visualgo, and once again hey have a great diagram for
us to play with. Now I'm going to give you four different Graphs, and you're
going to have to tell me what type of Graph it is based on while we've learn so
far, whether it's Weighted, Cyclic, Undirected, Directed.


</br>

<!-- small pic of up = 1st -->
![chapter-9-2.png](./images/chapter-9-2.png "Exercise guess Graph")
</br>

What do you think above one is?  Before I show you the answer. Above diagram is
Undirected Graph, there's no arrow Unweighted Graph, and you can see it's also
Cyclic, because you can go from `0`, `1`, `2' and back to `0`.

</br>

<!-- small pic of up = 1st -->
![chapter-9-3.png](./images/chapter-9-3.png "Exercise guess Graph")
</br>

What about next one, what type of Graph above is? Well, this is an Undirected
Weighted Graph that's also Cyclic. So, you can see that we've weights on the
edges here, there's no arrows, we can go anywhere we want, back and forth, and
we can also make Cyclic.

</br>

<!-- small pic of up = 1st -->
![chapter-9-4.png](./images/chapter-9-4.png "Exercise guess Graph")
</br>


What about this one? Above Graph is a Directed Graph, but Unweighted; and yes
even `6` and `7` here are Graph; but we see here, that it's not Cyclic, it's
Acyclic because there's no way for me to go back. Let's say `0` to `1`, I can go
back to `0`.

</br>

<!-- small pic of up = 1st -->
![chapter-9-4.png](./images/chapter-9-4.png "Exercise guess Graph")
</br>

What about this one? This, is a Directed Weighted Graph. We have weights, has
direction, and when it comes to Cyclic? No, they are no cycles, it's Acyclic.

The final challenge, what type of Graph below?

</br>

<!-- small pic of up = 1st -->
![chapter-9-4.png](./images/chapter-9-4.png "Exercise guess Graph")
</br>

Above Graph is a Directed Acyclic Graph. There's no Cyclic, and it's a Graph.
This Directed Acyclic Graph is quite common and called **DAGH**; and actually a
project like **_Ioata_** which is a pretty popular blogging project uses this
Graph, and use fancy words like Directed Acyclic Graph; but at the end of the
day, that's not impressive anymore right? We know what that is, just simply
**_Graph that goes in one direction_**.

I think it's time for us to learn how to build our own Graph. I'll see you in
the next chapter.

**[⬆ back to top](#table-of-contents)**
</br>
</br>

