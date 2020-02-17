class User < ApplicationRecord
    has_many :observations
    has_many :constellations, through: :observations
    validates :username, uniqueness: true
    validates :username, presence: true
end
