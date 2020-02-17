class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).serialized_json
    end
    
    def create
        user = User.create_or_find_by(user_params)
            if user
                render json: UserSerializer.new(user).serialized_json
            end
    end

    private
    def user_params
        params.require(:user).permit(:username)
    end
end
