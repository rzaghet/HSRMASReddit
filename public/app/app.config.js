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
                'TITLE': 'Reddit Klon',
                'AUTHOR': 'Autor',
                'BY': 'von',
                'SUBMITTED': 'Übertragen',
                'COMMENT': 'kommentar',
                'COMMENTS': 'kommentare',
                'DUMMYCOMMENT': 'Dein Kommentar.',
                'POSTCOMMENT': 'Veröffentliche Kommentar',
                'REPLY': 'Antworten',
                'USER': 'Benutzername',
                'PW': 'Passwort',
                'LOGIN': 'Anmelden',
                'LOGOUT': 'Abmelden',
                'REGISTER': 'Registrieren',
                'NEWLINKBUTTON': 'Übertrage neuen Link',
                'NEWLINKTITLE': 'Übertrage einen neuen Link',
                'NEWLINKSUBTITLE': 'Die community wartet auf deinen Link!',
                'DUMMYLINKTITLE': 'Titel...',
                'DUMMYLINKURL': 'URL...',
                'NEWUSERTITLE': 'Erzeuge einen neuen Benutzer-Konto',
                'NEWUSERSUBTITLE': 'Du brauhst nur einen Benutzernamen und eine Passwort'
                'DUMMYREPEATPW': 'Passwort wiederholen'
            });
            $translateProvider.preferredLanguage('en');
        }
    ]);
})();