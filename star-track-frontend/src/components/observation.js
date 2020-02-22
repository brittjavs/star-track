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

}