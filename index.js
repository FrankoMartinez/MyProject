// Fetch refrences
// fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=281a3daeda2eda2ac74da3793997eb82')
// .then(resp => resp.json())
// .then(res => console.log(res))

// Event listener when I press enter it runs the function with the fetch
const search = document.querySelector('input#search-box')
search.addEventListener('keypress', function (event) {
    if(event.keyCode === 13) {
        return keyPress()
    }
})

// Fetch function
function keyPress() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=imperial&appid=281a3daeda2eda2ac74da3793997eb82`)
    .then(resp => resp.json())
    .then(res => {
        // displays the temp, weather, and city
        document.querySelector('div.city').innerHTML = res.name
        document.querySelector('div.temp').innerHTML = Math.round(res.main.temp) + '&deg'
        // set the weather query selector to a variable to capitalize the first letter
        document.querySelector('div.weather').innerHTML  = res.weather[0].description[0].toUpperCase() + res.weather[0].description.slice(1)
        //days of week array to get current day 
        const d = new Date();
        
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let day = weekday[d.getDay()];
        // displays the day of the week
        document.querySelector('div.day').innerHTML = day
})}
