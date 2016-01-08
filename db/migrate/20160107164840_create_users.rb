class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :handle
      t.text :following

      t.timestamps null: false
    end
  end
end
