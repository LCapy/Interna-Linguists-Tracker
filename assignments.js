document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('assignmentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        assignLinguist();
    });
});

function importData() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to import.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = e.target.result;
        processImportedData(data);
    };
    reader.readAsText(file);
}

function processImportedData(data) {
    // Implement data processing logic
    console.log('Data Imported:', data);
}

function assignLinguist() {
    const linguistName = document.getElementById('linguistName').value;
    const project = document.getElementById('project').value;
    const date = document.getElementById('date').value;

    // Validate inputs
    if (!linguistName || !project || !date) {
        alert('Please fill in all fields.');
        return;
    }

    // Handle assignment logic
    console.log(`Assigning ${linguistName} to ${project} on ${date}`);

    // Update calendar view
    updateCalendar(linguistName, project, date);
}

function updateCalendar(linguistName, project, date) {
    const calendarView = document.getElementById('calendarView');
    // Implement calendar update logic
    console.log(`Calendar updated with ${linguistName}'s assignment to ${project} on ${date}`);
}
