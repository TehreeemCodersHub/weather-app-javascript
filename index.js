function openMenu() {
    const button_access = document.getElementById('mobileMenuContent');
    button_access.classList.toggle('hidden');
}


// let get_form = document.getElementById('forms');

    

// get_form.addEventListener('submit', (e) => { 
//     e.preventDefault();

//     alert('You are successfuuly login');
//     clearError(user_name);
//     clearError(password1);
//     clearError(user_email);
    
//     formValidation();
// });


// function setError(element, msg) {

//   let element_parent = element.parentElement;
//   let child_error = element_parent.querySelector('span');
//   child_error.innerHTML = msg;
//   child_error.classList.add('error-color');
//   element.classList.add('red-border');

// }


// function clearError(element) {
//   let element_parent = element.parentElement;
//   let child_error = element_parent.querySelector('span');
//   child_error.innerHTML = '';
//    child_error.classList.remove('error-color');
//   element.classList.remove('red-border');
// }



// function formValidation() {
    
//     let set_validator = true;

//     let user_name = document.getElementById('username');
//     let password1 = document.getElementById('password');
//     let first_name = document.getElementById('fname');
       //let last_name = document.getElementById('lname');

       //let confirm_password = document.getElementById('cpassword');
//     let user_email = document.getElementById('email');
//     var email_match = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
//     var user_name_match = /^[a-z]+$/;
      // var first_last_match = ^[a-zA-Z0-9_.-]*$;
       


    
//       if(user_name.value == '') { 
//         setError(first_name, 'Enter first name',);
//         set_validator = false;
//       }else if((!user_name.value.match(user_name_match))) {
//         setError(user_name, 'inavlid name');   
//         set_validator = false;
//       }else {
//         clearError(user_name);
//       }
    
//       if (password1.value == '') {
//         setError(password1, 'Enter password');
//         set_validator = false;
//       } else if(password1.value.length <= 8 ) {
//           setError(password1, 'password length should be larger then 8');
//           set_validator = false;
//       }else {
//           clearError(password1);
//       }
    
    
//       if (user_email.value == '') {
//         setError(user_email, 'Enter email');
//         set_validator = false;
//       }else if((!user_email.value.match(email_match)) ) {
//         setError(user_email, 'Enter valid email');   
//         set_validator = false;
//       }
//        else {
//         clearError(user_email);
//       }
      
//       if (set_validator) {
           
//        document.getElementById("forms").reset();
      
         
//     }
//     return set_validator;
    
// }  




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
