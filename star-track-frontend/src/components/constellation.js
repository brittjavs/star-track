class Constellation{
    constructor(constellationJSON){
        //constellatinJSON is json from our getAndLoadConstellation
        this.id = constellationJSON.id
        this.name = constellationJSON.name
        this.image = constellationJSON.image
    }

    constellationHTML(){
        //each constellation instance will create its own html
        return (`<img src=${this.image}>
            <br />
            <h3> ${this.name}</h3>`)
    }
}