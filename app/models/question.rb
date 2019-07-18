# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  question   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  dimension  :string           not null
#  direction  :integer          not null
#
class Question < ApplicationRecord

end
