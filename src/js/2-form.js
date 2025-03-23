const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");

form.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", function (){
        this.placeholder = "Type area";
    });
    input.addEventListener("blur", function(){
        this.placeholder = "";
    });    
});

const textEmail = form.elements.email;
const textMessage = form.elements.message;

const LSKey = "feedback-form-state";


if(localStorage.getItem(LSKey) !== null){

const valueLS = JSON.parse(localStorage.getItem(LSKey))

formData.email = valueLS.email;
textEmail.value = valueLS.email;

formData.message = valueLS.message;
textMessage.value = valueLS.message;

}

console.log(formData);



form.addEventListener("input", inputForm);

function inputForm(event){

    if(event.target.nodeName === "INPUT"){
        formData.email = event.target.value.trim() ;
    }else{
        formData.message = event.target.value.trim() ;
    }
   localStorage.setItem(LSKey,JSON.stringify(formData)) 
}

form.addEventListener("submit",submitForm);

function submitForm(event){
    event.preventDefault();

    if(textEmail.value.length && textMessage.value.length)
    {
        console.log(formData);
        formData.email = "";
        formData.message = "";
        localStorage.removeItem(LSKey);
        form.reset();
    }else{
        alert('Fill please all fields');
    }
}