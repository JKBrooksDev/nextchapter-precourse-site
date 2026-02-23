/* Learning Dashboard - JavaScript Logic
    This script handles:
    - Adding study goals from the form
    - Displaying them in a list
    - Updating the total goal count */

// Select important elements from the HTML/DOM
const goalForm = document.getElementById('goal-form'); // The form element
const goalInput = document.getElementById('goal-input'); // The text input
const goalList = document.getElementById('goal-list'); // The <ul> where goals appear
const goalCount = document.getElementById('goal-count'); // The number display

// Keep track of how many goals have been added
let totalGoals = 0;

/* Event Listener : When the form is submitted */
goalForm.addEventListener('submit', function(event) {

    // Prevent the page form refreshing (default form behavior)
    event.preventDefault();

    // Get the info the user typed
    const newGoal = goalInput.value.trim(); 

    // If the input is empty, do nothing 
    if (newGoal === "") { 
        alert("Please enter a goal before submitting."); 
        return; 
    } 
    
    // Create a new <li> element to display the goal 
    const listItem = document.createElement("li"); 
    listItem.textContent = newGoal; 
    
    // Add the new goal to the list 
    goalList.appendChild(listItem); 
    
    // Increase the goal count 
    totalGoals++; 
    goalCount.textContent = totalGoals; 
    
    // Clear the input box for the next goal 
    goalInput.value = ""; 
});