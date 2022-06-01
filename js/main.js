/* global data */

var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('img');
var $ul = document.querySelector('#append');

$photoUrl.addEventListener('input', updateImg);

function updateImg(event) {
  $img.setAttribute('src', event.target.value);
}

var $form = document.querySelector('form');
$form.addEventListener('submit', submitEntry);

function submitEntry(event) {
  event.preventDefault();

  var entriesObj = {};

  var $titleValue = document.getElementById('title-input').value;
  var $urlValue = document.getElementById('photo-url').value;
  var $notesValue = document.getElementById('user-notes').value;

  entriesObj.title = $titleValue;
  entriesObj.url = $urlValue;
  entriesObj.notes = $notesValue;
  entriesObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entriesObj);

  var render = renderEntry(entriesObj);
  $ul.prepend(render);

  $views[1].className = 'hidden';
  $views[0].className = '';

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();

}

function renderEntry(entry) {

  var $li = document.createElement('li');

  var $rowDiv = document.createElement('div');
  $rowDiv.setAttribute('class', 'row');

  var $colHalfDiv = document.createElement('div');
  $colHalfDiv.setAttribute('class', 'column-half');

  var $img = document.createElement('img');
  $img.setAttribute('src', data.entries[i].url);

  var $colHalfDivTwo = document.createElement('div');
  $colHalfDivTwo.setAttribute('class', 'column-half');

  var $h2 = document.createElement('h2');
  $h2.textContent = data.entries[i].title;

  var $p1 = document.createElement('p');
  $p1.textContent = data.entries[i].notes;

  $li.appendChild($rowDiv);
  $rowDiv.appendChild($colHalfDiv);
  $colHalfDiv.appendChild($img);
  $rowDiv.appendChild($colHalfDivTwo);
  $colHalfDivTwo.appendChild($h2);
  $colHalfDivTwo.appendChild($p1);

  return $li;
}

window.addEventListener('DOMContentLoaded', renderEntry);

for (var i = 0; i < data.entries.length; i++) {
  $ul.appendChild(renderEntry(data.entries[i]));

}

var $views = document.querySelectorAll('[data-view]');

var $navEntriesLink = document.querySelector('.entry-form');
$navEntriesLink.addEventListener('click', navClick);

var $newButton = document.querySelector('.entries');

$newButton.addEventListener('click', navClick);

function navClick(event) {
  event.preventDefault();

  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') !== event.target.className) {
      $views[i].className = 'hidden';
    } else {
      $views[i].className = '';
    }
  }
}
