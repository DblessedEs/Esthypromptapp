// Connect to your Google Sheet API (your existing Sheet ID used)
const API_URL = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://docs.google.com/spreadsheets/d/1mC3FTfix3FHL43Le_BLfulqRPptcY_IKgLxp7WNvYPM/gviz/tq?tqx=out:json');

let prompts = [];

const searchInput = document.getElementById('searchInput');
const promptList = document.getElementById('promptList');
const promptTextarea = document.getElementById('promptTextarea');
const copyButton = document.getElementById('copyButton');
const copyAlert = document.getElementById('copyAlert');
const promptCount = document.getElementById('promptCount');
const tabLinks = document.querySelectorAll('.dropdown-content a');
const tabContent = document.getElementById('tabContent');

async function fetchPrompts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const text = data.contents;
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const rows = json.table.rows;

        prompts = rows.map(row => row.c[0].v);
        displayPrompts(prompts);
    } catch (error) {
        console.error('Failed to fetch prompts:', error);
    }
}

function displayPrompts(filteredPrompts) {
    promptList.innerHTML = '';
    filteredPrompts.forEach(prompt => {
        const li = document.createElement('li');
        li.textContent = prompt;
        li.addEventListener('click', () => {
            promptTextarea.value = prompt;
        });
        promptList.appendChild(li);
    });
    updatePromptCount(filteredPrompts.length);
}

function updatePromptCount(count) {
    if (promptCount) {
        promptCount.textContent = `Available Prompts (${count})`;
    }
}

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = prompts.filter(p => p.toLowerCase().includes(keyword));
    displayPrompts(filtered);
});

copyButton.addEventListener('click', () => {
    if (!promptTextarea.value.trim()) return;
    navigator.clipboard.writeText(promptTextarea.value).then(() => {
        copyAlert.classList.remove('hidden');
        setTimeout(() => {
            copyAlert.classList.add('hidden');
        }, 1500);
    });
});

// Tabs for Menu
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
            return `<div class="tab-box">
                        <h2>Welcome to Esthy Prompt App</h2>
                        <p>Esthy Prompt App helps you manage and access high-quality AI prompts directly from your Google Sheet. Easily search, customize, and copy prompts for academic, business, or creative use cases.</p>
                    </div>`;
        case 'tips':
            return `<div class="tab-box">
                        <h2>Tips for Effective Prompts</h2>
                        <ul>
                            <li>Be precise with your instructions to AI.</li>
                            <li>Use structured and professional language.</li>
                            <li>Test different phrasing for clarity.</li>
                            <li>Review AI output before using it.</li>
                        </ul>
                    </div>`;
        case 'prompt':
            return `<div class="tab-box">
                        <h2>Prompt of the Day</h2>
                        <p>Draft a compelling business strategy for a tech startup seeking to enter the African market. Focus on challenges, opportunities, and marketing strategy.</p>
                    </div>`;
        case 'disclaimer':
            return `<div class="tab-box">
                        <h2>Disclaimer</h2>
                        <p>This app provides prompts for educational use only. We do not offer AI services directly. Use prompts responsibly according to AI tool guidelines.</p>
                    </div>`;
        case 'terms':
            return `<div class="tab-box">
                        <h2>Terms & Conditions</h2>
                        <ul>
                            <li>Use prompts ethically and legally.</li>
                            <li>We do not collect or store user data.</li>
                            <li>Prompts may be updated at any time.</li>
                            <li>Unauthorized reselling is prohibited.</li>
                        </ul>
                    </div>`;
        case 'about':
            return `<div class="tab-box">
                        <h2>About Us</h2>
                        <p>Esthy Prompt App connects your AI prompt bank directly from Google Sheets, making updates easy. Built for students, professionals, and creatives who rely on structured prompts for better AI outputs.</p>
                    </div>`;
        default:
            return '';
    }
}

fetchPrompts();
tabContent.innerHTML = getTabContent('home')
