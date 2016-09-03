class ResourcesController < ApplicationController
  def index
    render json: Resource.all
  end

  def create
    resource = Resource.create()
    resource.name = params[:data][:name]
    resource.url = params[:data][:url]
    resource.description = params[:data][:description]
    resource.category = params[:data][:category]
    resource.upvote = 0
    resource.save
    render json: resource
  end

  def update
    resource = Resource.find(params[:data][:id])
    resource.description = params[:data][:description]
    resource.category = params[:data][:category]
    resource.upvote = params[:data][:upvotes]
    resource.save
    render json: resource
  end

  def show
    render json: Resource.find(params[:id])
  end

  private

  def resource_params
    params.require(:resource).permit(:name, :url, :description, :upvote)
  end

end
