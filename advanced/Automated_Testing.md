# Automated Testing with RSpec

## The World of Testing

### Types of Tests

- Automated Testing vs. Manual Testing
- Unit Tests (Unit is a small piece of code by itself)
- Testable Units are, by definition, modular and reusable.
- System Tests (overlap with Integration Tests)
- E2E (End to End) Testing
- Feature Tests
- Regression Testing checks to see that other functionality has not "regressed"

### Testing Methodologies

Three laws of TDD (according to Robert C. Martin)

1. You must first write only just enough test to cause a failure (Compilation or undefined is not a function is a failure)
2. You must only write enough code to cause a failing test to pass.
3. You must not write any more code than sufficient to cause a failing test.

The more general form of TDD

- Red - Write a failing test
- Green - Make it pass
- Refactor - Fix your code for performance and readability, making sure it still works.

TDD | BDD
--- | ---
You must write the test first | You can write the test before or after
Developers write the tests  | Any one can write the tests, including QA, Business Analysts, UX Designers, &c.
Unit Tests | Any kind of test

TDD is a skill unto itself. Some things are easier to test than others. The closer a bit of code is to a pure function, the easier it is to test.

### Anatomy of a Test

[Gist of JS Test](https://gist.github.com/JoelCodes/3633b72786a08fb5d3b689e7d2538e90)

describe / context / it
Matchers
Hooks

### Installing RSpec-Rails

- Add to the Gemfile
```ruby
group :development, :test do
  gem 'rspec-rails', '~> 3.8'
end
```

Run these commands:
> bundle install
> rails generate rspec:install

For our demo, we also ran these commands:
```ruby
rails g scaffold article title:string content:text author:string publish_date:date
```

### Other Libraries

Shoulda - Provides awesome matchers
FactoryBot - helps to create objects for tests

[Gist of affected files](https://gist.github.com/JoelCodes/b3ea931af86ef2eb5938e18cb14d13a0)