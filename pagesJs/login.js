let changeForm
document.addEventListener("DOMContentLoaded", () => {
    const switchContainer = document.getElementById("switch-container");
    const switchLogin = document.getElementById("switch-login");
    const switchSignUp = document.getElementById("switch-sign-up");
    const switchCircles = document.querySelectorAll(".switch__circle");
    const switchButtons = document.querySelectorAll(".switch-btn");
    const signUpContainer = document.getElementById("sign-up-container");
    const loginContainer = document.getElementById("login-container");

    changeForm = () => {
        switchContainer.classList.add("is-gx");
        setTimeout(() => switchContainer.classList.remove("is-gx"), 1000);

        loginContainer.style.filter = "blur(6px)";
        setTimeout(() => (loginContainer.style.filter = "blur(0)"), 300);

        signUpContainer.style.filter = "blur(6px)";
        setTimeout(() => (signUpContainer.style.filter = "blur(0)"), 300);

        switchContainer.classList.toggle("is-txr");
        switchCircles.forEach((circle) => circle.classList.toggle("is-txr"));

        switchLogin.classList.toggle("is-hidden");
        switchSignUp.classList.toggle("is-hidden");
        loginContainer.classList.toggle("is-hidden");
        signUpContainer.classList.toggle("is-hidden");

        loginContainer.classList.toggle("is-txl");
        signUpContainer.classList.toggle("is-txl");
        signUpContainer.classList.toggle("is-z200");
    }

    switchButtons.forEach((button) => {
        button.addEventListener("click", changeForm);
    });
});
let allperson = localStorage.getItem('usersWeegs')
function saveName() {
    sessionStorage.setItem('ThisUser', event.currentTarget.value)
    //window.location='../pagesHtml/index.html'
}
//שליפת השם מהמחסנית והצגתו במסך
function getName() {
    if(sessionStorage.getItem('textColor')!=null)
    document.body.style.color=sessionStorage.getItem('textColor')
    if(sessionStorage.getItem('textFont')!=null)
    document.body.style.fontFamily=sessionStorage.getItem('textFont')
    if(sessionStorage.getItem('background')!=null)
    document.body.style.backgroundColor=sessionStorage.getItem('background')
    let p = document.querySelector('p')
    p.hidden = true
    //getItem שליפת ערך ממחסנית עי הפונקציה 
    //key מקבלת מפתח
    //value מחזירה את הערך
    //null אם לא קיים מפתח זה מחזירה 
    let e = document.getElementById('enter')
    let un = sessionStorage.getItem('ThisUser')
    let thiseDat = new Date()
    if (thiseDat.getHours() >= 5 && thiseDat.getHours() < 13)
        p.innerText = 'בוקר טוב ל'
    else if (thiseDat.getHours() >= 13 && thiseDat.getHours() < 19)
        p.innerText = 'צהריים טובים ל'
    else if (thiseDat.getHours() >= 19 && thiseDat.getHours() < 21)
        p.innerText = 'ערב טוב ל'
    else
        p.innerText = 'לילה טוב ל'
    if (un != null) {
        //נוסיף את השם למסך
        p.hidden = false
        e.hidden = true
    }
    document.querySelector('p').innerText += un
   
}

// שמירת פרטי נרשם
function enter() {
    //ביטול הפעולה
    event.preventDefault()

    if (localStorage.getItem('users') == null) {
        let users = []
        localStorage.setItem('users', JSON.stringify(users))
    }

    //נתפוס את כל הקלטים
    let arr = document.getElementsByTagName('input')
    console.log(arr);

    // הגדרת אובייקט עם הערכים
    let user = {
        // name: arr[0].value,
        email: arr[3].value,
        passWord: arr[4].value
    }
    console.log(user);
    let users = JSON.parse(localStorage.getItem('users'))
    let i
    for (i = 0; i < users.length && user.email != users[i].email; i++);

    if (i == users.length) {
        alert('יש להרשם')
        changeForm()
    }
    else {
        sessionStorage.setItem('ThisUser', users[i].name)
        window.history.back()
        
    }
}

function login() {
    //ביטול הפעולה
    event.preventDefault()
    // נכתב שוב ליתר בטחון אם המשתמש ילחץ מייד על הרשמה ולא יעבור דרך הכניסה
    if (localStorage.getItem('users') == null) {
        let users = []
        localStorage.setItem('users', JSON.stringify(users))
    }

    //נתפוס את כל הקלטים
    let arr = document.getElementsByTagName('input')
    // הגדרת אובייקט עם הערכים
    let user = {
        name: arr[0].value,
        email: arr[1].value,
        passWord: arr[2].value
    }
    sessionStorage.setItem('ThisUser', user.name)
    let users = JSON.parse(localStorage.getItem('users'))
    users.push(user)
    localStorage.setItem('users', (JSON.stringify(users)))
    //לעבור לדף הבא
    window.history.back()
}