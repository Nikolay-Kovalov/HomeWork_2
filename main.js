const navList = document.getElementById('navList');

const statusArr = ["User", "Admin", "Owner"];
function renderNavLink(status) {
    switch (status) {
        case "Admin":
            const li = document.createElement('li');
            li.classList.add('navigation__item');

            const link = document.createElement('a');
            link.classList.add('navigation__link');
            link.href = "./password.html";
            link.textContent = "Change password"
            li.appendChild(link);
            navList.appendChild(li);
            break;
        
        case "Owner": 
              const li2 = document.createElement('li');
            li2.classList.add('navigation__item');

            const link2 = document.createElement('a');
            link2.classList.add('navigation__link');
            link2.href = "./password.html";
            link2.textContent = "Change password"

            li2.appendChild(link2);
            
            const li1 = document.createElement('li');
            li1.classList.add('navigation__item');

            const link1 = document.createElement('a');
            link1.classList.add('navigation__link');
            link1.href = "./generateLink.html";
            link1.textContent = "Generate pictures's link"

            li1.appendChild(link1);
            navList.append(li2, li1);
            break;
        default:
            break;
   } 
}

document.addEventListener('DOMContentLoaded', () => {
    onDomLoaded(statusArr[1])
})

function onDomLoaded(status) {
    if (status === "Admin") {

        renderNavLink("Admin")
    

    } else if (status === "Owner") {
   
        renderNavLink("Owner")
         
 
    } 
}














// const usersSelect = document.getElementById('usersSelect');
// const usersSelectBtn = document.getElementById('usersSelectBtn');
// const navList = document.getElementById('navList');

// function renderNavLink(status) {
//     switch (status) {
//         case "Admin":
//             const li = document.createElement('li');
//             li.classList.add('navigation__item');

//             const link = document.createElement('a');
//             link.classList.add('navigation__link');
//             link.href = "./password.html";
//             link.textContent = "Change password"

//             li.appendChild(link);
//             navList.appendChild(li);
//             break;
        
//         case "Owner": 
//               const li2 = document.createElement('li');
//             li2.classList.add('navigation__item');

//             const link2 = document.createElement('a');
//             link2.classList.add('navigation__link');
//             link2.href = "./password.html";
//             link2.textContent = "Change password"

//             li2.appendChild(link2);
            
//             const li1 = document.createElement('li');
//             li1.classList.add('navigation__item');

//             const link1 = document.createElement('a');
//             link1.classList.add('navigation__link');
//             link1.href = "./generateLink.html";
//             link1.textContent = "Generate pictures's link"

//             li1.appendChild(link1);
//             navList.append(li2, li1);
//             break;
//    } 
// }

// if (usersSelect !== null) {
//    usersSelect.addEventListener('change', onUserSelectChange); 
// }

// function loadFromLocaleStorage(key) {
//     const savedData = localStorage.getItem(key);
//     return JSON.parse(savedData)
// }

// usersSelect.value = loadFromLocaleStorage('status')

// document.addEventListener('DOMContentLoaded',()=>{onDomLoaded(usersSelect.value)} )

// function onDomLoaded(status) {
//     if (status === "Admin") {
//         if (navList.children[2] && navList.children[1]) {
//             navList.children[2].remove();
//             navList.children[1].remove();
//             renderNavLink("Admin")
//         } else {
//             renderNavLink("Admin")
//         }
   
//     } else if (status === "Owner") {
//         if (navList.children[1]) {
//             navList.children[1].remove()
//             renderNavLink("Owner")
//         } else {
//             renderNavLink("Owner")
//         }
//     } else if (status === "User") {
//         if (navList.children[2] && navList.children[1]) {
//                navList.children[2].remove();
//             navList.children[1].remove();
//         } else if(navList.children[1]) {
//             navList.children[1].remove(); 
//         }
//     }
// }

// function onUserSelectChange(evt) {
//     if (evt.target.value === "Admin") {
//         if (navList.children[2] && navList.children[1]) {
//             navList.children[2].remove();
//             navList.children[1].remove();
//             renderNavLink("Admin")
//             location.href='./'
//         } else {
//             renderNavLink("Admin")
//             location.href='./'
//         }
   
//     } else if (evt.target.value === "Owner") {
//         if (navList.children[1]) {
//             navList.children[1].remove()
//             renderNavLink("Owner")
//               location.href='./'
//         } else {
//             renderNavLink("Owner")
//               location.href='./'
//         }
//     } else if (evt.target.value === "User") {
//         if (navList.children[2] && navList.children[1]) {
//                navList.children[2].remove();
//             navList.children[1].remove();
//             location.href='./'
//         } else {
//             navList.children[1].remove(); 
//             location.href='./'
//         }
//     }

//     localStorage.setItem('status', JSON.stringify(evt.target.value))
// }


