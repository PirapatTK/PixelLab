const recentActivity = [
    {
        "name": "John Doe",
        "email": "john@example.com",
        "joined": "Jan 21, 2020",
        "type": "New",
        "status": "Liked"
    },
    {
        "name": "Jane Smith",
        "email": "jane@example.com",
        "joined": "Feb 11, 2021",
        "type": "Regular",
        "status": "Active"
    },
    {
        "name": "Tom Johnson",
        "email": "tom@example.com",
        "joined": "Mar 5, 2022",
        "type": "Premium",
        "status": "Inactive"
    },
    {
        "name": "Alice Brown",
        "email": "alice@example.com",
        "joined": "Apr 10, 2019",
        "type": "Premium",
        "status": "Liked"
    },
    {
        "name": "Bob White",
        "email": "bob@example.com",
        "joined": "May 3, 2020",
        "type": "New",
        "status": "Active"
    },
    {
        "name": "Charlie Black",
        "email": "charlie@example.com",
        "joined": "Jun 15, 2021",
        "type": "Regular",
        "status": "Inactive"
    },
    {
        "name": "Diana Green",
        "email": "diana@example.com",
        "joined": "Jul 27, 2022",
        "type": "Premium",
        "status": "Liked"
    }
];

function recentActivityTable(data) {
    const tableBody = document.getElementById('table-recent-body');
    
    // Clear any existing rows
    tableBody.innerHTML = '';

    // Loop through each item in the data array and create a table row
    data.forEach(item => {
        const row = document.createElement('tr');

        // Loop through each property of the item object
        for (let key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Populate the table when the page loads
window.addEventListener('DOMContentLoaded', () => recentActivityTable(recentActivity));
