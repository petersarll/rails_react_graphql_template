module Mutations
  class CreateExercise < GraphQL::Schema::RelayClassicMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false
    field :workout, Types::WorkoutType, null: false
    # TODO: define arguments
    # argument :name, String, required: true
    argument :exercise_name, String, required: true
    argument :sets, String, required: true
    argument :reps, String, required: true
    argument :rest, String, required: true
    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    def resolve(args)
      begin 
        workout = Workout.create(
          exercise_name: args[:exercise_name],
          sets: args[:sets],
          reps: args[:reps],
          rest: args[:rest]
        )
        { workout: workout }
      rescue ActiveRecord::RecordInvalid => invalid
        GraphQL::ExecutionError.new(
          {
            errors: invalid.record.errors.full_messages
      }.to_json
        )
      end
    end
  end
end
