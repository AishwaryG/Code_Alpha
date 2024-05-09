let workoutData = [];

let currentId = 2;

// Function to display logged workouts
function displayWorkouts() {
  const workoutList = document.getElementById("workout-list");
  workoutList.innerHTML = "";
  workoutData.forEach((workout) => {
    workoutList.innerHTML += `<div id="workout-${workout.id}">
      <p><strong>${workout.activity}</strong> - ${workout.duration} mins</p>
      <button class="btn btn-primary" onclick="deleteWorkout(${workout.id})">Delete</button>
      <button class="btn btn-primary" onclick="updateWorkout(${workout.id})">Update</button>
    </div>`;
  });
}

// Function to add new workout
function logWorkout(activity, duration) {
  currentId++;
  workoutData.push({ id: currentId, activity, duration });
  displayWorkouts();
}

// Function to delete a workout
function deleteWorkout(id) {
  workoutData = workoutData.filter((workout) => workout.id !== id);
  displayWorkouts();
}

// Function to update a workout
function updateWorkout(id) {
  const newActivity = prompt("Enter new activity:");
  const newDuration = parseInt(prompt("Enter new duration:"), 10);
  if (newActivity && newDuration > 0) {
    workoutData = workoutData.map((workout) =>
      workout.id === id
        ? { ...workout, activity: newActivity, duration: newDuration }
        : workout
    );
    displayWorkouts();
  } else {
    alert("Please enter valid activity and duration");
  }
}

// Function to handle form submission for logging workout
document.getElementById("workout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const activity = document.getElementById("activity").value.trim();
  const duration = parseInt(document.getElementById("duration").value, 10);
  if (activity && duration > 0) {
    logWorkout(activity, duration);
    // You can also integrate with APIs for calorie tracking or other features here
  } else {
    alert("Please enter valid activity and duration");
  }
});

// Array to store goals
let goals = [];

// // Function to display goal progress
// function displayGoalProgress(goal) {
//   const goalProgress = document.getElementById("goal-progress");
//   goalProgress.innerText = `Your Goal: ${goal}`;
// }

// Function to display goals
function displayGoals() {
  const goalProgress = document.getElementById("goal-progress");
  goalProgress.innerHTML = "";

  goals.forEach((goal, index) => {
    const goalDiv = document.createElement("div");
    goalDiv.id = `goal-${index}`;
    goalDiv.innerHTML = `
      <p><strong>${goal}</strong></p>
      <button class="btn btn-primary" onclick="deleteGoal(${index})">Delete</button>
      <button class="btn btn-primary" onclick="updateGoal(${index})">Update</button>
    `;
    goalProgress.appendChild(goalDiv);
  });
}

// Function to delete a goal
function deleteGoal(index) {
  goals.splice(index, 1);
  displayGoals();
}

// Function to update a goal
function updateGoal(index) {
  const newGoal = prompt("Enter new goal:");
  if (newGoal !== null && newGoal.trim() !== "") {
    goals[index] = newGoal.trim();
    displayGoals();
  }
}

// Function to handle goal setting form submission
document.getElementById("goal-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const goalInput = document.getElementById("goal");
  const goal = goalInput.value.trim();
  if (goal) {
    goals.push(goal);
    goalInput.value = "";
    displayGoals();
  } else {
    alert("Please enter a goal");
  }
});

// Initial display of goals
displayGoals();
