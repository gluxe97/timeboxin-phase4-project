class Project < ApplicationRecord
    belongs_to :team
    has_many :members
end
