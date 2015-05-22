var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tamblr');

var model = function(name, schema) {
    mongoose.model(name, new mongoose.Schema(schema, {
        strict: true
    }));
};

var users = model('users', {
    name: {
        type: String,
        default: '' 
    },
    bio: {
        type: String,
        default: 'IE6-Lover'
    },
    age: {
        type: Number,
        default: null
    }
});

var blogs = model('blogs', {
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    users: {
        type: ObjectId,
        ref: 'users'
    }
});

var posts = model('posts', {
    title: {
        type: String,
        default: ''
    },
    body: {
        type: String,
        default: ''
    },
    published: {
        type: Date
    },
    blogs: {
        type: ObjectId,
        ref: 'blogs'
    }
});

model.find({}, function(err, data) {
    console.log(data);
});