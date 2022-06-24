class ProjectsController < ApplicationController
    def index
        render json: Project.all
    end

    def show
        project = Project.find_by(id: params[:id])
        if project
            render json: project, include: :members
            else
                render json: {error:"project not found"}, status: :not_found
            end
    end

    def create
        project = Project.create!(project_params)
        render json: project
    end

    def update
        
    end

    def destroy

    end

    private

    def project_params
        params.permit(:name, :description, :time)
    end
end
