# == Schema Information
#
# Table name: types
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  test_case  :integer          is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Type < ApplicationRecord

end
