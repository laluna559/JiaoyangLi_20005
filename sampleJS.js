function howdy(firstName){
    alert("Howdy" + firstName);
}
function displayCurrentMinute() {
    var now = new Date();
    var minute = now.getMinutes();
    var minuteDiv = document.getElementById("minute");
    minuteDiv.innerText = "The current minute is: " + minute;
}
function hideElement() {
    var secondParagraph = document.getElementById("second");
    secondParagraph.style.display = "none";
}
function showAlert() {
    alert("Hello World!");
}
function addLinks(links) {
    var ul = document.querySelector('ul');
    for (var i = 0; i < links.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.setAttribute('href', links[i].url);
      a.textContent = links[i].text;
      li.appendChild(a);
      ul.appendChild(li);
    }
  }
  
  var links = [
    {url: 'https://example.com', text: 'Link 1'},
    {url: 'https://example.com', text: 'Link 2'},
    {url: 'https://example.com', text: 'Link 3'},
  ];
  
  addLinks(links);
function parseArray(arr) {
    return arr.sort();
}
  
