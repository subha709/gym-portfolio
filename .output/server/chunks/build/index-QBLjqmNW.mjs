import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { ref, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v4-D2uokj2c.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { "scrolled": isScrolled.value }]
      }, _attrs))} data-v-8243147e><div class="container header-container" data-v-8243147e><div class="logo" data-v-8243147e><span class="logo-text" data-v-8243147e>FIT</span><span class="logo-dot" data-v-8243147e>.</span></div><nav class="${ssrRenderClass([{ "nav-open": isMenuOpen.value }, "nav"])}" data-v-8243147e><a href="#home" data-v-8243147e>Home</a><a href="#about" data-v-8243147e>About</a><a href="#services" data-v-8243147e>Programs</a><a href="#contact" data-v-8243147e>Contact</a></nav><button class="mobile-toggle" data-v-8243147e><span class="sr-only" data-v-8243147e>Toggle Menu</span><div class="${ssrRenderClass([{ "active": isMenuOpen.value }, "hamburger"])}" data-v-8243147e><span data-v-8243147e></span><span data-v-8243147e></span><span data-v-8243147e></span></div></button></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-8243147e"]]), { __name: "Header" });
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "hero"
  }, _attrs))} data-v-a0374730><div class="hero-bg" data-v-a0374730></div><div class="hero-overlay" data-v-a0374730></div><div class="container hero-content" data-v-a0374730><div class="hero-text-content animate-fade-in-up" data-v-a0374730><h4 class="hero-subtitle text-primary" data-v-a0374730>Unleash Your Potential</h4><h1 class="hero-title" data-v-a0374730>Push Past <br data-v-a0374730>Your <span class="text-primary" data-v-a0374730>Limits</span></h1><p class="hero-desc" data-v-a0374730> Professional personal training to help you build muscle, lose fat, and achieve the body you&#39;ve always wanted. Expert guidance every step of the way. </p><div class="hero-actions" data-v-a0374730><a href="#services" class="btn" data-v-a0374730>Start Your Journey</a><a href="#contact" class="btn-outline" data-v-a0374730>Free Consultation</a></div></div><div class="hero-image glass-panel animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-a0374730><div class="stats-box pos-top" data-v-a0374730><span class="stat-num" data-v-a0374730>500+</span><span class="stat-text" data-v-a0374730>Clients Transformed</span></div><div class="stats-box pos-bottom" data-v-a0374730><span class="stat-num" data-v-a0374730>10+</span><span class="stat-text" data-v-a0374730>Years Experience</span></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a0374730"]]), { __name: "Hero" });
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about section-padding"
  }, _attrs))} data-v-ff82b512><div class="container about-container" data-v-ff82b512><div class="about-image" data-v-ff82b512><div class="image-wrapper glass-panel" data-v-ff82b512><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" alt="Trainer checking phone" class="img-fluid" data-v-ff82b512><div class="experience-badge" data-v-ff82b512><span class="years" data-v-ff82b512>10+</span><span class="text" data-v-ff82b512>Years of<br data-v-ff82b512>Dedication</span></div></div></div><div class="about-content" data-v-ff82b512><h4 class="section-subtitle text-primary" data-v-ff82b512>About Me</h4><h2 class="section-title" data-v-ff82b512>Your Coach, <br data-v-ff82b512>Mentor, and Partner.</h2><p class="about-text" data-v-ff82b512> I believe that fitness is not just about building a good physique, but about building character, discipline, and a mindset that wins in every aspect of life. With over a decade of experience in personal training and nutrition consulting, I have the knowledge and passion to help you reach your goals. </p><ul class="features-list" data-v-ff82b512><li data-v-ff82b512><div class="icon-box" data-v-ff82b512><i class="icon-check" data-v-ff82b512></i></div><div class="feature-text" data-v-ff82b512><h5 data-v-ff82b512>Certified Professional</h5><p data-v-ff82b512>ISSA &amp; NASM Certified Master Trainer</p></div></li><li data-v-ff82b512><div class="icon-box" data-v-ff82b512><i class="icon-check" data-v-ff82b512></i></div><div class="feature-text" data-v-ff82b512><h5 data-v-ff82b512>Personalized Approach</h5><p data-v-ff82b512>Programs tailored to your body and lifestyle</p></div></li><li data-v-ff82b512><div class="icon-box" data-v-ff82b512><i class="icon-check" data-v-ff82b512></i></div><div class="feature-text" data-v-ff82b512><h5 data-v-ff82b512>Nutritional Guidance</h5><p data-v-ff82b512>Custom meal plans that actually taste good</p></div></li></ul><a href="#services" class="btn mt-30" data-v-ff82b512>View Programs</a></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const About = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ff82b512"]]), { __name: "About" });
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "services",
    class: "services section-padding"
  }, _attrs))} data-v-97f5c25f><div class="container" data-v-97f5c25f><div class="text-center section-header" data-v-97f5c25f><h4 class="section-subtitle text-primary" data-v-97f5c25f>Training Programs</h4><h2 class="section-title" data-v-97f5c25f>Choose Your Path</h2><p class="section-desc" data-v-97f5c25f>Tailored programs to suit your specific goals, fitness level, and lifestyle.</p></div><div class="services-grid" data-v-97f5c25f><div class="service-card glass-panel group" data-v-97f5c25f><div class="card-img-top" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop')" })}" data-v-97f5c25f></div><div class="card-body" data-v-97f5c25f><h3 data-v-97f5c25f>1-on-1 Personal Training</h3><p data-v-97f5c25f>Direct interaction, real-time posture correction, and full attention to your specific needs. </p><a href="#contact" class="link-btn" data-v-97f5c25f>Learn More <span class="arrow" data-v-97f5c25f>→</span></a></div></div><div class="service-card glass-panel group" data-v-97f5c25f><div class="card-img-top" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop')" })}" data-v-97f5c25f></div><div class="card-body" data-v-97f5c25f><h3 data-v-97f5c25f>Online Coaching</h3><p data-v-97f5c25f>Access your training plan from anywhere. Includes weekly check-ins and video technique review.</p><a href="#contact" class="link-btn" data-v-97f5c25f>Learn More <span class="arrow" data-v-97f5c25f>→</span></a></div></div><div class="service-card glass-panel group" data-v-97f5c25f><div class="card-img-top" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop')" })}" data-v-97f5c25f></div><div class="card-body" data-v-97f5c25f><h3 data-v-97f5c25f>Nutrition Planning</h3><p data-v-97f5c25f>Stop guessing. Get a calculated, easy-to-follow meal plan that fuels your body for results. </p><a href="#contact" class="link-btn" data-v-97f5c25f>Learn More <span class="arrow" data-v-97f5c25f>→</span></a></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-97f5c25f"]]), { __name: "Services" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "footer"
  }, _attrs))} data-v-5e170731><div class="container" data-v-5e170731><div class="footer-cta glass-panel" data-v-5e170731><div class="cta-content" data-v-5e170731><h2 data-v-5e170731>Ready to transform your life?</h2><p data-v-5e170731>Book your free consultation today and let&#39;s build the perfect plan for you.</p></div><div class="cta-action" data-v-5e170731><a href="mailto:trainer@fit.com" class="btn" data-v-5e170731>Book Free Consultation</a></div></div><div class="footer-content" data-v-5e170731><div class="brand-info" data-v-5e170731><div class="logo" data-v-5e170731><span class="logo-text" data-v-5e170731>FIT</span><span class="logo-dot" data-v-5e170731>.</span></div><p class="mt-4 text-muted" data-v-5e170731>Empowering individuals through fitness, nutrition, and healthy habits. Your journey to a better you starts here.</p></div><div class="footer-links" data-v-5e170731><h4 data-v-5e170731>Social</h4><a href="#" data-v-5e170731>Instagram</a><a href="#" data-v-5e170731>Facebook</a><a href="#" data-v-5e170731>Twitter</a><a href="#" data-v-5e170731>YouTube</a></div><div class="footer-contact" data-v-5e170731><h4 data-v-5e170731>Contact</h4><p data-v-5e170731>hello@fit.com</p><p data-v-5e170731>+1 (555) 123-4567</p><p data-v-5e170731>123 Fitness Ave, NY 10001</p></div></div><div class="footer-bottom" data-v-5e170731><p data-v-5e170731>© 2026 FIT. All rights reserved.</p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5e170731"]]), { __name: "Footer" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "FIT. | Professional Gym Trainer & Coach",
      meta: [
        { name: "description", content: "Elevate your fitness journey with personalized training, nutrition plans, and expert coaching. Book your free consultation today." }
      ],
      htmlAttrs: {
        lang: "en"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(About, null, null, _parent));
      _push(ssrRenderComponent(Services, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-QBLjqmNW.mjs.map
