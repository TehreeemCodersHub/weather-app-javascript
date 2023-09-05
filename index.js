console.log('check');

// let get_button = document.querySelector('gg');

// get_button.addEventListener('click', function() {
//     console.log('Button clicked!');
//  });

function myFunction() {
    console.log('ok g')
}





// const menubutton = document.getElementById('menu-btn');
// const navMenu = document.querySelector('ul');

menubutton.addEventListener('click', ()=> {
    navMenu.classList.toggle("hidden");
});

// function changeBorder() {
//     let get_field = document.getElementById('change');
//     // get_field.style.borderBlockColor = 'red';    
//     get_field.style.classList.toggle('border-color')

// }

function changeBorder() {
    let get_field = document.getElementById('change');
    get_field.classList.toggle('red-border');
}
  