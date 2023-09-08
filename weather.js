const apikey="ad306ceef1b0221ace8721a3dd47eb5f";
const apiurl="https://api.openweathermap.org/data/2.5/";


var city=document.getElementById('city')
var temp=document.getElementById('temp')
var cname=document.getElementById('name')
var wind=document.getElementById('wind')
var pres=document.getElementById('press')
var hum=document.getElementById('hum');
var time=document.getElementById('time')


// function Current()
// {
//     navigator.geolocation.getCurrentPosition (async (result)=>{
//     const l=result.coords
//     lon=l.longitude
//     lat=l.latitude
//     console.log({"lon":lon,"lat":lat});
//     const data=await fetch(`${apiurl}weather?lat=${lat}&lon=${lon}&appid=${apikey}`)
//     console.log(data);
//     if(data.status==200)
//     {
//         const weather=await data.json();
//         console.log(weather);
//         cname.innerHTML=weather.name
//         temp.innerHTML=weather.main.temp
//         wind.innerHTML=weather.wind.speed
//         pres.innerHTML=weather.main.pressure
//         hum.innerHTML=weather.main.humidity

//     }
   

//    }
//    )
   
// }
async function search()
{
    
    const data=await fetch(`${apiurl}weather?q=${city.value}&appid=${apikey}&units=metric`)
    console.log(data);
    if(data.status==200)
    {
        const weatherdata=await data.json();
        console.log(weatherdata);
        cname.innerHTML=weatherdata.name
        wind.innerHTML=weatherdata.wind.speed+"m/s"
        temp.innerHTML=Math.floor(weatherdata.main.temp)+"°C"
        pres.innerHTML=weatherdata.main.pressure+"N/m<sup>2</sup>"
        hum.innerHTML=weatherdata.main.humidity+"%"
        time.innerHTML=(weatherdata.timezone)/3600+"+UTC"
        city.value=""

        var icon=document.createElement('img')
        icon.src="https://openweathermap.org/img/w/"+weatherdata.weather[0].icon+".png"
        temp.appendChild(icon)
    }
    else{
        alert("please enter correct location")
        city.value=""

    }
}

// Current()






