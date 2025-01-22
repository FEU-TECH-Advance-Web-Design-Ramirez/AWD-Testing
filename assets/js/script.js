// Element Variables
const valueInput = document.getElementById('value');
const nameInput = document.getElementById('name');
const addBtn = document.getElementById('add');
const transactionTblBody = document.getElementById('transaction-list');

let counter = JSON.parse(localStorage.getItem('counter')) || 0;

let transactionsList = JSON.parse(localStorage.getItem('transactions')) || [];

if (transactionsList.length > 0) {
    transactionsList.forEach(transaction => {
        TableRowSetter(transaction);
    });
}

function TableRowSetter(transaction) {
    const newRow = document.createElement('tr');
    newRow.id = transaction.id;
    newRow.innerHTML = `
    <td>${transaction.id + 1}</td>
    <td>${transaction.name}</td>
    <td>${transaction.value}</td>
    <td><button class="delete" onclick="deleteTransaction(${transaction.id})">Delete</button></td>
    `;
    transactionTblBody.appendChild(newRow);
}

function addTransaction() {
    // Create a new row
    TableRowSetter({
        id: counter++,
        name: nameInput.value,
        value: valueInput.value
    });

    // Add the transaction to the list
    transactionsList.push({
        id: counter++,
        name: nameInput.value,
        value: valueInput.value
    });

    // Save the transactions to the local storage
    localStorage.setItem('transactions', JSON.stringify(transactionsList));
    }
    // Save the counter to the local storage
    localStorage.setItem('counter', JSON.stringify(counter));

function deleteTransaction(id) {
    // Remove the transaction from the list
    transactionsList = transactionsList.filter(transaction => transaction.id !== id);

    // Remove the transaction from the table
    document.getElementById(id).remove();
    
    // Save the transactions to the local storage
    localStorage.setItem('transactions', JSON.stringify(transactionsList));
    // Save the counter to the local storage
    localStorage.setItem('counter', JSON.stringify(counter));
}
