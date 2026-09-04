<template>
    <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Transformations />
        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Services from '~/components/Services.vue'
import Gallery from '~/components/Gallery.vue'
import Transformations from '~/components/Transformations.vue'
import Footer from '~/components/Footer.vue'

useHead({
    title: 'FIT. | Professional Gym Trainer & Coach',
    meta: [
        { name: 'description', content: 'Elevate your fitness journey with personalized training, nutrition plans, and expert coaching. Book your free consultation today.' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})
</script>
