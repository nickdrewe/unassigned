var app = angular.module('unassigned', [])
.controller('listCtrl', ['$scope', function($scope){
	$scope.list = [
	{
		'type': 'We\'re Building',
		'title': 'Ruffle',
		'subtitle': 'Send an Anonymous Picture Message to Any Phone Number',
		'authorLink': '',
		'backImg': 'http://ruffle.us/images/bg.jpg',
		'link': 'http://ruffle.us'
	},
	{
		'type': 'We\'re Building',
		'title': 'Churn - Create Endless Channels of Video',
		'subtitle': 'Broadcast your tastes, passions, and interests to the world.',
		'authorLink': '',
		'backImg': 'http://i.imgur.com/QE4FxrK.jpg',
		'link': 'https://churn.tv'
	},
	{
		'type': 'Nonsense',
		'title': 'These 23 Times BuzzFeed Tweeted About 393 Other Tweets',
		'subtitle': 'Prove BuzzFeed Has A Twitter Problem',
		'author': 'By Nick Drewe on Medium',
		'authorLink': '',
		'backImg': 'http://i.imgur.com/9P3GH87.jpg',
		'pattern': true,
		'link': 'https://medium.com/@nickdrewe/these-23-times-buzzfeed-tweeted-about-393-other-tweets-prove-buzzfeed-had-a-twitter-problem-9455c580e76d'
	},
	{
		'type': 'Article',
		'title': 'The Future of AI Looks Nothing Like Software Development',
		'subtitle': '...as you know it.',
		'author': 'By Matt Way',
		'authorLink': '',
		'backImg': 'http://i.imgur.com/t5uue.jpg',
		'link': 'https://medium.com/@matt__way/the-future-of-ai-looks-nothing-like-software-development-as-you-know-it-f7d6358c864b'
	},
	{
		'type': 'Article',
		'title': 'What you don’t understand about the coming robot revolution',
		'subtitle': 'It\'s yours',
		'author': 'By Matt Way',
		'authorLink': '',
		'backImg': 'https://d262ilb51hltx0.cloudfront.net/max/1800/1*l1hKwnWBy-fbSSHcZiDuFw.png',
		'link': 'https://medium.com/@matt__way/what-you-dont-understand-about-the-coming-robot-revolution-9d5b6a4f75e1'
	},
	{
		'type': 'Article',
		'title': 'Building Conscious Machines - The Hard Problem Delusion',
		'author': 'By Matt Way',
		'authorLink': '',
		'backImg': 'https://s3.amazonaws.com/compressionaddict/mind_games.jpg',
		'link': 'http://www.compressionaddict.com/posts/mind/building-conscious-machines-the-hard-problem-delusion'
	}];
}])
.directive('backImg', [
	function(){
		return function(scope, element, attrs){
			var url = 'url(' + attrs.backImg + ')';
			if(attrs.backOverlay){
				url = 'url(' + attrs.backOverlay + '), ' + url;
			}
			element.css({
				'background-image': url          
		});
	};
}]);