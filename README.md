[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NehM89hy)
# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case $\Theta$ complexity of this implementation is $\Theta(E) $. The algorithm first starts off with pushing the start vertex onto the path and checking if start == end. This takes constant time. Next, the for 
loop iterates for each edge that the vertex shares. So if it shares an edge with two vertices it will iterate two times. This will iterate E times, where E is the number of edges connected to the vertex. Inside 
the for loop it checks to see if the new vertex has already been visited, if it hasn't then a new array is initialized by recursively calling augmented path. This will search the vertice's neighbors for the end 
vertex. Once it finds the end vertex it will return the path. If it does not find the end vertex, it will clear the path, and search the next edge.  In the worst case, the end vertex doesn't exist or isn't 
connected to the start vertex by a path. In this case the for loop will iterate through all edges connected to the start vertex, and any edges connected to those vertices. The for loop will iterate E times per 
vertex, and it will search all vertices of the graph that are connected. The time complexity is $\Theta (E)$ where E is the number of edges that connect each vertex. If in the worst case, the vertex doesn't 
exist, or isn't connected to the graph, then every edge will need to be searched. The algorithm will recurse for each connecting edge, and the for loop will iterate E times for each edge connected to that vertice.
If the vertex is already in the path, and there are no other unvisited vertices, then it will return an empty array to the previous call. It will then "reset" it's path to only contain the start vertex, and it
will continue to search the other edges if it has any. In this case, we see that the runtime relies on the number of edges in the graph that are connected to the start vertex. To show this, if we consider a
disconnected graph with 5 vertices, but only 1 vertex is connected to the start, it will only search that one edge even though there are 5 vertices in the graph. Example picture is below:

        A
      /       C    D    E
    B
