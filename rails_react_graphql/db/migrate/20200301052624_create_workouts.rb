class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.string :exercise_name
      t.string :sets
      t.string :reps
      t.string :rest

      t.timestamps
    end
  end
end
