# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Website.destroy_all

user = User.create([
  {email: "trevoruptain@gmail.com", username:"Trevor", password:"password"},
  {email: "Anis@email.com", username:"Anisur Khan", password: "password"},
  {email: "Donnie@email.com", username:"Donnie Love", password: "password" },
  {email: "Ivo@email.com", username:"Ivo22", password: "password"},
  {email: "JonathanJohnson023@gmail.com", username: "Jonathan", password:"Nanakuli"},
  {email: "Daniel@email.com", username:"Daniel", password: "password" },
  {email: "test@user.com", username:"User", password: "hunter12"}
  ])

website0 = Website.create(title: "Trevor Uptain", url:"https://trevoruptain.com/", description:"Placeholder", author_id: user[0].id, score_avg: 10 )
file0 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/TrevUp.png")
website0.cover_photo.attach(io: file0, filename: 'TrevorLogo')

website1 = Website.create(title: "Picto-Gram", url:"https://picto-gram.herokuapp.com/#/", description:"Placeholder", author_id: user[3].id)
file1 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/U2cxTyP.png")
website1.thumbnail_photo.attach(io: file1, filename: 'Picto-Gram')

website2 = Website.create(title: "LoudCloud", url:"https://the-loudcloud.herokuapp.com/#/", description:"Placeholder", author_id: user[2].id)
file2 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/cloud+copy.png")
website2.thumbnail_photo.attach(io: file2, filename: 'LoudCloud')

