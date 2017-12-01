class EditionPolicy < ApplicationPolicy
  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.select { |edition| edition.users.include?(@user) }
    end
  end
end
