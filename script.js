document.addEventListener('DOMContentLoaded', () => {
    // 1. Component Injector
    const injectComponent = (id, file) => {
        const target = document.getElementById(id);
        if (target) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    target.innerHTML = data;
                    if (id === 'chatbot-placeholder') initChatbot();
                });
        }
    };

    injectComponent('header-placeholder', '/header.html');
    injectComponent('footer-placeholder', '/footer.html');
    injectComponent('chatbot-placeholder', '/chatbot.html');

    // 2. Chatbot Logic
    function initChatbot() {
        const trigger = document.getElementById('chatbot-trigger');
        const window = document.getElementById('chat-window');
        if (trigger) {
            trigger.addEventListener('click', () => {
                window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }

    window.chatAnswer = (type) => {
        const body = document.getElementById('chat-body');
        let reply = "";
        if (type === 'leads') reply = "Great! Our AI Lead Engine can find 100+ prospects weekly. Ready for a demo?";
        if (type === 'save-time') reply = "Perfect. We specialize in n8n/Make automations to save you 20+ hours weekly.";
        
        const msg = document.createElement('div');
        msg.className = 'chat-msg msg-bot';
        msg.innerText = reply;
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight;
    };
});
