class ConstellationsAdapter{
    //^this is an object
    //Adapter talks to our backend api
    constructor(){
        //define variables and properties in constructor
        this.baseURL = 'http://localhost:3000/constellations'
    }

    getConstellations(){
        return fetch(this.baseURL).then(resp => resp.json())
    }
}