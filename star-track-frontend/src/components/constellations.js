class Constellations {
    constructor(){
        this.constellations = []
        this.adapter = new ConstellationsAdapter()
        this.initBindingsAndEventListeners()
        this.getAndLoadConstellations()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
        this.cardContainer.addEventListener('click', this.showObservation.bind(this))
    }

    showObservation(event){
        if (event.target.className === "view-observation-btn"){
            let selected = this.constellations.find(constellation => constellation.id == event.target.id)
            let newStuff = selected.constObservationHTML()
            let obsDiv = document.createElement('div')
            obsDiv.innerHTML = newStuff
            event.target.parentElement.appendChild(obsDiv)    
        }
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
            viewButton.className = "view-observation-btn"
            viewButton.innerHTML = "View Recorded Observations"

            let newSighting = document.createElement('button')
            newSighting.id = `${constellation.id}`
            newSighting.className = "new-observation-btn"
            newSighting.innerHTML = "Contribute an Observation"

            

            divCard.appendChild(viewButton)
            divCard.appendChild(newSighting)
            this.cardContainer.appendChild(divCard)
        })
    }

}