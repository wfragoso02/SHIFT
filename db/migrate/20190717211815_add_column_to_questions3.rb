class AddColumnToQuestions3 < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :direction, :integer, null: false
  end
end
