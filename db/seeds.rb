# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create([
  {email: "trevoruptain@gmail.com", username:"Trevor", password:"password"},
  {email: "Anis@email.com", username:"Anisur Khan", password: "password"},
  {email: "Donnie@email.com", username:"Donnie Love", password: "password" },
  {email: "Ivo@email.com", username:"Ivo22", password: "password"},
  {email: "JonathanJohnson023@gmail.com", username: "Jonathan", password:"Nanakuli"},
  {email: "Daniel@email.com", username:"Daniel", password: "password" },
  {email: "test@user.com", username:"User", password: "hunter12"}
  ])


  Website.create([
    {title: "Trevor Uptain", url:"https://trevoruptain.com/", img_url:"https://placeholder", description:"Placeholder", author_id: user[0].id, score_avg: 10 },
    {title: "Picto-Gram", url:"https://picto-gram.herokuapp.com/#/", img_url:"https://i.imgur.com/ZnNJLd8.jpg", description:"Placeholder", author_id: user[3].id},
    {title: "LoudCloud", url:"https://the-loudcloud.herokuapp.com/#/", img_url:"https://www.lifewire.com/thmb/PuEfsq5Y8s13l5abQiEc7aZ18jA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/soundcloud-logo-56a320f03df78cf7727be72e.png", description:"Placeholder", author_id: user[2].id}
  ])

