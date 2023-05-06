var loader = document.getElementById('loading');
var content = document.getElementById('container');

loader.style.display = 'flex';

var timer = setTimeout(function() {
  loader.style.display = 'none';
}, 2000);

content.addEventListener('load', function() {
  clearTimeout(timer);
  
  loader.style.display = 'none';
});