# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  type_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  EI         :integer          default(0)
#  SN         :integer          default(0)
#  TP         :integer          default(0)
#  JP         :integer          default(0)
#
class User < ApplicationRecord
  belongs_to :type
  
end
