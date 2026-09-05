<script setup>
import serviceOneImage from '~/assets/images/programs/program-1.jpg'
import serviceTwoImage from '~/assets/images/programs/program-2.jpg'
import serviceThreeImage from '~/assets/images/programs/program-3.jpg'
</script>

<template>
    <section id="services" class="services section-padding">
        <div class="container">
            <div class="text-center section-header">
                <h4 class="section-subtitle text-primary">Training Programs</h4>
                <h2 class="section-title">Choose the plan that fits your goals</h2>
                <p class="section-note">Real fitness isn’t about extreme diets or impossible gym routines. It’s about building a body that feels energetic, strong, and pain-free every day. I help you create a plan that is simple, sustainable, and designed around your real life — so you can train with confidence and keep progressing without burnout.</p>
            </div>

            <div class="services-grid">
                <div class="service-card glass-panel group">
                    <div class="card-img-top" :style="{ backgroundImage: `url(${serviceOneImage})` }"></div>
                    <div class="card-body">
                        <h3>1-on-1 Personal Training</h3>
                        <p>Focused coaching with form correction, progressive programming, and direct accountability to help you perform better and stay consistent.</p>
                        <a href="#contact" class="link-btn">Learn More <span class="arrow">→</span></a>
                    </div>
                </div>

                <div class="service-card glass-panel group">
                    <div class="card-img-top" :style="{ backgroundImage: `url(${serviceTwoImage})` }"></div>
                    <div class="card-body">
                        <h3>Online Coaching</h3>
                        <p>Remote training made practical. Includes custom plans, weekly check-ins, progress tracking, and expert support from anywhere.</p>
                        <a href="#contact" class="link-btn">Learn More <span class="arrow">→</span></a>
                    </div>
                </div>

                <div class="service-card glass-panel group">
                    <div class="card-img-top" :style="{ backgroundImage: `url(${serviceThreeImage})` }"></div>
                    <div class="card-body">
                        <h3>Nutrition Planning</h3>
                        <p>Simple, sustainable nutrition guidance designed to fuel your goals, improve energy, and support fat loss or lean muscle gains.</p>
                        <a href="#contact" class="link-btn">Learn More <span class="arrow">→</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-padding {
    padding: 100px 0;
    background-color: var(--bg-card);
}

.text-center {
    text-align: center;
}

.section-header {
    max-width: 600px;
    margin: 0 auto 60px;
}

.section-subtitle {
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-bottom: 12px;
    display: block;
}

.section-title {
    font-size: 3rem;
    margin-bottom: 20px;
}

.section-desc {
    color: var(--text-muted);
    font-size: 1.1rem;
}

.section-note {
    margin-top: 18px;
    color: var(--text-muted);
    font-size: 1.02rem;
    line-height: 1.8;
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.service-card {
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    display: flex;
    flex-direction: column;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 59, 59, 0.3);
}

.card-img-top {
    width: 100%;
    height: 240px;
    background-size: cover;
    background-position: center;
    transition: transform 0.6s ease;
}

.service-card:hover .card-img-top {
    transform: scale(1.05);
}

.card-body {
    padding: 30px;
    flex: 1;
    background: var(--glass-bg);
    position: relative;
    z-index: 2;
}

.card-body h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
}

.card-body p {
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 24px;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.link-btn .arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
}

.service-card:hover .link-btn .arrow {
    transform: translateX(5px);
}
</style>
