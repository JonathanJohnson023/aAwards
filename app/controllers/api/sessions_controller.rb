class Api::SessionsController < ApplicationController

   def new
   end

   def create
      @user = User.find_by_credentials(
         params[:user][:username],
         params[:user][:password]
      )
      if @user
         login(@user)
         render "api/users/show"
      else
         render json: ["they dont exist or you are wrong"]
      end

   end


   def destroy 
      @user = current_user
      if @user
         logout
         render "api/users/show"
      else
         render json: ["noOne to Sign out "]
      end
   end

end
