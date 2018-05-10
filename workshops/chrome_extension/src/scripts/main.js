const $notepad = document.getElementById('notepad')

$notepad.addEventListener('keyup', () => {
  chrome.storage.sync.set({
    notepad: $notepad.innerText
  })
})

chrome.storage.sync.get('notepad', res => {
  $notepad.innerText = res.notepad
})
