// what is throttling

// throttling is a performance optimization technique that limits how often a function can execute in a given time frame. When you throttle a function, it will executed at most ONCE in a specified time interval, regardless of how many times you call it. 


// characteristics

// 1. Executes a function at regular intervas during frequent events 
// 2. ignores additional calls within the given time
// 3. guarantees the execution heppens periodically
//4. perfect for events that fire rapidly or are expensive in computation 


function throttle(func, limit){
    let inThrottle;

    return function(...args){
        if(!inThrottle){
            func.apply(this, args);
            inThrottle=true;
            setTimeout(()=>{
                inThrottle=false;
            }, limit)

        }
    }
}

function logScroll(name){
    console.log("Scrolled!!!", name)
}


const throttledScroll = throttle(logScroll, 5000);


throttledScroll("shiva")
throttledScroll("Himanshu")
throttledScroll("shivam")
throttledScroll("aman")
throttledScroll()
throttledScroll()
throttledScroll()
throttledScroll()
throttledScroll()
throttledScroll()
throttledScroll()
throttledScroll()



// Use cases

// window resizing 
// mouse movement tracking 
// scroll position tracking
// game shooting mechanics 