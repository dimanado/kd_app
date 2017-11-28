class LessonsController < ApplicationController
  before_action :set_lesson, only: [:show, :update, :destroy]

  def index
    @lessons = policy_scope(Lesson)
  end

  def create
    @lesson = Lesson.new(lesson_params)

    authorize @lesson

    if @lesson.save
      render :show, status: :created, location: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  def update
    if @lesson.update(lesson_params)
      render :show
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @lesson.destroy
  end

  private

  def set_lesson
    @lesson = Lesson.find(params[:id])
    authorize @lesson
  end

  def lesson_params
    params.require(:lesson).permit(:name, :description, :annotation, :content)
  end
end
