// ===== PRTI — Settings & Website Builder V2 =====

(function () {
    'use strict';

    // ── Default Section Style ──
    const DEFAULT_SECTION_STYLE = {
        bgColor: '',
        bgGradient: false,
        bgGradientEnd: '',
        bgImage: '',
        paddingTop: 80,
        paddingBottom: 80
    };

    // ── Default Configuration ──
    const DEFAULTS = {
        theme: 'ocean-blue',
        colors: {
            primary: '#25aae1',
            primaryDark: '#1d8ab8',
            primaryLight: '#a8ddf2',
            secondary: '#f5931e',
            secondaryLight: '#fcc97a',
            bg: '#f7f9fc',
            bgCard: '#eef3f8',
            bgCardLight: '#e8eef5',
            textDark: '#1a2b3c',
            textMuted: '#5a6b7c',
            border: '#d0dce8',
            white: '#ffffff'
        },
        font: 'Inter',
        headingFont: 'Inter',
        borderRadius: 16,
        typography: {
            headingScale: 1.0,
            bodySize: 15,
            lineHeight: 1.6,
            letterSpacing: 0
        },
        spacing: {
            maxWidth: 1320,
            sectionGap: 0,
            cardPadding: 1.0
        },
        content: {
            heroTitle: "Start Your Journey to\nBetter Mobility\nToday",
            heroDesc: "At PRTI, we provide expert positional release therapy & rehabilitation services designed to help you overcome pain, prevent injuries, & regain mobility.",
            heroBtn: "Book Appointment",
            heroBtnSecondary: "Learn More",
            servicesTitle: "EXPERT POSITIONAL RELEASE THERAPY & REHABILITATION",
            aboutTitle: "Dedicated to Restoring Your Body's Natural Balance",
            aboutDesc: "At the Positional Release Therapy Institute, we specialize in gentle, non-invasive techniques that work with your body's natural healing mechanisms. Our approach resolves pain at its source — without force, without discomfort.",
            contactTitle: "Ready to Start Your Recovery?",
            contactSubtitle: "Schedule a complimentary consultation with our expert therapists and take the first step toward pain-free living.",
            contactPhone: "(480) 123-4567",
            contactEmail: "info@prti.com",
            contactAddress: "123 Therapy Lane\nScottsdale, AZ 85251",
            contactHours: "Mon – Fri: 8am – 6pm\nSat: 9am – 1pm"
        },
        nav: {
            brandName: 'PRTI',
            brandTagline: 'Therapy Institute',
            links: ['Home', 'Services', 'About', 'Contact'],
            showPhone: true,
            showCTA: true,
            ctaText: 'Book Appointment'
        },
        footer: {
            copyright: '© 2025 Positional Release Therapy Institute. All rights reserved.',
            showNewsletter: true,
            socialFacebook: '#',
            socialInstagram: '#',
            socialLinkedin: '#'
        },
        sections: {
            hero: true,
            services: true,
            about: true,
            contact: true,
            footer: true,
            chatbot: true
        },
        sectionStyles: {
            hero: { bgColor: '', bgGradient: false, bgGradientEnd: '', bgImage: '', paddingTop: 50, paddingBottom: 30 },
            services: { bgColor: '', bgGradient: false, bgGradientEnd: '', bgImage: '', paddingTop: 20, paddingBottom: 60 },
            about: { bgColor: '', bgGradient: false, bgGradientEnd: '', bgImage: '', paddingTop: 80, paddingBottom: 80 },
            contact: { bgColor: '', bgGradient: false, bgGradientEnd: '', bgImage: '', paddingTop: 80, paddingBottom: 80 }
        },
        animations: {
            type: 'fade',
            speed: 'normal',
            trigger: 'scroll'
        },
        seo: {
            pageTitle: 'PRTI — Positional Release Therapy Institute',
            metaDesc: 'Positional Release Therapy Institute — Expert positional release therapy & rehabilitation services designed to help you overcome pain, prevent injuries, & regain mobility.',
        },
        customCSS: ''
    };

    // ── Preset Themes ──
    const THEMES = {
        'ocean-blue': {
            name: 'Ocean Blue',
            primary: '#25aae1', primaryDark: '#1d8ab8', primaryLight: '#a8ddf2',
            secondary: '#f5931e', secondaryLight: '#fcc97a',
            bg: '#f7f9fc', bgCard: '#eef3f8', bgCardLight: '#e8eef5',
            textDark: '#1a2b3c', textMuted: '#5a6b7c', border: '#d0dce8', white: '#ffffff'
        },
        'forest-green': {
            name: 'Forest Green',
            primary: '#22c55e', primaryDark: '#16a34a', primaryLight: '#86efac',
            secondary: '#eab308', secondaryLight: '#fde68a',
            bg: '#f0fdf4', bgCard: '#dcfce7', bgCardLight: '#d1fae5',
            textDark: '#14532d', textMuted: '#4d7c4d', border: '#bbf7d0', white: '#ffffff'
        },
        'sunset-orange': {
            name: 'Sunset',
            primary: '#f97316', primaryDark: '#ea580c', primaryLight: '#fdba74',
            secondary: '#8b5cf6', secondaryLight: '#c4b5fd',
            bg: '#fff7ed', bgCard: '#ffedd5', bgCardLight: '#fed7aa',
            textDark: '#431407', textMuted: '#9a3412', border: '#fed7aa', white: '#ffffff'
        },
        'midnight-dark': {
            name: 'Midnight',
            primary: '#818cf8', primaryDark: '#6366f1', primaryLight: '#a5b4fc',
            secondary: '#f472b6', secondaryLight: '#f9a8d4',
            bg: '#0f172a', bgCard: '#1e293b', bgCardLight: '#334155',
            textDark: '#f1f5f9', textMuted: '#94a3b8', border: '#334155', white: '#ffffff'
        },
        'clean-minimal': {
            name: 'Minimal',
            primary: '#374151', primaryDark: '#1f2937', primaryLight: '#9ca3af',
            secondary: '#6b7280', secondaryLight: '#d1d5db',
            bg: '#ffffff', bgCard: '#f9fafb', bgCardLight: '#f3f4f6',
            textDark: '#111827', textMuted: '#6b7280', border: '#e5e7eb', white: '#ffffff'
        },
        'royal-purple': {
            name: 'Royal',
            primary: '#7c3aed', primaryDark: '#6d28d9', primaryLight: '#c4b5fd',
            secondary: '#06b6d4', secondaryLight: '#67e8f9',
            bg: '#faf5ff', bgCard: '#f3e8ff', bgCardLight: '#ede9fe',
            textDark: '#1e1b4b', textMuted: '#6b21a8', border: '#e9d5ff', white: '#ffffff'
        },
        'rose-gold': {
            name: 'Rose Gold',
            primary: '#e11d48', primaryDark: '#be123c', primaryLight: '#fda4af',
            secondary: '#d97706', secondaryLight: '#fcd34d',
            bg: '#fff1f2', bgCard: '#ffe4e6', bgCardLight: '#fecdd3',
            textDark: '#1c1917', textMuted: '#78716c', border: '#fecdd3', white: '#ffffff'
        },
        'ocean-dark': {
            name: 'Deep Sea',
            primary: '#06b6d4', primaryDark: '#0891b2', primaryLight: '#67e8f9',
            secondary: '#f59e0b', secondaryLight: '#fcd34d',
            bg: '#0c1222', bgCard: '#162032', bgCardLight: '#1e2d45',
            textDark: '#e2e8f0', textMuted: '#64748b', border: '#1e3a5f', white: '#ffffff'
        }
    };

    // ── State ──
    let config = deepClone(DEFAULTS);

    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // ── LocalStorage ──
    function loadConfig() {
        try {
            const saved = localStorage.getItem('prti-settings');
            if (saved) {
                const parsed = JSON.parse(saved);
                config = mergeDeep(deepClone(DEFAULTS), parsed);
            }
        } catch (e) {
            console.warn('Settings: Could not load saved config', e);
        }
    }

    function saveConfig() {
        try {
            localStorage.setItem('prti-settings', JSON.stringify(config));
        } catch (e) {
            console.warn('Settings: Could not save config', e);
        }
    }

    function mergeDeep(target, source) {
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                if (!target[key]) target[key] = {};
                mergeDeep(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
        return target;
    }

    // ═══════════════════════════════════
    //  APPLY CONFIG TO PAGE
    // ═══════════════════════════════════

    function applyConfig() {
        applyColors();
        applyTypography();
        applySpacing();
        applyContent();
        applyNav();
        applyFooter();
        applySectionVisibility();
        applySectionStyles();
        applyAnimations();
        applySEO();
        applyCustomCSS();
    }

    function applyColors() {
        const root = document.documentElement;
        const c = config.colors;
        root.style.setProperty('--primary', c.primary);
        root.style.setProperty('--primary-dark', c.primaryDark);
        root.style.setProperty('--primary-light', c.primaryLight);
        root.style.setProperty('--secondary', c.secondary);
        root.style.setProperty('--secondary-light', c.secondaryLight);
        root.style.setProperty('--bg', c.bg);
        root.style.setProperty('--bg-card', c.bgCard);
        root.style.setProperty('--bg-card-light', c.bgCardLight);
        root.style.setProperty('--text-dark', c.textDark);
        root.style.setProperty('--text-muted', c.textMuted);
        root.style.setProperty('--border', c.border);
        root.style.setProperty('--white', c.white);
        root.style.setProperty('--green-dot', c.primary);
        root.style.setProperty('--gold-dot', c.secondary);
        root.style.setProperty('--radius-sm', (config.borderRadius * 0.5) + 'px');
        root.style.setProperty('--radius-md', config.borderRadius + 'px');
        root.style.setProperty('--radius-lg', (config.borderRadius * 1.5) + 'px');
        root.style.setProperty('--radius-xl', (config.borderRadius * 2) + 'px');
    }

    function applyTypography() {
        const root = document.documentElement;
        const t = config.typography;

        // Fonts
        if (config.font !== 'Inter') loadGoogleFont(config.font);
        if (config.headingFont !== 'Inter' && config.headingFont !== config.font) loadGoogleFont(config.headingFont);

        root.style.setProperty('--font-sans', `'${config.font}', -apple-system, sans-serif`);
        root.style.setProperty('--font-display', `'${config.headingFont}', -apple-system, sans-serif`);

        // Scales
        root.style.setProperty('--heading-scale', t.headingScale);
        root.style.setProperty('--body-size', t.bodySize + 'px');
        root.style.setProperty('--body-line-height', t.lineHeight);
        root.style.setProperty('--letter-spacing', t.letterSpacing + 'px');

        // Apply body text size
        document.body.style.fontSize = t.bodySize + 'px';
        document.body.style.lineHeight = t.lineHeight;
        document.body.style.letterSpacing = t.letterSpacing + 'px';

        // Apply heading scale to all headings
        const scale = t.headingScale;
        document.querySelectorAll('.hero-title').forEach(el => el.style.fontSize = `clamp(${Math.round(34 * scale)}px, ${(3.8 * scale).toFixed(1)}vw, ${Math.round(48 * scale)}px)`);
        document.querySelectorAll('.about-title, .contact-title').forEach(el => el.style.fontSize = `clamp(${Math.round(28 * scale)}px, ${(3 * scale).toFixed(1)}vw, ${Math.round(42 * scale)}px)`);
        document.querySelectorAll('.fashion-headline').forEach(el => el.style.fontSize = `clamp(${Math.round(26 * scale)}px, ${(2.6 * scale).toFixed(1)}vw, ${Math.round(38 * scale)}px)`);
    }

    function applySpacing() {
        const s = config.spacing;
        const root = document.documentElement;
        root.style.setProperty('--content-max-width', s.maxWidth + 'px');

        // Apply max-width to content containers
        document.querySelectorAll('.hero, .shows-fashion, .about, .contact-inner, .footer-inner').forEach(el => {
            el.style.maxWidth = s.maxWidth + 'px';
        });

        // Section gap
        if (s.sectionGap > 0) {
            document.querySelectorAll('#hero, #services, #about-section, #contact-section').forEach(el => {
                el.style.marginBottom = s.sectionGap + 'px';
            });
        } else {
            document.querySelectorAll('#hero, #services, #about-section, #contact-section').forEach(el => {
                el.style.marginBottom = '';
            });
        }

        // Card padding scale
        const cp = s.cardPadding;
        document.querySelectorAll('.contact-form-card').forEach(el => el.style.padding = `${Math.round(36 * cp)}px`);
        document.querySelectorAll('.hero-event-card').forEach(el => el.style.padding = `${Math.round(18 * cp)}px`);
    }

    function applyContent() {
        const ct = config.content;

        // Hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const lines = ct.heroTitle.split('\n');
            if (lines.length >= 3) {
                heroTitle.innerHTML = `${lines[0]}<br><em>${lines[1]}</em><br>${lines[2]}`;
            } else {
                heroTitle.innerHTML = ct.heroTitle.replace(/\n/g, '<br>');
            }
        }

        // Hero description
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.textContent = ct.heroDesc;

        // Hero button text
        const heroBtn = document.querySelector('.hero-buttons .btn-primary');
        if (heroBtn) {
            const svg = heroBtn.querySelector('svg');
            heroBtn.textContent = ct.heroBtn + ' ';
            if (svg) heroBtn.appendChild(svg);
        }

        // Hero secondary button
        const heroBtnSec = document.querySelector('.hero-buttons .btn-secondary');
        if (heroBtnSec) heroBtnSec.textContent = ct.heroBtnSecondary;

        // About title
        const aboutTitle = document.querySelector('.about-title');
        if (aboutTitle && ct.aboutTitle) {
            // Preserve <em> wrapping for italic portion
            const parts = ct.aboutTitle.split(/(\bYour Body's\b)/i);
            if (parts.length > 1) {
                aboutTitle.innerHTML = parts.map((p, i) => i === 1 ? `<em>${p}</em>` : p).join('');
            } else {
                aboutTitle.textContent = ct.aboutTitle;
            }
        }

        // About description
        const aboutDesc = document.querySelector('.about-desc');
        if (aboutDesc && ct.aboutDesc) aboutDesc.textContent = ct.aboutDesc;

        // Contact title
        const contactTitle = document.querySelector('.contact-title');
        if (contactTitle && ct.contactTitle) {
            const parts = ct.contactTitle.split(/(\bRecovery\b\??)/i);
            if (parts.length > 1) {
                contactTitle.innerHTML = parts.map((p, i) => i === 1 ? `<em>${p}</em>` : p).join('');
            } else {
                contactTitle.textContent = ct.contactTitle;
            }
        }

        // Contact subtitle
        const contactSub = document.querySelector('.contact-subtitle');
        if (contactSub && ct.contactSubtitle) contactSub.textContent = ct.contactSubtitle;

        // Contact info
        document.querySelectorAll('.info-text p a[href^="tel:"]').forEach(el => el.textContent = ct.contactPhone);
        const navPhone = document.querySelector('.nav-phone span');
        if (navPhone) navPhone.textContent = ct.contactPhone;
        document.querySelectorAll('.info-text p a[href^="mailto:"]').forEach(el => el.textContent = ct.contactEmail);

        // Contact hours
        const hoursCards = document.querySelectorAll('.info-card');
        hoursCards.forEach(card => {
            const h4 = card.querySelector('h4');
            if (h4 && h4.textContent === 'Office Hours') {
                const p = card.querySelector('.info-text p');
                if (p && ct.contactHours) p.innerHTML = ct.contactHours.replace('\n', '<br>');
            }
        });
    }

    function applyNav() {
        const nav = config.nav;

        // Brand name & tagline
        const brandName = document.querySelector('.logo-name');
        if (brandName) brandName.textContent = nav.brandName;
        const brandTagline = document.querySelector('.logo-sub');
        if (brandTagline) brandTagline.textContent = nav.brandTagline;

        // Nav links
        const navLinksEl = document.querySelectorAll('.nav-links li a');
        nav.links.forEach((label, i) => {
            if (navLinksEl[i]) navLinksEl[i].textContent = label;
        });

        // Phone visibility
        const phoneEl = document.querySelector('.nav-phone');
        if (phoneEl) phoneEl.style.display = nav.showPhone ? '' : 'none';

        // CTA button
        const ctaEl = document.querySelector('.nav-actions .btn-register');
        if (ctaEl) {
            ctaEl.style.display = nav.showCTA ? '' : 'none';
            ctaEl.textContent = nav.ctaText;
        }
    }

    function applyFooter() {
        const ft = config.footer;

        // Copyright
        const copyrightEl = document.querySelector('.footer-bottom p');
        if (copyrightEl) copyrightEl.textContent = ft.copyright;

        // Newsletter
        const newsletterEl = document.querySelector('.footer-newsletter');
        if (newsletterEl) newsletterEl.style.display = ft.showNewsletter ? '' : 'none';

        // Social links
        const socialCol = document.querySelectorAll('.footer-col');
        socialCol.forEach(col => {
            const h4 = col.querySelector('h4');
            if (h4 && h4.textContent === 'Social') {
                const links = col.querySelectorAll('a');
                if (links[0]) links[0].href = ft.socialFacebook || '#';
                if (links[1]) links[1].href = ft.socialInstagram || '#';
                if (links[2]) links[2].href = ft.socialLinkedin || '#';
            }
        });
    }

    function applySectionVisibility() {
        const map = {
            hero: '#hero',
            services: '#services',
            about: '#about-section',
            contact: '#contact-section',
            footer: '.footer',
            chatbot: '#chatbot'
        };
        for (const [key, selector] of Object.entries(map)) {
            const el = document.querySelector(selector);
            if (el) el.classList.toggle('section-hidden', !config.sections[key]);
        }
    }

    function applySectionStyles() {
        const sectionMap = {
            hero: '#hero',
            services: '#services',
            about: '#about-section',
            contact: '#contact-section'
        };
        for (const [key, selector] of Object.entries(sectionMap)) {
            const el = document.querySelector(selector);
            const style = config.sectionStyles[key];
            if (!el || !style) continue;

            // Background
            if (style.bgGradient && style.bgColor && style.bgGradientEnd) {
                el.style.background = `linear-gradient(135deg, ${style.bgColor}, ${style.bgGradientEnd})`;
            } else if (style.bgColor) {
                el.style.background = style.bgColor;
            } else {
                el.style.background = '';
            }

            // Background image
            if (style.bgImage) {
                el.style.backgroundImage = `url(${style.bgImage})`;
                el.style.backgroundSize = 'cover';
                el.style.backgroundPosition = 'center';
            }

            // Padding
            el.style.paddingTop = style.paddingTop + 'px';
            el.style.paddingBottom = style.paddingBottom + 'px';
        }
    }

    function applyAnimations() {
        const anim = config.animations;

        // Build animation class mapping
        const classMap = { fade: 'fade-in', slide: 'slide-in', scale: 'scale-in', none: '' };
        const speedMap = { fast: '0.3s', normal: '0.6s', slow: '1.2s' };

        // Set CSS variables for animation
        const root = document.documentElement;
        root.style.setProperty('--anim-duration', speedMap[anim.speed] || '0.6s');

        // Inject animation keyframes if needed
        let animStyle = document.getElementById('prti-anim-styles');
        if (!animStyle) {
            animStyle = document.createElement('style');
            animStyle.id = 'prti-anim-styles';
            document.head.appendChild(animStyle);
        }

        if (anim.type === 'none') {
            animStyle.textContent = `.fade-in, .fade-in-left, .fade-in-right { opacity: 1 !important; transform: none !important; }`;
        } else if (anim.type === 'slide') {
            animStyle.textContent = `
                .fade-in { opacity: 0; transform: translateY(40px); transition: all var(--anim-duration) ease; }
                .fade-in-left { opacity: 0; transform: translateX(-60px); transition: all var(--anim-duration) ease; }
                .fade-in-right { opacity: 0; transform: translateX(60px); transition: all var(--anim-duration) ease; }
                .fade-in.visible, .fade-in-left.visible, .fade-in-right.visible { opacity: 1; transform: none; }
            `;
        } else if (anim.type === 'scale') {
            animStyle.textContent = `
                .fade-in, .fade-in-left, .fade-in-right { opacity: 0; transform: scale(0.85); transition: all var(--anim-duration) ease; }
                .fade-in.visible, .fade-in-left.visible, .fade-in-right.visible { opacity: 1; transform: scale(1); }
            `;
        } else {
            // Default fade
            animStyle.textContent = `
                .fade-in { opacity: 0; transform: translateY(20px); transition: all var(--anim-duration) ease; }
                .fade-in-left { opacity: 0; transform: translateX(-30px); transition: all var(--anim-duration) ease; }
                .fade-in-right { opacity: 0; transform: translateX(30px); transition: all var(--anim-duration) ease; }
                .fade-in.visible, .fade-in-left.visible, .fade-in-right.visible { opacity: 1; transform: none; }
            `;
        }
    }

    function applySEO() {
        const seo = config.seo;
        if (seo.pageTitle) document.title = seo.pageTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && seo.metaDesc) metaDesc.setAttribute('content', seo.metaDesc);
    }

    function applyCustomCSS() {
        let styleEl = document.getElementById('prti-custom-css');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'prti-custom-css';
            document.head.appendChild(styleEl);
        }
        styleEl.textContent = config.customCSS || '';
    }

    function loadGoogleFont(fontName) {
        const id = 'gfont-' + fontName.replace(/\s+/g, '-').toLowerCase();
        if (document.getElementById(id)) return;
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;500;600;700;800&display=swap`;
        document.head.appendChild(link);
    }

    // ═══════════════════════════════════
    //  TOAST NOTIFICATION
    // ═══════════════════════════════════

    function showToast(message, icon = '✓') {
        let toast = document.querySelector('.settings-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'settings-toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<span>${icon}</span> ${message}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2800);
    }

    // ═══════════════════════════════════
    //  PANEL OPEN/CLOSE
    // ═══════════════════════════════════

    function openPanel() {
        document.querySelector('.settings-panel')?.classList.add('open');
        document.querySelector('.settings-overlay')?.classList.add('active');
        document.body.style.overflow = 'hidden';
        syncControlsToConfig();
    }

    function closePanel() {
        document.querySelector('.settings-panel')?.classList.remove('open');
        document.querySelector('.settings-overlay')?.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ═══════════════════════════════════
    //  SYNC CONTROLS TO CONFIG
    // ═══════════════════════════════════

    function syncControlsToConfig() {
        // Colors
        syncColor('settings-color-primary', config.colors.primary);
        syncColor('settings-color-secondary', config.colors.secondary);
        syncColor('settings-color-bg', config.colors.bg);
        syncColor('settings-color-text', config.colors.textDark);

        // Theme presets
        document.querySelectorAll('.theme-preset').forEach(el => {
            el.classList.toggle('active', el.dataset.theme === config.theme);
        });

        // Fonts
        syncValue('settings-font', config.font);
        syncValue('settings-heading-font', config.headingFont);

        // Border Radius
        syncSlider('settings-radius', config.borderRadius, 'px');

        // Typography
        syncSlider('settings-heading-scale', config.typography.headingScale, 'x');
        syncSlider('settings-body-size', config.typography.bodySize, 'px');
        syncSlider('settings-line-height', config.typography.lineHeight, '');
        syncSlider('settings-letter-spacing', config.typography.letterSpacing, 'px');

        // Spacing
        syncSlider('settings-max-width', config.spacing.maxWidth, 'px');
        syncSlider('settings-section-gap', config.spacing.sectionGap, 'px');
        syncSlider('settings-card-padding', config.spacing.cardPadding, 'x');

        // Content fields
        const contentMap = {
            'settings-hero-title': 'heroTitle', 'settings-hero-desc': 'heroDesc',
            'settings-hero-btn': 'heroBtn', 'settings-hero-btn-sec': 'heroBtnSecondary',
            'settings-about-title': 'aboutTitle', 'settings-about-desc': 'aboutDesc',
            'settings-contact-title': 'contactTitle', 'settings-contact-subtitle': 'contactSubtitle',
            'settings-contact-phone': 'contactPhone', 'settings-contact-email': 'contactEmail',
            'settings-contact-address': 'contactAddress', 'settings-contact-hours': 'contactHours'
        };
        for (const [id, key] of Object.entries(contentMap)) {
            const el = document.getElementById(id);
            if (el) el.value = config.content[key] || '';
        }

        // Nav
        syncValue('settings-nav-brand', config.nav.brandName);
        syncValue('settings-nav-tagline', config.nav.brandTagline);
        syncValue('settings-nav-cta', config.nav.ctaText);
        syncChecked('settings-nav-phone', config.nav.showPhone);
        syncChecked('settings-nav-cta-toggle', config.nav.showCTA);
        config.nav.links.forEach((label, i) => syncValue('settings-nav-link-' + i, label));

        // Footer
        syncValue('settings-footer-copyright', config.footer.copyright);
        syncChecked('settings-footer-newsletter', config.footer.showNewsletter);
        syncValue('settings-footer-facebook', config.footer.socialFacebook);
        syncValue('settings-footer-instagram', config.footer.socialInstagram);
        syncValue('settings-footer-linkedin', config.footer.socialLinkedin);

        // Section toggles
        for (const [key, visible] of Object.entries(config.sections)) {
            syncChecked('settings-section-' + key, visible);
        }

        // Section styles
        for (const [key, style] of Object.entries(config.sectionStyles)) {
            syncColor('settings-secstyle-' + key + '-bg', style.bgColor || '#ffffff');
            syncChecked('settings-secstyle-' + key + '-gradient', style.bgGradient);
            syncColor('settings-secstyle-' + key + '-gradend', style.bgGradientEnd || '#ffffff');
            syncSlider('settings-secstyle-' + key + '-pt', style.paddingTop, 'px');
            syncSlider('settings-secstyle-' + key + '-pb', style.paddingBottom, 'px');
        }

        // Animations
        syncValue('settings-anim-type', config.animations.type);
        syncValue('settings-anim-speed', config.animations.speed);

        // SEO
        syncValue('settings-seo-title', config.seo.pageTitle);
        syncValue('settings-seo-desc', config.seo.metaDesc);

        // Custom CSS
        const cssEl = document.getElementById('settings-custom-css');
        if (cssEl) cssEl.value = config.customCSS || '';
    }

    // Helper sync functions
    function syncColor(id, value) {
        const input = document.getElementById(id);
        const hex = document.getElementById(id + '-hex');
        if (input) input.value = value || '#ffffff';
        if (hex) hex.value = value || '#ffffff';
    }

    function syncValue(id, value) {
        const el = document.getElementById(id);
        if (el) el.value = value ?? '';
    }

    function syncChecked(id, value) {
        const el = document.getElementById(id);
        if (el) el.checked = !!value;
    }

    function syncSlider(id, value, suffix) {
        const slider = document.getElementById(id);
        const display = document.getElementById(id + '-value');
        if (slider) slider.value = value;
        if (display) display.textContent = (typeof value === 'number' && value % 1 !== 0 ? value.toFixed(1) : value) + suffix;
    }

    // ═══════════════════════════════════
    //  BIND EVENT LISTENERS
    // ═══════════════════════════════════

    function bindEvents() {
        // Panel trigger
        document.getElementById('settingsTrigger')?.addEventListener('click', openPanel);
        document.getElementById('settingsClose')?.addEventListener('click', closePanel);
        document.querySelector('.settings-overlay')?.addEventListener('click', closePanel);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

        // Tab switching
        document.querySelectorAll('.settings-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.settings-tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('settings-' + target)?.classList.add('active');
            });
        });

        // Collapsible groups
        document.querySelectorAll('.settings-group-title.collapsible').forEach(title => {
            title.addEventListener('click', () => {
                const group = title.parentElement;
                group.classList.toggle('collapsed');
            });
        });

        // ── Design Tab ──
        bindColorInput('settings-color-primary', 'primary');
        bindColorInput('settings-color-secondary', 'secondary');
        bindColorInput('settings-color-bg', 'bg');
        bindColorInput('settings-color-text', 'textDark');

        // Theme presets
        document.querySelectorAll('.theme-preset').forEach(btn => {
            btn.addEventListener('click', () => {
                const themeName = btn.dataset.theme;
                const theme = THEMES[themeName];
                if (!theme) return;
                config.theme = themeName;
                config.colors = { primary: theme.primary, primaryDark: theme.primaryDark, primaryLight: theme.primaryLight, secondary: theme.secondary, secondaryLight: theme.secondaryLight, bg: theme.bg, bgCard: theme.bgCard, bgCardLight: theme.bgCardLight, textDark: theme.textDark, textMuted: theme.textMuted, border: theme.border, white: theme.white };
                applyConfig();
                syncControlsToConfig();
                showToast(`${theme.name} theme applied`, '🎨');
            });
        });

        // Font selects
        bindSelect('settings-font', v => { config.font = v; applyConfig(); });
        bindSelect('settings-heading-font', v => { config.headingFont = v; applyConfig(); });

        // Border Radius
        bindSlider('settings-radius', 'px', v => { config.borderRadius = v; applyConfig(); });

        // Typography sliders
        bindSlider('settings-heading-scale', 'x', v => { config.typography.headingScale = v; applyConfig(); }, true);
        bindSlider('settings-body-size', 'px', v => { config.typography.bodySize = v; applyConfig(); });
        bindSlider('settings-line-height', '', v => { config.typography.lineHeight = v; applyConfig(); }, true);
        bindSlider('settings-letter-spacing', 'px', v => { config.typography.letterSpacing = v; applyConfig(); }, true);

        // Spacing sliders
        bindSlider('settings-max-width', 'px', v => { config.spacing.maxWidth = v; applyConfig(); });
        bindSlider('settings-section-gap', 'px', v => { config.spacing.sectionGap = v; applyConfig(); });
        bindSlider('settings-card-padding', 'x', v => { config.spacing.cardPadding = v; applyConfig(); }, true);

        // ── Content Tab ──
        const contentInputs = {
            'settings-hero-title': 'heroTitle', 'settings-hero-desc': 'heroDesc',
            'settings-hero-btn': 'heroBtn', 'settings-hero-btn-sec': 'heroBtnSecondary',
            'settings-about-title': 'aboutTitle', 'settings-about-desc': 'aboutDesc',
            'settings-contact-title': 'contactTitle', 'settings-contact-subtitle': 'contactSubtitle',
            'settings-contact-phone': 'contactPhone', 'settings-contact-email': 'contactEmail',
            'settings-contact-address': 'contactAddress', 'settings-contact-hours': 'contactHours'
        };
        for (const [id, key] of Object.entries(contentInputs)) {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => { config.content[key] = el.value; applyContent(); });
        }

        // ── Nav Editor ──
        bindInput('settings-nav-brand', v => { config.nav.brandName = v; applyNav(); });
        bindInput('settings-nav-tagline', v => { config.nav.brandTagline = v; applyNav(); });
        bindInput('settings-nav-cta', v => { config.nav.ctaText = v; applyNav(); });
        bindToggle('settings-nav-phone', v => { config.nav.showPhone = v; applyNav(); });
        bindToggle('settings-nav-cta-toggle', v => { config.nav.showCTA = v; applyNav(); });
        for (let i = 0; i < 4; i++) {
            const idx = i;
            bindInput('settings-nav-link-' + i, v => { config.nav.links[idx] = v; applyNav(); });
        }

        // ── Footer Editor ──
        bindInput('settings-footer-copyright', v => { config.footer.copyright = v; applyFooter(); });
        bindToggle('settings-footer-newsletter', v => { config.footer.showNewsletter = v; applyFooter(); });
        bindInput('settings-footer-facebook', v => { config.footer.socialFacebook = v; applyFooter(); });
        bindInput('settings-footer-instagram', v => { config.footer.socialInstagram = v; applyFooter(); });
        bindInput('settings-footer-linkedin', v => { config.footer.socialLinkedin = v; applyFooter(); });

        // ── Section Toggles ──
        ['hero', 'services', 'about', 'contact', 'footer', 'chatbot'].forEach(key => {
            bindToggle('settings-section-' + key, v => { config.sections[key] = v; applySectionVisibility(); });
        });

        // ── Per-Section Styles ──
        ['hero', 'services', 'about', 'contact'].forEach(key => {
            bindSectionColorInput('settings-secstyle-' + key + '-bg', key, 'bgColor');
            bindToggle('settings-secstyle-' + key + '-gradient', v => { config.sectionStyles[key].bgGradient = v; applySectionStyles(); });
            bindSectionColorInput('settings-secstyle-' + key + '-gradend', key, 'bgGradientEnd');
            bindSlider('settings-secstyle-' + key + '-pt', 'px', v => { config.sectionStyles[key].paddingTop = v; applySectionStyles(); });
            bindSlider('settings-secstyle-' + key + '-pb', 'px', v => { config.sectionStyles[key].paddingBottom = v; applySectionStyles(); });
        });

        // ── Animations ──
        bindSelect('settings-anim-type', v => { config.animations.type = v; applyAnimations(); });
        bindSelect('settings-anim-speed', v => { config.animations.speed = v; applyAnimations(); });

        // ── SEO ──
        bindInput('settings-seo-title', v => { config.seo.pageTitle = v; applySEO(); });
        bindInput('settings-seo-desc', v => { config.seo.metaDesc = v; applySEO(); });

        // Custom CSS
        const cssEl = document.getElementById('settings-custom-css');
        if (cssEl) cssEl.addEventListener('input', () => { config.customCSS = cssEl.value; applyCustomCSS(); });

        // Save / Reset / Export / Import
        document.getElementById('settingsSave')?.addEventListener('click', () => { saveConfig(); showToast('Settings saved!', '💾'); });
        document.getElementById('settingsReset')?.addEventListener('click', () => {
            if (!confirm('Reset all customizations to defaults?')) return;
            localStorage.removeItem('prti-settings');
            config = deepClone(DEFAULTS);
            applyConfig();
            syncControlsToConfig();
            showToast('Settings reset to defaults', '🔄');
        });
        document.getElementById('settingsExport')?.addEventListener('click', () => {
            const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'prti-settings.json'; a.click();
            showToast('Config exported!', '📦');
        });
        document.getElementById('settingsImport')?.addEventListener('click', () => document.getElementById('settingsImportFile')?.click());
        document.getElementById('settingsImportFile')?.addEventListener('change', (e) => {
            const file = e.target.files[0]; if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => { try { config = mergeDeep(deepClone(DEFAULTS), JSON.parse(ev.target.result)); applyConfig(); syncControlsToConfig(); saveConfig(); showToast('Config imported!', '📥'); } catch { showToast('Invalid config', '❌'); } };
            reader.readAsText(file); e.target.value = '';
        });
    }

    // ── Binding Helpers ──
    function bindInput(id, fn) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => fn(el.value));
    }

    function bindSelect(id, fn) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => fn(el.value));
    }

    function bindToggle(id, fn) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => fn(el.checked));
    }

    function bindSlider(id, suffix, fn, isFloat = false) {
        const slider = document.getElementById(id);
        if (!slider) return;
        slider.addEventListener('input', () => {
            const v = isFloat ? parseFloat(slider.value) : parseInt(slider.value);
            const display = document.getElementById(id + '-value');
            if (display) display.textContent = (isFloat && v % 1 !== 0 ? v.toFixed(1) : v) + suffix;
            fn(v);
        });
    }

    function bindColorInput(id, colorKey) {
        const picker = document.getElementById(id);
        const hex = document.getElementById(id + '-hex');
        if (!picker || !hex) return;
        picker.addEventListener('input', () => {
            config.colors[colorKey] = picker.value;
            hex.value = picker.value;
            if (colorKey === 'primary') { config.colors.primaryDark = darkenColor(picker.value, 15); config.colors.primaryLight = lightenColor(picker.value, 35); }
            else if (colorKey === 'secondary') { config.colors.secondaryLight = lightenColor(picker.value, 35); }
            else if (colorKey === 'bg') { config.colors.bgCard = darkenColor(picker.value, 5); config.colors.bgCardLight = darkenColor(picker.value, 8); }
            else if (colorKey === 'textDark') { config.colors.textMuted = lightenColor(picker.value, 30); }
            config.theme = 'custom';
            document.querySelectorAll('.theme-preset').forEach(el => el.classList.remove('active'));
            applyConfig();
        });
        hex.addEventListener('input', () => { if (/^#[0-9A-Fa-f]{6}$/.test(hex.value)) { picker.value = hex.value; picker.dispatchEvent(new Event('input')); } });
    }

    function bindSectionColorInput(id, sectionKey, propKey) {
        const picker = document.getElementById(id);
        const hex = document.getElementById(id + '-hex');
        if (!picker) return;
        picker.addEventListener('input', () => {
            config.sectionStyles[sectionKey][propKey] = picker.value;
            if (hex) hex.value = picker.value;
            applySectionStyles();
        });
        if (hex) hex.addEventListener('input', () => { if (/^#[0-9A-Fa-f]{6}$/.test(hex.value)) { picker.value = hex.value; picker.dispatchEvent(new Event('input')); } });
    }

    // ── Color Utility Functions ──
    function hexToHSL(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }
        return { h: h * 360, s: s * 100, l: l * 100 };
    }

    function hslToHex(h, s, l) {
        s /= 100; l /= 100;
        const k = n => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        const toHex = x => Math.round(255 * x).toString(16).padStart(2, '0');
        return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
    }

    function darkenColor(hex, amount) { const hsl = hexToHSL(hex); return hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - amount)); }
    function lightenColor(hex, amount) { const hsl = hexToHSL(hex); return hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + amount)); }

    // ── Initialize ──
    function init() { loadConfig(); applyConfig(); bindEvents(); }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }

})();
