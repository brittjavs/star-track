class Observation{
    constructor(observationJSON){
        //observationJSON is json from our getAndLoadObservation
        this.id = observationJSON.id
        this.location = observationJSON.location
        this.clarity = observationJSON.clarity
    }

    obsFormHTML(){
        return (`<form class="add-observation-form">
        <input
          type="text"
          name="location"
          value=""
          placeholder="City, State"
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="clarity"
          value=""
          placeholder="Enter a rating 1 - 10 (10 being the best clarity)"
          class="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create Observation"
          class="submit"
        />
      </form>`)
    }
}