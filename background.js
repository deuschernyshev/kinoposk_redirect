chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.includes('kinopoisk.ru')) {
    const newUrl = tab.url.replace(/kinopoisk\.ru/g, 'sspoisk.ru');
    chrome.tabs.update(tab.id, { url: newUrl });
  } else {
    chrome.action.setTitle({
      tabId: tab.id,
      title: "Только для kinopoisk.ru"
    });
    setTimeout(() => {
      chrome.action.setTitle({
        tabId: tab.id,
        title: "Перейти на Sspoisk"
      });
    }, 2000);
  }
});