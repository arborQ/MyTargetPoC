
export default class sortController{
  $showOptions : boolean;

  constructor(public $scope : arbor.sortFilter.ISortScope){

    if(typeof $scope.direction === 'undefined'){
      $scope.direction = true;
    }

    if(typeof $scope.selectedOption === 'undefined'){
      $scope.selectedOption = [];
      this.selectOption($scope.options[0]);
    }

    this.$showOptions = false;
  }


  selectOption(option : arbor.sortFilter.ISortKeyValue){
    this.$scope.selectedOption = [ option.key ];
  }

  isOptionSelected(option : arbor.sortFilter.ISortKeyValue){
    return this.$scope.selectedOption.indexOf(option.key) !== -1;
  }
}
