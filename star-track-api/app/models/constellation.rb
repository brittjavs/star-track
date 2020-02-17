class Constellation < ApplicationRecord
    has_many :observations
    has_many :users through: :observations
end
