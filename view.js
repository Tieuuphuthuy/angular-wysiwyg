var app=angular.module("app",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.
	when('/addPicture',{
		//template: '12346',
		templateUrl: '../view/addStudent.html'
	}).
	when('/viewStudent',{
		//template: 'abcd',
		templateUrl:'../view/viewStudent.html'
	}).
	/*when('/cavas',{
		templateUrl:'../view/test.html'
	}).*/
	when('/register',{
		templateUrl:'../view/register.html'
	}).
	when('/login',{
		templateUrl:'../view/login.html'
	}).
	otherwise({
		redirectTo:'/viewStudent'
	});
}]);
app.controller( "registerCtrl",['$scope','$http' ,function($scope, $http) {
		//$scope.success=false;
      	$scope.submit = function(){
      		$scope.success=true;
      	 	var newuser = {
      	 		Username : $scope.Username,
      			password : $scope.password,
      	 		email : $scope.email,
      	 		birthday : $scope.birthday,
      	 		numberphone : $scope.numberphone
      	 	};
       
         };
          
    }]);

app.controller("addSCtrl",['$scope',function($scope){
	$scope.students=[
		{mssv:'b1203942',name:'thuy lieu',age:21,gender:'female',class:'mmt & tt', phone:01672954904},
		{mssv:'b1203999',name:'tieu u',age:21, gender:'female',class:'mmt & tt', phone:123456789},
		{mssv:'12345678',name:'mong mo',age:21,gender:'female',class:'mmt & tt', phone:0975418519}
	];
	$scope.addstudent=function(){
		$scope.students.push({
		mssv:$scope.mssv,
		name:$scope.name,
		age:$scope.age,
		gender:$scope.gender,
		class:$scope.class,
		phone:$scope.phone
		});	
	};
	function getstudents(mssv){
		for (var i = 0; i < $scope.students.length ; i++) {
			if ($scope.students[i].mssv==mssv) return i;
		}
		return -1;
		
	}
	$scope.selectdelete=function(mssv){
		var result = confirm("Have you delete?");
		if (result===true) {
			var index=getstudents(mssv);
			$scope.students.splice(index, 1);
		}	
	}
	$scope.selectedit=function(mssv){
		var index=getstudents(mssv);
		var student=$scope.students[index];
		$scope.mssv=student.mssv;
		$scope.name=student.name;
		$scope.age=student.age;
		$scope.gender=student.gender;
		$scope.class=student.class;
		$scope.phone=student.phone;
	}
	$scope.editstudent=function(){
		var index=getstudents($scope.mssv);
		$scope.students[index].mssv=$scope.mssv;
		$scope.students[index].name=$scope.name;
		$scope.students[index].age=$scope.age;
		$scope.students[index].gender=$scope.gender;
		$scope.students[index].class=$scope.class;
		$scope.students[index].phone=$scope.phone;
	}

}]);
app.directive('pwCheck', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    // console.info(elem.val() === $(firstPassword).val());
                    ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
                });
            });
        }
    }
}]);
