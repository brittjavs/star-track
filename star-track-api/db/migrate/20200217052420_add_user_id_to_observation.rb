class AddUserIdToObservation < ActiveRecord::Migration[6.0]
  def change
    add_column :observations, :user_id, :integer
  end
end
