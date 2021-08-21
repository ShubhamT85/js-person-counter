let countValue = document.getElementById("count-el");
let saveValue = document.getElementById("save-el");
let count = 0;
let saveData = "";

function increment() {
    count = count + 1;
    countValue.innerText = count;
}

function save() {
    saveValue.textContent += count + " - ";
    countValue.textContent = 0;
    count = 0;
    saveData = saveValue.textContent;
    if (saveData.length > 100) {
        alert('Maximum limit reached, entries cleared !!');
        saveValue.textContent = "Previous Entries : ";
        countValue.textContent = 0;
        count = 0;
    }
}

function clearEntries() {
    if (saveValue.textContent == "Previous Entries : ") {
        alert('Already cleared');
    }
    else if (confirm('Clear all entries ?')) {
        saveValue.textContent = "Previous Entries : ";
        countValue.textContent = 0;
        count = 0;
    }
}