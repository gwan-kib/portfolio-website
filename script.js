    function dropdownMenu() { // to open and close dropdown menu
    const dropdown = document.getElementById("artMenu");

    dropdown.classList.toggle("open");

    if (dropdown.classList.contains("open")) {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    } else {
        dropdown.style.maxHeight = "0px";
    }
}

function copyText() { // supposed to be used to copy my name to the clipboard when its clicked
    const text = document.getElementById("sidebarName").innerText;

    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Copied to clipboard!");
    }) .catch((err) => {
        console.error("Failed to copy: ", err);
});
}

function toggleSidebar() { // to open and close the sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}
