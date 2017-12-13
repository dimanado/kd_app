class ArticlePolicy < ApplicationPolicy
  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.select { |article| article.edition.users.include?(@user) }
    end
  end
end
