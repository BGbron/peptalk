document.addEventListener('DOMContentLoaded', function() {
  var dropdown1 = document.querySelector('.dropdown-trigger');
  var dropdownOptions = {
      'closeOnClick': true,
      'hover':false,
      coverTrigger:false
      
  }
  var instanceDropdown1 = M.Dropdown.init(dropdown1, dropdownOptions);
});