class MembersController < ApplicationController
    def index
        members= Member.all
        render json: members
    end

    def show
        member = Member.find_by(id: params[:id])
        if member
        render json: member
        else
            render json: {error:"member not found"}, status: :not_found
        end
    end

    def create
        member = Member.create!(member_params)
        render json: member
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
        params.permit(:name, :level)
    end
end
