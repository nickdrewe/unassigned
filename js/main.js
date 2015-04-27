var app = angular.module('unassigned', [])
.controller('listCtrl', ['$scope', function($scope){
	$scope.list = [
	{
		'type': 'We Built',
		'title': 'LCOATION:Unassigned',
		'subtitle': 'Discover photos and people near you on Instagram, or in any location around the world.',
		'backImg': 'http://i.imgur.com/ydXoV91.jpg',
		'link': 'http://location.unassigned.co'
	},
	{
		'type': 'We Built',
		'title': '#Coachella',
		'subtitle': 'A Live Feed Everything Youre Missing at Coachella',
		'backImg': 'http://i.imgur.com/jCD1hVX.png',
		'link': 'http://coachella.unassigned.co'
	},
	{
		'type': 'We\'re Building',
		'title': 'Ruffle',
		'subtitle': 'Send an Anonymous Picture Message to Any Phone Number',
		'backImg': 'http://ruffle.us/images/bg.jpg',
		'link': 'http://ruffle.us'
	},
	{
		'type': 'We\'re Building',
		'title': 'Churn - Create Endless Channels of Video',
		'subtitle': 'Broadcast your tastes, passions, and interests to the world.',
		'backImg': 'http://i.imgur.com/Ov8dLAR.jpg',
		'link': 'https://churn.tv'
	},
	{
		'type': 'Nonsense',
		'title': 'These 23 Times BuzzFeed Tweeted About 393 Other Tweets',
		'subtitle': 'Prove BuzzFeed Has A Twitter Problem',
		'author': 'By Nick Drewe on Medium',
		'backImg': 'http://i.imgur.com/9P3GH87.jpg',
		'pattern': true,
		'link': 'https://medium.com/@nickdrewe/these-23-times-buzzfeed-tweeted-about-393-other-tweets-prove-buzzfeed-had-a-twitter-problem-9455c580e76d'
	},
	{
		'type': 'Article',
		'title': 'The Future of AI Looks Nothing Like Software Development',
		'subtitle': '...as you know it.',
		'author': 'By Matt Way',
		'backImg': 'http://i.imgur.com/t5uue.jpg',
		'link': 'https://medium.com/@matt__way/the-future-of-ai-looks-nothing-like-software-development-as-you-know-it-f7d6358c864b'
	},
	{
		'type': 'Article',
		'title': 'What you don’t understand about the coming robot revolution',
		'subtitle': 'It\'s yours',
		'author': 'By Matt Way',
		'backImg': 'https://d262ilb51hltx0.cloudfront.net/max/1800/1*l1hKwnWBy-fbSSHcZiDuFw.png',
		'link': 'https://medium.com/@matt__way/what-you-dont-understand-about-the-coming-robot-revolution-9d5b6a4f75e1'
	},
	{
		'type': 'Article',
		'title': 'Building Conscious Machines - The Hard Problem Delusion',
		'author': 'By Matt Way',
		'backImg': 'https://s3.amazonaws.com/compressionaddict/mind_games.jpg',
		'link': 'http://www.compressionaddict.com/posts/mind/building-conscious-machines-the-hard-problem-delusion'
	},
	{
		'type': 'We Built',
		'title': 'Splendour In The Grams',
		'subtitle': 'A Live Feed of #SplendourInTheGrass',
		'backImg': 'http://i.imgur.com/zDi0VdZ.png',
		'link': 'http://splendourinthegrams.com'
	},
	{
		'type': 'Article',
		'title': 'Instagram\'s Sex Censorship is Inconsistent and Hilarious',
		'subtitle': 'Not only is Instagram\'s censorship policy nonsensical and inconsistent—it’s hilariously absurd.',
		'backImg': 'http://i.imgur.com/VuQxDzo.jpg',
		'link': 'http://www.thedailybeast.com/articles/2013/10/30/instagram-s-sex-censorship-is-inconsistent-and-hilarious.html',
		'author': 'By Nick Drewe for The Daily Beast',
	},
	{
		'type': 'Article',
		'title': 'This Year’s Triple J Hottest 100 Was Totally Hackable',
		'subtitle': 'Submitting thousands of fake votes was easy',
		'backImg': 'http://i.imgur.com/qiO0agC.jpg',
		'link': 'http://www.vice.com/en_au/read/this-years-triple-j-hottest-100-was-totally-hackable',
		'author': 'By Nick Drewe for Vice',
	},
	{
		'type': 'We Built',
		'title': 'The Warmest 100',
		'subtitle': 'We used social media to predict the world\'s largest music poll',
		'backImg': 'http://i.imgur.com/PVbbRXe.jpg',
		'link': 'http://warmest100.com.au'
	}
	];
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