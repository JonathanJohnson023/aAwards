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
    {title: "Trevor Uptain", url:"https://trevoruptain.com/", img_url:"https://lh3.googleusercontent.com/hyCQrqOQ1Rg_aFl1qGSLLUnd1hocAMYhwpkzuNnioHnsQA0HUZCD94G1A24GepKoHhUPbWb5D4wCDrNDys9ljaZKSGYyh9IXXPsZafORbtWiRRLnTzqz09kG2fbirZawTGD9evVgyl8KtdVwUws7Xwt9sMz_vLfvxEvi9gr_4Ux9HYSImFoTWhc1Xln05_Dcs4V5sRrvzUMhCOqBLzn0E1qerlkGPKA-VN3PSc4OHVBUhGK7DnBXfsrHUG_vpto3VJlfoVVqqYigpyxi451MBxYVShx4rplIwojGkPl_IiIFCj_kcvNf7G_jLYeytskLB1cTSe2KD5Eoab1hsNjBPllQZezebU5dYOqDcnvFQH8gw7avBAtJDakpovGhbA0MAhKhAfnKpknB-GINdho6pbzMRmQdF7k6zrP8QimR4hFoM2HNCD6gUKGhSZYrzBQ6jNoegDN-i39GlpsBo-gPpk8ys-PT8ZMe0qFhi_UZI3SWuW4mf8_4oewSJRxG5xeNartNv3uzPwNd7ioBsFoZWcQxF0ONLK9SyC9RUzZXKvyXSlExE59tnijyZrfirVE-8jPJMD7cG2rtRMK02pXO4xLJBGfTB78ZK01aZQvGuj9ISXmJUlsKFT9ZenI5rUhb9p0iWu2EP1YciE5C3gwiMogQbkAZjPpEE-P2KGFKG2cdRCkq_aZ_0Wo=w571-h64-no", description:"Placeholder", author_id: user[0].id, score_avg: 10 },
    {title: "Picto-Gram", url:"https://picto-gram.herokuapp.com/#/", img_url:"https://i.imgur.com/ZnNJLd8.jpg", description:"Placeholder", author_id: user[3].id},
    {title: "LoudCloud", url:"https://the-loudcloud.herokuapp.com/#/", img_url:"https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/loudcloud2.png", description:"Placeholder", author_id: user[2].id}
  ])

