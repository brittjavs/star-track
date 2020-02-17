class CreateObservations < ActiveRecord::Migration[6.0]
  def change
    create_table :observations do |t|
      t.string :location
      t.integer :clarity
      t.integer :constellation_id
      t.timestamps
    end
  end
end
