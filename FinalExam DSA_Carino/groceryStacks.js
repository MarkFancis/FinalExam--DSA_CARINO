let groceryStack = [];

function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
    } else {
        console.log("Top item: " + groceryStack[groceryStack.length - 1]);
    }
}

function push(item) {
    groceryStack.push(item);  
    console.log("Item pushed: " + item);
    peek(); 
    printStack(); 

function pop() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty. Nothing to pop.");
    } else {
        let removedItem = groceryStack.pop();  
        console.log("Item popped: " + removedItem);
        peek();  
        printStack();  
    }
}

function printStack() {
    if (groceryStack.length === 0) {
        console.log("Current stack: Empty");
    } else {
        console.log("Current stack: " + groceryStack.join(" -> "));
    }
}

function getGroceryItems() {
    for (let i = 0; i < 5; i++) {
        let item = prompt(`Enter grocery item ${i + 1}:`);
        push(item); 
    }
}

function allowPopOperations() {
    let continuePopping = true;
    while (continuePopping && groceryStack.length > 0) {
        let popAction = prompt("Would you like to pop an item from the stack? (yes/no):");
        if (popAction.toLowerCase() === "yes") {
            pop();  
        } else {
            continuePopping = false;  
        }
    }
}

getGroceryItems();  
allowPopOperations();  