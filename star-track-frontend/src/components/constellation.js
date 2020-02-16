class Constellation{
    constructor(constellationJSON){
        //constellatinJSON is json from our getAndLoadConstellation
        this.id = constellationJSON.id
        this.name = constellationJSON.name
        this.image = constellationJSON.image
        this.observations = constellationJSON.observations
    }

    constellationHTML(){
        //each constellation instance will create its own html
        return (`<img src=${this.image}>
            <br />
            <h3> ${this.name}</h3>`)
    }

    constObservationHTML(){
        return this.observations.map(observation => `<h4>Observations</h4>
        <ul>
        <li>Location: ${observation.location} Clarity Rating:${observation.clarity}</li>
        </ul>`).join(' ')
    }
}