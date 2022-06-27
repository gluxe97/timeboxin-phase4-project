class Member < ApplicationRecord
    belongs_to :team, optional: true
    belongs_to :project, optional: true

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true 
    validates :password, presence: true 

end
