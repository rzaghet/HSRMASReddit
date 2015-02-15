﻿(function() {
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
                'NEWUSERSUBTITLE': 'You only need a username and a password',
                'DUMMYREPEATPW': 'Repeat password',
                'LANGUAGE': 'Language',
                'GERMAN': 'German',
                'ENGLISH': 'English',
                'ABOUT': "About",
                'ABOUTTEXT': "MAS RedditClone developed by..."
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
                'NEWLINKSUBTITLE': 'Die Community wartet auf deinen Link!',
                'DUMMYLINKTITLE': 'Titel...',
                'DUMMYLINKURL': 'URL...',
                'NEWUSERTITLE': 'Erzeuge einen neuen Benutzer-Konto',
                'NEWUSERSUBTITLE': 'Du brauchst nur einen Benutzernamen und ein Passwort',
                'DUMMYREPEATPW': 'Passwort wiederholen',
                'LANGUAGE': 'Sprache',
                'GERMAN': 'Deutsch',
                'ENGLISH': 'Englisch',
                'ABOUT': "Über",
                'ABOUTTEXT': "MAS RedditClone entwickelt von..."
            });
            $translateProvider.preferredLanguage('en');
        }
    ]);
})();