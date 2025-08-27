### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

### Answers-->
1. ***getElementById-->Using this we can use the data written on HTML by inputting the specific ID name
   ***getElementsByClassName-->Using this we can use the data of classname given on HTML 
   ***querySelector / querySelectorAll-->By using querySelector we can find any id or class...
            here querySelector will show the very first item only if input it by a classname and querySelectorAll will show the all elements used by same classname.
2. We can create and insert a new element into the DOM by using document.createElement('')
3. **Event Bubbling** is process of climbing codes from initial item to it's parentNode by parentNode step by step to the final parentNode..when we click on a button it will bubble to it's parentNode to the final parentNode and show all outputs that we have coded. 
4. By **Event Delegation** we can handle same type buttons or items click-handler in a single eventListener by using parentNode and children to get the desired items..It is very useful in a project which consists lots of buttons or events...It also reduces code for same type events by gathering all items in a single function.
5. ***preventDefault()-->It generally prevents the page from reloading after submitting any form.
   ***stopPropagation()-->It stops the process of any event-bubbling to it's final parentNode.
   Difference--->    
   preventDefault()                         
              -->Stops browser from it's default reloading system                              
              -->Can be used to control behavior of a targeted element of code           
   stopPropagation()
              -->Stops the propagation to the final parentNode
              -->Can be used to control event propagation