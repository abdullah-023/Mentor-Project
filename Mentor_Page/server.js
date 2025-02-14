const mentorUrl = 'https://mentor-mentee-gold.vercel.app/mentor/login';
const addMenteeUrl = 'https://mentor-mentee-gold.vercel.app/mentor/addNewMentee';
const menteeListUrl = 'https://mentor-mentee-gold.vercel.app/mentor/getAllMentees';
const mentorDetalilsDiv = document.getElementById("mentor-details");
const moreInfoDialog = document.getElementById("mentee-dialog");
const menteeContainer = document.getElementById("mentee-list");
const dialogCloseBtn = document.getElementById("dialog-close-btn");
const addMenteeBtn = document.getElementById("add-new-btn");

// const MentorLoginInfo = JSON.parse(localStorage.getItem("mentorLoginInfo"));
// console.log(MentorLoginInfo, "from Local Starage.");


function moreMenteeInfo(button) {
    const menteeCard = button.parentElement.parentElement;
    const menteeDetails = menteeCard.children;
    moreInfoDialog.firstElementChild.innerText = menteeDetails[1].textContent;
    moreInfoDialog.showModal();
}

dialogCloseBtn.addEventListener('click', () => {
    moreInfoDialog.close()
});


// fetch(mentorUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(MentorLoginInfo)
//     })
//     .then((response) => {

//         if (!response.ok) {
//             throw new Error("Login Failed!");
//         }
//         console.log("Mentee Login fetched.") 

//         fetch(menteeListUrl)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const menteeArray = data.menteeList;
//                 for (let i = 0; i<menteeArray.length; i++) {
//                         let card = document.createElement("div");
//                         card.setAttribute('class', 'mentee-card');

//                         card.innerHTML = `<img src = "media/mentee.png" alt = "mentee-pic" width = "80px" class= "round-profile" >
//         <div id="mentee-details">
//             <p>Name: ${menteeArray[i].name} </p>
//             <p>${menteeArray[i].email} </p>
//             <p>Mentor ID: ${(menteeArray[i].mentorId.slice(0, 10))} </p>
//             <p>Mentor: ${menteeArray[i].mentorName} </p> 
//         </div>
//         <div class="btn-section">
//                 <button id="more-info-btn" onclick="moreMenteeInfo(this)"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
//                 </button>
//                 <button>Requests</button>
//                 <button>chat</button>
//         </div>
//     </div >`;
//                         menteeContainer.appendChild(card);
//                     }
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//         return response.json();
//     })
//     .then((result) => {
//         localStorage.setItem("mentorObject", JSON.stringify(result));
//         // console.log(JSON.parse(localStorage.getItem("mentorObject")));
//         console.log("Mentor Login Result: ", result);
//     })
//     .catch((error) => {
//         console.log("Mentor login failed!");
// });



//                          <<<<<<  Fetching Mentee List   >>>>>>

fetch(menteeListUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        menteeContainer.innerText = "";
        const menteeArray = data.menteeList;
        for (let i = 0; i < menteeArray.length; i++) {
            let card = document.createElement("div");
            card.setAttribute('class', 'mentee-card');

            card.innerHTML = `<img src = "../media/mentee.png" alt = "mentee-pic" width = "80px" class= "round-profile" >
        <div id="mentee-details">
            <p>Name: ${menteeArray[i].name} </p>
            <p>${menteeArray[i].email} </p>
            <p>Mentor ID: ${(menteeArray[i].mentorId.slice(0, 10))} </p>
            <p>Mentor: ${menteeArray[i].mentorName} </p> 
        </div>
        <div class="btn-section">
                <button id="more-info-btn" onclick="moreMenteeInfo(this)"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </button>
                <button>Requests</button>
                <button>chat</button>
        </div>
    </div >`;
            menteeContainer.appendChild(card);
        }
    })
    .catch(error => {
        console.error("failed to fetch mentee list!", error);
});


mentorDetalilsDiv.innerHTML = `
            <p>Name: ${mentorObj.name}</p>
            <p>Designation: Assistant Professor</p>
            <p>Department: IoT</p>
            <p>Experience: ${mentorObj.experience} Years</p>
            <p>ID: ${mentorObj.mentorId}</p>
`;

console.log(`Token: ${ JSON.parse(localStorage.getItem("mentorObject")).token}`)

addMenteeBtn.addEventListener('click', ()=>{
    console.log("add request recieved. Processing.....")
    window.location.href = "mentee_form.html";

});






//             <<< Server Data Dummy >>>
// const data = [
//     {
//         "name": "Abdullah Ashraf",
//         "branch": "CSE-IOT",
//         "year": "3rd Year",
//         "email": "0221csiot142@niet.co.in"
//     },
//     {
//         "name": "Dinesh Coder",
//         "branch": "CSE-IOT",
//         "year": "3rd Year",
//         "email": "0221csiot042@niet.co.in"
//     },
//     {
//         "name": "Ajay Nagar",
//         "branch": "CSE-IOT",
//         "year": "3rd Year",
//         "email": "0221csiot122@niet.co.in"
//     }
// ];

// data.forEach((obj) => {
//     let card = document.createElement("div");
//     card.setAttribute('class', 'mentee-card');

//     card.innerHTML = `<img src = "media/mentee.png" alt = "mentee-pic" width = "80px" class= "round-profile" >
//         <div id="mentee-details">
//             <p>${obj.name} </p>
//             <p>${obj.branch} </p>
//             <p>${obj.year} </p>
//             <p>${obj.email} </p>
//         </div>
//         <div class="btn-section">
//                 <button id="more-info-btn" onclick="moreMenteeInfo(this)"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
//                 </button>
//                 <button>Requests</button>
//                 <button>chat</button>
//         </div>
//     </div >`;
//     menteeContainer.appendChild(card);

//     //<p>${obj.foods.dislikes} </p><p>${Math.random()} </p><p>${Math.random()+"@catmail.meo"</p>}
// });