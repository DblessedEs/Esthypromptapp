const prompts = [
    "Write a blog post about hidden travel destinations.",
    "Generate a marketing plan for a small business.",
    "Create content ideas for a fitness page on Instagram.",
    "Draft a resignation letter template for employees.",
    "Create a 1500-word blog post for a travel blog on 'Exploring Hidden Gems in Paris'.",
    "Outline a comprehensive 10-chapter e-book on digital marketing for small businesses.",
    "Write the first chapter of a romance novel set in Victorian England.",
    "Create persuasive ad copy for a new fitness app targeting millennials.",
    "Write a 1500-word SEO-optimized article on 'Top 10 Benefits of Yoga for Mental Health'.",
    "Draft a professional white paper on 'The Future of AI in Healthcare'.",
    "Write a comparison review of Trello vs. Asana project management tools.",
    "Create a step-by-step tutorial on setting up a WordPress blog.",
    "Draft a press release for the launch of an eco-friendly fashion line.",
    "Write an editorial on 'The Importance of Mental Health Awareness in the Workplace'."
];

const searchInput = document.getElementById('searchInput');
const promptList = document.getElementById('promptList');
const promptTextarea = document.getElementById('promptTextarea');
const copyButton = document.getElementById('copyButton');
const copyAlert = document.getElementById('copyAlert');
const promptCount = document.getElementById('promptCount');
const tabLinks = document.querySelectorAll('.dropdown-content a');
const tabContent = document.getElementById('tabContent');

// Show only 3 prompts initially
function displayPrompts(filteredPrompts, limit = 3) {
    promptList.innerHTML = '';
    const limitedPrompts = filteredPrompts.slice(0, limit);
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

// Search shows all results
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = prompts.filter(p => p.toLowerCase().includes(keyword));
    displayPrompts(filtered, filtered.length);
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

const promptsOfTheDay = [
    "Provide guidance for preparing a strong university application.",
    "Draft a professional letter of intent for a master's program.",
    "Create a personal statement for scholarship consideration.",
    "Develop a step-by-step study plan for entrance exams.",
    "Outline strategies for securing strong recommendation letters."
];

function getDailyPrompt() {
    const index = new Date().getDate() % promptsOfTheDay.length;
    return promptsOfTheDay[index];
}

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
                <p>This tool provides high-quality prompts to help students, professionals, and applicants write clear, effective AI content for academic and professional purposes.</p>`;
        case 'tips':
            return `<h2>Tips for Effective Prompt Writing</h2>
                <ul>
                    <li>Be specific and clear with your instructions.</li>
                    <li>Maintain a professional tone for admissions or academic tasks.</li>
                    <li>Review AI outputs carefully for accuracy and tone.</li>
                    <li>Always adapt prompts for your target audience.</li>
                </ul>`;
        case 'prompt':
            return `<h2>Prompt of the Day</h2>
                    <p>${getDailyPrompt()}</p>`;
        case 'disclaimer':
            return `<h2>Disclaimer</h2>
                <p>This application provides prompts for educational purposes only. We do not guarantee any academic outcomes. Use prompts wisely and adapt as needed.</p>`;
        case 'terms':
            return `<h2>Terms & Conditions</h2>
                <p>By using this app you agree to:
                <ul>
                    <li>Use prompts responsibly and professionally.</li>
                    <li>No data is stored or collected; use remains local to your device.</li>
                    <li>We reserve the right to update prompts and terms without notice.</li>
                </ul></p>`;
        case 'about':
            return `<h2>About Us</h2>
                <p>Esthy Prompt Generator was created to assist individuals in writing smarter, clearer, and more effective prompts for AI writing tools. Our mission is to help users achieve professional and academic success through better communication.</p>`;
        default:
            return '';
    }
}

// Initial load shows only 3 prompts
displayPrompts(prompts, 3);
tabContent.innerHTML = getTabContent('home');
