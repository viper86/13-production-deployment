(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    // TODO: refactor this request into an $.ajax call
    $.ajax({url: '/github/users/codefellows-portland-301d6/repos' +
          '?per_page=10&sort=updated',
          headers: {
            Authorization: 'token ' + githubToken
          },
          success :function(data) {
            reposObj.allRepos = data;
            callback();
          }
      });
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
