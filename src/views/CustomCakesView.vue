<script setup>
import { ref } from 'vue'

const previousCakes = [
  {
    id: 1,
    title: 'Wedding Floral Masterpiece',
    description: 'A 3-tier vanilla bean cake with hand-painted sugar flowers.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb80d?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    title: 'Character Birthday Cake',
    description: 'Custom superhero themed chocolate ganache cake.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    title: 'Modern Anniversary Cake',
    description: 'Gold-leaf and marble textured red velvet cake.',
    image: 'https://images.unsplash.com/photo-1562440494-0599623e6130?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    title: 'Baby Shower Pastel Delight',
    description: 'Soft pastel ombré buttercream cake with custom toppers.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=500&fit=crop'
  }
]

const whatsappLink = "https://wa.me/919977884479?text=Hi%20Cake%20Box%20Cafe,%20I'm%20interested%20in%20a%20customized%20cake!"
</script>

<template>
  <div class="custom-cakes-view">
    <!-- Hero Section -->
    <section class="page-hero py-5" style="background: linear-gradient(135deg, #112b27 0%, #2d6a4f 100%);">
      <div class="container py-5 text-center text-white">
        <span class="badge bg-bakery-accent mb-3 p-2 px-3 fw-bold uppercase letter-spacing-1">Custom Creations</span>
        <h1 class="display-3 fw-bold mb-3">Your Vision, Our Creation</h1>
        <p class="lead opacity-75 max-w-800 mx-auto">From weddings to birthdays, we hand-craft every cake to match your imagination. Let's make your celebration unforgettable.</p>
        
        <div class="mt-5 d-flex justify-content-center gap-3">
          <a :href="whatsappLink" target="_blank" class="btn btn-success btn-lg px-4 py-3 d-flex align-items-center gap-2">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="fs-4" />
            Chat with us on WhatsApp
          </a>
          <a href="#custom-form" class="btn btn-outline-light btn-lg px-4 py-3">
            Inquiry Form
          </a>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3" style="color: var(--bakery-dark)">Our Masterpieces</h2>
          <p class="text-muted">A glimpse into some of the custom cakes we've recently created.</p>
          <div class="mx-auto" style="width: 60px; height: 3px; background-color: var(--bakery-primary); border-radius: 2px;"></div>
        </div>

        <div class="row g-4">
          <div v-for="cake in previousCakes" :key="cake.id" class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100 gallery-card overflow-hidden rounded-4">
              <div class="position-relative overflow-hidden" style="height: 400px;">
                <img :src="cake.image" :alt="cake.title" class="w-100 h-100 object-fit-cover transition-all">
                <div class="gallery-overlay p-4 d-flex flex-column justify-content-end">
                  <h5 class="text-white fw-bold mb-1">{{ cake.title }}</h5>
                  <p class="text-white-50 small mb-0">{{ cake.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Order Form Section -->
    <section id="custom-form" class="py-5" style="background-color: #f1f7f4;">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="pe-lg-5">
              <h2 class="display-5 fw-bold mb-4">Start Your Custom Order</h2>
              <p class="text-muted fs-5 mb-5">Tell us about your event, the flavor you love, and any design ideas you have. We'll get back to you with a quote and design suggestions.</p>
              
              <div class="card border-0 bg-light p-4 rounded-4 mb-4">
                <div class="d-flex gap-3 align-items-center mb-3">
                  <div class="icon-circle bg-bakery-primary text-white">
                    <font-awesome-icon icon="whatsapp" />
                  </div>
                  <h5 class="mb-0 fw-bold">Contact Directly</h5>
                </div>
                <p class="text-muted small">Prefer a quick chat? Message us on WhatsApp for instant inquiries.</p>
                <a :href="whatsappLink" target="_blank" class="text-success fw-bold text-decoration-none">Message Now &rarr;</a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7">
            <div class="card border-0 shadow-lg rounded-5 overflow-hidden">
              <div class="card-body p-4 p-md-5">
                <form class="row g-4">
                  <div class="col-md-6">
                    <label class="form-label fw-bold small uppercase">Name</label>
                    <input type="text" class="form-control py-3" placeholder="John Doe">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small uppercase">Phone Number</label>
                    <input type="tel" class="form-control py-3" placeholder="+91 00000 00000">
                  </div>
                  <div class="col-12">
                    <label class="form-label fw-bold small uppercase">Event Date</label>
                    <input type="date" class="form-control py-3">
                  </div>
                  <div class="col-12">
                    <label class="form-label fw-bold small uppercase">Cake Type & Vision</label>
                    <textarea class="form-control" rows="4" placeholder="Describe your dream cake (flavour, decorations, theme...)"></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-bakery-primary w-100 py-3 fw-bold uppercase letter-spacing-1">Send Inquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-card:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.transition-all {
  transition: all 0.5s ease;
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
