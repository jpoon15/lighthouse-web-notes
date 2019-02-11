# More Ruby and OOP

## Active Record

[Gist](https://gist.github.com/JoelCodes/203cb0e5704286d825de2b1207595201)

ActiveRecord is an ORM (Object Relational Mapper). It is an OO way of thinking about and organizing Data Transactions.

A DB Table is like a class, and a record (or row) is like an instance of a class.

The charm of ORMs is this illusion that when you interact with a class and its instances, you are interacting with the database.

## Models

[Supernatural collective nouns](http://wondermark.com/566/)
]
Models are classes that encapsulate all the data transactions you would like to execute on an existing table. They will extend ActiveRecord::Base.

Side note: in Rails, your models will extend ApplicationRecord, which itself extends ActiveRecord::Base.

## Schemas

Schema definitions allow you to modify the schema of the database to which you are connected.

In practice, they will be put in migrations.

## Associations

Associations take the next step in the ORM narrative. If classes represent tables, and objects represent records, then object composition represents foreign key relationships.

So, the same way that we might have this (in JavaScript):

```ruby
const game = {turn: 0, players:[]};
const player = {name: 'Peter'};
game.players.push(player)
player.game = game;
This lets us refer from one to the other. We can define similar relationships with belongs_to and has_many.

class Game < ActiveRecord::Base
  has_many :players
end

class Player < ActiveRecord::Base
  belongs_to :game
end
```