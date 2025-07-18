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
