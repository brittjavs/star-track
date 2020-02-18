class Observations{
    constructor(){
        this.observations = []
        this.adapter = new ObservationsAdapter()
    }

    getAndLoadObservations(){
        this.adapter
        .getObservations()
        .then(observations =>{
            //getObservations comes from ObservationsAdapter
            observations.forEach(observation => this.observations.push(new Observation(observation)))
        })
        .then(()=>{
            this.renderObservations()
        })
    }
}