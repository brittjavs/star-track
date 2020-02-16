class Constellations {
    constructor(){
        this.constellations = []
        this.adapter = new ConstellationsAdapter()
        this.initBindingsAndEventListeners()
        this.getAndLoadConstellations()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
    }

    getAndLoadConstellations(){
        this.adapter
        .getConstellations()
        .then(constellations =>{
            //getConstellations comes from ConstellationsAdapter
            constellations.forEach(constellation => this.constellations.push(new Constellation(constellation)))
            //add each new instance of Constellation(constellation object) class to our constellations array. 
        })
        .then(()=>{
            this.renderConstellations()
        })
    }

    renderConstellations(){
        this.constellations.forEach(constellation =>{
            const divCard = document.createElement('div')
            divCard.className = "const-card"
            divCard.id = `${constellation.id}`
            divCard.innerHTML = constellation.constellationHTML()

            let viewButton = document.createElement('button')
            viewButton.id = `${constellation.id}`
            viewButton.className = "view-sighting-btn"
            viewButton.innerHTML = "View Recorded Sightings"

            let newSighting = document.createElement('button')
            newSighting.id = `${constellation.id}`
            newSighting.className = "new-sighting-btn"
            newSighting.innerHTML = "Add New Sighting"

            divCard.appendChild(viewButton)
            divCard.appendChild(newSighting)
            this.cardContainer.appendChild(divCard)
        })
    }

}