<script setup>
import { onMounted } from 'vue'
import transformation1Before from '~/assets/images/transformations/transformation-1-before.jpg'
import transformation1After from '~/assets/images/transformations/transformation-1-after.jpg'
import transformation2Before from '~/assets/images/transformations/transformation-2-before.jpg'
import transformation2After from '~/assets/images/transformations/transformation-2-after.jpg'
import transformation3Before from '~/assets/images/transformations/transformation-3-before.jpg'
import transformation3After from '~/assets/images/transformations/transformation-3-after.jpg'

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                // Remove the transition delay after animation completes so hover effects aren't delayed
                setTimeout(() => {
                    entry.target.style.transitionDelay = '0s'
                }, 800)
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.15 })

    const cards = document.querySelectorAll('.stagger-card')
    cards.forEach((card, index) => {
        // Stagger the delay based on the index (0s, 0.2s, 0.4s)
        card.style.transitionDelay = `${index * 0.2}s`
        observer.observe(card)
    })
})
</script>

<template>
    <section id="transformations" class="transformations section-padding">
        <div class="container">
            <div class="text-center section-header">
                <h4 class="section-subtitle text-primary">Success Stories</h4>
                <h2 class="section-title">Client Transformations</h2>
                <p class="section-desc">Real people, real results. See what happens when dedication meets expert
                    guidance.</p>
            </div>

            <div class="transformations-grid">
                <!-- Transformation 1 -->
                <div class="transform-card glass-panel group stagger-card">
                    <div class="image-comparison">
                        <div class="before-img" :style="{ backgroundImage: `url(${transformation1Before})` }">
                            <span class="img-badge badge-before">Before</span>
                        </div>
                        <div class="after-img" :style="{ backgroundImage: `url(${transformation1After})` }">
                            <span class="img-badge badge-after">After</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3>Michael T.</h3>
                        <p class="results">Lost 35 lbs & Gained Muscle</p>
                        <p class="quote">"I started with no confidence. The 1-on-1 coaching structure gave me the exact
                            push I needed. My energy is through the roof."</p>
                    </div>
                </div>

                <!-- Transformation 2 -->
                <div class="transform-card glass-panel group stagger-card">
                    <div class="image-comparison">
                        <div class="before-img" :style="{ backgroundImage: `url(${transformation2Before})` }">
                            <span class="img-badge badge-before">Before</span>
                        </div>
                        <div class="after-img" :style="{ backgroundImage: `url(${transformation2After})` }">
                            <span class="img-badge badge-after">After</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3>Sarah W.</h3>
                        <p class="results">Dropped 15% Body Fat</p>
                        <p class="quote">"The customized nutrition plan was a game changer. I'm lifting heavier than I
                            ever thought possible without feeling restricted."</p>
                    </div>
                </div>

                <!-- Transformation 3 -->
                <div class="transform-card glass-panel group stagger-card">
                    <div class="image-comparison">
                        <div class="before-img" :style="{ backgroundImage: `url(${transformation3Before})` }">
                            <span class="img-badge badge-before">Before</span>
                        </div>
                        <div class="after-img" :style="{ backgroundImage: `url(${transformation3After})` }">
                            <span class="img-badge badge-after">After</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3>David L.</h3>
                        <p class="results">Gained 12 lbs Lean Mass</p>
                        <p class="quote">"I struggled to gain weight my whole life. The online coaching and consistent
                            check-ins held me accountable. Best investment."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.transformations {
    padding: 100px 0;
    position: relative;
    /* Optional: alternate row background color if desired, currently it uses body dark theme */
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

.transformations-grid {
    display: grid;
    /* Implemented perfect responsiveness with min(100%, 350px) */
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: 30px;
}

.transform-card {
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--glass-border);
}

.stagger-card {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.4s ease, border-color 0.4s ease;
}

.stagger-card.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.transform-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 59, 59, 0.3);
}

.image-comparison {
    display: flex;
    height: 280px;
    width: 100%;
    position: relative;
    overflow: hidden;
    /* Prevent zoom overflow */
}

.before-img,
.after-img {
    flex: 1;
    background-size: cover;
    background-position: center top;
    position: relative;
    transition: transform 0.5s ease;
}

.transform-card:hover .before-img,
.transform-card:hover .after-img {
    transform: scale(1.05);
    /* Slight zoom on hover for premium feel */
}

/* Dividing line down the middle */
.image-comparison::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: var(--bg-dark);
    /* Matches dark theme body */
    z-index: 2;
    transform: translateX(-50%);
}

.img-badge {
    position: absolute;
    bottom: 16px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 20px;
    z-index: 10;
    letter-spacing: 1.5px;
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.badge-before {
    left: 12px;
    color: var(--text-muted);
}

.badge-after {
    right: 12px;
    color: var(--primary);
    /* Pops with primary color */
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
    margin-bottom: 8px;
    color: var(--text-main);
}

.results {
    color: var(--primary);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 20px;
    display: inline-block;
    padding: 4px 12px;
    background: rgba(255, 59, 59, 0.1);
    border-radius: 4px;
}

.quote {
    color: var(--text-muted);
    line-height: 1.6;
    font-style: italic;
    position: relative;
    padding-left: 20px;
}

.quote::before {
    content: '"';
    font-size: 3rem;
    color: rgba(255, 59, 59, 0.2);
    position: absolute;
    top: -12px;
    left: -8px;
    font-family: Georgia, serif;
}

@media (max-width: 768px) {
    .image-comparison {
        height: 240px;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .section-padding {
        padding: 70px 0;
    }
}
</style>
