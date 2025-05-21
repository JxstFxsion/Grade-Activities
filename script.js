// JavaScript logic for Grade Activities

// Stores all activity entries
let activities = [];

function clearError() {
  document.getElementById("errorMsg").innerText = "Error Message:";
}

function setError(message) {
  document.getElementById("errorMsg").innerText = "Error Message: " + message;
}

// Add an activity row
function addActivity() {
  clearError();

  const name = document.getElementById("activityName").value.trim();
  const weight = parseFloat(document.getElementById("activityWeight").value);

  if (name === "") {
    setError("Activity name is rejected.");
    return;
  }

  if (isNaN(weight) || weight < 1 || weight > 100) {
    setError("Weight is rejected.");
    return;
  }

  activities.push({
    name: name,
    weight: weight,
    grade: ""
  });

  document.getElementById("activityName").value = "";
  document.getElementById("activityWeight").value = "";

  renderTable();
}

// Add grade to a specific activity
function addGrade() {
  clearError();

  const grade = parseFloat(document.getElementById("gradeValue").value);
  const index = parseInt(document.getElementById("gradeActivityNo").value) - 1;

  if (isNaN(grade) || grade < 0 || grade > 100) {
    setError("Grade is rejected.");
    return;
  }

  if (isNaN(index) || index < 0 || index >= activities.length) {
    setError("Activity No is rejected.");
    return;
  }

  activities[index].grade = grade;

  document.getElementById("gradeValue").value = "";
  document.getElementById("gradeActivityNo").value = "";

  renderTable();
}

// Delete the last activity
function deleteActivity() {
  clearError();

  if (activities.length === 0) {
    setError("No more activities to remove.");
    return;
  }

  activities.pop();
  renderTable();
}

// Render the activities table
function renderTable() {
  const tableBody = document.querySelector("#activityTable tbody");
  tableBody.innerHTML = "";

  activities.forEach((act, i) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${act.name}</td>
      <td>${act.weight}</td>
      <td>${act.grade !== "" ? act.grade : ""}</td>
    `;

    tableBody.appendChild(row);
  });
}
