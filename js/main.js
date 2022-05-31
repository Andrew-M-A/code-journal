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

window.addEventListener('beforeunload', saveEntries);

function saveEntries(event) {

  var $storage = JSON.stringify(data);

  localStorage.setItem('form-entries', $storage);

}
