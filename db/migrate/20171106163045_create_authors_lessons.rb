class CreateAuthorsLessons < ActiveRecord::Migration[5.1]
  def change
    create_join_table :authors, :lessons
  end
end
