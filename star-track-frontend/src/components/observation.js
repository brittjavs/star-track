class Observation{
    constructor(observationJSON){
        //observationJSON is json from our getAndLoadObservation
        this.id = observationJSON.id
        this.location = observationJSON.location
        this.clarity = observationJSON.clarity
    }
}