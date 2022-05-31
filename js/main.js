var $photoUrl = document.getElementById('photo-url');

var $img = document.querySelector('img');

function updateImg(event) {
  $img.setAttribute('src', event.target.value);
}

$photoUrl.addEventListener('input', updateImg);

function getEntries(event) {
  event.preventDefault();

  var $entriesObj = {};

  var $titleValue = document.getElementById('title-input').value;
  var $urlValue = document.getElementById('photo-url').value;
  var $notesValue = document.getElementById('user-notes').value;

  $entriesObj.title = $titleValue;
  $entriesObj.url = $urlValue;
  $entriesObj.notes = $notesValue;
  $entriesObj.nextEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift($entriesObj);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();

}
var $form = document.querySelector('form');
$form.addEventListener('submit', getEntries);
