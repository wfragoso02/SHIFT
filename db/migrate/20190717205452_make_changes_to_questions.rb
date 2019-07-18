class MakeChangesToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :dimension, :string, null: false
  end
end
