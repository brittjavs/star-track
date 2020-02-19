class Observations{
    constructor(){
        this.observations = []
        this.adapter = new ObservationsAdapter()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
        this.dataButton = document.getElementsByClassName("observation-data-btn")[0]
        this.dataButton.addEventListener('click', this.getAndLoadObservations.bind(this))
        //bind(this) so this = observations class and not the button
    }

    getAndLoadObservations(){
        this.adapter
        .getObservations()
        .then(observations =>{
            //getObservations comes from ObservationsAdapter
            observations.forEach(observation => this.observations.push(new Observation(observation)))
        })
        .then(()=>{
            this.renderObservations()
        })
    }

    renderObservations(){
        this.cardContainer.innerHTML = ""
        this.dataButton.innerHTML = "View Constellations"
        this.dataButton.className = "view-constellation-btn"
        const observationTable = document.createElement('table')
        let header = observationTable.createTHead();
        let headerRow = header.insertRow();
        let keys = Object.keys(this.observations[0])
        
        for (let key of keys){
            let th = document.createElement("th")
            let text = document.createTextNode(key);
            th.appendChild(text)
            th.style.textTransform = "capitalize"
            headerRow.appendChild(th)
        }
        this.observations.forEach(observation=>{
            let data = observation.populateTable()
            observationTable.append(data)
        })
        this.cardContainer.appendChild(observationTable)
        
    }


}