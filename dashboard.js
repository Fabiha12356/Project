const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);


let username_dash = document.querySelector("#username");
let email_dash= document.querySelector("#email");
let para = document.querySelectorAll(".para");
let profile = document.querySelector("#profile-file");
let profile_img = document.querySelector("#preview");
let image_file = document.querySelector("#image-file");
let feelingBTn = document.querySelector("#feelingBTn");


console.log(profile_img.innerHTML)
console.log(profile);
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

profile.addEventListener("change" , () =>{
console.log("file slected")
  console.log(profile.files[0]);

  const file = profile.files[0];
     const imageURL = URL.createObjectURL(file);
    console.log(imageURL);
  
profile_img.innerHTML = `<img src="${imageURL}" alt="pic">`

})

image_file.addEventListener("change" , async() =>{
    console.log(image_file.files[0]);
    //insert:-
    const avatarFile = image_file.files[0]
const { data, error } = await client
  .storage
  .from('images')
  .upload(avatarFile.name, avatarFile, {
    cacheControl: '0',
    upsert: false
    })
  console.log(data);
  console.log(error);

})
feelingBTn.addEventListener("click", () => {
console.log("feelingbtn");

});


