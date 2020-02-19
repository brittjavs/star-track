class ObservationSerializer
    def initialize(observation_object)
        @observation = observation_object
    end

    def to_serialized_json
        options = {
            include: {
                constellation: {
                    except: [:updated_at, :created_at, :image]
                }
            },
            except: [:updated_at, :created_at, :constellation_id],
        }
        @observation.to_json(options)
    end
end