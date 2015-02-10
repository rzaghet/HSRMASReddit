(function() {
    angular.module('app').config([
        '$translateProvider', function($translateProvider) {

            $translateProvider.translations('en', {
                'TITLE': 'Reddit Clone',
                'AUTHOR': 'Author',
                'BY': 'by',
                'SUBMITTED': 'Submitted',
                'COMMENT': 'comment',
                'COMMENTS': 'comments',
                'DUMMYCOMMENT': 'Your comment.',
                'POSTCOMMENT': 'Post comment',
                'REPLY': 'Reply',
                'USER': 'Username',
                'PW': 'Password',
                'LOGIN': 'Login',
                'LOGOUT': 'Logout',
                'REGISTER': 'Register',
                'NEWLINKBUTTON': 'Submit new link',
                'NEWLINKTITLE': 'Submit a new Link',
                'NEWLINKSUBTITLE': 'The community is waiting for it!',
                'DUMMYLINKTITLE': 'Title...',
                'DUMMYLINKURL': 'URL...',
                'NEWUSERTITLE': 'Create a new User-Account',
                'NEWUSERSUBTITLE': 'You only need a username and a password'
                'DUMMYREPEATPW': 'Repeat password'
            });
            $translateProvider.translations('de', {


            });
            $translateProvider.preferredLanguage('en');
        }
    ]);
})();