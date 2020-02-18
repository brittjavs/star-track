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
        console.log(this)
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
        this.cardContainer
    }

}