- **Saber.js**
	- A javascript template engine
	- Aim to be a powerful and elegant tool for front end development


- **LICENSE**
	- MIT LICENSE


- **Author**
	- hellfire (asyncloading#163.com)

- **Basic Grammer rules**
	-  all template variables, code fragment should wrap begin with <% and end with %>.
	-  varialbes use <%= %>, if you want to render unescape html, use <%- %>
	-  sable support some inline function:
		- loops          <% each(array) %>
		- if..else..     <% if(condition) {} else {sentences} %>

- **About saber APIS**
	- render(tmpl, data)      mix data and html template together and output compile element
	- addFunc                 add custom functions

- **Notes**
	- our 1.0.0 version only support web browser
