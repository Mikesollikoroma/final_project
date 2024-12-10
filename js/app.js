document.addEventListener('DOMContentLoaded', () => {
    const scheduleData = {
        grade1: [
            { subject: "Math", time: "8:00 AM - 9:00 AM" },
            { subject: "English", time: "9:15 AM - 10:15 AM" },
            { subject: "Science", time: "10:30 AM - 11:30 AM" }
        ],
        grade2: [
            { subject: "History", time: "8:00 AM - 9:00 AM" },
            { subject: "Math", time: "9:15 AM - 10:15 AM" },
            { subject: "Art", time: "10:30 AM - 11:30 AM" }
        ],
        grade3: [
            { subject: "Biology", time: "8:00 AM - 9:00 AM" },
            { subject: "Physics", time: "9:15 AM - 10:15 AM" },
            { subject: "Chemistry", time: "10:30 AM - 11:30 AM" }
        ]
    };

    // Get the grade selector and schedule container
    const gradeSelector = document.getElementById("gradeSelector");
    const scheduleContainer = document.getElementById("scheduleContainer");
});