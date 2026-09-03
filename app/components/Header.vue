<template>
    <header class="header" :class="{ 'scrolled': isScrolled }">
        <div class="container header-container">
            <div class="logo-area">
                <div class="logo">
                    <span class="logo-text">FIT</span><span class="logo-dot">.</span>
                </div>
                <div class="header-socials">
                    <a href="#" aria-label="Facebook">
                        <Facebook :size="20" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <Instagram :size="20" />
                    </a>
                </div>
            </div>
            <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
                <a href="#home" @click="closeMenu">Home</a>
                <a href="#about" @click="closeMenu">About</a>
                <a href="#services" @click="closeMenu">Programs</a>
                <a href="#contact" @click="closeMenu">Contact</a>

            </nav>
            <button class="mobile-toggle" @click="toggleMenu">
                <span class="sr-only">Toggle Menu</span>
                <div class="hamburger" :class="{ 'active': isMenuOpen }">
                    <span></span><span></span><span></span>
                </div>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Facebook, Instagram } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
    isMenuOpen.value = false
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 24px 0;
    transition: all 0.4s ease;
}

.header.scrolled {
    padding: 16px 0;
    background: rgba(9, 10, 15, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo {
    font-family: 'Outfit', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    cursor: pointer;
}

.header-socials {
    display: flex;
    gap: 12px;
}

.header-socials a {
    color: var(--text-main);
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
}

.header-socials a:hover {
    color: var(--primary);
}

.logo-text {
    color: var(--text-main);
}

.logo-dot {
    color: var(--primary);
}

.nav {
    display: flex;
    gap: 32px;
}

.nav a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: color 0.3s ease;
}

.nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
}

.nav a:hover {
    color: var(--primary);
}

.nav a:hover::after {
    width: 100%;
}

.mobile-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 101;
}


.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.hamburger {
    width: 24px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--text-main);
    transition: all 0.3s ease;
    transform-origin: left center;
}

@media (max-width: 768px) {
    .mobile-toggle {
        display: block;
    }

    .nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: var(--bg-card);
        flex-direction: column;
        padding: 100px 40px;
        transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
    }

    .nav.nav-open {
        right: 0;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg);
        width: 26px;
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg);
        width: 26px;
    }
}
</style>
