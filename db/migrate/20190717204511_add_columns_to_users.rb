class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :EI, :integer, :default => 0
    add_column :users, :SN, :integer, :default => 0
    add_column :users, :TP, :integer, :default => 0
    add_column :users, :JP, :integer, :default => 0
  end
end
