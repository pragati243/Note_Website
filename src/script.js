const main = document.querySelector("#main")
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click",function() {
    addNotes()
})

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    localStorage.setItem("notes",JSON.stringify(data))
}
const addNotes = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
            <div class="tool">
                <i class=" trash fa-solid fa-trash"></i>
                <i class="save fa-solid fa-floppy-disk"></i>
            </div>
            <textarea></textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",function() {
            note.remove()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",function() {
            saveNotes()
        }
    )
    main.appendChild(note);
}