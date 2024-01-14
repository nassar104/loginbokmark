// get name and url and valet form

let siteName = document.getElementById("signame");
let siteEmail = document.getElementById("sigEmail");
let sitepass = document.getElementById("sigpassword");
let gitEmail = document.getElementById("enterEmail");
let gitpass = document.getElementById("passwordName");

// get elment to add 
let suninEroor = document.getElementById("tableContent");
let loginEroor = document.getElementById("suninEroor");

// add sessionUsername
var username = localStorage.getItem('sessionUsername')
      if (username) {
        console.log(username);
        document.getElementById('user').innerHTML = "Welcome " + username
      }

// arry of Object users
let signUpUser = []


// test and check function

function isLoginEmpty() {
  if (gitpass.value == "" || gitEmail.value == "") {
    return false
  } else {
    return true
  }
}

function isEmpty() {

  if (siteName.value == "" || siteEmail.value == "" || sitepass.value == "") {
    return false
  } else {
    return true
  }
}

function isEmailExist() {
  for (let i = 0; i < signUpUser.length; i++) {
    if (signUpUser[i].UserEmail == siteEmail.value) {
      return false
    }
  }
}




// check Is there value from localStorage
if (localStorage.getItem('users') == null) {
  signUpUser = []
} else {
  signUpUser = JSON.parse(localStorage.getItem('users'))
}








// function button signUp 

function login() {
  if (isLoginEmpty() == false) {
    document.getElementById('loginEroor').innerHTML = '<span>All inputs is required</span>'
    return false
  }

  let password = gitpass.value
  let email = gitEmail.value


  console.log(signUpUser);

  for (let i = 0; i < signUpUser.length; i++) {
    console.log(signUpUser[i]);
    if (signUpUser[i].UserEmail == email && signUpUser[i].password == password) {
      localStorage.setItem('sessionUsername', signUpUser[i].userName)
      location.replace('home.html')

      return true


    } else {
      document.getElementById('loginEroor').innerHTML = '<span>incorrect email or password</span>'

    }
  }

}







// function button signUp 

function signUp() {
  if (isEmpty() == false) {
    document.getElementById('suninEroor').innerHTML = '<span class="text-bg-danger" > All inputs is required</span>'
    return false
  }



  let signUp = {
    userName: siteName.value,
    UserEmail: siteEmail.value,
    password: sitepass.value,
  }




  if (signUpUser.length == 0) {
    signUpUser.push(signUp)
    localStorage.setItem('users', JSON.stringify(signUpUser))
    document.getElementById('suninEroor').innerHTML = '<span class="text-bg-success">Success</span>'
    return true
  }

  
  if (isEmailExist() == false) {
    document.getElementById('suninEroor').innerHTML = '<span class="text-bg-danger">email already exists</span>'

  } else {
    signUpUser.push(signUp)
    localStorage.setItem('users', JSON.stringify(signUpUser))
    document.getElementById('suninEroor').innerHTML = '<span class="text-bg-success m-3">Success</span>'

  }


}


// function button logout 

function logout() {
  localStorage.removeItem('sessionUsername')
  location.replace('index.html')

}