/* global data */

var $img = document.querySelector('img');
var $ul = document.querySelector('#append');
var $entryFormView = document.body.querySelector('[data-view="entry-form"]');
var $entriesView = document.body.querySelector('[data-view="entries"]');
var $photoUrl = document.getElementById('photo-url');
var $form = document.querySelector('form');
var $navEntries = document.querySelector('#nav-entries');
var $newButton = document.querySelector('#new-button');

$photoUrl.addEventListener('input', updateImg);

function updateImg(event) {
  $img.setAttribute('src', event.target.value);
}

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

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $entryFormView.className = 'hidden';
  $entriesView.className = 'active';

  data.view = 'entries';

  $form.reset();

}

function renderEntry(entry) {

  var $li = document.createElement('li');

  var $rowDiv = document.createElement('div');
  $rowDiv.setAttribute('class', 'row');

  var $colHalfDiv = document.createElement('div');
  $colHalfDiv.setAttribute('class', 'column-half');

  var $img = document.createElement('img');
  $img.setAttribute('src', entry.url);

  var $colHalfDivTwo = document.createElement('div');
  $colHalfDivTwo.setAttribute('class', 'column-half');

  var $h2 = document.createElement('h2');
  $h2.textContent = entry.title;

  var $p1 = document.createElement('p');
  $p1.textContent = entry.notes;

  var $editIcon = document.createElement('i');
  $editIcon.setAttribute('class', 'fa-solid fa-pencil');

  $li.appendChild($rowDiv);
  $rowDiv.appendChild($colHalfDiv);
  $colHalfDiv.appendChild($img);
  $rowDiv.appendChild($colHalfDivTwo);
  $colHalfDivTwo.appendChild($h2);
  $colHalfDivTwo.appendChild($editIcon);
  $colHalfDivTwo.appendChild($p1);

  return $li;
}

$navEntries.addEventListener('click', navClick);
$newButton.addEventListener('click', newButtonClick);

function navClick(event) {

  $entriesView.className = 'active';
  $entryFormView.className = 'hidden';
  data.view = 'entries';

}

function newButtonClick(event) {

  $entryFormView.className = 'active';
  $entriesView.className = 'hidden';
  data.view = 'entry-form';
}

if (data.view === 'entries') {
  $entryFormView.className = 'hidden';
  $entriesView.className = 'active';
} else {
  $entriesView.className = 'hidden';
  $entryFormView.className = 'active';
}

window.addEventListener('DOMContentLoaded', renderEntry);

for (var i = 0; i < data.entries.length; i++) {
  $ul.appendChild(renderEntry(data.entries[i]));
}
