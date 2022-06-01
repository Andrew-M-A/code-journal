/* global data */

var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('img');

$photoUrl.addEventListener('input', updateImg);

function updateImg(event) {
  $img.setAttribute('src', event.target.value);
}

var $form = document.querySelector('form');
$form.addEventListener('submit', getEntries);

function getEntries(event) {
  event.preventDefault();

  var $entriesObj = {};

  var $titleValue = document.getElementById('title-input').value;
  var $urlValue = document.getElementById('photo-url').value;
  var $notesValue = document.getElementById('user-notes').value;

  $entriesObj.title = $titleValue;
  $entriesObj.url = $urlValue;
  $entriesObj.notes = $notesValue;
  $entriesObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift($entriesObj);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();

}

function renderEntries(entry) {

  var $li = document.createElement('li');

  var $rowDiv = document.createElement('div');
  $rowDiv.setAttribute('class', 'row');

  $li.appendChild($rowDiv);

  var $colHalfDiv = document.createElement('div');
  $colHalfDiv.setAttribute('class', 'column-half');

  $rowDiv.appendChild($colHalfDiv);

  var $img = document.createElement('img');
  $img.setAttribute('src', data.entries.url);

  $colHalfDiv.appendChild($img);

  var $colHalfDivTwo = document.createElement('div');
  $colHalfDivTwo.setAttribute('class', 'column-half');

  $rowDiv.appendChild($colHalfDivTwo);

  var $h2 = document.createElement('h2');
  $h2.textContent = data.entries.title;
  $colHalfDivTwo.appendChild($h2);

  var $p1 = document.createElement('p');
  $p1.textContent = data.entries.notes;
  $colHalfDivTwo.appendChild($p1);

  var $p2 = document.createElement('p');
  $colHalfDivTwo.appendChild($p2);

  return $li;
}

var $ul = document.querySelector('ul');

for (var render = 0; render < data.entries.length; render++) {
  $ul.appendChild(renderEntries(data.entries[render]));

} window.addEventListener('DOMContentLoaded', renderEntries);
