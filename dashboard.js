const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);


let username_dash = document.querySelector("#username");
let email_dash= document.querySelector("#email");
let para = document.querySelectorAll(".para");
console.log(para)
console.log(username_dash.innerHTML);
console.log(email_dash.innerHTML);



let getuser = async () => {

    const { data: authData, error: authError } =
        await client.auth.getUser();
console.log(authData);
  console.log(authData.user.user_metadata.username) 

username_dash.innerHTML = authData.user.user_metadata.username;
email_dash.innerHTML = authData.user.user_metadata.email;
para[0].innerHTML = authData.user.user_metadata.username;
para[1].innerHTML = authData.user.user_metadata.username;

};

getuser();

