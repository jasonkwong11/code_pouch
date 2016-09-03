# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Resource.create(name: "SRL", url: "https://simple-regex.com/", description: "Regular Expressions made simple", upvote: 0, category: "Regex")
Resource.create(name: "Markdown Cheatsheet", url: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code", description: "A cheatsheet for markdown.", upvote: 0, category: "Markdown")
Resource.create(name: "Rails Tutorial", url: "https://www.railstutorial.org/", description: "A tutorial by Michael Hartl to learn Rails", upvote: 0, category: "Ruby on Rails")
Resource.create(name: "Everyday Rails Testing with RSPEC", url: "https://leanpub.com/everydayrailsrspec", description: "An excellent book to teach RSPEC", upvote: 0, category: "RSPEC")
Resource.create(name: "Lets Build a Sinatra App", url: "http://matt.weppler.me/2013/07/19/lets-build-a-sinatra-app.html", description: "A tutorial to introduct Sinatra", upvote: 0, category: "Sinatra")
