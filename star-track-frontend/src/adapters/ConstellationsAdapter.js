class ConstellationsAdapter{
    //^this is an object
    //Adapter talks to our backend api
    constructor(){
        //define variables and properties in constructor
        this.baseURL = 'http://localhost:3000/constellations'
        this.observationURL = "http://localhost:3000/observations"
    }

    getConstellations(){
        return fetch(this.baseURL).then(resp => resp.json())
    }

    newObservation(location, clarity, constell_id){
        const observation = {
            location: location, 
            clarity: clarity,
            constellation_id: constell_id
        }
        return fetch(this.observationURL,{
            method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(observation)
        })
        // fetch(this.observationURL, observationObj)
         .then(resp => resp.json())
        
        // })
    }
}