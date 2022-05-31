/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', saveEntries);

function saveEntries(event) {

  var $storage = JSON.stringify(data);

  localStorage.setItem('form-entries', $storage);

}
