function Student (name, email) {
  let _name = name,
      _email = email,
      _homeworkResults = [];

  this.getName = function () {
    return _name;
  };

  this.getEmail = function () {
    return _email;
  };

  this.getHomeworkResults = function () {
    return _homeworkResults;
  };
  
  this.addHomeworkResult = function(topic, success) {
    let result = {};
    this.topic = topic;
    this.success = success;
    result.topic = this.topic;
    result.success = this.success;
    _homeworkResults.push(result);
  }; 
}

function FrontendLab (listOfStudents, failedLimit) {
  let _failedHomeworksLimit = failedLimit;
  let _studentsList = listOfStudents;

  this.getStudentsList = function () {
    return _studentsList;
  };

  this.addHomeworkResults = function (homeworkResults) {
    for (let i = 0; i < _studentsList.length; i++) {

      if (!_studentsList[i].results) {
        _studentsList[i].results = [];
      }

      for (let j of homeworkResults.results) {
      
        if ( _studentsList[i].email === j.email) {
          _studentsList[i].results.push(
            {
              topic: homeworkResults.topic, 
              success: j.success
            }
          );
        }
      }
    }
  };

  this.printStudentsList = function () {
      for (let stud of _studentsList) {
        Student.call(stud, stud.name, stud.email);
        console.log(`name: ${stud.getName()}, email: ${stud.getEmail()}`);
        console.log(stud.results);
      }
  };

  this.printStudentsEligibleForTest= function () {

    for (let stud of _studentsList) {
      Student.call(stud, stud.name, stud.email);
      let fails = 0;

      for (let res of stud.results) {
        fails = !res.success ? ++fails : fails;
      }
      
      if (fails <= _failedHomeworksLimit) {
        console.log(`name: ${stud.getName()}, email: ${stud.getEmail()}`);
      } 
    }
  };
}