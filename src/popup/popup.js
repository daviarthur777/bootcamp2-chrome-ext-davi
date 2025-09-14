const saveBtn = document.getElementById('saveBtn');
const pingBtn = document.getElementById('ping');
const status = document.getElementById('status');
const noteInput = document.getElementById('note');
const highlightBtn = document.getElementById('highlight');

// carrega nota salva
chrome.storage.local.get(['note'], (res) => {
  if (res.note) noteInput.value = res.note;
});

saveBtn.addEventListener('click', () => {
  const value = noteInput.value || '';
  chrome.storage.local.set({ note: value }, () => {
    status.textContent = 'Nota salva.';
    setTimeout(() => (status.textContent = ''), 1500);
  });
});

pingBtn.addEventListener('click', async () => {
  try {
    const res = await chrome.runtime.sendMessage({ type: 'PING' });
    status.textContent = `Background respondeu: ${res.time}`;
  } catch (err) {
    status.textContent = 'Erro no ping';
  }
});

highlightBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['src/content/content.js']
    });
    status.textContent = 'Conteúdo injetado.';
  } catch (e) {
    status.textContent = 'Falha ao injetar.';
  }
});
