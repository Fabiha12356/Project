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
let postImage = document.querySelector("#postImage");
let small_avatar = document.querySelectorAll(".small-avatar");
let span_email = document.querySelector("#span-email");
let h3_user = document.querySelector("#h3-user");
console.log(span_email);
console.log(h3_user);

console.log(small_avatar);
let post_btn = document.querySelector(".post-btn");
let textArea = document.querySelector("textarea");

let recent_post = document.querySelector(".recent-post");
console.log(recent_post);

let paragraph = document.querySelector("#para");
console.log(paragraph);
console.log(paragraph.innerHTML)
console.log(profile);


//check on console:-
console.log(textArea)
console.log(post_btn)
console.log(small_avatar)
console.log(postImage)
console.log(profile_img.innerHTML)
console.log(profile);
console.log(para)
console.log(username_dash.innerHTML);
console.log(email_dash.innerHTML);

//varibles:-
let text;
let imageURL;
 let file;
 let username ;
 let email;
console.log(text)
console.log(imageURL);
console.log(file)

//fuction
let getuser = async () => {

    const { data: authData, error: authError } =
        await client.auth.getUser();
console.log(authData);
  console.log(authData.user.user_metadata.username) 
  username = authData.user.user_metadata.username;
  email = authData.user.user_metadata.email;

username_dash.innerHTML = authData.user.user_metadata.username;
email_dash.innerHTML = authData.user.user_metadata.email;
para[0].innerHTML = authData.user.user_metadata.username;
para[1].innerHTML = authData.user.user_metadata.username;

};
getuser();


//event:-
profile.addEventListener("change" , () =>{
console.log("file slected")
  console.log(profile.files[0]);

   file = profile.files[0];
      imageURL = URL.createObjectURL(file);
    console.log(imageURL);
console.log(file)
  
profile_img.innerHTML = `<img src="${imageURL}" alt="pic">`
small_avatar[0].innerHTML = `<img src="${imageURL}" alt="pic">`

})

image_file.addEventListener("change" , async() =>{
    console.log(image_file.files[0]);

  const file = image_file.files[0];
     const imageURL = URL.createObjectURL(file);
    console.log(imageURL);
  
postImage.src = `${imageURL}`

})

textArea.addEventListener("input", () => {
    text = textArea.value;
    console.log(text);
});
let avatarFile ;
let path;
post_btn.addEventListener("click" , async() =>{
   //insert:-
    avatarFile = image_file.files[0]
const { data, error } = await client
  .storage
  .from('images')
  .upload(avatarFile.name, avatarFile, {
    cacheControl: '0',
    upsert: false
    })
  console.log(data);
  console.log(error);

if(data){
        postImage.src = "";
        textArea.value = "";
        //sweet alerts
               Swal.fire({
  title: "Posted!",
  icon: "success",
  draggable: true
});
}else{
    console.log(error);
     Swal.fire({
  icon: "error",
  title: "Try Again?",
  text: "Try Again",
         });
}

 // Get:-
  const { data:userUrl } = client
  .storage
  .from('images')
  .getPublicUrl(data.path)
  console.log(userUrl.publicUrl);
let URL = userUrl.publicUrl;
path = data.path




recent_post.innerHTML=`<img src="${URL}?t=${Date.now()}" alt="pic">`
small_avatar[1].innerHTML = `<img src="${imageURL}" alt="pic">`;
h3_user.innerHTML = `${username}`;
span_email.innerHTML = `${email}`;
paragraph.innerHTML = `${text}`;


    
})





let edit_input = document.querySelector("#edit-profile");
console.log(edit_input)
console.log(edit_input.innerHTML);

edit_input.addEventListener("change" , async() =>{
    console.log("okkkk!");
    console.log(edit_input.files[0]);

    //Update:-
  avatarFile = edit_input.files[0]
  const { data:userdata, error:usererror } = await client
  .storage
  .from('images')
  .update(path, avatarFile, {
    cacheControl: '0'
  });

console.log(userdata);
console.log(usererror);

// Get:-
  const { data } = client
  .storage
  .from('images')
  .getPublicUrl(path)
  console.log(data.publicUrl);
let URL = data.publicUrl



recent_post.innerHTML=`<img src="${URL}?t=${Date.now()}" alt="pic">`
console.log(recent_post);



})


let del_btn = document.querySelector("#del-btn");
console.log(del_btn)
del_btn.addEventListener("click",async() =>{
  console.log("click")
  const { data, error } = await client
  .storage
  .from("images")
  .remove([path])
  if(data){
    console.log("okkkkkkkkk")
  }else{
    console.log(error);
  }

recent_post.innerHTML="";
console.log(recent_post);

})
