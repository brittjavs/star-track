class ObservationsAdapter{
    constructor(){
        this.baseURL = 'http://localhost:3000/observations'
    }

    getObservations(){
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
         .then(resp => resp.json())
    }

    delete(obsID){
        return fetch(this.observationURL + `/${obsID}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
    }
}