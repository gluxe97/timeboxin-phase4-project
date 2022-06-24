class Member < ApplicationRecord
    belongs_to :team
    belongs_to :project

    has_secure_password
end
