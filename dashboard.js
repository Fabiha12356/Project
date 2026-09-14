const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);


let username_dash = document.querySelector("#username");
let email_dash= document.querySelector("#email");
console.log(username_dash.innerHTML);
console.log(email_dash.innerHTML);


