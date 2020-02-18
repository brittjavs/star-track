class Observation{
    constructor(observationJSON){
        //constellatinJSON is json from our getAndLoadobservation
        this.id = observationJSON.id
        this.location = observationJSON.location
        this.clarity = observationJSON.clarity
    }
}