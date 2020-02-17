class UsersController < ApplicationController
    def create
        user = User.create_or_find_by(user_params)
            if user
                session[:id] = user.id
                render json: UserSerializer.new(user).serialized_json
            else
                flash[:error] = "User not found"
            end
    end

    private
    def user_params
        params.require(:user).permit(:username)
    end
end
