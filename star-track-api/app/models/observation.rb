class Observation < ApplicationRecord
    belongs_to :constellation
    belongs_to :user
end
