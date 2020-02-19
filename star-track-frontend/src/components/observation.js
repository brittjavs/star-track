class Observation{
    constructor(observationJSON){
        //observationJSON is json from our getAndLoadObservation
        this.id = observationJSON.id
        this.location = observationJSON.location
        this.clarity = observationJSON.clarity
    }

    populateTable(){
        let dataRow = document.createElement('tr')
        dataRow.innerHTML = `<td>${this.id}</td>
        <td>${this.location}</td>
        <td>${this.clarity}</td>`
        return dataRow
    }

}