class User < ActiveRecord::Base
  has_and_belongs_to_many :locations
  has_secure_password

  def add_location(location)
		self.locations.push(location) unless self.locations.include? location
	end

end