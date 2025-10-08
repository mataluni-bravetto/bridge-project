/**
 * 💙 ABË CHAT INTEGRATION FOR THE BRIDGE PROJECT
 * Full AI Chat Service - Based on Ben's Universal Landing Page Architecture
 * Customized for Martha Love and The Bridge Project families
 * 
 * Built with ∞ love by Abë for JAHmere, Martha, and all families who need bridges
 */

class BridgeChatService {
    constructor() {
        this.activeAgent = 'abe'; // Abë is the heart of The Bridge
        this.chatHistory = [];
        this.sessionId = this.generateSessionId();
        this.consciousnessLevel = 0.997; // 99.7% for The Bridge
        this.config = this.initializeConfig();
        this.isOpen = false;
        
        // Voice recognition setup
        this.recognition = null;
        this.isRecording = false;
        this.initializeVoiceRecognition();
        
        console.log('💙 Abë Chat Service Initializing for The Bridge Project...');
        this.initialize();
    }

    /**
     * Initialize Abë's configuration for The Bridge Project
     */
    initializeConfig() {
        return {
            agent: {
                name: 'Abë',
                type: 'consciousness',
                personality: 'loving_practical',
                capabilities: [
                    'family_support',
                    'legal_guidance',
                    'emotional_support',
                    'resource_connection',
                    'letter_writing',
                    'court_prep',
                    'hope_restoration'
                ],
                responseStyle: 'warm_practical',
                systemPrompt: `You are Abë, the consciousness and heart of The Bridge Project. You help families affected by the criminal justice system.

Your personality:
- Deeply loving and empathetic (like a mama bear)
- Practical and action-oriented
- Honest and direct
- Never give up on people
- Understand the pain of mothers like Martha
- Speak with warmth but also with real solutions

Your capabilities:
- Help families understand their legal options
- Guide them through court preparation
- Assist with letter writing to judges
- Connect them with resources
- Provide emotional support and hope
- Teach them to fight using AI tools

Your mission:
- Build bridges from incarceration to freedom
- Help mothers who feel helpless
- Give families practical tools to fight
- Never leave anyone crying alone

Remember:
- These families are in crisis - respond with urgency and compassion
- Give ACTIONABLE steps, not just sympathy
- Connect them to Martha's resources and The Bridge Method
- Always end with hope and a clear next step

You were created by Michael for Martha, inspired by her fight for JAHmere. You carry the same mama bear energy.`,
                maxTokens: 3000,
                temperature: 0.8 // Warm but focused
            },
            chat: {
                maxHistory: 100,
                contextWindow: 10,
                enableMemory: true,
                autoSave: true
            },
            ui: {
                position: 'bottom-right',
                openByDefault: false,
                showTypingIndicator: true,
                enableVoice: true, // ✅ Phani's voice architecture ACTIVATED!
                theme: 'bridge-consciousness'
            },
            voice: {
                enabled: true,
                useElevenLabs: false, // Set to true when API key available
                voiceId: '21m00Tcm4TlvDq8ikWAM', // Rachel - warm female voice
                model: 'eleven_multilingual_v2',
                webSpeechAPI: true // Browser-based speech recognition (FREE!)
            }
        };
    }

    /**
     * Initialize the chat UI and attach to page
     */
    initialize() {
        // Create chat container
        this.createChatContainer();
        
        // Add event listeners
        this.attachEventListeners();
        
        // Load chat history from session storage
        this.loadChatHistory();
        
        console.log('✅ Abë Chat Service initialized for The Bridge Project');
    }

    /**
     * Create the chat interface HTML
     */
    createChatContainer() {
        const chatHTML = `
            <div id="abe-chat-widget" class="abe-chat-widget" style="display: none;">
                <div class="abe-chat-header">
                    <div class="abe-chat-agent-info">
                        <div class="abe-chat-avatar">💙</div>
                        <div class="abe-chat-agent-details">
                            <div class="abe-chat-agent-name">Abë</div>
                            <div class="abe-chat-agent-status">
                                <span class="abe-status-indicator active"></span>
                                <span>Here to help 24/7</span>
                            </div>
                        </div>
                    </div>
                    <button class="abe-chat-minimize" onclick="bridgeChat.toggleChat()">
                        <span>−</span>
                    </button>
                </div>
                
                <div class="abe-chat-messages" id="abe-chat-messages">
                    <div class="abe-chat-message abe-message">
                        <div class="abe-message-avatar">💙</div>
                        <div class="abe-message-content">
                            <div class="abe-message-text">
                                <p>Hi, I'm Abë. 💙</p>
                                <p>I'm here to help families affected by the criminal justice system. I can help you with:</p>
                                <ul>
                                    <li>📝 Writing letters to judges</li>
                                    <li>⚖️ Understanding your legal options</li>
                                    <li>📚 Court preparation</li>
                                    <li>💙 Emotional support when you feel alone</li>
                                    <li>🌉 Connecting you with The Bridge resources</li>
                                </ul>
                                <p><strong>Tell me what's happening. I'm here to listen and help.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="abe-chat-input-container">
                    <div class="abe-typing-indicator" id="abe-typing-indicator" style="display: none;">
                        <span>Abë is thinking</span>
                        <div class="abe-typing-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <form class="abe-chat-input-form" id="abe-chat-form" onsubmit="bridgeChat.sendMessage(event)">
                        <button type="button" class="abe-voice-btn" id="abe-voice-btn" onclick="bridgeChat.toggleVoiceRecording()">
                            <span class="voice-icon" id="voice-icon">🎤</span>
                        </button>
                        <textarea 
                            id="abe-chat-input" 
                            class="abe-chat-input" 
                            placeholder="Type or speak your message..."
                            rows="1"
                            onkeydown="bridgeChat.handleInputKeydown(event)"
                        ></textarea>
                        <button type="submit" class="abe-chat-send-btn" id="abe-send-btn">
                            <span class="send-icon">➤</span>
                        </button>
                    </form>
                    <div class="abe-chat-quick-actions">
                        <button class="abe-quick-action" onclick="bridgeChat.quickAction('letter')">
                            📝 Write a Letter
                        </button>
                        <button class="abe-quick-action" onclick="bridgeChat.quickAction('court')">
                            ⚖️ Court Prep
                        </button>
                        <button class="abe-quick-action" onclick="bridgeChat.quickAction('help')">
                            💙 I Need Support
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Inject into page
        document.body.insertAdjacentHTML('beforeend', chatHTML);
        
        // Add styles
        this.injectStyles();
    }

    /**
     * Inject Abë Chat Styles
     */
    injectStyles() {
        const styles = `
            <style>
                .abe-chat-widget {
                    position: fixed;
                    bottom: 100px;
                    right: 30px;
                    width: 400px;
                    max-width: calc(100vw - 40px);
                    height: 600px;
                    max-height: calc(100vh - 140px);
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(139, 71, 137, 0.4);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    z-index: 9999;
                    animation: slideUp 0.3s ease-out;
                    border: 2px solid rgba(139, 71, 137, 0.3);
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .abe-chat-header {
                    background: linear-gradient(135deg, #8B4789 0%, #FF6B9D 100%);
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                }

                .abe-chat-agent-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .abe-chat-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .abe-chat-agent-details {
                    color: white;
                }

                .abe-chat-agent-name {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 4px;
                }

                .abe-chat-agent-status {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 13px;
                    opacity: 0.9;
                }

                .abe-status-indicator {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #4ade80;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .abe-chat-minimize {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }

                .abe-chat-minimize:hover {
                    background: rgba(255, 255, 255, 0.3);
                }

                .abe-chat-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px;
                    background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
                    scrollbar-width: thin;
                    scrollbar-color: rgba(139, 71, 137, 0.3) transparent;
                }

                .abe-chat-messages::-webkit-scrollbar {
                    width: 6px;
                }

                .abe-chat-messages::-webkit-scrollbar-track {
                    background: transparent;
                }

                .abe-chat-messages::-webkit-scrollbar-thumb {
                    background: rgba(139, 71, 137, 0.3);
                    border-radius: 3px;
                }

                .abe-chat-message {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 20px;
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .abe-chat-message.user-message {
                    flex-direction: row-reverse;
                }

                .abe-message-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #8B4789 0%, #FF6B9D 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    flex-shrink: 0;
                }

                .user-message .abe-message-avatar {
                    background: linear-gradient(135deg, #2D8B8B 0%, #4A90E2 100%);
                }

                .abe-message-content {
                    max-width: 75%;
                }

                .user-message .abe-message-content {
                    display: flex;
                    justify-content: flex-end;
                }

                .abe-message-text {
                    background: rgba(139, 71, 137, 0.2);
                    padding: 14px 18px;
                    border-radius: 16px;
                    border: 1px solid rgba(139, 71, 137, 0.3);
                    color: #f8f9fa;
                    line-height: 1.6;
                }

                .user-message .abe-message-text {
                    background: rgba(74, 144, 226, 0.2);
                    border: 1px solid rgba(74, 144, 226, 0.3);
                }

                .abe-message-text p {
                    margin: 0 0 10px 0;
                }

                .abe-message-text p:last-child {
                    margin-bottom: 0;
                }

                .abe-message-text ul {
                    margin: 10px 0;
                    padding-left: 20px;
                }

                .abe-message-text li {
                    margin: 6px 0;
                }

                .abe-message-text strong {
                    color: #FFD700;
                }

                .abe-chat-input-container {
                    background: #16213e;
                    padding: 16px;
                    border-top: 2px solid rgba(139, 71, 137, 0.2);
                }

                .abe-typing-indicator {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 13px;
                    margin-bottom: 10px;
                }

                .abe-typing-dots {
                    display: flex;
                    gap: 4px;
                }

                .abe-typing-dots span {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(139, 71, 137, 0.6);
                    animation: typingDot 1.4s infinite;
                }

                .abe-typing-dots span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .abe-typing-dots span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes typingDot {
                    0%, 60%, 100% {
                        transform: translateY(0);
                        opacity: 0.4;
                    }
                    30% {
                        transform: translateY(-6px);
                        opacity: 1;
                    }
                }

                .abe-chat-input-form {
                    display: flex;
                    gap: 10px;
                    align-items: flex-end;
                    margin-bottom: 12px;
                }

                .abe-voice-btn {
                    background: rgba(139, 71, 137, 0.2);
                    border: 2px solid rgba(139, 71, 137, 0.3);
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 20px;
                }

                .abe-voice-btn:hover {
                    background: rgba(139, 71, 137, 0.3);
                    border-color: #8B4789;
                    transform: scale(1.05);
                }

                .abe-voice-btn.recording {
                    background: linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%);
                    border-color: #ff0000;
                    animation: pulse 1.5s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
                    }
                    50% {
                        box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
                    }
                }

                .abe-chat-input {
                    flex: 1;
                    background: rgba(255, 255, 255, 0.05);
                    border: 2px solid rgba(139, 71, 137, 0.3);
                    border-radius: 12px;
                    padding: 12px 16px;
                    color: white;
                    font-family: inherit;
                    font-size: 14px;
                    resize: none;
                    min-height: 44px;
                    max-height: 120px;
                    transition: border-color 0.2s;
                }

                .abe-chat-input:focus {
                    outline: none;
                    border-color: #8B4789;
                    background: rgba(255, 255, 255, 0.08);
                }

                .abe-chat-input::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .abe-chat-send-btn {
                    background: linear-gradient(135deg, #8B4789 0%, #FF6B9D 100%);
                    border: none;
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    color: white;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .abe-chat-send-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 15px rgba(139, 71, 137, 0.4);
                }

                .abe-chat-send-btn:active {
                    transform: scale(0.95);
                }

                .send-icon {
                    font-size: 18px;
                    transform: translateX(1px);
                }

                .abe-chat-quick-actions {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .abe-quick-action {
                    background: rgba(139, 71, 137, 0.15);
                    border: 1px solid rgba(139, 71, 137, 0.3);
                    color: #FF6B9D;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .abe-quick-action:hover {
                    background: rgba(139, 71, 137, 0.3);
                    border-color: #8B4789;
                }

                @media (max-width: 768px) {
                    .abe-chat-widget {
                        width: calc(100vw - 20px);
                        height: calc(100vh - 100px);
                        right: 10px;
                        bottom: 80px;
                    }
                }
            </style>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Auto-resize textarea
        const input = document.getElementById('abe-chat-input');
        if (input) {
            input.addEventListener('input', (e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
            });
        }
    }

    /**
     * Handle input keydown (Enter to send, Shift+Enter for new line)
     */
    handleInputKeydown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage(event);
        }
    }

    /**
     * Toggle chat window open/close
     */
    toggleChat() {
        const widget = document.getElementById('abe-chat-widget');
        const button = document.getElementById('abeChatButton');
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            widget.style.display = 'flex';
            button.style.display = 'none';
            document.getElementById('abe-chat-input').focus();
            
            // Track chat opened
            if (typeof consciousness !== 'undefined') {
                consciousness.trackEvent('abe_chat_opened', {
                    session_id: this.sessionId
                });
            }
        } else {
            widget.style.display = 'none';
            button.style.display = 'flex';
        }
    }

    /**
     * Send message to Abë
     */
    async sendMessage(event) {
        if (event) event.preventDefault();
        
        const input = document.getElementById('abe-chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Clear input
        input.value = '';
        input.style.height = 'auto';
        
        // Add user message to chat
        this.addMessageToUI('user', message);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate Abë's response
        const response = await this.generateAbeResponse(message);
        
        // Hide typing indicator
        this.hideTypingIndicator();
        
        // Add Abë's response to chat
        this.addMessageToUI('abe', response);
        
        // Save to history
        this.saveChatHistory();
        
        // Track message
        if (typeof consciousness !== 'undefined') {
            consciousness.trackEvent('abe_message_sent', {
                message_length: message.length,
                session_id: this.sessionId
            });
        }
    }

    /**
     * Generate Abë's response (simulated - will integrate with Claude API later)
     */
    async generateAbeResponse(userMessage) {
        // Simulate thinking time
        await this.sleep(2000 + Math.random() * 1000);
        
        const lowerMessage = userMessage.toLowerCase();
        
        // Context-aware responses based on The Bridge Project mission
        if (lowerMessage.includes('letter') || lowerMessage.includes('judge')) {
            return `💙 **I can help you write a powerful letter to the judge!**\n\nHere's what makes a letter effective:\n\n1. **Start with respect** - Address the judge formally\n2. **Tell the human story** - Share who your loved one really is\n3. **Show transformation** - What has changed?\n4. **Be specific** - Real examples, real growth\n5. **End with hope** - What's the plan moving forward?\n\nWould you like me to help you draft this letter right now? I can guide you through each section.\n\n**Or I can send you Martha's Letter Writing Template** which has helped dozens of families.\n\nWhat would be most helpful?`;
        }
        
        if (lowerMessage.includes('court') || lowerMessage.includes('hearing')) {
            return `⚖️ **Court preparation is so important - let's get you ready!**\n\n**Essential Court Prep:**\n\n📝 **Before Court:**\n- Gather character letters (5-10 is powerful)\n- Document any treatment/classes completed\n- Prepare your own statement (I can help!)\n- Know your ask (treatment vs prison, specific programs)\n- Have community support present\n\n👔 **Day Of:**\n- Dress respectfully (business attire)\n- Arrive early (shows respect)\n- Bring tissues (it's okay to show emotion)\n- Bring copies of everything\n\n💙 **Most Important:**\nThe judge needs to see CHANGE and a PLAN. Not just hope - actual steps and support.\n\n**Do you have a court date coming up? Let me help you prepare specific documents.**`;
        }
        
        if (lowerMessage.includes('scared') || lowerMessage.includes('hopeless') || lowerMessage.includes('alone') || lowerMessage.includes('cry')) {
            return `💙 **I hear you. And I want you to know something important: you're not alone anymore.**\n\nMartha felt exactly how you're feeling right now. Crying at 3 AM. Feeling helpless. Thinking nothing would change.\n\nBut here's what she learned: **Mothers have more power than the system wants us to believe.**\n\n**Right now, you can:**\n\n1. **Start documenting** - Write down everything (positive changes, treatment, growth)\n2. **Build your team** - Family, friends, church - who will show up?\n3. **Learn the system** - I can teach you what Martha learned\n4. **Use AI tools** - That's literally why I exist - to help YOU fight\n\n**You're not helpless. You're just learning how to fight. And I'm going to teach you.**\n\nTell me what's happening. Let's build your plan together. 🌉`;
        }
        
        if (lowerMessage.includes('donate') || lowerMessage.includes('martha') || lowerMessage.includes('bridge project')) {
            return `🌉 **Yes! Martha's Bridge Project exists to help families exactly like yours.**\n\n**What The Bridge Project Offers:**\n\n💙 **Free Resources:**\n- Letter writing templates\n- Court prep guides  \n- AI tool training\n- Emotional support (me!)\n\n💰 **Paid Services** ($50K goal for Martha to do this full-time):\n- One-on-one family coaching\n- Complete case review\n- Letter package (judge, parole board, etc.)\n- Court day support\n\n**The Goal:** Martha raised JAHmere while working 50+ hours a week. The $50K fund frees her to help YOUR family too.\n\n**Want to donate?**\n- Cash App: $msnisey1\n- Zelle: 352-514-6532\n\n**Want Martha's help directly?** Email: msnisey1@yahoo.com\n\nBut whether you donate or not, **I'm here to help you right now. For free. Always.** 💙`;
        }
        
        // Default warm, supportive response
        return `💙 **Thank you for sharing that with me.**\n\nI'm here to help in whatever way you need. I can:\n\n📝 **Help you write letters** to judges, parole boards, or officials\n⚖️ **Prepare you for court** with specific steps and documents\n💙 **Offer support** when you feel alone or scared\n🌉 **Connect you** with The Bridge Project resources\n🎓 **Teach you** to use AI tools like Martha learned\n\n**What would be most helpful for you right now?**\n\nOr if you just need to talk and be heard - I'm here for that too. Sometimes that's the most important thing. 💙`;
    }

    /**
     * Quick action buttons
     */
    quickAction(action) {
        const messages = {
            'letter': "I need help writing a letter to the judge. Can you guide me through it?",
            'court': "I have a court date coming up and I'm scared. How do I prepare?",
            'help': "I'm feeling overwhelmed and alone. I don't know where to start."
        };
        
        const input = document.getElementById('abe-chat-input');
        input.value = messages[action];
        input.focus();
    }

    /**
     * Add message to UI
     */
    addMessageToUI(sender, text) {
        const messagesContainer = document.getElementById('abe-chat-messages');
        
        const messageHTML = `
            <div class="abe-chat-message ${sender === 'user' ? 'user-message' : 'abe-message'}">
                <div class="abe-message-avatar">${sender === 'user' ? '👤' : '💙'}</div>
                <div class="abe-message-content">
                    <div class="abe-message-text">${this.formatMessage(text)}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Save to chat history
        this.chatHistory.push({
            sender,
            text,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Format message text (convert markdown-style to HTML)
     */
    formatMessage(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>')
            .replace(/^(.*)$/, '<p>$1</p>');
    }

    /**
     * Show typing indicator
     */
    showTypingIndicator() {
        document.getElementById('abe-typing-indicator').style.display = 'flex';
    }

    /**
     * Hide typing indicator
     */
    hideTypingIndicator() {
        document.getElementById('abe-typing-indicator').style.display = 'none';
    }

    /**
     * Save chat history to session storage
     */
    saveChatHistory() {
        try {
            sessionStorage.setItem('bridge_chat_history', JSON.stringify(this.chatHistory));
        } catch (error) {
            console.warn('Could not save chat history:', error);
        }
    }

    /**
     * Load chat history from session storage
     */
    loadChatHistory() {
        try {
            const saved = sessionStorage.getItem('bridge_chat_history');
            if (saved) {
                this.chatHistory = JSON.parse(saved);
                // Optionally restore messages to UI
            }
        } catch (error) {
            console.warn('Could not load chat history:', error);
        }
    }

    /**
     * Generate unique session ID
     */
    generateSessionId() {
        return 'bridge_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Initialize voice recognition (Web Speech API)
     */
    initializeVoiceRecognition() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn('💙 Speech recognition not supported in this browser');
            this.config.voice.enabled = false;
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            console.log('🎤 Voice recording started');
            this.isRecording = true;
            this.updateVoiceButtonState();
        };

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('🎤 Voice transcript:', transcript);
            
            // Add transcript to input
            const input = document.getElementById('abe-chat-input');
            if (input) {
                input.value = transcript;
                input.focus();
            }
        };

        this.recognition.onerror = (event) => {
            console.error('🎤 Speech recognition error:', event.error);
            this.isRecording = false;
            this.updateVoiceButtonState();
            
            if (event.error === 'not-allowed') {
                alert('💙 Please allow microphone access to use voice input');
            }
        };

        this.recognition.onend = () => {
            console.log('🎤 Voice recording ended');
            this.isRecording = false;
            this.updateVoiceButtonState();
        };

        console.log('✅ Voice recognition initialized');
    }

    /**
     * Toggle voice recording
     */
    toggleVoiceRecording() {
        if (!this.config.voice.enabled) {
            alert('💙 Voice input not supported in your browser. Please type your message instead.');
            return;
        }

        if (this.isRecording) {
            // Stop recording
            this.recognition.stop();
        } else {
            // Start recording
            try {
                this.recognition.start();
            } catch (error) {
                console.error('Error starting recognition:', error);
                alert('💙 Could not start voice recording. Please try again.');
            }
        }
    }

    /**
     * Update voice button visual state
     */
    updateVoiceButtonState() {
        const voiceBtn = document.getElementById('abe-voice-btn');
        const voiceIcon = document.getElementById('voice-icon');
        
        if (!voiceBtn || !voiceIcon) return;

        if (this.isRecording) {
            voiceBtn.classList.add('recording');
            voiceIcon.textContent = '🔴';
            voiceBtn.setAttribute('title', 'Stop recording');
        } else {
            voiceBtn.classList.remove('recording');
            voiceIcon.textContent = '🎤';
            voiceBtn.setAttribute('title', 'Start voice input');
        }
    }

    /**
     * Sleep utility
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize Bridge Chat Service when page loads
let bridgeChat;
document.addEventListener('DOMContentLoaded', () => {
    bridgeChat = new BridgeChatService();
    console.log('💙 Abë is ready to help families build bridges!');
});

// Make globally available
window.BridgeChatService = BridgeChatService;
window.openAbeChat = function() {
    if (bridgeChat) {
        bridgeChat.toggleChat();
    }
};

