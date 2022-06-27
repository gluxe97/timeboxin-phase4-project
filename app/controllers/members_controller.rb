class MembersController < ApplicationController
    def index
        members= Member.all
        render json: members
    end

    def show
        if current_user
        render json: current_user, status: :ok 
        else
            render json: {error:"not authenticated"}, status: :unauthorized 
        end
    end

    def create
        member = Member.create!(member_params)
        if member.valid?
            session[:member_id] = member.id
        render json: member, status: :created
        else
            render json: {error: "not valid"}, status: :unprocessable_entity
        end
    end

    def update
        member = Member.find_by(id: params[:id])
        if member
            member.update(member_params)
            render json: member, status: :accepted 
        else
            render json: {error:"member not found"}, status: :not_found
        end
    end

    def destroy
        member = Member.find_by(params[:id])
        if member
            member.destroy
            head :no_content
        else
            render json: {error:"member not found"}, status: :not_found
        end
    end

    private

    def member_params
        params.permit(:username, :name, :password)
    end
end
