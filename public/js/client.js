// the user itself
// have to specify the id being diff b/c mongo uses the '_id' instead of simple 'id'
var User = Backbone.Model.extend({
    idAttribute: "_id"
});

// a collection of Users
// need to specify what it is using and where to load it from
var UserCollection = Backbone.Collection.extend({
    model: User,
    url: "/users"
})
