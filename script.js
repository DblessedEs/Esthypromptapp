// Prompt List (Manual, or from Google Sheets if connected)
const prompts = [
    "Write a blog post about hidden travel destinations.",
    "Generate a marketing plan for a small business.",
    "Create content ideas for a fitness page on Instagram.",
    "Draft a resignation letter template for employees."
];

const searchInput = document.getElementById('searchInput');
const promptList = document.getElementById('promptList');
const promptTextarea = document.getElementById('promptTextarea');
const copyButton = document.getElementById('copyButton');
const copyAlert = document.getElementById('copyAlert');
const promptCount = document.getElementById('promptCount');
const tabLinks = document.querySelectorAll('.dropdown-content a');
const tabContent = document.getElementById('tabContent');

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

// Tab Content
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
                        <h2>Welcome to Esthy Prompt Generator</h2>
                        <p>Esthy Prompt Generator is a specialized platform designed to help individuals, professionals, and organizations improve the quality and clarity of AI-generated content through expertly crafted prompts. Whether you are a business owner, student, marketer, or researcher, our tools help you maximize AI writing systems.</p>
                    </div>`;
        case 'tips':
            return `<div class="tab-box">
                        <h2>Tips for Using Prompts Effectively</h2>
                        <ul>
                            <li>Clearly define the output you want from AI.</li>
                            <li>Use precise, structured instructions.</li>
                            <li>Review AI results critically before use.</li>
                            <li>Continuously refine prompts based on feedback.</li>
                            <li>Use examples when needed to guide AI clearly.</li>
                        </ul>
                    </div>`;
        case 'prompt':
            return `<div class="tab-box">
                        <h2>Prompt of the Day</h2>
                        <p>Act as a business strategist. Analyze current market trends in 2025 and develop a comprehensive business growth strategy for a mid-sized enterprise in the technology sector. Provide detailed recommendations across marketing, operations, finance, and innovation.</p>
                    </div>`;
        case 'disclaimer':
            return `<div class="tab-box">
                        <h2>Disclaimer</h2>
                        <p>Esthy Prompt Generator is an educational tool intended to help users craft better AI prompts. We do not provide AI services or generate AI outputs. Prompts are examples only and do not guarantee any specific outcome. This tool is not legal, academic, or financial advice.</p>
                    </div>`;
        case 'terms':
            return `<div class="tab-box">
                        <h2>Terms & Conditions</h2>
                        <ul>
                            <li>Prompts are for educational purposes only.</li>
                            <li>Users agree to apply prompts responsibly.</li>
                            <li>No user data is collected or stored.</li>
                            <li>Content may change or update without notice.</li>
                            <li>Unauthorized distribution is prohibited.</li>
                        </ul>
                    </div>`;
        case 'about':
            return `<div class="tab-box">
                        <h2>About Us</h2>
                        <p>Esthy Prompt Generator simplifies writing high-quality prompts for AI platforms like ChatGPT and Claude. Our mission is to help individuals, students, and professionals communicate more clearly with AI systems through reliable examples. We are committed to improving AI literacy for everyone.</p>
                    </div>`;
        default:
            return '';
    }
}

displayPrompts(prompts);
tabContent.innerHTML = getTabContent('home');
