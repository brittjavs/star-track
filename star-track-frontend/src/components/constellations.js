class Constellations{
    constructor(){
        this.constellations = []
        this.adapter = new ConstellationsAdapter()
        this.observationsAdapter = new ObservationsAdapter()
        this.getAndLoadConstellations()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
    }

    getAndLoadConstellations(){
        this.adapter
        .getConstellations()
        //getConstellations comes from ConstellationsAdapter
        .then(constellations =>{
            constellations.forEach(constellation => this.constellations.push(new Constellation(constellation)))
            //add each new instance of Constellation(constellation object) class to our constellations array. 
        })
        .then(()=>{
            this.renderConstellations()
        })
    }

    renderConstellations(){
        this.cardContainer.innerHTML = ""
        // let observedConstellations = this.constellations.filter(constellation => constellation.observations.length > 0)
        //this returns only constellations that have observations
        // let observedConstellations = this.constellations.filter(constellation => constellation.observations.filter(obs => obs.clarity > 8).length)
        //this returns observations that have rating over 8
        // observedConstellations.forEach(constellation =>{
        this.constellations.forEach(constellation =>{
            const divCard = document.createElement('div')
            divCard.className = "const-card"
            divCard.id = `${constellation.id}`
            divCard.innerHTML = constellation.constellationHTML()
            
            let viewButton = document.createElement('button')
            viewButton.id = `${constellation.id}`
            viewButton.className = "collapsible"
            viewButton.innerHTML = "View Recorded Observations"
            divCard.appendChild(viewButton)

            viewButton.addEventListener('click', function(){
                this.classList.toggle("active")
                let content = this.nextElementSibling;
                if (content.style.display === "none") {
                content.style.display = "block";
                viewButton.innerHTML = "Hide Observations"
                } 
                else {
                content.style.display = "none";
                viewButton.innerHTML = "View Recorded Observations"
                }
            })

            const observationDiv = document.createElement('div')
            observationDiv.className = "observation-list"
            observationDiv.style.display = "none"
            const observationUL = document.createElement('ul')
            observationUL.className = "observations"
            observationUL.id = viewButton.id
            let selected = this.constellations.find(constellation => constellation.id == viewButton.id)
            let observations = selected.constObservationHTML()
            observationUL.innerHTML = observations

            observationDiv.appendChild(observationUL)
            divCard.appendChild(observationDiv)    

            let newSighting = document.createElement('button')
            newSighting.id = `${constellation.id}`
            newSighting.className = "collapsible"
            newSighting.innerHTML = "Add Observation Data"
            divCard.appendChild(newSighting)

            newSighting.addEventListener('click', function(){
                this.classList.toggle("active")
                let form = this.nextElementSibling;
                if (form.style.display === "none") {
                form.style.display = "block";
                newSighting.innerHTML = "Hide Form"
                } 
                else {
                form.style.display = "none";
                newSighting.innerHTML = "Add Observation Data"
                }
            })

            let formDiv = document.createElement('div')
            formDiv.className = "form"
            formDiv.style.display = "none"
            formDiv.id = `${constellation.id}`
            formDiv.innerHTML = this.formHTML()
            formDiv.addEventListener('submit', this.createObservation.bind(this))
            divCard.appendChild(formDiv)

            this.cardContainer.appendChild(divCard)
        })
    }
    
    createObservation(event){
        //this is constellations object
        //event.target = form
        event.preventDefault()        
        const location = event.target.location.value
        const clarity = event.target.clarity.value
        const constell_id = event.target.parentElement.id
        const allULs = document.querySelectorAll(".observations")
        let observationsUL = allULs[`${constell_id}`-1]
        this.observationsAdapter.newObservation(location, clarity, constell_id)
        .then(observationJSON =>{
            const observation = new Observation(observationJSON)
            observationsUL.innerHTML += observation.newLI()
            event.target.parentElement.innerHTML = observation.newObsHTML()
           
        })
        .then(()=>{
            let buttonDiv = document.getElementsByClassName("confirmation")[0]
            buttonDiv.addEventListener('click', (event)=>{
                if(event.target.innerHTML ==="Delete Submission"){
                    let obsID = event.target.id
                    this.observationsAdapter.delete(obsID)
                    observationsUL.lastElementChild.remove()
                    event.target.parentElement.parentElement.innerHTML = this.formHTML()
                }
                else if(event.target.innerHTML ==="Confirm Submission"){
                    event.target.parentElement.parentElement.innerHTML = this.formHTML()
                }
            })
        })
    }

    formHTML(){
        return `<form class="add-observation-form">
        <label for="observation-location">Location:</label>
        <input type="text" name="location" value="" placeholder="City, State" class="input-text"/>
        <br />
        <label for="observation-clarity">Clarity Rating:
        <br>
        (1-10 with 10 being best clarity)</label>
        <br>
        <input type="number" name="clarity" value="" min=1 max=10 placeholder="0" class="input-text"/>
        <br />
        <input type="submit" name="submit" value="Submit Observation" class="submit" />
        </form>`
    }

}