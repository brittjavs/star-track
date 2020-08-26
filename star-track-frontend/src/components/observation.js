class Observation{
    constructor(observationJSON){
        //observationJSON is json from our getAndLoadObservation
        this.id = observationJSON.id
        this.location = observationJSON.location
        this.clarity = observationJSON.clarity
        this.constellation = observationJSON.constellation.name
    }

    populateTable(){
        let dataRow = document.createElement('tr')
        dataRow.innerHTML = `<td>${this.id}</td>
        <td>${this.location}</td>
        <td>${this.clarity}</td>
        <td>${this.constellation}</td>`
        
        return dataRow
    }

    newLI(){
        return `<li>Location: ${this.location} | Clarity Rating:${this.clarity}</li>`
    }

    newObsHTML(){
        return `<h3>Please confirm your submission</h3>
        Location: ${this.location} 
        <br>
        Clarity Rating:${this.clarity}
        <div class="confirmation">
        <button id=${this.id} class="delete">Delete Submission</button>
        <button id=${this.id} class="confirm">Confirm Submission</button>
        </div>`
    }

}