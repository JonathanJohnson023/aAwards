# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([
  {id: 777, email: "JonathanJohnson023@gmail.com", username: "Jonathan", password:"Nanakuli"},
  {id: 7, email: "test@user.com", username:"User", password: "hunter12"},
  {id: 2, email: "ivo@email.com", username:"ivo22", password: "password"},
  {id: 1, email: "trevoruptain@gmail.com", username:"Trevor", password:"password"}
  ])

  Website.create([
    {title: "Trevor Uptain", url:"https://trevoruptain.com/", author_id: 1, score_avg: 10 },
    {title: "Picto-Gram", url:"https://picto-gram.herokuapp.com/#/", img_url:"https://i.imgur.com/ZnNJLd8.jpg", author_id: 2}
  ])

