window.addEventListener('load', () => {
    let lon
    let lat
    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition (posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=e96eb0e778e257d89231bddc0716d584`
            
            fetch(url)
               .then( response => { return response.json() })
               .then( data => {
                let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`
                let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                switch(data.weather[0].main) {
                    case 'Thunderstore':
                        iconoAnimado.src='{% static "core/img/clima/thunder.svg" %}'
                        break;    
                    case 'Drizzle':
                        iconoAnimado.src='{% static "core/img/clima/rainy-2.svg" %}'
                        break;
                    case 'Rain':
                        iconoAnimado.src='{% static "core/img/clima/rainy-7.svg" %}'
                        break;    
                    case 'Snow':
                        iconoAnimado.src='{% static "core/img/clima/snowy-6.svg" %}'
                    case 'Clear':
                        iconoAnimado.src = '{% static "core/img/clima/day.svg" %}'
                        break;
                    case 'Atmosphere':
                        iconoAnimado.src = '{% static "core/img/clima/weather.svg" %}'
                        break;
                    case 'Clouds':
                        iconoAnimado.src = '{% static "core/img/clima/cloudy-day-1.svg" %}'
                        break;
                   }

               })    
               .catch(error => {
                console.log(error)
               })       
        })
    }
})