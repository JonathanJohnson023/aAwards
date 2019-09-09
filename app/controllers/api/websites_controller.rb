class Api::WebsitesController < ApplicationController

  def top
    @website = Website.order("score_avg DESC").first
  end

  def index
    @websites = Website.all
  end
  
  def show
    @website = Website.find(params[:id])
  end

  def create
    @website = Website.new(website_params)
    if @website.save
      render :show
    else
      render json: @website.errors.full_messages, status: 422
    end
  end

  def update

  end

  def delete

  end

  private
    def website_params
      params.require(:website).permit( :title, :url, :description, :img_url)
    end
  
  
end
