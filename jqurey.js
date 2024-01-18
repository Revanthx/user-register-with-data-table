$(document).ready(function() {
  $("#user-entry-form").submit(function(event) {
    event.preventDefault();

    const firstName = $("#first-name").val();
    const lastName = $("#last-name").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();
    const age = $("#age").val();
    const gender = $("#sex").val();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newRow = $("<tr>").html(`
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td><i class="material-icons btn-delete">delete</i></td>
    `);

    newRow.find(".btn-delete").click(function() {
      newRow.remove();
    });

    $("#user-data-table").append(newRow);
    $("#user-entry-form")[0].reset();

    alert("User data saved successfully ! Press ok to continue" );
  });

  $("#btn-clear").click(function() {
    $("#user-data-table").html("");
  });
});