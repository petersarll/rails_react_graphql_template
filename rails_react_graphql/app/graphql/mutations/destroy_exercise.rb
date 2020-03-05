module Mutations
  class DestroyExercise < ::Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false
    argument :id, Integer, required: true
    # TODO: define arguments 
    # type Types::WorkoutType
    # argument :name, String, required: true
    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    def resolve(id:)
      Workout.find(id).destroy
    end
  end
end


# mutation destroy example in /graphiql

# mutation {
#   destroyExercise(
#     id: 1
#   ){
#     id 
#     exerciseName
#   }
# }