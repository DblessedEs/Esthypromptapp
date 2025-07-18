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
function getTabContent(tab) {
    switch (tab) {
        case 'home':
            return `<div class="tab-box">
                        <h2>Welcome to Esthy Prompt Generator</h2>
                        <p>Esthy Prompt Generator is a professional tool designed to help users discover, customize, and utilize high-quality AI prompts for educational, business, and creative purposes. Whether you’re writing for ChatGPT, Claude, or any AI assistant, this tool helps you access proven prompt examples easily.</p>
                    </div>`;
        case 'tips':
            return `<div class="tab-box">
                        <h2>Tips for Using Prompts Effectively</h2>
                        <ul>
                            <li>Clearly define the goal or output you want from the AI.</li>
                            <li>Use precise and structured instructions within your prompt.</li>
                            <li>Review AI results critically before using them professionally.</li>
                            <li>Continuously improve your prompts based on AI responses.</li>
                        </ul>
                    </div>`;
        case 'prompt':
            return `<div class="tab-box">
                        <h2>Prompt of the Day</h2>
                        <p>Write a comprehensive analysis on 'How AI is Transforming Small Businesses in 2025', covering trends, case studies, and future predictions. Tone: Professional, Informative, Strategic.</p>
                    </div>`;
        case 'disclaimer':
            return `<div class="tab-box">
                        <h2>Disclaimer</h2>
                        <p>Esthy Prompt Generator is provided for educational and informational purposes only. This app does not generate AI outputs. Users are responsible for how prompts are adapted or used. We make no guarantees of accuracy or performance from AI platforms where prompts are applied.</p>
                    </div>`;
        case 'terms':
            return `<div class="tab-box">
                        <h2>Terms & Conditions</h2>
                        <ul>
                            <li>Prompts provided are for personal, academic, or professional use only.</li>
                            <li>We do not collect, store, or share any user data.</li>
                            <li>Updates may occur without prior notice to enhance app quality.</li>
                            <li>Use responsibly and within the legal policies of AI tools you use.</li>
                        </ul>
                    </div>`;
        case 'about':
            return `<div class="tab-box">
                        <h2>About Us</h2>
                        <p>Esthy Prompt Generator was built to empower individuals, students, and professionals with reliable prompt templates for AI platforms. Our mission is to simplify how people interact with AI and enhance productivity through well-crafted prompt libraries.</p>
                    </div>`;
        default:
            return '';
    }
}
