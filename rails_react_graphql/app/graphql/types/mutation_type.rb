module Types
  class MutationType < Types::BaseObject
    field :create_exercise, mutation: Mutations::CreateExercise
  end
end
