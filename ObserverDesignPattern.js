// The Observer design pattern is a behavioral pattern used in software engineering. It defines a one-to-many dependency between objects so that when one object changes state, all its dependents (observers) are notified and updated automatically.

// In simpler terms, the Observer pattern is like subscribing to a magazine: whenever a new issue comes out, subscribers receive it automatically without having to check for updates themselves.

// This pattern is commonly used in scenarios where changes to one object need to be propagated to multiple other objects or modules, such as:

// User interface components (like buttons, sliders, etc.) that need to respond to changes in underlying data.
// Event handling systems, where multiple objects need to be notified of certain events.
// Distributed systems or message passing architectures, where different parts of the system need to be kept in sync with each other.
// Model-View-Controller (MVC) architectural pattern, where the view needs to be updated based on changes in the model.
// Overall, the Observer pattern helps in building loosely coupled systems where objects can communicate without needing to know much about each other, enhancing modularity and maintainability.


function Subject() {
    this.observers = []
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn)
    },
    unsubscribe: function (fnToRemove){
        this.observers = this.observers.filter ( fn => {
            if (fn !== fnToRemove)
                return fn 
        })
    },
    fire: function(){
        this.observers.forEach( fn => {
            fn.call()
        })
    }
}

const subject = new Subject()
function observer1 (){
    console.log("Observer 1 is firing ")
}
function observer2 (){
    console.log("Observer 2 is firing ")
}

subject.subscribe(observer1);
subject.fire()
subject.unsubscribe(observer1)
subject.fire()
subject.subscribe(observer2)
subject.fire()
