# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'
User.destroy_all
Type.destroy_all
Question.destroy_all

lines = CSV.open('db/Questions.csv').readlines
keys = lines.shift
lines.each do |values|
  hash = Hash[keys.zip(values.map { |val| val })]
  Question.create!(question: hash['Question'], dimension: hash['Dimension'], direction: hash['Direction'])
end

Type.create!(name: 'ENTP', test_case: [4, 3, 1, 6, 7, 3, 5, 3, 6, 6])
Type.create!(name: 'ESTJ', test_case: [1, 5, 4, 6, 5, 2, 6, 3, 3, 2])
Type.create!(name: 'INFP', test_case: [3, 2, 6, 1, 7, 3, 2, 5, 2, 7])
Type.create!(name: 'ISFP', test_case: [3, 4, 7, 1, 2, 5, 4, 3, 2, 6])
Type.create!(name: 'ESTJ', test_case: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4])
Type.create!(name: 'ISTJ', test_case: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
Type.create!(name: 'ESTP', test_case: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7])
