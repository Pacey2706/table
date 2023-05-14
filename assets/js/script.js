const API_key = "Fd_GrT3h7zvk7al--3AzSA6fYf4";
const API_url = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {

    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(API_url, {
        method: "POST",
        headers: {
            "Authorization": API_key,
        },
        body: form,
    });

    const data = await response.json();
    

}

async function getStatus(e) {
    const queryString = `${API_url}?api_key=${API_key}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
};
function displayStatus(data) {
    document.getElementById("resultsModalTitle").innerText = "API Key Status";
    document.getElementById("results-content").innerText = `Your key is valid until: ${data.expiry}`;

    resultsModal.show();
}
