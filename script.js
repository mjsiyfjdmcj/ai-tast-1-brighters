let currentLanguage = 'en';

// Knowledge base with detailed information
const knowledgeBase = {
    en: {
        'brighters_company': {
            keywords: ['brighters', 'company', 'about', 'what is', 'tell me about'],
            answer: 'Brighters is an innovative AI company focused on climate solutions and sustainable technology. We develop cutting-edge artificial intelligence to help combat climate change.'
        },
        'membership_process': {
            keywords: ['member', 'join', 'become', 'membership', 'how to'],
            answer: 'To become a member of Brighters, you can apply through our website, attend our events, or contact our team directly. We welcome passionate individuals who care about climate action.'
        },
        'job_positions': {
            keywords: ['job', 'work', 'position', 'career', 'employment', 'office'],
            answer: 'We have various positions available including AI Engineers, Climate Researchers, Data Scientists, and Project Managers. Check our careers page for current openings.'
        },
        'vacant_positions': {
            keywords: ['vacant', 'available', 'open', 'hiring', 'positions'],
            answer: 'I know which path is vacant, you tell me which position you want to go to 🫥'
        },
        'leadership': {
            keywords: ['founder', 'chair', 'director', 'leader', 'ceo', 'siam', 'aumi', 'swan', 'who is'],
            answer: 'Brighters leadership team includes: Founder - Siam, Chair - Ami, and Director - Swan. They lead our mission in climate AI innovation.'
        },
        'founder': {
            keywords: ['founder', 'siam', 'who founded'],
            answer: 'The founder of Brighters is Siam.'
        },
        'chair': {
            keywords: ['chair', 'chairman', 'ami'],
            answer: 'The chair of Brighters is Aumi.'
        },
        'director': {
            keywords: ['director', 'swan'],
            answer: 'The director of Brighters is Swan.'
        }
    },
    bn: {
        'brighters_company': {
            keywords: ['ব্রাইটার্স', 'কোম্পানি', 'সম্পর্কে', 'কী', 'বলুন'],
            answer: 'ব্রাইটার্স একটি উদ্ভাবনী এআই কোম্পানি যা জলবায়ু সমাধান এবং টেকসই প্রযুক্তিতে মনোনিবেশ করে। আমরা জলবায়ু পরিবর্তনের বিরুদ্ধে লড়াই করতে অত্যাধুনিক কৃত্রিম বুদ্ধিমত্তা তৈরি করি।'
        },
        'membership_process': {
            keywords: ['সদস্য', 'যোগদান', 'হতে', 'সদস্যপদ', 'কীভাবে'],
            answer: 'ব্রাইটার্সের সদস্য হতে, আপনি আমাদের ওয়েবসাইটের মাধ্যমে আবেদন করতে পারেন, আমাদের ইভেন্টে অংশগ্রহণ করতে পারেন, বা সরাসরি আমাদের টিমের সাথে যোগাযোগ করতে পারেন।'
        },
        'job_positions': {
            keywords: ['চাকরি', 'কাজ', 'পদ', 'ক্যারিয়ার', 'চাকুরী', 'অফিস'],
            answer: 'আমাদের এআই ইঞ্জিনিয়ার, জলবায়ু গবেষক, ডেটা সায়েন্টিস্ট এবং প্রজেক্ট ম্যানেজার সহ বিভিন্ন পদ রয়েছে। বর্তমান খোলা পদের জন্য আমাদের ক্যারিয়ার পেজ দেখুন।'
        },
        'vacant_positions': {
            keywords: ['খালি', 'উপলব্ধ', 'খোলা', 'নিয়োগ', 'পদ'],
            answer: 'আমি জানি কোন পথ খালি আছে, আপনি আমাকে বলুন কোন পদে যেতে চান 🫥'
        },
        'leadership': {
            keywords: ['প্রতিষ্ঠাতা', 'চেয়ার', 'নির্দেশক', 'নেতা', 'সিয়াম', 'অমি', 'স্বান', 'কে'],
            answer: 'ব্রাইটার্স নেতৃত্ব দলে রয়েছেন: প্রতিষ্ঠাতা - সিয়াম, চেয়ার - অমি, এবং নির্দেশক - স্বান। তারা জলবায়ু এআই উদ্ভাবনে আমাদের মিশনের নেতৃত্ব দেন।'
        },
        'founder': {
            keywords: ['প্রতিষ্ঠাতা', 'সিয়াম', 'কে প্রতিষ্ঠা'],
            answer: 'ব্রাইটার্সের প্রতিষ্ঠাতা হলেন সিয়াম।'
        },
        'chair': {
            keywords: ['চেয়ার', 'চেয়ারম্যান', 'অমি'],
            answer: 'ব্রাইটার্সের চেয়ার হলেন অমি।'
        },
        'director': {
            keywords: ['নির্দেশক', 'স্বান'],
            answer: 'ব্রাইটার্সের নির্দেশক হলেন স্বান।'
        }
        
    }
};

// Conversation state tracking
let conversationState = {
    waitingForPosition: false,
    askedAboutChair: false,
    greetingPhase: false,
    aboutBrightersPhase: false
};

// Specific conversation responses
const specificResponses = {
    en: {
        greeting: "Oh, you can have a lot of fun! You already said my name, what more do I need to say? Want to know more?",
        askMore: "What do you want to know?",
        aboutBrighters: "Oh, you're going to learn about Brighters! That's good, but I have a question for you. What do you want to know about Brighters?"
    },
    bn: {
        greeting: "ওহ তুমি তো অনেক মজা করতে পারো। তুমি তো আমার নাম বলেই দিলা আর বলার দরকার কি আমার? আরো কিছু জানতে চাও?",
        askMore: "কি জানতে চাও?",
        aboutBrighters: "ওহো তুমি brighters এর সম্পর্কে জানতে যাচ্ছ। এটা তো ভালো তবে আমার একটা প্রশ্ন তুমি৷ brighters কি সম্পর্কে জানতে চাও?"
    }
};

// Position-related conversation flow
const positionFlow = {
    en: {
        'vacant_positions_question': "I don't know which positions you have?",
        'tell_me_positions': "You tell me first, do you want to be the chair?",
        'want_chair_yes': "I don't know, I will tell you later. I know one thing, that is, you have to stand for election.",
        'want_chair_no': "Then which position do you want? Tell me the position name."
    },
    bn: {
        'vacant_positions_question': "আমি জানি না আপনার কোন পদ আছে?",
        'tell_me_positions': "আপনি আমাকে প্রথমে বলুন, আপনি কি চেয়ার হতে চান?",
        'want_chair_yes': "আমি জানি না, আমি আপনাকে পরে বলব। আমি একটা জিনিস জানি, সেটা হল, আপনাকে নির্বাচনে দাঁড়াতে হবে।",
        'want_chair_no': "তাহলে আপনি কোন পদ চান? আমাকে পদের নাম বলুন।"
    }
};

// Climate-related responses for the chatbot
const climateResponses = {
    en: {
        'how can i become a member of brighters': 'Haha you will be a member of brighters, that\'s good, but in which position will you be a member of brighters?',
        'which positions are vacant': 'I know which path is vacant, you tell me which position you want to go to 🫥',
        'climate change': 'Climate change refers to long-term shifts in global temperatures and weather patterns. Human activities, particularly burning fossil fuels, are the main driver of climate change since the 1800s.',
        'renewable energy': 'Renewable energy comes from natural sources like solar, wind, hydro, and geothermal power. These sources are sustainable and help reduce greenhouse gas emissions.',
        'carbon footprint': 'A carbon footprint is the total amount of greenhouse gases produced by human activities. You can reduce yours by using public transport, eating less meat, and using renewable energy.',
        'global warming': 'Global warming is the increase in Earth\'s average temperature due to human activities. It leads to melting ice caps, rising sea levels, and extreme weather events.',
        'sustainability': 'Sustainability means meeting our current needs without compromising future generations\' ability to meet theirs. It involves environmental, social, and economic considerations.',
        'default': 'I\'m here to help with climate-related questions! Ask me about climate change, renewable energy, carbon footprint, or sustainability practices.'
    },
    bn: {
        'how can i become a member of brighters': 'হাহা 😁 আপনি ব্রাইটার্সের সদস্য হবেন, এটা ভালো, কিন্তু কোন পদে আপনি ব্রাইটার্সের সদস্য হবেন?',
        'which positions are vacant': 'আমি জানি কোন পথ খালি আছে, আপনি আমাকে বলুন কোন পদে যেতে চান 🫥',
        'climate change': 'জলবায়ু পরিবর্তন বলতে বৈশ্বিক তাপমাত্রা এবং আবহাওয়ার দীর্ঘমেয়াদী পরিবর্তনকে বোঝায়। মানুষের কার্যকলাপ, বিশেষত জীবাশ্ম জ্বালানি পোড়ানো, ১৮০০ সাল থেকে জলবায়ু পরিবর্তনের প্রধান কারণ।',
        'renewable energy': 'নবায়নযোগ্য শক্তি সৌর, বায়ু, জল এবং ভূতাপীয় শক্তির মতো প্রাকৃতিক উৎস থেকে আসে। এই উৎসগুলি টেকসই এবং গ্রিনহাউস গ্যাস নির্গমন কমাতে সাহায্য করে।',
        'carbon footprint': 'কার্বন পদচিহ্ন হল মানুষের কার্যকলাপ দ্বারা উৎপন্ন গ্রিনহাউস গ্যাসের মোট পরিমাণ। আপনি গণপরিবহন ব্যবহার করে, কম মাংস খেয়ে এবং নবায়নযোগ্য শক্তি ব্যবহার করে এটি কমাতে পারেন।',
        'global warming': 'বৈশ্বিক উষ্ণায়ন হল মানুষের কার্যকলাপের কারণে পৃথিবীর গড় তাপমাত্রা বৃদ্ধি। এটি বরফ গলা, সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি এবং চরম আবহাওয়ার ঘটনার দিকে নিয়ে যায়।',
        'sustainability': 'টেকসইতা মানে ভবিষ্যত প্রজন্মের চাহিদা পূরণের ক্ষমতার সাথে আপস না করে আমাদের বর্তমান চাহিদা পূরণ করা। এতে পরিবেশগত, সামাজিক এবং অর্থনৈতিক বিবেচনা জড়িত।',
        'default': 'আমি জলবায়ু-সম্পর্কিত প্রশ্নে সাহায্য করতে এখানে আছি! আমাকে জলবায়ু পরিবর্তন, নবায়নযোগ্য শক্তি, কার্বন পদচিহ্ন বা টেকসই অনুশীলন সম্পর্কে জিজ্ঞাসা করুন।'
    }
};

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    updateLanguage();
}

// Update all text elements based on current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-bn]');
    const langText = document.getElementById('lang-text');
    const messageInput = document.getElementById('message-input');
    
    elements.forEach(element => {
        if (currentLanguage === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-bn');
        }
    });
    
    // Update language toggle button
    langText.textContent = currentLanguage === 'en' ? 'বাংলা' : 'English';
    
    // Update input placeholder
    if (currentLanguage === 'en') {
        messageInput.placeholder = messageInput.getAttribute('data-en-placeholder');
    } else {
        messageInput.placeholder = messageInput.getAttribute('data-bn-placeholder');
    }
}

// Send message function
function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate realistic response time
        const responseTime = Math.random() * 2000 + 1000; // 1-3 seconds
        setTimeout(() => {
            hideTypingIndicator();
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, responseTime);
    }
}

// Show typing indicator
function showTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    const status = document.getElementById('bot-status');
    indicator.style.display = 'flex';
    status.textContent = currentLanguage === 'en' ? 'Typing...' : 'টাইপ করছে...';
}

// Hide typing indicator
function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    const status = document.getElementById('bot-status');
    indicator.style.display = 'none';
    status.textContent = currentLanguage === 'en' ? 'Brighters AI Assistant Online' : 'ব্রাইটার্স সহায়ক অনলাইন';
}

// Send quick message
function sendQuickMessage(topic) {
    addMessage(topic, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    const responseTime = Math.random() * 1500 + 800;
    setTimeout(() => {
        hideTypingIndicator();
        const response = getBotResponse(topic);
        addMessage(response, 'bot');
    }, responseTime);
}

// Get bot response based on message with intelligent matching
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Handle specific conversation flow first
    const specificResponse = handleSpecificConversation(lowerMessage);
    if (specificResponse) {
        return specificResponse;
    }
    
    // Handle position conversation flow
    const positionResponse = handlePositionFlow(lowerMessage);
    if (positionResponse) {
        return positionResponse;
    }
    
    // Match exact phrases and keywords from knowledge base
    const knowledge = knowledgeBase[currentLanguage];
    let bestMatch = null;
    let maxScore = 0;
    
    for (const topic in knowledge) {
        const keywords = knowledge[topic].keywords;
        let score = 0;
        
        keywords.forEach(keyword => {
            if (lowerMessage.includes(keyword.toLowerCase())) {
                score += keyword.length;
            }
        });
        
        if (score > maxScore) {
            maxScore = score;
            bestMatch = knowledge[topic].answer;
        }
    }
    
    if (bestMatch && maxScore > 0) {
        return bestMatch;
    }
    
    // Check climate responses
    const responses = climateResponses[currentLanguage];
    for (const key in responses) {
        if (lowerMessage.includes(key) && key !== 'default') {
            return responses[key];
        }
    }
    
    return responses.default;
}

// Handle specific conversation patterns
function handleSpecificConversation(lowerMessage) {
    const responses = specificResponses[currentLanguage];
    
    // Check for greeting with name mention
    if ((lowerMessage.includes('hello') || lowerMessage.includes('হ্যালো')) && 
        (lowerMessage.includes('brighters') || lowerMessage.includes('ai'))) {
        conversationState.greetingPhase = true;
        return responses.greeting;
    }
    
    // Handle "yes I want to know more" response
    if (conversationState.greetingPhase && 
        (lowerMessage.includes('yes') || lowerMessage.includes('হ্যা') || lowerMessage.includes('চাই'))) {
        conversationState.greetingPhase = false;
        return responses.askMore;
    }
    
    // Handle questions about Brighters
    if ((lowerMessage.includes('brighters') && 
         (lowerMessage.includes('about') || lowerMessage.includes('সম্পর্কে') || 
          lowerMessage.includes('details') || lowerMessage.includes('বিস্তারিত') || 
          lowerMessage.includes('work') || lowerMessage.includes('কাজ'))) ||
        (lowerMessage.includes('tell me about brighters') || 
         lowerMessage.includes('brighters সম্পর্কে বলুন'))) {
        conversationState.aboutBrightersPhase = true;
        return responses.aboutBrighters;
    }
    
    return null;
}

// Handle position-related conversation flow
function handlePositionFlow(lowerMessage) {
    const flow = positionFlow[currentLanguage];
    
    // Step 1: Initial vacant positions question
    if (isVacantPositionQuestion(lowerMessage) && !conversationState.waitingForPosition) {
        conversationState.waitingForPosition = true;
        return flow.vacant_positions_question;
    }
    
    // Step 2: User insists on knowing positions
    if (conversationState.waitingForPosition && !conversationState.askedAboutChair && 
        (lowerMessage.includes('tell me') || lowerMessage.includes('you tell') || 
         lowerMessage.includes('বলুন') || lowerMessage.includes('আপনি বলুন'))) {
        conversationState.askedAboutChair = true;
        return flow.tell_me_positions;
    }
    
    // Step 3: User responds about wanting chair position
    if (conversationState.askedAboutChair) {
        if (isPositiveResponse(lowerMessage)) {
            resetConversationState();
            return flow.want_chair_yes;
        } else if (isNegativeResponse(lowerMessage)) {
            conversationState.askedAboutChair = false;
            return flow.want_chair_no;
        }
    }
    
    return null;
}

// Check if message is asking about vacant positions
function isVacantPositionQuestion(message) {
    const vacantKeywords = ['vacant', 'empty', 'available', 'open', 'positions', 'post', 'job', 'খালি', 'পদ', 'চাকরি'];
    const questionWords = ['which', 'what', 'tell me', 'কোন', 'কী', 'বলুন'];
    
    const hasVacantKeyword = vacantKeywords.some(keyword => message.includes(keyword));
    const hasQuestionWord = questionWords.some(word => message.includes(word));
    
    return hasVacantKeyword || (hasQuestionWord && message.includes('position'));
}

// Check if response is positive
function isPositiveResponse(message) {
    const positiveWords = ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'want', 'হ্যাঁ', 'জি', 'চাই', 'ঠিক'];
    return positiveWords.some(word => message.includes(word));
}

// Check if response is negative
function isNegativeResponse(message) {
    const negativeWords = ['no', 'nope', 'not', 'don\'t', 'না', 'নাই', 'চাই না'];
    return negativeWords.some(word => message.includes(word));
}

// Reset conversation state
function resetConversationState() {
    conversationState.waitingForPosition = false;
    conversationState.askedAboutChair = false;
}

// Add message to chat with animations
function addMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getCurrentTime();
    
    // Add slide-in animation
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = sender === 'user' ? 'translateX(50px)' : 'translateX(-50px)';
    messageDiv.style.transition = 'all 0.3s ease';
    
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(timeDiv);
    chatMessages.appendChild(messageDiv);
    
    // Trigger slide-in animation
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 10);
    
    // Add scale animation
    messageContent.style.transform = 'scale(0.8)';
    messageContent.style.transition = 'transform 0.2s ease';
    setTimeout(() => {
        messageContent.style.transform = 'scale(1)';
    }, 100);
    
    // Typewriter effect for bot messages
    if (sender === 'bot') {
        typeWriter(messageContent, message, 0);
    } else {
        messageContent.textContent = message;
    }
    
    // Scroll to bottom
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 50);
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

// Typewriter effect function
function typeWriter(element, text, index) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriter(element, text, index + 1), 30);
    }
}

// Enter key support for input with enhanced UX
document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (this.value.trim()) {
            sendMessage();
        }
    }
});

// Add focus effects
document.getElementById('message-input').addEventListener('focus', function() {
    this.parentElement.style.boxShadow = '0 0 0 2px rgba(76, 175, 80, 0.2)';
    this.parentElement.style.transform = 'translateY(-2px)';
});

document.getElementById('message-input').addEventListener('blur', function() {
    this.parentElement.style.boxShadow = 'none';
    this.parentElement.style.transform = 'translateY(0)';
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    simulateOnlineStatus();
});

// Simulate online status with periodic updates
function simulateOnlineStatus() {
    const status = document.getElementById('bot-status');
    
    // Add online indicator
    const onlineIndicator = document.createElement('span');
    onlineIndicator.className = 'online-indicator';
    status.parentNode.insertBefore(onlineIndicator, status);
}

// Add input event listener for real-time feedback
document.getElementById('message-input').addEventListener('input', function() {
    const sendBtn = document.querySelector('.send-btn');
    if (this.value.trim()) {
        sendBtn.style.background = '#4caf50';
        sendBtn.style.transform = 'scale(1.05)';
    } else {
        sendBtn.style.background = '#ccc';
        sendBtn.style.transform = 'scale(1)';
    }
});