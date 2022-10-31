let inputbox = document.getElementById('inputbox');
let resultBox = document.getElementById('resultBox');
let temp = document.getElementById('temp');
let weatherimg = document.getElementById('img');

function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  
 return fToCel;
}

function hide(){
    let elem = document.getElementsByClassName('lower-layer')[0];
    elem.classList.add('none');
}

function show(){
    let elem = document.getElementsByClassName('lower-layer')[0];
    elem.classList.remove('none');
}

document.getElementById('srch-btn').addEventListener('click',async(e)=>{
    e.preventDefault();

    if(inputbox.value===''){
        resultBox.innerHTML = 'Please enter city name before search';
        hide()
    }else{
      
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbox.value} &appid=5f8b1ae119a92d70c6d4b8f6d01740a8`
        let resp = await fetch(url)
        let data = await resp.json();
         if(Object.keys(data).length == 2){hide(); resultBox.innerHTML = 'Please enter valid city name';}
         else{
            show();
            inputbox.value=''
            // let temperature = fToC(data.main.temp);
            let temperature = data.main.temp;
            resultBox.innerHTML = `${data.name},${data.sys.country}`;
            temp.innerHTML = `${temperature} <sup>o</sup>C `;

            switch (data.weather[0].main) {
                case "Clear":
                    weatherimg.innerHTML = `<i class="fa fa-sun" aria-hidden="true"></i>`
                    break;
                case "Clouds":
                    weatherimg.innerHTML = `<i class="fa fa-cloud" aria-hidden="true"></i>`
                    break;
                case "Rain":
                    weatherimg.innerHTML = `<i class="fa fa-cloud-rain" aria-hidden="true"></i>`
                    break;
                case "Clear":
                    weatherimg.innerHTML = `<i class="fa fa-sun" aria-hidden="true"></i>`
                    break;
            
                default:
                    weatherimg.innerHTML = `<i class="fa fa-cloud" aria-hidden="true"></i>`
                    break;
            }
         }
        } catch {
            resultBox.innerHTML = 'Please enter valid city name';
            hide()
        }

        
    }
});


const d = new Date();

document.getElementById("fyear").innerHTML = d.getFullYear()

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];


let dateStr = `${d.getDate()} ${month}, ${d.getFullYear()}`;

document.getElementById("date").innerHTML = dateStr;
document.getElementById("day").innerHTML = `${days[d.getDay()]}`;


alert("kdk")
