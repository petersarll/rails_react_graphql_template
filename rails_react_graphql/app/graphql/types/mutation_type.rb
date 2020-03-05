module Types
  class MutationType < Types::BaseObject
    field :create_exercise, mutation: Mutations::CreateExercise
    field :destroy_exercise, mutation: Mutations::DestroyExercise
  end
end
