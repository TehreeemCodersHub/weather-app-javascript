  let username;
  let first_name;
  let last_name;
  let user_email;
  let password1;
  let confirm_password;



function openMenu() {
  const button_access = document.getElementById('mobileMenuContent');
  button_access.classList.toggle('hidden');
}


let get_form = document.getElementById('forms');
console.log(get_form);
  

get_form.addEventListener('submit', (e) => { 
  e.preventDefault();

  clearError(user_name);
  clearError(first_name);
  clearError(last_name);
  clearError(password1);
  clearError(confirm_password);
  clearError(user_email);
  
  
  formValidation();
});


function setError(element, msg) {

let element_parent = element.parentElement;
let child_error = element_parent.querySelector('span');
child_error.innerHTML = msg;
child_error.classList.add('error-color');
element.classList.add('red-border');

}


function clearError(element) {
let element_parent = element.parentElement;
let child_error = element_parent.querySelector('span');
child_error.innerHTML = '';
 child_error.classList.remove('error-color');
element.classList.remove('red-border');
}



function formValidation() {


  
  let set_validator = true;




  let user_name = document.getElementById('username');
  let last_name = document.getElementById('lname');
   let first_name = document.getElementById('fname');
   let user_email = document.getElementById('email');
   let password1 = document.getElementById('password');
   let confirm_password = document.getElementById('cpassword');
    
  var email_match = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  var user_name_match = /^[a-zA-Z]+$/;
  var first_last_match = /^[a-zA-Z0-9]*$/;



     


  
    if(user_name.value == '') { 
      setError(user_name, 'Enter user name',);
      set_validator = false;
    }else if((!user_name.value.match(user_name_match))) {
      setError(user_name, 'inavlid username');   
      set_validator = false;
    }else {
      clearError(user_name);
    }
    

    if(first_name.value == '') { 
      setError(first_name, 'Enter first name',);
      set_validator = false;
    }else if((!first_name.value.match(first_last_match))) {
      setError(first_name, 'inavlid first name');   
      set_validator = false;
    }else {
      clearError(first_name);
    }
    
    
    if(last_name.value == '') { 
      setError(last_name, 'Enter last name',);
      set_validator = false;
    }else if((!last_name.value.match(first_last_match))) {
      setError(last_name, 'inavlid last name');   
      set_validator = false;
    }else {
      clearError(last_name);
    }


// for 1st password

    if (password1.value == '') {
      setError(password1, 'Enter password');
      set_validator = false;
    } else if(password1.value.length <= 8 ) {
        setError(password1, 'password length should be larger then 8');
        set_validator = false;
    }else {
        clearError(password1);
    }
  
    // for confirm password
    if (confirm_password.value == '') {
      setError(confirm_password, 'Enter password');
      set_validator = false;
    } else if( confirm_password.value != password1.value) {
        setError(confirm_password, 'Your password does not match');
        set_validator = false;
    }else {
        clearError(confirm_password);
    }

    // for email
    if (user_email.value == '') {
      setError(user_email, 'Enter email');
      set_validator = false;
    }else if((!user_email.value.match(email_match)) ) {
      setError(user_email, 'Enter valid email');   
      set_validator = false;
    }
     else {
      clearError(user_email);
    }
    
    if (set_validator) {

      clearError(user_name);
      clearError(first_name);
      clearError(last_name);
      clearError(password1);
      clearError(confirm_password);
      clearError(user_email);
    
        document.getElementById("forms").reset();

        setTimeout(function () {
          alert('You are successfully logged in');
        }, 1000);

    
        }

  return set_validator;
  
}  





// code for calculator
function deleteAll() {
document.querySelector('#result').value = '';
}


function display(val) {

let inputField = document.querySelector('#result');
let check_decimal = inputField.value;

if (val === 'DEL') {
  inputField.value = check_decimal.slice(0, -1);
}
else if (val === '.') {
  
  if (!check_decimal.includes('.')) {
    inputField.value += val;
  
  }else {
    console.log('i am already included');
  }
} 
else {
  inputField.value += val;
}

}



function solve() {
let get_expression = document.getElementById('result').value;

  let y = eval(get_expression);

 

  document.getElementById('result').value = y;


}
