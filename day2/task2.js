document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var membership = document.getElementById('membership').value;
    var newRow = "<tr><td>" + name + "</td><td>" + contact + "</td><td>" + membership + "</td><td><button onclick='deleteRow(this)'>Delete</button></td></tr>";
    document.getElementById('customerBody').insertAdjacentHTML('beforeend', newRow);
    document.getElementById('customerForm').reset();
});
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}