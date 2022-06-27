class SessionsController < ApplicationController
  def create
    member = Member.find_by(username: params[:username])
    if member&.authenticate(params[:password])
      session[:member_id]= member.id 
      render json: member, status: :ok
    else
      render json: {error:"Invalid Credentials. Try again!"}, status: :unauthorized
    end
  end

  def destroy
    session.delete :member_id
  end
end
