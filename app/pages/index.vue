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
    title: 'Surojit Gharami | Gym Trainer & Performance Coach',
    meta: [
        { name: 'description', content: 'Personal training, fat loss coaching, strength programs, and nutrition support from Surojit Gharami.' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})
</script>
