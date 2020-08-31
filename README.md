# star-track app

## Usage
This is an application with a Rails API and JS frontend. 
The app is designed to collect observation data of constellations in the Northern Hemisphere. It is open to all citizen scientists.
User Story
A user can 
* Browse through constellations that are visible in the Northern Hemisphere.
* View recorded observations for a specific constellation.
* Add an observation for a constellation through a form.
* View the entire data collection


## Installation:

* You will need PostgreSQL and a Postgres server to use this application

After cloning this repository,
```
cd star-track
cd star-track-api
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```
Open star-track-frontend/index.html in your browser
