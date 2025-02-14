const menteeUrl = 'https://mentor-mentee-gold.vercel.app/mentee/login';
const mentorUrl = 'https://mentor-mentee-gold.vercel.app/mentor/login';
const closeDialogBtn = document.getElementsByClassName("dialog-close-btn");
const mentorLoginBtn = document.getElementById("login-btn");
const menteeLoginBtn = document.getElementById("mentee-login-btn");
const mentorLoginDialog = document.getElementById("mentor-login-dialog");
const menteeLoginDialog = document.getElementById("mentee-login-dialog");
const landingPageContent = document.getElementsByClassName("main")[0]; 

function openPage(button) {
    if (button.id === 'btn1') {
        landingPageContent.style.display = "none";
        mentorLoginDialog.show();
    }

    if (button.id === 'btn2') {
        landingPageContent.style.display = "none";
        menteeLoginDialog.show();
    }
}

closeDialogBtn[0].addEventListener('click', () => {
    landingPageContent.style.display = "flex";
    loginDialog.close();
});

closeDialogBtn[1].addEventListener('click', () => {
    landingPageContent.style.display = "flex";
    menteeLoginDialog.close();
});

// Action going to be done after Mentor login
mentorLoginBtn.addEventListener('click', () => {
    const userId = document.getElementById('form-userid').value;
    const pass = document.getElementById('form-password').value;

    let mentorLoginInfo = {
        email: userId,
        password: pass
    }

    fetch(mentorUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mentorLoginInfo)
    })
        .then((response) => {
            
            if(!response.ok){
                throw new Error("Login Failed!");
            }
            mentorLoginDialog.close();

            //Storing login data to fatch on another page
            localStorage.setItem("mentorLoginInfo", JSON.stringify(mentorLoginInfo));
            return response.json()
        })
        .then((result) => {
            localStorage.setItem("mentorObject", JSON.stringify(result));
            console.log("Mentor Login Result: ", result);
            window.location.href = "../Mentor_Page/mentor.html";           
        })
        .catch((error) => {
            console.log("Some error occured!", error);
            alert("Login failed!");
        })
});


//           <<<<<<<< Mentee login action >>>>>>>>
menteeLoginBtn.addEventListener('click', () => {
    const userId = document.getElementById('mentee-userid').value;
    const pass = document.getElementById('mentee-password').value;

    let menteeLoginInfo = {
        email: userId,
        password: pass
    }
    if(menteeLoginInfo.email && menteeLoginInfo.password){
    fetch(menteeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menteeLoginInfo)
    })
        .then((response) => {
            if (!response.ok) {
                console.log("No response.")

                throw new Error("Login failed!");
            }
            menteeLoginDialog.close();
            localStorage.setItem("menteeLoginInfo", JSON.stringify(menteeLoginInfo));
            return response.json()
        })
        .then((result) => {
            localStorage.setItem("menteeObject", JSON.stringify(result));
            window.location.href = "../Mentee_Page/mentee.html";
        })
        .catch(error => {
            console.log("some error");
            alert("Login Failed!");
        })
    }
    else{
        alert("All fields are required!");
    }
});

