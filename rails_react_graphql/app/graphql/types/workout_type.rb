module Types
  class WorkoutType < Types::BaseObject
    graphql_name 'workoutType'

    field :id, ID, null: false
    field :exerciseName, String, null: false
    field :sets, String, null: true
    field :reps, String, null: true
    field :rest, String, null: true
  end
end