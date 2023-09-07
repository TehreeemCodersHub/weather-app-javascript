function openMenu() {
    const button_access = document.getElementById('mobileMenuContent');
    button_access.classList.toggle('hidden');
}

// let get_form = document.getElementById('form'); 
// let get_name = document.getElementById('username');
// let get_email = document.getElementById('email');
// let get_password = document.getElementById('password');
// let get_confirm_password = document.getElementById('confirm-password');

// get_form.addEventListener('submit', (e) => { 
//     e.preventDefault();
//     validateInput();
// });

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



  function formValidation() {
    

    //  function checkValue() {

    //     const values = ['fname', 'email', 'password', 'confirmPasswrd'];
    //     values.forEach((ele)=>{
    //             const inputElement = document.forms['myform'][ele];
              
    //             if ( inputElement.value == '' ) {
                    
    //                 inputElement.classList.add('red-border');
    //                 setError( first_name_id , 'Enter first name ')
    //                 set_validator = false;
        
    //             }

    //         })
    //     }
     
    // }

    
    
    // 
    
    
    var set_validator = false;
    
    
    let first_name = document.forms['myform']['fname'].value;
    let password1 = document.forms["myform"]["password"].value;
    let confirmPassword = document.forms["myform"]["confirmPasswrd"].value;
    let user_email = document.forms["myform"]["email"].value;
    
    if(first_name != '' && password1 != '' && confirmPassword != '' && user_email != '' ) {
        alert('you are login succesfully ')
        set_validator = true;
    }else {

        // checkValue();
        

        if (first_name == '') {
            let first_name_id = document.getElementById('username');
            first_name_id.classList.add('red-border');
            setError(first_name_id, 'Enter first name');
          }
      
        if(password1 == '') {
            let password_id = document.getElementById('password');
            password_id.classList.add('red-border');
            setError( password_id , 'Enter password ');
            set_validator = false;

            // setError(password_id, 'Enter password');
        
        } if (confirmPassword == '') {
            let confirmPassword_id = document.getElementById('confirm-password');
            confirmPassword_id.classList.add('red-border');
            setError(confirmPassword_id, 'Enter confirm password');
        
        } if (user_email == '') {
            let user_email_id = document.getElementById('email');
            user_email_id.classList.add('red-border');
            setError(user_email_id, 'Enter email');
        }

    }
    
    
//    else part here
// else {
//     first_name_id.classList.remove('red-border');
//     first_name_id.classList.add('green-border');
//     let remove_affect = document.querySelector('p');
//     remove_affect.classList.add('error-color');
//     remove_affect.classList.toggle('hidden');

//     set_validator = false;
//     //extra code
// }
    


    // make function here

    function setError(element, msg) {
        
        let element_parent = element.parentElement;
        let child_error = element_parent.querySelector('p');
        child_error.innerHTML = msg;
         child_error.classList.add('error-color')
         child_error.classList.toggle('hidden')

        console.log(child_error);
    }



    

   


    return set_validator; 
  
}


// now working on calculator 
   


let string = '';
let get_buttons = document.querySelectorAll('.number-btn');
console.log(get_buttons);
Array.from(get_buttons).forEach((button)=>{

    button.addEventListener('click', (e)=>{
        console.log(e.target);
    })
})