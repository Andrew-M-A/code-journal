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

  var $rowDiv = document.createElement('div');
  $rowDiv.setAttribute('class', 'row');

  var $colHalfDiv = document.createElement('div');
  $colHalfDiv.setAttribute('class', 'column-half');

  $rowDiv.appendChild($colHalfDiv);

  var $img = document.createElement('img');
  $img.setAttribute('src', ' ');

  $colHalfDiv.appendChild($img);

  var $colHalfDivTwo = document.createElement('div');
  $colHalfDivTwo.setAttribute('class', 'column-half');

  $rowDiv.appendChild($colHalfDivTwo);

  var $ul = document.createElement('ul');
  $colHalfDivTwo.appendChild($ul);

  var $li1 = document.createElement('li');
  var $li2 = document.createElement('li');
  var $li3 = document.createElement('li');

  $ul.appendChild($li1);
  $ul.appendChild($li2);
  $ul.appendChild($li3);

  var $h2 = document.createElement('h2');
  $li1.appendChild($h2);

  var $p1 = document.createElement('p');
  $li2.appendChild($p1);

  var $p2 = document.createElement('p');
  $li3.appendChild($p2);

  return $rowDiv;
}

window.addEventListener('DOMContentLoaded', renderEntries);
