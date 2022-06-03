/* global data */

var $img = document.querySelector('img');
var $ul = document.querySelector('#append');
var $entryFormView = document.body.querySelector('[data-view="entry-form"]');
var $entriesView = document.body.querySelector('[data-view="entries"]');
// var $navEntries = document.querySelector('#nav-entries');
// var $newButton = document.querySelector('#new-button');

var $photoUrl = document.getElementById('photo-url');
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

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();

  $entryFormView.className = 'hidden';
  $entriesView.className = 'active';

  data.view = $entriesView;

  // console.log(data.view);

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

/* $navEntries.addEventListener('click', navClick);
$newButton.addEventListener('click', navClick);

 function navClick(event) {

  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === event.target.className) {
      $views[i].className = event.target.className;
    } else {
      $views[i].className = 'hidden';
    }
  }
}
*/
