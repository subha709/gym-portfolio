<template>
    <section id="gallery" class="gallery section-padding">
        <div class="container">
            <div class="section-heading">
                <h4 class="section-subtitle text-primary">Gym Gallery</h4>
                <h2 class="section-title">A training environment built to push limits.</h2>
            </div>

            <div class="gallery-scroller">
                <div class="gallery-track">
                    <div v-for="(image, index) in galleryImages" :key="`${image}-${index}`" class="gallery-card">
                        <img :src="image" :alt="`Gym training space ${index + 1}`" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import gym1 from '~/assets/images/gallery/gym-1.jpg'
import gym2 from '~/assets/images/gallery/gym-2.jpg'
import gym3 from '~/assets/images/gallery/gym-3.jpg'
import gym4 from '~/assets/images/gallery/gym-4.jpg'
import gym5 from '~/assets/images/gallery/gym-5.jpg'
import gym6 from '~/assets/images/gallery/gym-6.jpg'
import gym7 from '~/assets/images/gallery/gym-7.jpg'
import gym8 from '~/assets/images/gallery/gym-8.jpg'
import gym9 from '~/assets/images/gallery/gym-9.jpg'
import gym10 from '~/assets/images/gallery/gym-10.jpg'
import gym11 from '~/assets/images/gallery/gym-11.jpg'

const images = [
    gym1,
    gym2,
    gym3,
    gym4,
    gym5,
    gym6,
    gym7,
    gym8,
    gym9,
    gym10,
    gym11
]

const galleryImages = [...images, ...images]
</script>

<style scoped>
.section-padding {
    padding: 70px 0 90px;
}

.section-heading {
    text-align: center;
    margin-bottom: 30px;
}

.section-subtitle {
    font-size: 1rem;
    letter-spacing: 2px;
    margin-bottom: 12px;
    display: inline-block;
}

.section-title {
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.2;
    margin: 0;
}

.gallery-scroller {
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.gallery-scroller:hover .gallery-track {
    animation-play-state: paused;
}

.gallery-track {
    display: flex;
    width: max-content;
    gap: 18px;
    animation: marquee 28s linear infinite;
}

.gallery-card {
    position: relative;
    flex: 0 0 320px;
    height: 220px;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.15);
}

.gallery-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.gallery-card:hover img {
    transform: scale(1.08);
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    .gallery-card {
        flex-basis: 260px;
        height: 190px;
    }
}
</style>
