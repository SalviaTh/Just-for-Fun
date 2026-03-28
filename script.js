const Coloritem=document.querySelectorAll("li");
const scene=document.getElementById("scene-container");
Coloritem.forEach(item => {
    const color=item.textContent;
    const pill=document.createElement("div");
    pill.classList.add("pill");
    pill.textContent=color;
    pill.style.background=color;
    scene.appendChild(pill);
});