class ObservationsController < ApplicationController
    def create
        observation = Observation.new(observation_params)
            if observation.save
            render json: observation
            end
        
    end

    def index
            observations = Observation.all
            render json: ObservationSerializer.new(observations).to_serialized_json
    end

    private
    def observation_params
        params.require(:observation).permit(:constellation_id, :location, :clarity)
    end
end
