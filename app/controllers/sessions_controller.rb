class SessionsController < ApplicationController
  def create
    member = Member.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:member_id]= member.id 
      render json: user, status: :okay
    else
      render json: "Invalid Credentials. Try again!", status: :unauthorized
  end

  def destroy
    session.delete :member_id
  end
end
