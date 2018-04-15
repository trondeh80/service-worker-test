if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}

// Bind test click
const $ = document.querySelector.bind(document);

const link = $('a.test');
if (link) {
    const result = $('.result');
    link.addEventListener('click', () => fetch('/test.json')
        .then(data => data.json())
        .then(testData => result.innerHTML = `<pre>${JSON.stringify(testData)}</pre>`));
}