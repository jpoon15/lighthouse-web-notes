# W7D4 - Rails 2: Electric Boogaloo

[Git Repo with Code](https://github.com/NimaBoscarino/rails-2-notes)

[Bo Burnham Kanye Rant](https://www.youtube.com/watch?v=rYy0o-J0x20)
[Custom View Helpers](https://rubyplus.com/articles/3651-Custom-View-Helpers-in-Rails-5)
[Rails Routing](https://guides.rubyonrails.org/routing.html)
[Built-in View Helperes](https://guides.rubyonrails.org/action_view_overview.html#overview-of-helpers-provided-by-action-view)

1. Review of yesterday's stuff (so more conversation about MVC)
2. Process of Rails dev stuff (how to work incrementally)
3. How to know as little as possible and still get by

## We are learning patterns

- MVC - Model View Controller
  - Model contains all the info about a noun (maybe what is it related to as well)
  - View - how do we display particular things
    - some kind of helper for more complex things
  - Controller - routing, prepares a bit of data to pipe into the views

## Adding a new feature

#### FEATURE: Add storewide sales to Jungle (that can be added by administrators)

1. Admin side
2. Public facing side

## Admin Side of things

This is what we worked on in lecture. The way we went into this was...

1. Routes (resources...)
2. Controller (actually create the required controller, then add the required action (e.g. index))
3. View (make the necessary view! We copied over admin/products/index.html.erb, and fixed it up to work for sales)
4. The View requires @sales, which should be passed in from the controller. So we needed to actually create a Sale class (`rails g model ...`)
5. Then we got into the view helper stuff. We created some functionality in the Sale class to determine whether the sale had started or finished, and then we created a helper method that we used to offload the work of determining what status to display.

There are some other things that we didn't talk about, including _path and url for route helpers. I recommend taking a look at this post: https://stackoverflow.com/questions/25820138/what-is-the-path-method-in-ruby-on-rails_

Enjoy, and let me know if you have questions!