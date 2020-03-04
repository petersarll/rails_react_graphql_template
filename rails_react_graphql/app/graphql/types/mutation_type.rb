module Types
  class MutationType < Types::BaseObject
    field :destroy_exercise, mutation: Mutations::DestroyExercise
    field :create_exercise, mutation: Mutations::CreateExercise
  end
end
