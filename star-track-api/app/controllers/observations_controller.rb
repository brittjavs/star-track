class ObservationsController < ApplicationController
    def create
        observation = Observation.new(observation_params)
            if observation.save
            render json: ObservationSerializer.new(observation).to_serialized_json
            end
    end

    def index
            observations = Observation.all
            render json: ObservationSerializer.new(observations).to_serialized_json
    end

    def destroy
        observation = Observation.find_by_id(params[:id])
        observation.delete
    end

    private
    def observation_params
        params.require(:observation).permit(:constellation_id, :location, :clarity)
    end
end
