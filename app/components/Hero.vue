<script setup lang="ts">
import heroBgImage from '~/assets/images/hero/hero-bg.jpg'
import trainerImage from '~/assets/images/hero/hero-card.jpg'
</script>

<template>
    <section id="home" class="hero">
        <div class="hero-bg" :style="{ backgroundImage: `url(${heroBgImage})` }"></div>
        <div class="hero-overlay"></div>

        <div class="container hero-content">
            <div class="hero-text-content animate-fade-in-up">
                <h4 class="hero-subtitle text-primary">Elite Strength Coach</h4>
                <h1 class="hero-title">Train Harder.<br /> Look Stronger.<br /><span class="text-primary">Live Better.</span></h1>
                <p class="hero-desc">I’m Surojit Gharami, a personal trainer and performance coach helping busy professionals, beginners, and athletes build strength, lose fat, and feel confident through smarter training and sustainable habits.</p>
                <div class="hero-actions">
                    <a href="#services" class="btn">Start Your Journey</a>
                    <a href="#contact" class="btn-outline">Free Consultation</a>
                </div>
            </div>

            <div class="hero-image glass-panel animate-fade-in-up" :style="{ backgroundImage: `url(${trainerImage})` }" style="animation-delay: 0.2s">
                <div class="stats-box pos-top">
                    <span class="stat-num">500+</span>
                    <span class="stat-text">Clients Transformed</span>
                </div>
                <div class="stats-box pos-bottom">
                    <span class="stat-num">8+</span>
                    <span class="stat-text">Years of Coaching</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 80px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -2;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(9, 10, 15, 0.95) 0%, rgba(9, 10, 15, 0.7) 50%, rgba(9, 10, 15, 0.4) 100%);
    z-index: -1;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 60px;
}

.hero-text-content {
    flex: 1;
    max-width: 600px;
}

.hero-subtitle {
    font-size: 1.2rem;
    letter-spacing: 3px;
    margin-bottom: 16px;
    display: block;
}

.hero-title {
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: 24px;
}

.hero-desc {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin-bottom: 40px;
}

.hero-actions {
    display: flex;
    gap: 20px;
}

.btn-outline {
    display: inline-block;
    padding: 12px 26px;
    background: transparent;
    color: var(--text-main);
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 2px solid var(--text-main);
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-outline:hover {
    background: var(--text-main);
    color: var(--bg-dark);
}

.hero-image {
    position: relative;
    width: 450px;
    height: 600px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
}

.stats-box {
    position: absolute;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    padding: 16px 24px;
    border-radius: 12px;
    border: 1px solid var(--primary);
    display: flex;
    flex-direction: column;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.pos-top {
    top: 40px;
    left: -40px;
}

.pos-bottom {
    bottom: 40px;
    right: -40px;
}

.stat-num {
    font-family: 'Outfit', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--primary);
    line-height: 1;
}

.stat-text {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-top: 4px;
}

@media (max-width: 992px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
    }

    .hero-overlay {
        background: linear-gradient(180deg, rgba(9, 10, 15, 0.8) 0%, rgba(9, 10, 15, 0.95) 100%);
    }

    .hero-text-content {
        margin-top: 60px;
    }

    .hero-title {
        font-size: 4rem;
    }

    .hero-actions {
        justify-content: center;
    }

    .hero-image {
        width: 320px;
        height: 400px;
        margin-top: 40px;
    }

    .pos-top {
        left: -10px;
        top: -10px;
    }

    .pos-bottom {
        right: -10px;
        bottom: -10px;
    }
}
</style>
