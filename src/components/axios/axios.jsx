function signup() {
    
    
    axios({
        method: 'post',
        url: url + "/signup",
        data: {
            name: document.getElementById("inputName").value,
            email: document.getElementById("inputEmail4").value,
            password: document.getElementById("password4").value,
            number: document.getElementById("inputNumber4").value,
            password: document.getElementById("password4").value,
            city : document.getElementById("inputCity").value,
            
            
        },withCredentials: true
        
    }).then(function (response) {
        console.log(response.data.message);
        alert(response.data.message);
        window.location.href = "login.html"
    })
    
    .catch(function (error) {
        console.log(error);
        alert(response.message)
    });
    
    return false;
}

///Login

function login() {
    
    axios({
        method: 'post',
        url: url + "/login",
        data: {
            email: document.getElementById("inputEmail3").value,
            password: document.getElementById("inputPassword3").value,
        }, withCredentials: true
        
    }).then((response) => {
        console.log(response);
        alert(response.data.message)
        window.location.href = "home.html"
    }, (error) => {
        console.log(error);
        alert(error)
    });
    
    return false;
}


//FORGET STEP-1

function forgot1() {
    
    axios({
        method: 'post',
        url: url + "/forget-password",
        data: {
            email: document.getElementById("email1").value,
        },withCredentials: true
    }).then((response) => {
        console.log(response);
        alert(response.data.message);
        window.location.href = "forgot2.html"
    }, (error) => {
        console.log(error);
        alert(error)
    });
    
    return false;
    
}


function forgot2() {
    axios({
        method: 'post',
        url: url + "/forget-password-step-2",
        data: {
            email: document.getElementById("email2").value,
            otp: document.getElementById("otp").value,
            newPassword: document.getElementById("password2").value,
        },withCredentials: true
    }).then((response) => {
        
        console.log(response.data.message);
        alert(response.data.message);
        window.location.href = "login.html"
        
        
    }, (error) => {
        console.log(error);
    });
    return false;
    
}

//POST

function tweetpost() {
    axios({
        method: 'post',
        url: url + "/tweet",
        data: {
            tweet: document.getElementById("user-post").value,
            
        },withCredentials: true
        

    }).then((response) => {
        if (response.data.status === 200) {
            // alert(response.data.message)
            return
        } else {
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });
    return false;
}

function gettweet() {
    // getProfile();
    axios({
        method: 'get',
        url: url + '/tweet-get',
        credentials: 'include',
    }).then((response) => {
        let tweets = response.data.tweet;
        for (i = 0; i < tweets.length; i++) {
            var eachtweet = document.createElement("li");
            eachtweet.innerHTML = `<h5>
            ${tweets[i].username}
            </h5>
            <p>
            ${tweets[i].tweet}
            </p>`;
            eachtweet.setAttribute('class','reverse')
            document.getElementById("mytweet").appendChild(eachtweet);
        }
    }, (error) => {
        console.log(error.message);
    });
    
    
    return false
}




socket.on("NEW_POST", (newPost) => {
    
    
    // console.log(newPost);
    
    let jsonRes = newPost,
     eachtweet = document.createElement("li");
    eachtweet.innerHTML = `<h4>
    ${jsonRes.username}
    
    </h4>
    <p>
    ${jsonRes.tweet}
    </p>`;
    eachtweet.setAttribute('class','reverse')
    
    document.getElementById("mytweet").appendChild(eachtweet);
    
    
})


socket.on("MY_POST", (newPost) => {

    console.log("second socket chnage", newPost)
    console.log(newPost);

    let jsonRes = newPost;
    var eachtweet = document.createElement("li");
    eachtweet.innerHTML = `<h4>
    ${jsonRes.username}
    </h4>
     <p>
        ${jsonRes.tweet}
    </p>`;

    document.getElementById("getalltweet").appendChild(eachtweet);


})



//PROFILE

function profile() {
    axios({
        method: 'get',
        url: url + '/profile',
        credentials: 'include',
    }).then((response) => {
        // console.log(response);
        document.getElementById('name').innerHTML = response.data.profile.name;
        document.getElementById('email').innerHTML = response.data.profile.email;
        document.getElementById("user-id").innerHTML = response.data.profile._id;
        document.getElementById("profilePic").src = response.data.profile.profilePic;

     // new code for profile
        sessionStorage.setItem("userEmail", response.data.profile.email);
        sessionStorage.setItem("profileUrl", response.data.profile.profilePic);
    },
    (error) => {
        console.log(error.message);
    });

    return false
}


///LOGOUT


function logout() {
    axios({
        method: 'post',
        url: url + '/logout',
        credentials: 'include'
        
    }).then((response) => {
        console.log(response);
        window.location.href = "login.html"
    }, (error) => {
        console.log(error.message);
    });
    return false
}


const upload = () => {
    let fileInp = document.getElementById("fileInput");
    // console.log("fileInp", fileInp);
    // console.log("fileInp", fileInp.files[0]);
  
    let formData = new FormData();
  
    formData.append("myFile", fileInp.files[0]);
    formData.append("myName", "Hassan");
    formData.append(
      "myDetails",
      JSON.stringify({
        email: sessionStorage.getItem("userEmail"),
        class: "web",
      })
    );
    axios({
      method: "post",
      url: url + "/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
       
        window.location.reload();
        alert("Profile Picture updated Successfully");
      })
      .catch((err) => console.log(err));
    //   console.log(formData)
  
    return false;
  };



function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
    return false;
}