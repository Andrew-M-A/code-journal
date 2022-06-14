/* global data */

var $img = document.querySelector('img');
var $form = document.querySelector('form');
var $photoUrl = document.getElementById('photo-url');
var $titleValue = document.getElementById('title-input');
var $urlValue = document.getElementById('photo-url');
var $notesValue = document.getElementById('user-notes');
var $entryFormView = document.body.querySelector('[data-view="entry-form"]');
var $entriesView = document.body.querySelector('[data-view="entries"]');
var $ul = document.querySelector('#append');
var $navEntries = document.querySelector('#nav-entries');
var $newButton = document.querySelector('#new-button');
var $h2 = document.querySelector('#form-header');
var $list = document.querySelectorAll('li');
var $footer = document.querySelector('#footer');
var $deleteLink = document.querySelector('#delete');
var $modalScreen = document.querySelector('.modal-screen');
var $cancelButton = document.querySelector('.cancel-button');
var $confirmDeleteButton = document.querySelector('.confirm-button');
var currentEntry = null;

$photoUrl.addEventListener('input', updateImg);

function updateImg(event) {
  $img.setAttribute('src', event.target.value);
}

$form.addEventListener('submit', submitEntry);

function submitEntry(event) {

  event.preventDefault();

  if (data.editing === null) {

    var entriesObj = {};

    entriesObj.title = $titleValue.value;
    entriesObj.url = $urlValue.value;
    entriesObj.notes = $notesValue.value;
    entriesObj.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(entriesObj);

    var render = renderEntry(entriesObj);
    $ul.prepend(render);

    $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  } else {

    for (var i = 0; i < data.entries.length; i++) {
      if (currentEntry === data.entries[i].entryId) {

        data.editing.title = $titleValue.value;
        data.editing.url = $urlValue.value;
        data.editing.notes = $notesValue.value;
        $img.setAttribute('src', data.editing.url);

        data.entries.splice(i, 1, data.editing);
        var updatedEntry = renderEntry(data.entries[i]);
        $list[i].replaceWith(updatedEntry);
      }
    }
  }

  $entryFormView.className = 'hidden';
  $entriesView.className = 'active';
  data.view = 'entries';

  $form.reset();

  data.editing = null;

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

  var $rowDivTwo = document.createElement('div');
  $rowDivTwo.setAttribute('class', 'row space-between');

  var $h3 = document.createElement('h3');
  $h3.textContent = entry.title;

  var $p1 = document.createElement('p');
  $p1.textContent = entry.notes;

  var $editIcon = document.createElement('i');
  $editIcon.setAttribute('class', 'fa-solid fa-pencil style-icon');
  $editIcon.setAttribute('data-entry-id', entry.entryId);

  $li.appendChild($rowDiv);
  $rowDiv.appendChild($colHalfDiv);
  $colHalfDiv.appendChild($img);
  $rowDiv.appendChild($colHalfDivTwo);
  $colHalfDivTwo.appendChild($rowDivTwo);
  $rowDivTwo.appendChild($h3);
  $rowDivTwo.appendChild($editIcon);
  $colHalfDivTwo.appendChild($p1);
  return $li;
}

$ul.addEventListener('click', editClick);

function editClick(event) {

  event.preventDefault();

  if (event.target.tagName === 'I') {
    $h2.textContent = 'Edit Entry';
    currentEntry = event.target.getAttribute('data-entry-id').toString();
    data.editing = data.entries[data.entries.length - currentEntry];

    $titleValue.value = data.editing.title;
    $urlValue.value = data.editing.url;
    $notesValue.value = data.editing.notes;
    $img.setAttribute('src', $urlValue.value);

    $entriesView.className = 'hidden';
    $entryFormView.className = 'active';
    data.view = 'entry-form';

    $footer.className = 'column-full space-between';
    $deleteLink.className = 'delete button';
  }
  currentEntry = parseInt(currentEntry);
}

$deleteLink.addEventListener('click', showModal);

function showModal(event) {
  event.preventDefault();
  $modalScreen.className = 'modal-screen';
}

$cancelButton.addEventListener('click', hideModal);

function hideModal(event) {
  $modalScreen.className = 'modal-screen hidden';
}

$confirmDeleteButton.addEventListener('click', deleteEntry);

function deleteEntry(event) {
  console.log('value of currentEntry: ', currentEntry);
  console.log('value of data.editing: ', data.editing);
  console.log('value of data.entries: ', data.entries);
  console.log(data.entries[data.entries.length - currentEntry]);

  // for (var i = 0; i < data.entries.length; i++) {
  //   if (currentEntry === data.entries[i].entryId) {
  //     data.entries.splice(i, 1);
  //     console.log(data.entries);
  //   }
  // }

  hideModal();
  $footer.className = 'column-full button-flex';
  $deleteLink.className = 'delete button hidden';
  $entryFormView.className = 'hidden';
  $entriesView.className = 'active';
  data.view = 'entries';
  $form.reset();
}

$navEntries.addEventListener('click', navClick);
$newButton.addEventListener('click', newButtonClick);

function navClick(event) {

  $h2.textContent = 'Entries';

  $entriesView.className = 'active';
  $entryFormView.className = 'hidden';
  data.view = 'entries';

  $footer.className = 'column-full button-flex';
  $deleteLink.className = 'delete button hidden';

  $form.reset();

}

function newButtonClick(event) {

  $h2.textContent = 'New Entry';

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
