document.addEventListener("DOMContentLoaded", () => {
    const filterDropdown = document.getElementById("event-type"); // The dropdown
    const eventList = document.getElementById("event-list");      // The event list
    const events = eventList.querySelectorAll("li");             // All event items

    filterDropdown.addEventListener("change", () => {
        const filterValue = filterDropdown.value.toLowerCase(); 

        events.forEach(event => {
            const eventType = event.dataset.type.toLowerCase(); 
            
            // Show or hide event based on filter value
            if (filterValue === "all" || eventType === filterValue) {
                event.style.display = "list-item"; // Show
            } else {
                event.style.display = "none";     // Hide
            }
        });
    });
});