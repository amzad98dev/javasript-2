let button = document.querySelector(`nav . button`);
let Sidebar = document.querySelecto(`.Sidebar`)


function SidebarTogglar (){
   Sidebar.classlist.togglar("active");
   if(Sidebar.classlist.contains("active") == true){
    button.innerHTML =`<i class="bi bi-x"></i>`;
} else{
    button.innerHTML =`<i class="bi bi-list"></i>`
}

button.addEventListener("click", SidebarTogglar);
