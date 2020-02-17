class ConstellationSerializer
    def initialize(constellation_object)
        @constellation = constellation_object
    end

    def to_serialized_json
        options = {
            include: {
                observations: {
                    except: [:updated_at, :created_at]
                }
            },
            except: [:updated_at, :created_at],
        }
        @constellation.to_json(options)
    end
end