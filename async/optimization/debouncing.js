// debouncing ensures a function executes ONLY AFTER a specified time has passed SINCE THE LAST TIME IT WAS CALLED.

// the function WAITS until the event storm stops before executing. 

//Characteristics

// 1. delays the execution until the events stop for a specified period
// 2. reset the timer on each new function call
// 3. combines multiple rapid calls into one single execution
// input fields, search bar, auto save features 



function debounce(func, delay){
    let timeoutId;

    return function(...args){
        const context = this;

        clearTimeout(timeoutId);

        //set a new timer
        timeoutId = setTimeout(()=>{
            func.apply(context, args);
        }, delay)
    }
}

function logScroll(){
    console.log("Scrolled at", Date.now())
}


const debouncedScroll = debounce(logScroll, 5000);

logScroll();
debouncedScroll();
debouncedScroll();
debouncedScroll();
debouncedScroll();
debouncedScroll();
debouncedScroll();
debouncedScroll();
debouncedScroll();



// debounce and throttle both are techniques to control how frwquently a function is executed
// Throttle guarantees a function executes only once in a specified time
// Debounce delays the execution of a function with a delay time 

// Use cases

// search input fields (wait for user to stop typing)
//form validation
// button click prevention 
// auto save functionality