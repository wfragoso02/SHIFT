class Api::TypesController < ApplicationController
  def show
    @type = Type.find_by_credentials(params[:type][:type_case])
    if @type
      User.create(email: params[:user][:email], type: @type)
      render 'api/users/show'
    end
  end

  # private

  # def type_params
  #   params.require(:type).permit(:type_case)
  # end
end
