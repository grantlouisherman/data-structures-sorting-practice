class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor(){
        this.head = null;
    }
    
    insert (node) {
        if(!this.head){
            this.head = node;

        }else{
            let list = this.head;
            
            while(list.next){
                list = list.next;
            }
            list.next = node;
        }
    }

    getHead(){
        return this.head;
    }

}



class ToDoList {
    constructor(){
        this.LL = new LinkedList();
        this.tasks = [];
    }

    addTask(task){
        this.LL.insert(new Node(task));
    }
   
    getAllTasks(){
        let iterator = this.LL.getHead(); 
        while(iterator.value){
            
            this.tasks.push(iterator.value);
            if(!iterator.next){
                break;
            }else{
                iterator = iterator.next;
            }            
        }
        
        return this.tasks;
    }
}



let tasks = ["Get Food", "Do Laundry", "Pay Rent", "Help Mom", "Move Car", "Walk Dog", "Practice Coding"];
let list = new ToDoList();

tasks.forEach(task => {
    list.addTask(task)
})







