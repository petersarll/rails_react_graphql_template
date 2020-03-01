module Types
  class QueryType < Types::BaseObject
    field :all_workouts, [WorkoutType], null: true, description: "Returns a list of all exercises"

    field :workout, WorkoutType, null: true do
      description "Returns workout given an ID"
      argument :id, ID, required: true
    end 

    def all_workouts
      Workout.all
    end

    def workout(id:)
      Workout.find_by(id: id)
    end
  end
end