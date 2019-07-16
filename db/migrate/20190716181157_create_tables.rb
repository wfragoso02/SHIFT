class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question, null: false
      t.timestamps
    end
    create_table :users do |t|
      t.string :email, null: false
      t.integer :type_id
      t.timestamps
    end
    create_table :types do |t|
      t.string :name, null: false
      t.integer :test_case, array: true
      t.timestamps
    end
  end
end
