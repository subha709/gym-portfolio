<template>
    <footer id="contact" class="footer">
        <div class="container">
            <div class="footer-cta glass-panel">
                <div class="cta-content">
                    <h2>Ready to transform your life?</h2>
                    <p>Book your free consultation today. Let's build the perfect plan for you.</p>
                </div>

                <div class="cta-form-container">
                    <form @submit.prevent="sendMail" class="contact-form">
                        <div class="form-group">
                            <input type="text" v-model="form.name" placeholder="Your Name" required class="form-input">
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="form.email" placeholder="Your Email" required
                                class="form-input">
                        </div>
                        <div class="form-group">
                            <input type="tel" v-model="form.phone" placeholder="Phone Number" required
                                class="form-input">
                        </div>
                        <button type="submit" class="btn btn-submit" :disabled="isSending">
                            {{ isSending ? 'Sending...' : 'Send Request' }}
                        </button>
                    </form>
                </div>
            </div>

            <div class="footer-content">
                <div class="brand-info">
                    <div class="logo-area">
                        <div class="logo">
                            <span class="logo-text">FIT</span><span class="logo-dot">.</span>
                        </div>
                        <div class="footer-socials-inline">
                            <a href="#" aria-label="Facebook">
                                <Facebook :size="24" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <Instagram :size="24" />
                            </a>
                        </div>
                    </div>
                    <p class="mt-4 text-muted">Empowering individuals through fitness, nutrition, and healthy habits.
                        Your journey to a better you starts here.</p>
                </div>

                <div class="footer-links">
                    <h4>Social</h4>
                    <a href="#">
                        <Instagram :size="18" /> Instagram
                    </a>
                    <a href="#">
                        <Facebook :size="18" /> Facebook
                    </a>
                    <a href="#">
                        <Twitter :size="18" /> Twitter
                    </a>
                    <a href="#">
                        <Youtube :size="18" /> YouTube
                    </a>
                </div>

                <div class="footer-contact">
                    <h4>Contact</h4>
                    <p>yourmail@example.com</p>
                    <p>+1 (555) 123-4567</p>
                    <p>123 Fitness Ave, NY 10001</p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 FIT. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Success Toast Notification -->
    <div class="toast-notification" :class="{ 'toast-visible': showToast }">
        <div class="toast-content-inner">
            <span class="toast-icon">✓</span>
            <div class="toast-text">
                <strong>Success!</strong>
                <p>Email sent successfully!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'

const showToast = ref(false)

const form = reactive({
    name: '',
    email: '',
    phone: ''
})

const isSending = ref(false)

const sendMail = async () => {
    isSending.value = true

    try {
        // Send a POST request to our new Nuxt Server API
        await $fetch('/api/contact', {
            method: 'POST',
            body: form
        })

        // Show success toast
        showToast.value = true

        // Clear form inputs securely
        form.name = ''
        form.email = ''
        form.phone = ''

        // Hide toast after 4 seconds
        setTimeout(() => {
            showToast.value = false
        }, 4000)
    } catch (error) {
        console.error('Failed to send mail:', error)
        alert('There was an issue sending your message. Please check server configuration or App Password.')
    } finally {
        isSending.value = false
    }
}
</script>

<style scoped>
.footer {
    padding: 80px 0 30px;
    background-color: #050608;
    position: relative;
    overflow: hidden;
}

.footer-cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 60px;
    margin-top: -130px;
    margin-bottom: 80px;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(255, 59, 59, 0.1) 0%, rgba(21, 24, 33, 0.8) 100%);
    border: 1px solid rgba(255, 59, 59, 0.2);
    gap: 40px;
}

.cta-content {
    flex: 1;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 12px;
}

.cta-content p {
    color: var(--text-muted);
    font-size: 1.1rem;
}

.cta-form-container {
    flex: 1;
    max-width: 400px;
    width: 100%;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-input {
    width: 100%;
    padding: 14px 20px;
    border-radius: 8px;
    background: rgba(13, 15, 18, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-main);
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--primary);
}

.btn-submit {
    width: 100%;
    text-align: center;
    border-radius: 8px;
    margin-top: 5px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
}

.logo {
    font-family: 'Outfit', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -1px;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer-socials-inline {
    display: flex;
    gap: 12px;
}

.footer-socials-inline a {
    color: var(--text-main);
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
}

.footer-socials-inline a:hover {
    color: var(--primary);
}

.logo-text {
    color: var(--text-main);
}

.logo-dot {
    color: var(--primary);
}

.mt-4 {
    margin-top: 20px;
}

.text-muted {
    color: var(--text-muted);
    line-height: 1.6;
}

.footer-links h4,
.footer-contact h4 {
    font-size: 1.2rem;
    margin-bottom: 24px;
    color: var(--text-main);
}

.footer-links a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
    text-decoration: none;
    margin-bottom: 12px;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--primary);
}

.footer-contact p {
    color: var(--text-muted);
    margin-bottom: 12px;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: #555;
    font-size: 0.9rem;
}

@media (max-width: 992px) {
    .footer-cta {
        flex-direction: column;
        padding: 40px 30px;
        text-align: center;
    }

    .cta-form-container {
        max-width: 100%;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

/* Toast Notification Styles */
.toast-notification {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #111827;
    border-left: 4px solid #10b981;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    transform: translateX(150%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 1000;
}

.toast-visible {
    transform: translateX(0);
    opacity: 1;
}

.toast-content-inner {
    display: flex;
    align-items: center;
    gap: 12px;
}

.toast-icon {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.toast-text strong {
    display: block;
    font-size: 1rem;
    margin-bottom: 2px;
}

.toast-text p {
    font-size: 0.85rem;
    color: #9ca3af;
    margin: 0;
}
</style>
