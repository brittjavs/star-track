class ObservationsController < ApplicationController
    def create
        observation = Observation.new(observation_params)
            if observation.save
            render json: ObservationSerializer.new(observation).serialized_json
            end
        
    end

    def index
            observations = Observation.all
            render json: ObservationSerializer.new(observations).serialized_json
    end

    private
    def observation_params
        params.require(:observation).permit(:constellation_id, :location, :clarity, :user_id)
    end
end
