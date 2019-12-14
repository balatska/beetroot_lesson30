// Создать HTML-страницу для отображения/редактирования текста. 
// При открытии страницы текст отображается с помощью тега div. 
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, 
// который теперь можно редактировать. 
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. 
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let showing = document.getElementById("showing");
let edition = document.getElementById("editing");

document.body.onkeydown = changeTextCondition;

function changeTextCondition(e) {
    if (e.ctrlKey && (e.code === "KeyE")) {
        e.preventDefault();
        edition.style.display = "block";
        edition.textContent = showing.textContent;
        showing.style.display = "none";
    } else if (e.ctrlKey && (e.code === "Equal")) {
        e.preventDefault();
        showing.style.display = "block";
        showing.textContent = edition.value;
        edition.style.display = "none";
    }    
}
