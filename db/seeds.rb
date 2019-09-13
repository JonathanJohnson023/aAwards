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

website0 = Website.create(title: "Trevor Uptain", url:"https://trevoruptain.com/", description:"I am a full time developer/Instructer and this is my personal site", author_id: user[0].id, score_avg: 10 )
file0 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/TrevUp.png")
website0.cover_photo.attach(io: file0, filename: 'TrevorLogo')

website1 = Website.create(title: "Picto-Gram", url:"https://picto-gram.herokuapp.com/#/", description:"A clone of the application Instagram", author_id: user[3].id, score_avg: 4)
file1 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/U2cxTyP.png")
website1.thumbnail_photo.attach(io: file1, filename: 'Picto-Gram-thumbnail')

website2 = Website.create(title: "LoudCloud", url:"https://the-loudcloud.herokuapp.com/#/", description:"A clone of the application Soundcloud", author_id: user[2].id, score_avg: 5)
file2 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/cloud+copy.png")
file22 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2019-09-13+at+11.29.26+AM.png")
website2.thumbnail_photo.attach(io: file2, filename: 'LoudCloud-thumbnail')
website2.cover_photo.attach(io: file22, filename: 'LoudCloud-cover')

website3 = Website.create(title: "Turbo", url:"http://turbo-fsp.herokuapp.com/", description:"A clone of the application Turo", author_id: user[1].id, score_avg: 4)
file3 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/turbo-logo.jpeg")
file33 = open("https://a-awards-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2019-09-13+at+9.28.23+AM.png")
website3.thumbnail_photo.attach(io: file3, filename: 'Turbo-thumbnail')
website3.cover_photo.attach(io: file33, filename: 'Turbo-cover')


