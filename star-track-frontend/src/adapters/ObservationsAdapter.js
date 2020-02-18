class ObservationsAdapter{
    constructor(){
        this.baseURL = 'http://localhost:3000/observations'
    }

    getObservations(){
        return fetch(this.baseURL).then(resp => resp.json())
    }
}