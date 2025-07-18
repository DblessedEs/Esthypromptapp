const API_URL = 'https://docs.google.com/spreadsheets/d/1mC3FTfix3FHL43Le_BLfulqRPptcY_IKgLxp7WNvYPM/gviz/tq?tqx=out:json';

async function fetchPrompts() {
    const response = await fetch(API_URL);
    const text = await response.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const rows = json.table.rows;
    const prompts = rows.map(row => row.c[0].v);
    displayPrompts(prompts, 3);
    setupSearch(prompts);
}

function setupSearch(prompts) {
    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.toLowerCase();
        const filtered = prompts.filter(p => p.toLowerCase().includes(keyword));
        displayPrompts(filtered, filtered.length);
    });
}

function displayPrompts(prompts, limit = 3) {
    promptList.innerHTML = '';
    const limitedPrompts = prompts.slice(0, limit);
    limitedPrompts.forEach(prompt => {
        const li = document.createElement('li');
        li.textContent = prompt;
        li.addEventListener('click', () => {
            promptTextarea.value = prompt;
        });
        promptList.appendChild(li);
    });
    updatePromptCount(prompts.length);
}

function updatePromptCount(count) {
    promptCount.textContent = `Available Prompts (${count})`;
}

copyButton.addEventListener('click', () => {
    if (!promptTextarea.value.trim()) return;
    navigator.clipboard.writeText(promptTextarea.value).then(() => {
        copyAlert.classList.remove('hidden');
        setTimeout(() => {
            copyAlert.classList.add('hidden');
        }, 1500);
    });
});

fetchPrompts();
const tabLinks = document.querySelectorAll('.dropdown-content a');
const tabContent = document.getElementById('tabContent');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        tabContent.innerHTML = getTabContent(tab);
    });
});

function getTabContent(tab) {
    switch (tab) {
        case 'home':
            return `<h2>Welcome to Esthy Prompt Generator</h2>
                    <p>This tool provides high-quality prompts for students, professionals, and AI users. Easily search, edit, and copy prompts for your work.</p>`;
        case 'tips':
            return `<h2>Tips for Using Prompts Effectively</h2>
                    <ul>
                        <li>Be clear and specific in your prompts.</li>
                        <li>Review AI results carefully.</li>
                        <li>Adapt prompts to your goal (academic, business, etc.).</li>
                    </ul>`;
        case 'prompt':
            return `<h2>Prompt of the Day</h2>
                    <p>Prepare a structured, high-quality AI prompt daily to improve your results.</p>`;
        case 'disclaimer':
            return `<h2>Disclaimer</h2>
                    <p>This app offers prompts for educational purposes only. No AI is connected. Results depend on how prompts are used.</p>`;
        case 'terms':
            return `<h2>Terms & Conditions</h2>
                    <p>Use prompts responsibly. No data is stored. Prompts are for personal use only.</p>`;
        case 'about':
            return `<h2>About Us</h2>
                    <p>Esthy Prompt Generator helps people write better prompts for AI tools. Built with care to support learning and productivity.</p>`;
        default:
            return '';
    }
}
