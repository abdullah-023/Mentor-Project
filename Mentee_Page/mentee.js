const menteeLoginInfo = JSON.parse(localStorage.getItem("menteeLoginInfo"));
const menteeObj = JSON.parse(localStorage.getItem("menteeObject"));

const menteeDetailsDiv = document.getElementById("mentee-details");
const doubtButton = document.getElementById("doubt-btn")
const doubtDialog = document.getElementById("doubt-dialog")
const form = document.getElementById("doubt-form");
const doubtSubmitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");


menteeDetailsDiv.innerHTML = `<p>Name: ${menteeObj.name}</p>
                <p>Branch: Internet of Things</p>
                <p>Year: 3rd</p>
                <p>Email: ${menteeObj.email}</p>
<p>ID: ${menteeObj.menteeId}</p>`;

doubtButton.addEventListener('click', ()=>{
    doubtDialog.showModal();
})

cancelBtn.addEventListener('click', ()=>{
    doubtDialog.close();
})

doubtSubmitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let doubtForm = document.getElementById("doubt-form")
    const doubt = new FormData(doubtForm);
    const doubtJson = {};

    doubt.forEach((value, key) => {
        doubtJson[key] = value;
    });
    if (doubtJson.heading != "" && doubtJson.body != "") {
    console.log(doubtJson)
    doubtForm.reset();
    doubtDialog.close()
}
    else{
        console.log("empty fields are not allowed.")
    }
})

doubtDialog.addEventListener('click', e =>{
    if(e.target === doubtDialog){
        doubtDialog.close();
    }
})


function sendMsg() {
    const msg = (document.getElementById("msg-input"));
    alert(`Your messege "${msg.value}" has been sent.`);
    msg.value = '';
}