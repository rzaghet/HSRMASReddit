(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        var isPrimed = false;
        var primePromise;

        function emptyUser() {
            return { name: '', isAuthenticated: false };
        };

      


        function IoObserver() {
            this.handlers = [];
        }

        IoObserver.prototype = {
            subscribe: function(fn) {
                this.handlers.push(fn);
            },

            unsubscribe: function(fn) {
                this.handlers = this.handlers.filter(
                    function(item) {
                        if (item !== fn) {
                            return item;
                        }
                        return null;
                    }
                );
            },

            fire: function(o, thisObj) {
                var scope = thisObj || window;
                this.handlers.forEach(function(item) {
                    item.call(scope, o);
                });
            }
        };

        var onNewEntry = new IoObserver();
        var onNewEntryComment = new IoObserver();
        var onNewCommentComment = new IoObserver();
        var onEntryRatingUpdate = new IoObserver();
        var onCommentRatingUpdate = new IoObserver();

        var socket = window.io.connect('http://localhost:4730');
        socket.on('message', function (messageInfo) {
            if (messageInfo.action === 'AddLink') {
                onNewEntry.fire(messageInfo.data);
            }

            if (messageInfo.action === 'AddEntryComment') {
                onNewEntryComment.fire(messageInfo.data);
            }

            if (messageInfo.action === 'AddCommentComment') {
                onNewCommentComment.fire(messageInfo.data);
            }

            if (messageInfo.action === 'CommentRated') {
                onCommentRatingUpdate.fire(messageInfo.data);
            }

            if (messageInfo.action === 'EntryRated') {
                onEntryRatingUpdate.fire(messageInfo.data);
            }

        });

        var service = {
            getEntries: getEntries,
            getLogin: getLogin,
            authenticate: authenticate,
            registerUser: registerUser,
            getUsers: getUsers,
            newEntry: newEntry,
            likeEntry: likeEntry,
            dislikeEntry: dislikeEntry,
            getEntry: getEntry,
            newEntryComment: newEntryComment,
            newCommentComment: newCommentComment,
            likeComment: likeComment,
            dislikeComment: dislikeComment,
            logout: logout,
            ready: ready,
            authenticateUser: authenticateUser,
            currentUser: emptyUser(),
            logoutUser: logoutUser,
            onNewEntry: onNewEntry,
            onNewEntryComment: onNewEntryComment,
            onNewCommentComment: onNewCommentComment,
            onCommentRatingUpdate: onCommentRatingUpdate,
            onEntryRatingUpdate: onEntryRatingUpdate
        };

        return service;

        function authenticateUser(userName) {
            service.currentUser = {
                name: userName,
                isAuthenticated: true
            };
        };

        function logoutUser() {
            service.currentUser = {
                name: "",
                isAuthenticated: false
            };
        };

        function getEntries() {
            return $http.get('/entries')
                .then(getEntriesComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getEntries')(message);
                    $location.url('/');
                });

            function getEntriesComplete(data, status, headers, config) {
                return data.data;
            };
        };

        function getLogin() {
            return $http.get('/login')
                .then(getLoginComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getLogin')(message);
                    $location.url('/');
                });

            function getLoginComplete(data, status, headers, config) {
                return data.data[0].data.results;
            }
        };


        function authenticate(user) {
            return $http.post('/login', user)
                .then(authenticateComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for authenticate')(message);
                    $location.url('/');
                });

            function authenticateComplete(data, status, headers, config) {
                return data.data;
            }
        };


        function registerUser(user) {
            return $http.post('/register', user)
                .then(getRegisterUserComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for registerUser')(message);
                    $location.url('/');
                });

            function getRegisterUserComplete(data, status, headers, config) {
                //console.log(data);
                return data.data;
            }
        };

        function getUsers() {
            return $http.get('/users')
                .then(getUsersComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getUsers')(message);
                    $location.url('/');
                });

            function getUsersComplete(data, status, headers, config) {
                //console.log(data.data);
                return data.data;
            }
        };

        function newEntry(entry) {
            return $http.post('/entry', entry)
                .then(newEntryComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for newEntry')(message);
                    $location.url('/');
                });

            function newEntryComplete(data, status, headers, config) {
                return data.data;
            }
        };

        function likeEntry(entryId) {
            return $http.post('/entry/' + entryId + "/up")
                .then(likeEntryComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for likeEntry')(message);
                    $location.url('/');
                });

            function likeEntryComplete(data, status, headers, config) {
               // console.log(data.data);
                return data.data;
            }
        };

        function dislikeEntry(entryId) {
            return $http.post('/entry/' + entryId + "/down")
                .then(dislikeEntryComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for dislikeEntry')(message);
                    $location.url('/');
                });

            function dislikeEntryComplete(data, status, headers, config) {
                return data.data;
            }
        };


        function getEntry(entryId) {
            return $http.get('/entry/' + entryId + '/')
                .then(getEntryComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getEntry')(message);
                    $location.url('/');
                });

            function getEntryComplete(data, status, headers, config) {
                return data.data[0];
            }
        };

        function newEntryComment(entryId, comment) {
            return $http.post('/entry/' + entryId + '/comment', {text: comment.text})
                .then(newEntryCommentComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for newEntryComment')(message);
                    $location.url('/');
                });

            function newEntryCommentComplete(data, status, headers, config) {
                return data.data;
            }
        };


        function newCommentComment(commentId, comment) {
            return $http.post('/comment/' + commentId + '/', { text: comment.text })
                .then(newCommentCommentComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for newCommentComment')(message);
                    $location.url('/');
                });

            function newCommentCommentComplete(data, status, headers, config) {
                return data.data;
            }
        };

        function likeComment(commentId) {
            return $http.post('/comment/' + commentId + '/up')
                .then(likeCommentComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for likeComment')(message);
                    $location.url('/');
                });

            function likeCommentComplete(data, status, headers, config) {
                return data.data;
            }
        };

        function dislikeComment(commentId) {
            return $http.post('/comment/' + commentId + '/down')
                .then(dislikeCommentComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for dislikeComment')(message);
                    $location.url('/');
                });

            function dislikeCommentComplete(data, status, headers, config) {
                return data.data;
            }
        };

        function logout() {
            return $http.post('/logout')
                .then(logoutComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for logout')(message);
                    $location.url('/');
                });

            function logoutComplete(data, status, headers, config) {
                return data.data;
            }
        };


        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                logger.info('Primed data');
            };
        };

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function () { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        };
    };
})();
