class ConstellationsController < ApplicationController
    def index
        constellations = Constellation.all
        render json: ConstellationSerializer.new(constellations).serialized_json
    end
end
