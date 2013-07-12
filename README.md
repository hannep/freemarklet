freemarklet
===========

An application loaded from a JavaScript bookmarklet that allows for users to submit information about open-source software products without leaving the page or affecting content-flow. Also allows for automated scraping of data from pages for efficiency. 

To run:
Place files found in this archive in a server with Cross-origin Resource Sharing (CORS) enabled. Now, create a bookmark where the URL is as follows (replace "http://hiddencountryrest.com/hackathon.js" with the url to the JavaScript on your server):

javascript:(function(){var%20script%20=%20document.createElement('script');script.src%20=%20'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';script.type%20=%20'text/javascript';document.getElementsByTagName('head')[0].appendChild(script);var%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://hiddencountryrest.com/hackathon.js');document.body.appendChild(e);})()

Whenever you wish to run this applications, simply press the bookmarklet on the page you wish to bring up the menu.

Note:
Pages that implement a large amount of JavaScript and other scripts (IE Google and Facebook) are not compatible with this bookmarklet currently.

Note 2:
This bookmarklet has only been tested on Google Chrome.
