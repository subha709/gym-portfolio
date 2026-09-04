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
const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2ec8?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
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
