<script setup>
import aboutTrainerImage from '~/assets/images/about/about-trainer.jpg'
</script>

<template>
    <section id="about" class="about section-padding">
        <div class="container about-container">
            <div class="about-image">
                <div class="image-wrapper glass-panel">
                    <img :src="aboutTrainerImage"
                        alt="Trainer checking phone" class="img-fluid" />
                    <div class="experience-badge">
                        <span class="years">8+</span>
                        <span class="text">Years of<br />Results</span>
                    </div>
                </div>
            </div>

            <div class="about-content">
                <h4 class="section-subtitle text-primary">About Me</h4>
                <h2 class="section-title">Your coach for<br />stronger habits and real change.</h2>
                <p class="about-text">
                    I’m Surojit Gharami, a dedicated fitness coach who believes true transformation is built on strength,
                    discipline, and consistency. Over the years, I’ve helped people become leaner, stronger, and more
                    confident by creating training and nutrition systems that fit real life — not just the gym.
                </p>

                <ul class="features-list">
                    <li>
                        <div class="icon-box"><i class="icon-check"></i></div>
                        <div class="feature-text">
                            <h5>NSQF Level 5 Fitness Trainer</h5>
                            <p><span class="highlight">Government-recognized qualification</span> from SPEFL-SC / NCVET & Skill India with 600+ hours of advanced training in anatomy, programming, assessment, and progression.</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon-box"><i class="icon-check"></i></div>
                        <div class="feature-text">
                            <h5>Nutrition Specialist</h5>
                            <p><span class="highlight">Science-based dietary coaching</span> for sustainable fat loss, strength gain, and performance without crash diets or guesswork.</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon-box"><i class="icon-check"></i></div>
                        <div class="feature-text">
                            <h5>CPR, AED & First Aid</h5>
                            <p><span class="highlight">Safety-first training environment</span> with practical emergency response knowledge for complete client peace of mind.</p>
                        </div>
                    </li>
                </ul>

                <a href="#services" class="btn mt-30">View Programs</a>
            </div>
        </div>

        <div class="container trainer-overview">
            <div class="section-heading">
                <h4 class="section-subtitle text-primary">Trainer Introduction</h4>
                <h2 class="section-title">Built for sustainable results, not shortcuts.</h2>
            </div>

            <div class="overview-grid">
                <article class="info-card">
                    <span class="card-tag">Experience</span>
                    <h3>8+ years coaching real people</h3>
                    <p>
                        I’ve worked with beginners, busy professionals, and focused athletes to improve strength,
                        change body composition, and build long-term health habits without burnout.
                    </p>
                </article>

                <article class="info-card">
                    <span class="card-tag">Certifications</span>
                    <h3>Qualified, certified, and trusted</h3>
                    <p>
                        Government-recognized Personal Fitness Trainer (NSQF Level 5), Certified Nutrition Specialist,
                        and CPR, AED & First Aid Certified — building a foundation of safe, effective, and science-backed coaching.
                    </p>
                </article>

                <article class="info-card">
                    <span class="card-tag">Training Philosophy</span>
                    <h3>Discipline meets balance</h3>
                    <p>
                        Real fitness is about consistency, recovery, and habits that last. I combine technique,
                        progression, and accountability so you improve without overwhelming your lifestyle.
                    </p>
                </article>

                <article class="info-card story-card">
                    <span class="card-tag">Short Personal Story</span>
                    <h3>From passion to purpose</h3>
                    <p>
                        What started as a passion for fitness became a mission to help others feel stronger and more
                        confident in their own skin. Every client I coach is a reminder that transformation is possible
                        when effort meets the right guidance.
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-padding {
    padding: 100px 0;
}

.about-container {
    display: flex;
    align-items: center;
    gap: 80px;
}

.about-image {
    flex: 1;
    position: relative;
}

.image-wrapper {
    position: relative;
    border-radius: 20px;
    padding: 16px;
    display: inline-block;
}

.img-fluid {
    max-width: 100%;
    border-radius: 12px;
    display: block;
}

.experience-badge {
    position: absolute;
    bottom: -30px;
    right: -30px;
    background: var(--primary);
    padding: 30px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 15px 30px rgba(255, 59, 59, 0.4);
    border: 6px solid var(--bg-dark);
}

.experience-badge .years {
    font-family: 'Outfit', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1;
    color: #fff;
}

.experience-badge .text {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 5px;
}

.about-content {
    flex: 1;
}

.section-subtitle {
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-bottom: 12px;
    position: relative;
    display: inline-block;
}

.section-title {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 24px;
}

.about-text {
    color: var(--text-muted);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 40px;
}

.features-list {
    list-style: none;
    padding: 0;
    margin-bottom: 40px;
}

.features-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
}

.icon-box {
    width: 50px;
    height: 50px;
    background: rgba(255, 59, 59, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
    color: var(--primary);
    position: relative;
}

.icon-box::after {
    content: "✔";
    font-size: 1.2rem;
}

.feature-text h5 {
    font-size: 1.2rem;
    margin-bottom: 6px;
    color: var(--text-main);
}

.feature-text p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin: 0;
}

.trainer-overview {
    margin-top: 80px;
}

.section-heading {
    text-align: center;
    margin-bottom: 36px;
}

.overview-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
}

.info-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 22px;
    padding: 28px 24px;
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
}

.card-tag {
    display: inline-block;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 12px;
}

.info-card h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    line-height: 1.3;
}

.info-card p {
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
}

.story-card {
    background: linear-gradient(135deg, rgba(255, 59, 59, 0.08), rgba(255, 255, 255, 0.03));
}

.mt-30 {
    margin-top: 30px;
}

.highlight {
    color: var(--primary);
    font-weight: 700;
}

@media (max-width: 992px) {
    .about-container {
        flex-direction: column;
        gap: 60px;
    }

    .experience-badge {
        right: 20px;
        bottom: -20px;
        width: 120px;
        height: 120px;
        padding: 20px;
    }

    .experience-badge .years {
        font-size: 2rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .overview-grid {
        grid-template-columns: 1fr;
    }
}
</style>
