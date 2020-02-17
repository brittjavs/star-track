class ObservationSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :location, :clarity
    belongs_to :constellation
    belongs_to :user
end