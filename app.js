const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);


let SignUpBTn = document.querySelector("#SignUpBTn");
let logInBTn = document.querySelector("#logInBTn");
let Signup_form = document.querySelector("#Signup-form")
let login_form = document.querySelector("#login-form")
let inputs = document.querySelectorAll("input");
let logout_btn = document.querySelector("#logout-btn");
let username_dash = document.querySelector("#username");
let email_dash= document.querySelector("#email");
console.log(username_dash.innerHTML);
console.log(email_dash.innerHTML);

// console.log(inputs);
// console.log(Signup_form)
console.log()

SignUpBTn && SignUpBTn.addEventListener("click", () => {
    window.location.href = "./signup.html"
})

logInBTn && logInBTn.addEventListener("click", () => {
    window.location.href = "./logIn.html"
})


Signup_form && Signup_form.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log("okkk")
    let userDta = new FormData(Signup_form);
    let userInfo = Object.fromEntries(userDta);
    console.log(userInfo);
username_dash.innerHTML = `${userInfo.username}`
email_dash.innerHTML = `${userInfo.email}`
    //Database insert:-
    const { error } = await client
        .from('Users-data')
        .insert({
            "name": userInfo.username,
        }
        )

    //Auth
    const { data, error: usererror } = await client.auth.signUp({
        "email": userInfo.email,
        "password": userInfo.password,
    })
    console.log(data);

    inputs.forEach((input) =>{
        input.value = "";
    })
    if(data){
        //sweetalert
        Swal.fire({
  title: "SignUp!",
  icon: "success",
  draggable: true
});
//nextpage:-
setTimeout(() =>{
 window.location.href = "./dashboard.html"
},2000)
    }else{
         Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Try Again",
         });
    }
})

login_form && login_form.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log("okkk")
    let userDta = new FormData(login_form);
    let userInfo = Object.fromEntries(userDta);
    console.log(userInfo);

    //logIn:-
    const { data, error } = await client.auth.signInWithPassword({
        "Email": userInfo.email,
        "password": userInfo.password,
    })
    console.log(data);
    if(data){
             //sweetalert
        Swal.fire({
  title: "LogIn!",
  icon: "success",
  draggable: true
});
//nextpage:-
setTimeout(() =>{
 window.location.href = "./dashboard.html"
},3000)
    }else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Try Again",
});
    }
    inputs.forEach((input) =>{
        input.value = "";
    })

})


logout_btn && logout_btn.addEventListener("click" , async() =>{
    const { error } = await client.auth.signOut()
    if(error){
        console.log(error.message)
    }else{
  window.location.href = "./index.html"
    }
  
})