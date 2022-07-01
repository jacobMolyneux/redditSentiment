exports.test = function(req, res, next){
    res.json('Hello from redditcontroller')
}
exports.getTopPosts = function(req, res, next){
    res.json('Get top posts from subreddit')
}

exports.getCommentsFromPosts = function(req, res, next){
    res.json('Get comments from a reddit Post')
}