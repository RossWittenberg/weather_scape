class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
    	t.float :latitude
    	t.float :longitude
    	t.string :name
    	t.string :state
    	t.string :country

    	t.timestamps
    end
  end
end
