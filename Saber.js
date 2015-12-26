/**
 *
 *  Saber.js   A javascript template engine
 *
 *  Aim to be a powerful and elegant tool for front end development
 * 
 *  MIT LICENSE
 *  current version 1.0.0

 *
 *  hellfire (asyncloading#163.com)
 *  12.25 2015

 *
 *  Basic Grammer rules:
 *    1, all template variables, code fragment should wrap begin with <% and end with %>.
 *    2, varialbes use <%= %>, if you want to render unescape html, use <%- %>
 *    3, sable support some inline function:
         loops          <% each(array) %>
         if..else..     <% if(condition) {} else {sentences} %> 
    
 *  About saber APIS:
      *  render(tmpl, data)      mix data and html template together and output compile element
      *  addFunc                 add custom functions
 *  
 *  Notes:    our 1.0.0 version only support web browser   
 */

(function() {

  // saber root
  var Saber = {
    version: '1.0.0'
  };


  // saber API
  // mix data and html template together, and then output
  Saber.prototype.render = function(tmpl, data) {
  
  };
  // add custom function
  Saber.prototype.addFunc = function() {
  
  };

  // saber private helper function
  var SHelper = Saber.prototype.helper = {};

})();

