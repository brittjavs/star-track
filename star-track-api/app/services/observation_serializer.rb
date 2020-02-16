class ConstellationSerializer
    def initialize(observation_object)
        @observation = observation_object
    end

    def to_serialized_json
        options = {
            except: [:updated_at, :created_at],
        }
        @observation.to_json(options)
    end
end