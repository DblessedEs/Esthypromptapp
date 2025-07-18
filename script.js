const prompts = [
    "Write a blog post about hidden travel destinations.",
    "Generate a marketing plan for a small business.",
    "Create content ideas for a fitness page on Instagram.",
    "Draft a resignation letter template for employees.",

    `Create a 1500-word blog post for a travel blog. The post should provide a detailed guide on 'Exploring Hidden Gems in Paris'. Include an engaging introduction, a list of top 10 hidden gems, practical tips for travelers, and a conclusion. Use a friendly and informative tone. The post should include at least two anecdotes or personal experiences to make it relatable. Provide subheadings for each section to improve readability.`,

    `Outline a comprehensive 10-chapter e-book on 'The Complete Guide to Digital Marketing for Small Businesses'. Each chapter should cover a different aspect of digital marketing, such as SEO, social media, email marketing, and content marketing. Include actionable tips, real-life examples, and case studies. The tone should be professional yet accessible, making complex topics easy to understand for beginners. Provide summaries and key takeaways at the end of each chapter.`,

    `Write the first chapter of a romance novel set in Victorian England. Introduce the main characters and set up the primary conflict. The writing should capture the historical setting with detailed descriptions of the environment and social customs. Use a descriptive and emotive tone to engage readers. The chapter should be approximately 2000 words long.`,

    `Create persuasive ad copy for a new fitness app targeting millennials. The copy should highlight the app's unique features, such as personalized workout plans and progress tracking. Use a motivational and energetic tone to inspire action. The ad copy should be concise, with a strong call-to-action, and no more than 150 words.`,

    `Write a 1500-word SEO-optimized article on 'Top 10 Benefits of Yoga for Mental Health'. Include relevant keywords such as 'yoga benefits', 'mental health', and 'stress relief'. The article should have an engaging introduction, detailed explanations of each benefit, and a conclusion. Use a supportive and encouraging tone. Provide subheadings for each benefit and include at least three authoritative sources.`,

    `Write a high-end, engaging product description for a luxury wristwatch targeting affluent customers. Highlight its craftsmanship, premium materials (such as sapphire crystal, titanium, or gold), and the uniqueness of its design. Ensure the tone is sophisticated, refined, and evocative of prestige and exclusivity. Structure the description with an elegant introduction that captures attention, a detailed breakdown of features (materials, craftsmanship, precision, heritage), and a strong, persuasive closing paragraph that inspires trust and desire to purchase. Keep the length around 300 words, using sensory and emotive language to enhance luxury appeal.`,

    `Create a detailed and professional monthly newsletter for a digital marketing agency. Structure the newsletter with the following clear sections: 1️⃣ Industry News & Trends, 2️⃣ Featured Client Success Story (case study format), 3️⃣ Practical Tips & Strategies for Digital Marketing, and 4️⃣ Upcoming Events, Webinars, or Announcements. Use an informative, authoritative tone while keeping the writing engaging and concise. The newsletter should include engaging subject lines, clear section headings, actionable insights, and compelling calls-to-action (CTAs) throughout. Aim for approximately 800 words in total. Ensure the tone reflects expertise and adds value to existing and potential clients.`,

    `Generate 10 creative, detailed Instagram post ideas for a sustainable fashion brand targeting eco-conscious consumers. For each idea, include: 1️⃣ A short, catchy caption that reflects brand values, 2️⃣ Relevant sustainability-focused hashtags, 3️⃣ A brief description of the suggested visual content (e.g., behind-the-scenes, eco-friendly materials, customer testimonials, sustainability education, product highlights). Ensure the tone is inspiring, positive, and aligned with environmental awareness. Provide a mix of content types to promote engagement, shareability, and brand storytelling.`,

    `Write a full, detailed script for a 5-minute YouTube video titled: "How to Build a Successful Morning Routine for Better Productivity." The script should include: 1️⃣ An attention-grabbing introduction, 2️⃣ Clear, step-by-step tips for creating and maintaining a positive morning routine (including mindset, health, and productivity strategies), and 3️⃣ A motivational closing that encourages viewers to take action. Use a friendly, encouraging tone with smooth transitions between sections. Include on-screen text prompts, scene descriptions, and suggestions for visual elements to complement the narration. Ensure the script is easy to follow and motivational for a broad audience.`,

    `Draft a comprehensive, well-structured case study for a successful marketing campaign executed by a technology startup. The case study should include: 1️⃣ Background on the company and its challenges before the campaign, 2️⃣ Clearly defined objectives and KPIs, 3️⃣ Detailed explanation of marketing strategies used (SEO, PPC, influencer outreach, content marketing, etc.), 4️⃣ Quantifiable results achieved (metrics, growth, ROI), and 5️⃣ Key lessons learned and future recommendations. Incorporate formal, analytical language suitable for B2B audiences. Include suggestions for visual aids (graphs, charts, infographics) to clearly illustrate data points and outcomes. Target length: 1500 words.`,

    `Draft a detailed, professional white paper titled: "The Future of Artificial Intelligence in Healthcare: Opportunities, Challenges, and Transformative Impact." Structure the white paper with clear sections, including: 1️⃣ Executive Summary, 2️⃣ Introduction to AI in Healthcare, 3️⃣ Current Technological Trends, 4️⃣ Key Opportunities and Innovations, 5️⃣ Ethical, Legal, and Operational Challenges, 6️⃣ Future Projections and Potential Risks, and 7️⃣ Conclusion with Key Takeaways. Use an authoritative and well-researched tone, citing credible sources, recent studies, and relevant data where appropriate. Provide deep analysis with evidence-backed insights. Target length: 2000 words. Ensure the structure is easy to navigate with appropriate headings and subheadings.`,

    `Write a comprehensive, objective review comparing the two popular project management tools: Trello and Asana. Structure the review with clear, user-friendly sections: 1️⃣ Introduction to Both Platforms, 2️⃣ Key Features and Functionalities, 3️⃣ Ease of Use and User Interface Comparison, 4️⃣ Pricing and Subscription Plans, 5️⃣ Integrations and Customization Options, 6️⃣ Pros and Cons of Each Tool, and 7️⃣ Final Recommendation for Different Types of Users (startups, agencies, enterprise teams). Maintain a neutral, informative tone focused on helping readers make an informed decision. Ensure clarity and depth throughout, targeting approximately 1500 words.`,

    `Create a detailed, step-by-step tutorial titled: "How to Set Up a WordPress Blog: A Complete Beginner’s Guide." Structure the guide into clear stages: 1️⃣ Introduction to WordPress and Blogging Benefits, 2️⃣ How to Choose and Purchase a Domain Name and Hosting Plan, 3️⃣ Installing WordPress, 4️⃣ Setting Up Themes and Essential Plugins, 5️⃣ Customizing Design and Layout, 6️⃣ Creating Pages and Publishing the First Blog Post, and 7️⃣ Troubleshooting Common Issues (with solutions). Include screenshots where helpful and practical tips for beginners throughout. Use a friendly, instructional tone. Target length: 2000 words for clarity and thoroughness.`,

    `Draft a formal, engaging press release to announce the launch of a new eco-friendly product line by a fashion brand. The press release should include: 1️⃣ A compelling headline and subheadline that highlight sustainability and innovation, 2️⃣ Key product features and benefits, 3️⃣ Official launch date and availability, 4️⃣ Quotes from company executives emphasizing the brand’s commitment to sustainability, and 5️⃣ A professional closing statement inviting media inquiries and public engagement. Use a formal, polished, and promotional tone. Target length: 400 words, structured in standard press release format.`,

    `Write a persuasive, well-structured editorial titled: "The Importance of Mental Health Awareness in the Modern Workplace." Structure the piece with: 1️⃣ A strong, engaging introduction that sets the tone, 2️⃣ Key body sections discussing statistics on mental health, the impact on productivity, and benefits of proactive workplace policies, and 3️⃣ A compelling conclusion with actionable recommendations. Include real-world examples, personal insights, and up-to-date statistics to strengthen your points. Maintain a supportive, empathetic, and persuasive tone throughout. Target length: 1200 words. The goal is to inspire employers and leaders to take mental health initiatives seriously.`
];

const searchInput = document.getElementById('searchInput');
const promptList = document.getElementById('promptList');
const promptTextarea = document.getElementById('promptTextarea');
const copyButton = document.getElementById('copyButton');
const copyAlert = document.getElementById('copyAlert');
const promptCount = document.getElementById('promptCount');
const tabLinks = document.querySelectorAll('.dropdown-content a');
const tabContent = document.getElementById('tabContent');

function updatePromptCount(count) {
    promptCount.textContent = `Available Prompts (${count})`;
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

displayPrompts(prompts);
tabContent.innerHTML = getTabContent('home');