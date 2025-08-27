1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


getElementById, getElementsByClassName, querySelector / querySelectorAll এর মধ্যে পার্থক্য

getElementById: একটি element return করে যেটার ID দেওয়া আছে। একেক ID শুধু একবার use করা উচিত।

getElementsByClassName: সব matching class এর elements return করে। এটা একটি live HTMLCollection দেয়।

querySelector: CSS selector দিয়ে প্রথম matching element return করে।

querySelectorAll: CSS selector দিয়ে সব matching element return করে। এটা একটি static NodeList দেয়।


2. How do you **create and insert a new element into the DOM**?

element তৈরি
const newDiv = document.createElement("div");

content এবং class যোগ করা
newDiv.textContent = "Hello World!";
newDiv.className = "my-div";

DOM-এ যোগ করা
const parent = document.getElementById("container");
parent.appendChild(newDiv); শেষ child হিসেবে যোগ অথবা
parent.insertBefore(newDiv, parent.firstChild); প্রথম child হিসেবে যোগ


3. What is **Event Bubbling** and how does it work?

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked"));
document.getElementById("child").addEventListener("click", () => console.log("Child clicked"));
যদি button-এ click করি, output হবে:
Child clicked
Parent clicked


4. What is **Event Delegation** in JavaScript? Why is it useful?


কম memory লাগে।
নতুন dynamically added element-এর জন্যও কাজ করে।

const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});


5. What is the difference between **preventDefault() and stopPropagation()** methods?


preventDefault(): browser-এর default behaviour বন্ধ করে। যেমন, link navigate বা form submit থামানো।

stopPropagation(): event bubbling বা capturing বন্ধ করে, parent element-এ event চলে না।

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // link navigate হবে না
  e.stopPropagation(); // parent element bubble হবে না
});
