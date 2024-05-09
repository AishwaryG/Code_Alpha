// Sample data for demo
let workoutData = [
  { activity: "Running", duration: 30 },
  { activity: "Weightlifting", duration: 45 },
];

// Function to display logged workouts
function displayWorkouts() {
  const workoutList = document.getElementById("workout-list");
  workoutList.innerHTML = "";
  workoutData.forEach((workout) => {
    workoutList.innerHTML += `<p><strong>${workout.activity}</strong> - ${workout.duration} mins</p>`;
  });
}

// Function to add new workout
function logWorkout(activity, duration) {
  workoutData.push({ activity, duration });
  displayWorkouts();
}

// Function to handle form submission
document
  .getElementById("workout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const activity = document.getElementById("activity").value;
    const duration = document.getElementById("duration").value;
    logWorkout(activity, duration);
    // You can also integrate with APIs for calorie tracking or other features here
  });

// Function to display goal progress
function displayGoalProgress(goal) {
  const goalProgress = document.getElementById("goal-progress");
  // Logic to calculate and display goal progress
  goalProgress.innerText = `Your goal: ${goal}`;
}

// Function to handle goal setting form submission
document
  .getElementById("goal-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const goal = document.getElementById("goal").value;
    displayGoalProgress(goal);
  });
// Example function to fetch calorie data from an API
function fetchCalories(activity, duration) {
  fetch(
    `https://api.calorietracker.com/calories?activity=${activity}&duration=${duration}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(`Calories burned: ${data.calories}`);
      // You can display this data to the user or use it for further processing
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Example function to fetch GPS data
function fetchGPSData() {
  // Make API request to fetch GPS data
}

// You can call these functions inside appropriate event handlers or wherever needed in your application
