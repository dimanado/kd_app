source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'annotate'
gem 'devise'
gem 'devise_token_auth'
gem 'foreman', '~> 0.82.0'
gem 'jbuilder'
gem 'pg'
gem 'puma', '~> 3.7'
gem 'pundit'
gem 'rails', '5.1.4'
gem 'carrierwave-base64'
gem 'config'
gem 'activeadmin'
gem 'inherited_resources'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
