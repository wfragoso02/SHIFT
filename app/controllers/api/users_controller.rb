class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @type = Type.find_by(test_case: params[:payload][:test_case])
    if @type
      @user = User.create(email: params[:payload][:email], type: @type, EI: params[:payload][:EI], SN: params[:payload][:SN], TF: params[:payload][:TF], JP: params[:payload][:JP] )
      render :show
    end
  end
end
