class TeamsController < ApplicationController
    def index
        teams=Team.all
        render json: teams 
    end

    def show
        team = Team.find_by(id: params[:id])
        if team
        render json: team
        else
            render json: {error:"team not found"}, status: :not_found
        end
    end

    def create
        team = Team.create!(team_params)
        render json: team
    end

    def update

    end

    def destroy

    end

    private

    def team_params
        params.permit(:section)
    end

end
