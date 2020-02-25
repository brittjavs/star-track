class Observations{
    constructor(){
        this.baseURL = "http://localhost:3000/observations"
        this.observations = []
        this.adapter = new ObservationsAdapter()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.cardContainer = document.getElementById("card-container")
        this.dataButton = document.querySelector(".view-button")
        this.dataButton.addEventListener('click', this.getAndLoadObservations.bind(this))
        //bind(this) to have this = observations class and not the button
    }

    getAndLoadObservations(){
        this.observations = []
        if (this.dataButton.innerHTML === "Browse All Observation Data"){
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
        else if(this.dataButton.innerHTML === "View Constellations"){
            this.dataButton.innerHTML = "Browse All Observation Data"
            new Constellations()
        }     
    }

    renderObservations(){
        this.cardContainer.innerHTML = ""
        this.dataButton.innerHTML = "View Constellations"
        this.dataButton.id = "constellation-data"

        const observationTable = document.createElement('table')
        let header = observationTable.createTHead();
        let tableBody = observationTable.createTBody();
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
            tableBody.appendChild(data)
        })
        this.cardContainer.appendChild(observationTable)
    }    

}