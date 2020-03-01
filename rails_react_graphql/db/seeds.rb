# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Workout.create(
  exercise_name: "Barbell Squat",
  sets: "6",
  reps: "10",
  rest: "1 minute"
)

Workout.create(
  exercise_name: "Dumbell Thruster",
  sets: "3",
  reps: "15",
  rest: "30 seconds"
)