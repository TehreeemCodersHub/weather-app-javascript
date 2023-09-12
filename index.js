
function openMenu() {
  const button_access = document.getElementById('mobileMenuContent');
  button_access.classList.toggle('hidden');
}



// da92669847a235f112d103966441d8bc


  // const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=dehli&appid=da92669847a235f112d103966441d8bc';
  
  const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const get_api_key = 'da92669847a235f112d103966441d8bc';

  let get_input = document.getElementById('input_search');
 let search_button = document.querySelector('.search_button');

 console.log('search btn value : '+get_input);


 async function checkWeather(city) {

  try {
    const response = await fetch (api_url+ city + `&appid=${get_api_key}`);
    console.log(api_url + get_input.value + `&appid=${get_api_key}`);

    var get_data = await response.json()
  
    console.log(get_data);

    if(get_data.name) {
      console.log(get_data.name);
      document.querySelector('.city').innerHTML = get_data.name;
      document.querySelector('.temp').innerHTML = Math.round (get_data.main.temp) + '°C';
      document.querySelector('.humidity').innerHTML = get_data.main.humidity + '%';
      document.querySelector('.wind').innerHTML = get_data.wind.speed + 'km/h';
      document.querySelector('.pressure').innerHTML = get_data.main.pressure + 'km/h';


    }else {
      console.log('name not found');
    }
   
  
  } catch(error) {
    console.log(error);
  }
 

 }
 search_button.addEventListener('click', ()=>{
   checkWeather(get_input.value);
   
 })