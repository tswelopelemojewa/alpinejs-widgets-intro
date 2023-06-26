// creating a counter function

const Counter = () =>{
    return{
        count: 0,
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },
    };
}

const counter1 = Counter();
const counter2 = Counter();

counter1.increment();
counter1.increment();
counter1.increment();

counter2.increment();
counter2.increment();

// prints 3 
console.log(counter1.count);

//prints 2
console.log(counter2.count);

// Alpine.data

// ensure that alpine is properly loaded
document.addEventListener('Alpine:init', () =>{
    Alpine.data('counter', Counter); 
});



// time intervals
setTimeout(function(){
    console.log("message displayes after 3 seconds!!")
}, 3000)


// setInterval

setInterval(function(){
    console.log("This message is printed every 3 seconds....");
}, 3000)

setTimeout(function(){
    console.log("This is the first message");
  });
  console.log("This is the 2nd message - or is it?");