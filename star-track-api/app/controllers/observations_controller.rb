class ObservationsController < ApplicationController
    def create
        observation = Observation.new(observation_params)
            if observation.save
            render json: ObservationSerializer.new(observation)
    end

    private
    def observation_params
        params.require(:observation).permit(:constellation_id, :location, :clarity)
    end
end
