const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);


let SignUpBTn = document.querySelector("#SignUpBTn");
let logInBTn = document.querySelector("#logInBTn");
let Signup_form = document.querySelector("#Signup-form")
let login_form = document.querySelector("#login-form")
let inputs = document.querySelectorAll("input");
console.log(inputs);
console.log(Signup_form)

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
    
    inputs.forEach((input) =>{
        input.value = "";
    })

})
