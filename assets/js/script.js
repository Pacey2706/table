const API_key = "Fd_GrT3h7zvk7al--3AzSA6fYf4";
const API_url = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));