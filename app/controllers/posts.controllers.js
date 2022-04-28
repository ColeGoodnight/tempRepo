const { request } = require("express");
const Post = require("../models/post");

const homeStartingContent =
	'The home pages lists all the blogs from all the users.';

const composePost = (req, res) => {
	Post.create({
    	username: req.user.username,
		title: req.body.postTitle,
		content: req.body.postBody
	});

	res.redirect('/post');
};

const displayAllPosts = (req, res) => {
	Post.findAll().then( function(posts) {
		res.render('home', {
			startingContent: homeStartingContent,
			posts: posts
		});
	});

	

	/*Post.find({}, function(err, posts) {
		res.render('home', {
			startingContent: homeStartingContent,
			posts: posts
		});
	});*/
};

async function displayPost (req, res)  {
	const requestedPostId = req.params.postId;
	Post.findAll({
		where: {
			postId: requestedPostId,
		}
	}).then(function(post) {
		res.render('post', {
			title: post.title,
			content: post.content
		});
	});

	

	/*Post.findOne({ _id: requestedPostId }, function(err, post) {
		res.render('post', {
			title: post.title,
			content: post.content
		});
	});*/
};

module.exports = {
	displayAllPosts,
	displayPost,
    composePost
};