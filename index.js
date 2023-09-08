function openMenu() {
    const button_access = document.getElementById('mobileMenuContent');
    button_access.classList.toggle('hidden');
}

 
// let get_name = document.getElementById('username');
// let get_email = document.getElementById('email');
// let get_password = document.getElementById('password');
// let get_confirm_password = document.getElementById('confirm-password');



// const validateInput = () => {
//     const get_name_value = get_name.value.trim();
//     const get_email_value = get_email.value.trim();
//     const get_password_value = get_password.value.trim();
//     const get_confirm_password_value = get_confirm_password.value.trim();

//     if (get_name_value === '') {
//         setError(get_name, 'Username is required');
//     } else {
//         setSuccess(get_name);
//     }

//     if (get_email_value === '') {
//         setError(get_email, 'Email is required');
//     } else {
//         setSuccess(get_email);
//     }

//     if (get_password_value === '') {
//         setError(get_password, 'Password is required');
//     } else {
//         setSuccess(get_password);
//     }

//     if (get_confirm_password_value === '') {
//         setError(get_confirm_password, 'Confirm Password is required');
//     } else {
//         setSuccess(get_confirm_password);
//     }

//     if (get_confirm_password_value !== '' && get_password_value !== '' && get_email_value !== '' && get_name_value !== '') {
//         alert("You are successfully logged in");
//     }
// }

// function setError(element, msg) {
//     element.style.border = '3px red solid';
//     const parent = element.parentElement;
//     const p = parent.querySelector('p');
//     p.textContent = msg;
//     // p.style.visibility = 'visible';
// }

// function setSuccess(element) {
//     element.style.border = '3px green solid'; // Changed border color to green
//     const parent = element.parentElement;
//     const p = parent.querySelector('p');
//     p.textContent = '';
//     // p.style.visibility = 'hidden';
// }



//   function formValidation() {
    

//     //  function checkValue() {

//     //     const values = ['fname', 'email', 'password', 'confirmPasswrd'];
//     //     values.forEach((ele)=>{
//     //             const inputElement = document.forms['myform'][ele];
              
//     //             if ( inputElement.value == '' ) {
                    
//     //                 inputElement.classList.add('red-border');
//     //                 setError( first_name_id , 'Enter first name ')
//     //                 set_validator = false;
        
//     //             }

//     //         })
//     //     }
     
//     // }

    
    
//     // 
    
    
//     var set_validator = false;
    
    
//     let first_name = document.forms['myform']['fname'].value;
//     let password1 = document.forms["myform"]["password"].value;
//     let confirmPassword = document.forms["myform"]["confirmPasswrd"].value;
//     let user_email = document.forms["myform"]["email"].value;
//     console.log('value: '+ first_name);
//     console.log('email: '+ user_email);
//     console.log('password1: '+ password1);
//     console.log('confirm : '+ confirmPassword);


//     if(first_name != '' && password1 != '' && confirmPassword != '' && user_email != '' ) {
//         alert('you are login succesfully ')
//         set_validator = true;
//     }else {

//         // checkValue();
        
//         if (first_name == '') {
            
//             let first_name_id = document.getElementById('username');
//             first_name_id.classList.add('red-border');
//             setError(first_name_id, 'Enter first name');
//           }

      
//         if(password1 == '') {
//             let password_id = document.getElementById('password');
//             password_id.classList.add('red-border');
//             setError( password_id , 'Enter password ');
//             set_validator = false;

//             // setError(password_id, 'Enter password');
        
//         } 
        
//          if (user_email == '') {
//             let user_email_id = document.getElementById('email');
//             user_email_id.classList.add('red-border');
//             setError(user_email_id, 'Enter email');
//         }

//     }
    
    
// //    else part here
// // else {
// //     first_name_id.classList.remove('red-border');
// //     first_name_id.classList.add('green-border');
// //     let remove_affect = document.querySelector('p');
// //     remove_affect.classList.add('error-color');
// //     remove_affect.classList.toggle('hidden');

// //     set_validator = false;
// //     //extra code
// // }
    


//     // make function here

//     function setError(element, msg) {

//         let element_parent = element.parentElement;
//         let child_error = element_parent.querySelector('p');
//         child_error.innerHTML = msg;
//          child_error.classList.add('error-color')
//          child_error.classList.toggle('hidden')

//         console.log(child_error);
//     }



    

   


//     return set_validator; 
  
// }


// // now working on calculator 
   


// let string = '';
// let get_buttons = document.querySelectorAll('.number-btn');
// console.log(get_buttons);
// Array.from(get_buttons).forEach((button)=>{

//     button.addEventListener('click', (e)=>{
//         console.log(e.target);
//     })
// })




//for preventing default behaviour of form

let get_form = document.querySelector('myform');

get_form.addEventListener('submit', (e) => { 
    e.preventDefault();
    formValidation();
});


function formValidation() {
    
    
    let get_form = document.getElementById('myform');
    let set_validator = false;

    
  
    // Get form fields
    let first_name = document.forms['myform']['fname'];
    let password1 = document.forms["myform"]["password"];
    let user_email = document.forms["myform"]["email"];
    let check_name = 0;
    let check_mail = 0;
    let check_password = 0; 
  
    
        // Helper function to set error messages and styles
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
        child_error.classList.add('hidden');
        element.classList.remove('red-border');
        element.classList.add('green-border');
      }

    
      if (first_name.value == '') {
        
        setError(first_name, 'Enter first name',);
        set_validator = false;
      }else if((!first_name.value.match(/^[a-z]+$/))) {
        setError(first_name, 'inavlid name');   
        set_validator = false;
      }else {
        clearError(first_name);
        check_name =1;
        
      }
    
      if (password1.value == '') {
        setError(password1, 'Enter password');
        set_validator = false;

      } else if(password1.value.length <= 8 ) {
          setError(password1, 'password length should be larger then 8');
          set_validator = false;
      }else {
          clearError(password1);
          check_password = 1;
      }
    
    
      if (user_email.value == '') {
        setError(user_email, 'Enter email');
        set_validator = false;
      }else if((!user_email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) ) {
        setError(user_email, 'Enter valid email');   
        set_validator = false;
      }
       else {
        clearError(user_email);
        check_mail =1;
      }
      
      function clearInput() {
        if(first_name.value != '' && password1.value != '' && user_email.value != '' ) {
            
            first_name.value = '';
            password1.value = '';
            user_email.value = '';

        }
      }

      
      if (check_name === 1 && check_password === 1 && check_mail === 1) {
          
        
        
    
          clearError(first_name);
           clearError(password1);
           clearError(user_email);

           clearInput();

         //alert('Successfully login');
    }
    return set_validator;
    
}  




