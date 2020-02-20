class Constellations {
    constructor(){
        this.constellations = []
        this.adapter = new ConstellationsAdapter()
        this.initBindingsAndEventListeners()
        this.getAndLoadConstellations()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
        this.cardContainer.addEventListener('click', this.manageObservations.bind(this))
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
            viewButton.className = "observation-view-btn"
            viewButton.innerHTML = "View Recorded Observations"

            let newSighting = document.createElement('button')
            newSighting.id = `${constellation.id}`
            newSighting.className = "observation-form-btn"
            newSighting.innerHTML = "Add Observation Data"

            divCard.appendChild(viewButton)
            divCard.appendChild(newSighting)
            this.cardContainer.appendChild(divCard)
        })
    }

    manageObservations(event){
        const button = event.target
        let observationDiv = document.createElement('div')
            observationDiv.className = "observation-list"
        if (button.innerHTML === "View Recorded Observations"){
            button.innerHTML = "Hide Observations"
            let selected = this.constellations.find(constellation => constellation.id == button.id)
            let observations = selected.constObservationHTML()
            observationDiv.innerHTML = observations
            button.parentElement.appendChild(observationDiv)    
        }
        else if(button.innerHTML === "Hide Observations"){
            button.innerHTML = "View Recorded Observations"
            button.parentElement.lastElementChild.remove()
            //parentElement is the div-card & lastElementChild is observationDiv
        }
        else if(button.innerHTML === "Add Observation Data"){
            button.innerHTML = "Hide Form"
            let formDiv = document.createElement('div')
            formDiv.className = "form"
            formDiv.innerHTML = this.formHTML()           
            button.parentElement.appendChild(formDiv)

           let form = document.querySelector('.add-observation-form')
            form.addEventListener('submit', this.createObservation)
        }

        else if(button.innerHTML === "Hide Form"){
            button.innerHTML = "Add Observation Data"
            button.parentElement.lastElementChild.remove()
            //lastElementChild is form div
        }
    }
    
    createObservation(event){
        console.log(this)
        event.preventDefault()
        console.log("created?")
        // get input then fetch(baseURL, newObservation)
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

// let location = event.target.location.value
//         let clarity = event.target.clarity.value
//         let observationObj = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//           body: JSON.stringify({
//             "location": location, 
//             "clarity": clarity,
//             "constellation_id": event.target.id
//             })
//         }
//         fetch(this.baseURL, observationObj)
//         .then(resp => resp.json())
//         .then(json => renderObservations(json))
// }