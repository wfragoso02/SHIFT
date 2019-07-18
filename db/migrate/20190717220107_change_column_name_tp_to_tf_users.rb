class ChangeColumnNameTpToTfUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :TP, :TF
  end
end
