// ===== PRTI - Interactive Script =====

document.addEventListener('DOMContentLoaded', () => {

    // ===== Mobile Menu Toggle =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // ===== Sticky Navbar Shadow =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Scroll-Triggered Fade Animations =====
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        fadeObserver.observe(el);
    });

    // ===== Sidebar Card Dot Navigation =====
    const dots = document.querySelectorAll('.sidebar-dots .dot');
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // ===== Smooth Scroll for Nav Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                hamburger?.classList.remove('active');
                navLinks?.classList.remove('active');
            }
        });
    });

    // ===== Parallax-like subtle scroll effect on hero image =====
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.08;
            if (rate < 40) {
                heroImage.style.transform = `translateY(${rate}px) scale(1)`;
            }
        });
    }

    // ===== Counter Animation for Stats =====
    const animateCounter = (el, target, suffix = '') => {
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current >= target) {
                el.textContent = target.toLocaleString() + suffix;
                return;
            }
            el.textContent = Math.floor(current).toLocaleString() + suffix;
            requestAnimationFrame(update);
        };
        update();
    };

    // Observe hero stat numbers
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent.trim();
                if (text === '5000+') {
                    animateCounter(el, 5000, '+');
                } else if (text === '20+') {
                    animateCounter(el, 20, '+');
                }
                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number, .sidebar-stat-number').forEach(el => {
        statObserver.observe(el);
    });

    // ===== About Section Counter Animation =====
    const aboutStatObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                if (!isNaN(target) && el.textContent === '0') {
                    const suffix = target >= 1000 ? '+' : target === 98 ? '%' : '+';
                    animateCounter(el, target, suffix);
                }
                aboutStatObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.about-stat-num').forEach(el => {
        aboutStatObserver.observe(el);
    });

    // ===== Contact Form Handler =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const origHTML = btn.innerHTML;
            btn.innerHTML = '✓ Message Sent!';
            btn.style.background = '#22c55e';
            setTimeout(() => {
                btn.innerHTML = origHTML;
                btn.style.background = '';
                contactForm.reset();
            }, 2500);
        });
    }

    // ===== Catalog Circle Hover Effect =====
    const catalogCircle = document.querySelector('.catalog-circle');
    if (catalogCircle) {
        catalogCircle.addEventListener('mouseenter', () => {
            catalogCircle.style.transform = 'rotate(45deg) scale(1.1)';
        });
        catalogCircle.addEventListener('mouseleave', () => {
            catalogCircle.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    // ===== Button Ripple Effect =====
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-login, .btn-register').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                width: 100px;
                height: 100px;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: translate(-50%, -50%) scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

});

/* ===== CHATBOT WIDGET ===== */
(function () {
    const chatbot = document.getElementById('chatbot');
    const bubble = document.getElementById('chatbotBubble');
    const closeBtn = document.getElementById('chatbotClose');
    const messagesEl = document.getElementById('chatbotMessages');
    if (!chatbot || !bubble || !messagesEl) return;

    let isOpen = false;

    // Toggle open/close
    function toggleChat() {
        isOpen = !isOpen;
        chatbot.classList.toggle('open', isOpen);
        if (isOpen) chatbot.classList.add('badge-hidden');
    }

    bubble.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Helpers
    function scrollMessages() {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function addBotMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chatbot-msg bot';
        msg.textContent = text;
        messagesEl.appendChild(msg);
        scrollMessages();
    }

    function addUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chatbot-msg user';
        msg.textContent = text;
        messagesEl.appendChild(msg);
        scrollMessages();
    }

    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'chatbot-typing';
        typing.id = 'chatbotTyping';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messagesEl.appendChild(typing);
        scrollMessages();
    }

    function hideTyping() {
        const t = document.getElementById('chatbotTyping');
        if (t) t.remove();
    }

    function addOptions(options) {
        const wrap = document.createElement('div');
        wrap.className = 'chatbot-options';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chatbot-option-btn';
            btn.innerHTML = `<span class="opt-icon">${opt.icon}</span>${opt.label}`;
            btn.addEventListener('click', () => {
                wrap.remove();
                opt.action();
            });
            wrap.appendChild(btn);
        });
        messagesEl.appendChild(wrap);
        scrollMessages();
    }

    function botReply(text, delay) {
        return new Promise(resolve => {
            showTyping();
            setTimeout(() => {
                hideTyping();
                addBotMessage(text);
                resolve();
            }, delay || 1200);
        });
    }

    // ── Conversation Flows ──

    function showMainOptions() {
        addOptions([
            {
                icon: '📚',
                label: 'I want to learn PRT (Training)',
                action: trainingFlow
            },
            {
                icon: '🩺',
                label: 'I need Physical Therapy',
                action: therapyFlow
            }
        ]);
    }

    // ── TRAINING PATH ──
    async function trainingFlow() {
        addUserMessage('I want to learn PRT (Training)');
        await botReply("Great choice! PRTI offers hands-on training programs for practitioners at every level. 🎓", 1000);
        await botReply("We have courses ranging from introductory weekends to advanced certification programs — all taught by the leading experts in Positional Release Therapy.", 1500);

        addOptions([
            {
                icon: '🌱',
                label: 'Beginner / Intro Course',
                action: async () => {
                    addUserMessage('Beginner / Intro Course');
                    await botReply("Our Intro to Positional Release course is a 2-day weekend workshop. You'll learn foundational techniques, hands-on assessment, and leave with skills you can use immediately.", 1500);
                    await botReply("📅 Next session starts soon — spots fill fast!", 1000);
                    showFinalCTA('training');
                }
            },
            {
                icon: '🏆',
                label: 'Advanced Certification',
                action: async () => {
                    addUserMessage('Advanced Certification');
                    await botReply("Our Advanced Certification is a 6-module program designed for licensed practitioners who want to master PRT at the highest level.", 1500);
                    await botReply("You'll receive a PRTI-certified credential recognized across the industry. It includes mentorship, case studies, and live supervised practice.", 1600);
                    showFinalCTA('training');
                }
            },
            {
                icon: '↩️',
                label: 'Go back',
                action: async () => {
                    addUserMessage('Go back');
                    await botReply("No problem! How can I help you today?", 800);
                    showMainOptions();
                }
            }
        ]);
    }

    // ── THERAPY PATH ──
    async function therapyFlow() {
        addUserMessage('I need Physical Therapy');
        await botReply("You're in the right place! Our clinic specializes in gentle, non-invasive Positional Release Therapy. 💙", 1000);
        await botReply("What best describes your situation?", 800);

        addOptions([
            {
                icon: '😣',
                label: 'I have chronic pain',
                action: async () => {
                    addUserMessage('I have chronic pain');
                    await botReply("We understand how exhausting chronic pain can be. PRT is especially effective for long-standing conditions because it works with your body — never against it.", 1500);
                    await botReply("Many patients feel relief after just the first session. No cracking, no force — just gentle repositioning.", 1400);
                    showFinalCTA('therapy');
                }
            },
            {
                icon: '🏃',
                label: 'Injury / Post-surgery recovery',
                action: async () => {
                    addUserMessage('Injury / Post-surgery recovery');
                    await botReply("Recovery is our specialty! Whether it's post-surgical rehab or an acute injury, our therapists will create a personalized plan tailored to your body and your goals.", 1500);
                    await botReply("We combine PRT with corrective exercise to get you back to full function — safely and efficiently.", 1400);
                    showFinalCTA('therapy');
                }
            },
            {
                icon: '🤔',
                label: 'Just exploring options',
                action: async () => {
                    addUserMessage('Just exploring options');
                    await botReply("That's totally okay! We offer a free initial consultation so you can meet our team, ask questions, and see if PRT is right for you — no commitment needed.", 1400);
                    showFinalCTA('therapy');
                }
            },
            {
                icon: '↩️',
                label: 'Go back',
                action: async () => {
                    addUserMessage('Go back');
                    await botReply("No problem! How can I help you today?", 800);
                    showMainOptions();
                }
            }
        ]);
    }

    // ── Final CTA ──
    function showFinalCTA(type) {
        const sectionId = type === 'training' ? '#services' : '#contact-section';
        const label = type === 'training' ? 'View Training Programs' : 'Book a Free Consultation';
        const icon = type === 'training' ? '📋' : '📞';

        addOptions([
            {
                icon: icon,
                label: label,
                action: () => {
                    addUserMessage(label);
                    addBotMessage("Taking you there now! 🚀");
                    setTimeout(() => {
                        const target = document.querySelector(sectionId);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(toggleChat, 600);
                    }, 800);
                }
            },
            {
                icon: '↩️',
                label: 'Start over',
                action: async () => {
                    addUserMessage('Start over');
                    await botReply("Sure thing! What would you like help with?", 800);
                    showMainOptions();
                }
            }
        ]);
    }

    // ── Auto-open on page load ──
    setTimeout(async () => {
        toggleChat();
        await botReply("Hi there! 👋 Welcome to PRTI.", 1000);
        await botReply("I'm here to help you get started. What brings you to us today?", 1200);
        showMainOptions();
    }, 2000);

})();
