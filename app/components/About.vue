<template>
    <section id="about" class="about section-padding">
        <div class="container about-container">
            <div class="about-image">
                <div class="image-wrapper glass-panel">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                        alt="Trainer checking phone" class="img-fluid" />
                    <div class="experience-badge">
                        <span class="years">10+</span>
                        <span class="text">Years of<br />Dedication</span>
                    </div>
                </div>
            </div>

            <div class="about-content">
                <h4 class="section-subtitle text-primary">About Me</h4>
                <h2 class="section-title">Your Coach, <br />Mentor, and Partner.</h2>
                <p class="about-text">
                    I believe that fitness is not just about building a good physique, but about building character,
                    discipline, and a mindset that wins in every aspect of life. With over a decade of experience in
                    personal training and nutrition consulting, I have the knowledge and passion to help you reach your
                    goals.
                </p>

                <ul class="features-list">
                    <li>
                        <div class="icon-box"><i class="icon-check"></i></div>
                        <div class="feature-text">
                            <h5>Certified Professional</h5>
                            <p>ISSA & NASM Certified Master Trainer</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon-box"><i class="icon-check"></i></div>
                        <div class="feature-text">
                            <h5>Personalized Approach</h5>
                            <p>Programs tailored to your body and lifestyle</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon-box"><i class="icon-check"></i></div>
                        <div class="feature-text">
                            <h5>Nutritional Guidance</h5>
                            <p>Custom meal plans that actually taste good</p>
                        </div>
                    </li>
                </ul>

                <a href="#services" class="btn mt-30">View Programs</a>
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

.mt-30 {
    margin-top: 30px;
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
}
</style>
