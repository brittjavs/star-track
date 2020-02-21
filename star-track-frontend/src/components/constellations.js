class Constellations{
    constructor(){
        this.constellations = []
        this.adapter = new ConstellationsAdapter()
        this.getAndLoadConstellations()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
        //this.cardContainer.addEventListener('click', this.manageObservations.bind(this))
        
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
        this.cardContainer.innerHTML = ""
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
            divCard.appendChild(formDiv)
            formDiv.addEventListener('submit', this.createObservation.bind(this))
            
            this.cardContainer.appendChild(divCard)
        })
    }

    // manageObservations(event){
    //     const button = event.target
    //     let observationDiv = document.createElement('div')
    //         observationDiv.className = "observation-list"
    //     if (button.innerHTML === "View Recorded Observations"){
    //         button.innerHTML = "Hide Observations"
    //         let selected = this.constellations.find(constellation => constellation.id == button.id)
    //         let observations = selected.constObservationHTML()
    //         observationDiv.innerHTML = observations
    //         button.parentElement.appendChild(observationDiv)    
    //     }
    //     else if(button.innerHTML === "Hide Observations"){
    //         button.innerHTML = "View Recorded Observations"
    //         button.parentElement.lastElementChild.remove()
    //         //parentElement is the div-card & lastElementChild is observationDiv
    //     }
    //     else if(button.innerHTML === "Add Observation Data"){
    //         button.innerHTML = "Hide Form"
    //         let formDiv = document.createElement('div')
    //         formDiv.className = "form"
    //         formDiv.id = button.parentElement.id
    //         formDiv.innerHTML = this.formHTML()
    //         button.parentElement.appendChild(formDiv)

    //        let form = document.querySelector('.add-observation-form')
    //         form.addEventListener('submit', this.createObservation.bind(this))
    //     }

    //     else if(button.innerHTML === "Hide Form"){
    //         button.innerHTML = "Add Observation Data"
    //         button.parentElement.lastElementChild.remove()
    //         //lastElementChild is form div
    //     }
    // }
    
    createObservation(event){
        //this is constellations object
        //event.target = form
        event.preventDefault()
        const location = event.target.location.value
        const clarity = event.target.clarity.value
        const constell_id = event.target.parentElement.id
        debugger
        this.adapter.newObservation(location, clarity, constell_id)
        .then(()=> {
            this.renderConstellations()
        })
    }

    formHTML(){
        return `<form class="add-observation-form">
        <label for="observation-location">Location:</label>
        <input type="text" name="location" value="" placeholder="City, State" class="input-text"/>
        <br />
        <label for="observation-clarity">Clarity Rating:</label>
        <input type="number" name="clarity" value="" 
        placeholder="Enter a rating 1 - 10 (10 being the best clarity)" class="input-text"/>
        <br />
        <input type="submit" name="submit" value="Submit Observation" class="submit" />
        </form>`
    }



}
