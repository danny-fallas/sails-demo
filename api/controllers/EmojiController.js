/**
 * EmojiController
 *
 * @description :: Server-side logic for managing emojis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// find: function(req, res){},
	associateWithUser: function(req, res){
		// console.log('hello, it\'s me');
		// res.json({
		// 	hello: 'world'
		// });
		Emoji.update({
			id: req.param('id')
		},{
			owner: req.param('owner')
		}).exec(function(err){
			if (err) return res.negotiate(err);

			res.ok();
		});
	},
};

