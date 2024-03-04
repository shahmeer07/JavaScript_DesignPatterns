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