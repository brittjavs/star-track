class ConstellationSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :image
    has_many :observations
end