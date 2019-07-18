class MakeChangesToQuestions2 < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :dimension, :string, null: false
    remove_column :users, :dimension
  end
end
