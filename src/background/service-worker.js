chrome.runtime.onInstalled.addListener(() => {
  console.log('Bootcamp Helper instalado.');
  chrome.storage.local.set({ installs: Date.now() });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarme disparado', alarm);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'PING') {
    sendResponse({ ok: true, time: new Date().toISOString() });
  }
  return true;
});

chrome.runtime.onStartup.addListener(() => {
  chrome.alarms.create('daily-clean', { periodInMinutes: 24 * 60 });
});
