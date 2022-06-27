class ApplicationController < ActionController::API
include ActionController::Cookies

private

def current_user
    Member.find_by(id: session[:member_id])
end
end
