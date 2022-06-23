class Team < ApplicationRecord
    has_many :members
    has_many :projects, through: :members
end
