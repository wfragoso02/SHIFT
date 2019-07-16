class Api::UsersController < ApplicationController
  def create
    @type = Type.find_by(test_case: params[:payload][:test_case])
    if @type
      @user = User.create(email: params[:payload][:email], type: @type)
      render :show
    end
  end

end
