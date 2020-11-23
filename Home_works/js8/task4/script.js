
const array_users = 'array_users'
let tempUser = {};
const form1 = document.forms.form1;


form1.submit1.onclick = ev =>{
ev.preventDefault();
let person = {};
    for (let i = 0; i < form1.children.length; i++) {
        const element = form1.children[i];
        if (element.name && element.type !=='submit'){
           person[element.name] = element.value;

       }
    }
    console.log(person);
    person.id = new Date().getTime();//дістаємо рандомну айдішку
}

function saveUser(user){
    if(localStorage.hasOwnProperty(array_users)){

    }
    else{
        localStorage.setItem(array_users,JSON.stringify([user]))
    }
}