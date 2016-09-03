class ResourcesController < ApplicationController
  def index
    render json: Resource.all
  end

  def create
    raise params.inspect
  end

  def show
    render json: Resource.find(params[:id])
  end

  private

  def resource_params
    params.require(:resource).permit(:name, :url, :description, :upvote)
  end

end
