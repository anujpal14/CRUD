// Sample data
let data = [
 
];

function updateTable() {
    const table = document.getElementById('dataTable');
    table.innerHTML = '';

    for (const item of data) {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${item.BookID}</td>
            <td>${item.AuthorName}</td>
            <td>${item.Price}</td>
			<td>${item.Published}</td>
			<td>${item.IsActive}</td>
            <td>
                
                <button onclick="deleteItem('${item.BookID}')">Delete</button>
            </td>
        `;
    }
}

function createItem() {
    const BookID= document.getElementById('BookID').value;
    const AuthorName = document.getElementById('AuthorName').value;
    const Price = document.getElementById('Price').value;
	const Published= document.getElementById('Published').value;
	const IsActive= document.getElementById('IsActive').value;
   {
    }

    const newItem = { BookID, AuthorName,Price,Published,IsActive};
    data.push(newItem);
    updateTable();

    // Clear input fields after creating
    document.getElementById('BookID').value = '';
    document.getElementById('AuthorName').value = '';
    document.getElementById('Price').value = '';
	document.getElementById('Published').value = '';
	document.getElementById('IsActive').value = '';
}


function deleteItem(BookID) {
    const index = data.findIndex(item => item.BookID === BookID);

    if (index !== -1) {
        data.splice(index, 1);
        updateTable();
    }
}

// Initial table population
updateTable();
