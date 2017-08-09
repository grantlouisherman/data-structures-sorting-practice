class Node:
    def __init__(self, value):
        self.value = value
        self.connections = []

    
    

class Queue:
    def __init__(self):
        self.Queue = []
        self.head = 0
        self.tail = 0
    
    def enqueue(self,value):
        self.Queue[self.tail] = value
        self.tail += 1
    
    def dequeue(self):
        head = self.Queue[self.head]
        if self.head != self.tail:
            self.head += 1
        return head


class Graph:
    def __init__(self):
        self.graph = {}
    
    def addingNode(self, value):
        self.graph[value] = 

    def breadthFirstSearch(self):
        values = []
        queue = Queue()
        queue.enqueue(self.nodes[0])
        while(len(queue.Queue):
            head = queue.dequeue()

    
    
    
    # def addConnection(self,node):
    #     self.connections.append(node)
            



x = Graph()
x.addingNode("T")
print x.nodes