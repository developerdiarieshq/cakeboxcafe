<script setup>
import { ref } from 'vue'

const specialties = [
  {
    id: 1,
    name: 'Artisan Croissant',
    description: 'Freshly baked every morning with 100% French butter.',
    price: '₹120',
    image: '/croissant.png',
    icon: 'wheat-awn'
  },
  {
    id: 2,
    name: 'Rustic Sourdough',
    description: 'Naturally fermented for 24 hours for that perfect tang and crust.',
    price: '₹180',
    image: '/sourdough.png',
    icon: 'bread-slice'
  },
  {
    id: 3,
    name: 'Celebration Cakes',
    description: 'Custom designs for your most special moments.',
    price: 'From ₹800',
    image: '/cake.png',
    icon: 'cake-candles'
  }
]

const menuItems = [
  {
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    items: [
      { name: 'Tomato Soup - Veg', price: '₹80', veg: true },
      { name: 'Tomato Coriander Soup-Veg', price: '₹80', veg: true },
      { name: 'Lemon Coriander Soup', price: '₹80', veg: true },
      { name: 'Clean Soup', price: '₹80 / ₹100', veg: true },
      { name: 'Hot & Sour Soup', price: '₹80 / ₹100', veg: true },
      { name: 'Mancho Soup', price: '₹80 / ₹100', veg: true },
      { name: 'Sweet Corn Soup', price: '₹80 / ₹100', veg: true }
    ]
  },
  {
    category: 'Veg Starters',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    items: [
      { name: 'Mushroom Manchuria', price: '₹180', veg: true },
      { name: 'Chilli Mushroom', price: '₹180', veg: true },
      { name: 'Schezwan Mushroom', price: '₹180', veg: true },
      { name: 'Mushroom 65', price: '₹180', veg: true },
      { name: 'Butter Garlic Mushrooms', price: '₹180', veg: true },
      { name: 'Veg Manchuria', price: '₹120', veg: true },
      { name: 'Veg 65', price: '₹140', veg: true },
      { name: 'Crispy Corn', price: '₹140', veg: true }
    ]
  },
  {
    category: 'Non Veg Starters',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    items: [
      { name: 'Chicken Nuggets', price: '₹80', nonVeg: true },
      { name: 'Chicken 65', price: '₹200', nonVeg: true },
      { name: 'Pepper Chicken', price: '₹200', nonVeg: true },
      { name: 'Chicken Lollipop', price: '₹220', nonVeg: true },
      { name: 'Lemon Chicken', price: '₹220', nonVeg: true },
      { name: 'Kaju Chicken', price: '₹240', nonVeg: true }
    ]
  },
  {
    category: 'Pizzas & Burgers',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    items: [
      { name: 'Margherita Pizza', price: '₹140', veg: true },
      { name: 'Classic Italian Pizza', price: '₹160', veg: true },
      { name: 'Veg Burger', price: '₹130', veg: true },
      { name: 'Chicken Patty Burger', price: '₹160', nonVeg: true }
    ]
  },
  {
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    items: [
      { name: 'Veg Fried Rice', price: '₹120', veg: true },
      { name: 'Chicken Fried Rice', price: '₹160', nonVeg: true },
      { name: 'Veg Noodles', price: '₹120', veg: true },
      { name: 'Chicken Noodles', price: '₹160', nonVeg: true }
    ]
  },
  {
    category: 'Desserts & Shakes',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    items: [
      { name: 'Waffles', price: 'From ₹90', veg: true },
      { name: 'Ice Cream Scoops', price: 'From ₹80', veg: true },
      { name: 'Milk Shakes', price: 'From ₹100', veg: true }
    ]
  }
]

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1535262412227-85541e910204?w=1920&h=1080&fit=crop',
    slogan: 'EVERY SLICE, A LOVE STORY',
    title: 'ANNIVERSARY CAKES'
  },
  {
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&h=1080&fit=crop',
    slogan: 'MADE WITH LOVE, BAKE WITH PASSION',
    title: 'BIRTHDAY CELEBRATIONS'
  },
  {
    image: 'https://images.unsplash.com/photo-1557925923-33b27f891f88?w=1920&h=1080&fit=crop',
    slogan: 'SOPHISTICATION IN EVERY BITE',
    title: 'DESIGNER MASTERPIECES'
  }
]
</script>

<template>
  <div class="home-view">
    <!-- Hero Carousel Section -->
    <section class="hero-carousel-section">
      <div id="heroCarousel" class="carousel slide carousel-fade h-100" data-bs-ride="carousel">
        <!-- Carousel Indicators -->
        <div class="carousel-indicators mb-4 pb-3">
          <button v-for="(slide, index) in heroSlides" :key="index" type="button" 
                  data-bs-target="#heroCarousel" :data-bs-slide-to="index" 
                  :class="{ 'active': index === 0 }" aria-current="true" :aria-label="'Slide ' + (index + 1)"></button>
        </div>

        <div class="carousel-inner h-100">
          <div v-for="(slide, index) in heroSlides" :key="index" class="carousel-item h-100" :class="{ 'active': index === 0 }">
            <img :src="slide.image" class="d-block w-100 h-100 object-fit-cover" :alt="slide.title">
            <div class="hero-overlay"></div>
            
            <div class="carousel-caption hero-content h-100 d-flex align-items-center">
              <div class="container gx-lg-5">
                <div class="row w-100">
                  <!-- Text aligned to Right for typical cake-on-left layout -->
                  <div class="col-lg-7 offset-lg-5 text-center text-lg-start animate-fade-in-up">
                    <h2 class="hero-slogan mb-1 animate-fade-in-up">
                      {{ slide.slogan }}
                    </h2>
                    <h1 class="hero-title-main mb-4 animate-fade-in-up delay-1">
                      {{ slide.title }}
                    </h1>
                    <div class="d-flex justify-content-center justify-content-lg-start mt-4">
                      <button class="btn btn-hero-order-red btn-lg uppercase">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Controls Removed -->
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Specialties Section -->
    <section id="specialties" class="py-5 my-5">
      <div class="container">
        <div class="text-center mb-5">
          <span class="text-bakery-accent fw-bold text-uppercase small letter-spacing-2">Must Try</span>
          <h2 class="display-4 fw-bold mb-3" style="color: var(--bakery-dark)">Our Daily Specialties</h2>
          <div class="mx-auto" style="width: 60px; height: 3px; background-color: var(--bakery-accent); border-radius: 2px;"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div v-for="item in specialties" :key="item.id" class="col-lg-4 col-md-6">
            <div class="card card-bakery h-100 border-0">
              <div class="position-relative overflow-hidden" style="height: 280px; border-radius: 1rem;">
                <img :src="item.image" :alt="item.name" class="w-100 h-100 object-fit-cover">
                <div class="price-badge bg-white shadow-sm border text-bakery-dark">
                  {{ item.price }}
                </div>
              </div>
              <div class="card-body px-0 pt-4 text-center">
                <div class="d-flex align-items-center justify-content-center mb-2 gap-2">
                  <font-awesome-icon :icon="item.icon" class="text-bakery-accent fs-5" />
                  <h3 class="h4 mb-0 fw-bold" style="color: var(--bakery-dark)">{{ item.name }}</h3>
                </div>
                <p class="card-text text-muted mb-4 small">
                  {{ item.description }}
                </p>
                <button class="btn btn-bakery-outline w-100 py-2 border-primary-custom" style="font-size: 0.9rem;">
                  Quick Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Menu Section -->
    <section class="py-5 my-5" id="menu" style="background-color: #f1faee;">
      <div class="container">
        <div class="text-center mb-5">
          <span class="text-bakery-accent fw-bold text-uppercase small letter-spacing-2">Full Menu</span>
          <h2 class="display-4 fw-bold mb-3" style="color: var(--bakery-dark)">Explore Our Kitchen</h2>
          <div class="mx-auto" style="width: 60px; height: 3px; background-color: var(--bakery-accent); border-radius: 2px;"></div>
          <p class="text-muted mt-3">Freshly prepared with love and the finest ingredients.</p>
        </div>

        <!-- Order Platform Buttons -->
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" class="btn btn-lg px-4 py-2 border-0 d-flex align-items-center gap-2 shadow-sm" style="background-color: #fc8019; color: white; border-radius: 12px; font-size: 1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
              Swiggy
            </a>
            <a href="#" class="btn btn-lg px-4 py-2 border-0 d-flex align-items-center gap-2 shadow-sm" style="background-color: #e23744; color: white; border-radius: 12px; font-size: 1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
              Zomato
            </a>
          </div>
        </div>

        <!-- Menu Categories -->
        <div class="row g-4">
          <div v-for="(category, index) in menuItems" :key="index" class="col-lg-6">
            <div class="card h-100 border-0 shadow-sm" style="border-radius: 1.5rem; overflow: hidden; background: white;">
              <div class="position-relative" style="height: 150px;">
                <img :src="category.image" class="w-100 h-100 object-fit-cover opacity-75" :alt="category.category" />
                <div class="position-absolute inset-0 bg-dark opacity-25"></div>
                <div class="position-absolute translate-middle top-50 start-50 w-100 text-center">
                  <h3 class="text-white fw-bold text-uppercase mb-0" style="letter-spacing: 2px;">{{ category.category }}</h3>
                </div>
              </div>
              <div class="card-body p-4">
                <div class="list-group list-group-flush">
                  <div v-for="(item, itemIndex) in category.items" :key="itemIndex" class="list-group-item border-0 px-0 py-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center gap-2">
                        <span v-if="item.veg" class="dot-veg"></span>
                        <span v-if="item.nonVeg" class="dot-non-veg"></span>
                        <h6 class="mb-0 fw-semibold text-dark">{{ item.name }}</h6>
                      </div>
                      <span class="fw-bold text-bakery-primary">{{ item.price }}</span>
                    </div>
                    <p v-if="item.description" class="mb-0 text-muted x-small mt-1">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Branches Section -->
    <section id="branches" class="py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <span class="text-bakery-accent fw-bold text-uppercase small letter-spacing-2">Visit Us</span>
          <h2 class="display-4 fw-bold mb-3" style="color: var(--bakery-dark)">Our Branches</h2>
          <div class="mx-auto" style="width: 60px; height: 3px; background-color: var(--bakery-accent); border-radius: 2px;"></div>
          <p class="text-muted mt-3">We are spreading sweetness across multiple cities!</p>
        </div>

        <div class="row g-4 justify-content-center">
          <!-- Branch Cards... (same as before) -->
          <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm rounded-4 branch-card h-100">
              <div class="card-body p-4 text-center">
                <div class="branch-icon-wrap mb-4 mx-auto">
                  <font-awesome-icon icon="map-marker-alt" class="fs-4" />
                </div>
                <h4 class="fw-bold mb-2">Sathupally</h4>
                <p class="text-muted small mb-4">OPP GV MALL, MAIN ROAD, SATHUPALLY</p>
                <hr class="opacity-10 my-4">
                <div class="d-flex align-items-center justify-content-center gap-2 text-success fw-bold">
                  <font-awesome-icon icon="phone" class="small" />
                  <span>+91 9977884479</span>
                </div>
                <button class="btn btn-outline-success btn-sm mt-4 w-100 rounded-pill">View on Map</button>
              </div>
            </div>
          </div>
          <!-- Kakinada -->
          <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm rounded-4 branch-card h-100">
              <div class="card-body p-4 text-center">
                <div class="branch-icon-wrap mb-4 mx-auto">
                  <font-awesome-icon icon="map-marker-alt" class="fs-4" />
                </div>
                <h4 class="fw-bold mb-2">Kakinada</h4>
                <p class="text-muted small mb-4">Cinema Road, Main Junction, Kakinada</p>
                <hr class="opacity-10 my-4">
                <div class="d-flex align-items-center justify-content-center gap-2 text-success fw-bold">
                  <font-awesome-icon icon="phone" class="small" />
                  <span>+91 9977884480</span>
                </div>
                <button class="btn btn-outline-success btn-sm mt-4 w-100 rounded-pill">View on Map</button>
              </div>
            </div>
          </div>
          <!-- Tanuku -->
          <div class="col-lg-4 col-md-6">
            <div class="card border-0 shadow-sm rounded-4 branch-card h-100">
              <div class="card-body p-4 text-center">
                <div class="branch-icon-wrap mb-4 mx-auto">
                  <font-awesome-icon icon="map-marker-alt" class="fs-4" />
                </div>
                <h4 class="fw-bold mb-2">Tanuku</h4>
                <p class="text-muted small mb-4">RP Road, Beside Head Post Office, Tanuku</p>
                <hr class="opacity-10 my-4">
                <div class="d-flex align-items-center justify-content-center gap-2 text-success fw-bold">
                  <font-awesome-icon icon="phone" class="small" />
                  <span>+91 9977884481</span>
                </div>
                <button class="btn btn-outline-success btn-sm mt-4 w-100 rounded-pill">View on Map</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Get In Touch Section -->
    <section id="contact" class="py-5" style="background-color: #f1f7f4;">
      <div class="container py-5">
        <div class="row g-0 shadow-lg rounded-5 overflow-hidden">
          <!-- Info Column -->
          <div class="col-lg-5 bg-bakery-dark p-5 text-white d-flex flex-column justify-content-between">
            <div>
              <h2 class="display-5 fw-bold mb-4">Get In Touch</h2>
              <p class="opacity-75 mb-5 fs-5">We're here to help! Whether you have questions about our menu, special orders, or multiple branches, please reach out.</p>
              
              <div class="d-flex align-items-center mb-4 gap-3">
                <div class="icon-circle bg-white text-bakery-dark">
                  <font-awesome-icon icon="phone" />
                </div>
                <div>
                  <p class="mb-0 small opacity-75 fw-bold uppercase letter-spacing-1">Call Us</p>
                  <p class="mb-0 fw-bold fs-5 text-white">+91 9977884479</p>
                </div>
              </div>

              <div class="d-flex align-items-center mb-4 gap-3">
                <div class="icon-circle bg-white text-bakery-dark">
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <div>
                  <p class="mb-0 small opacity-75 fw-bold uppercase letter-spacing-1">Main Branch</p>
                  <p class="mb-0 fw-bold fs-5 text-white">Sathupally, Main Road</p>
                </div>
              </div>
            </div>

            <div>
              <p class="small opacity-75 fw-bold uppercase letter-spacing-1 mb-3">Connect With Us</p>
              <div class="d-flex gap-3">
                <a href="https://www.instagram.com/cakeboxeatery/" target="_blank" class="social-btn-white"><font-awesome-icon icon="camera" /></a>
                <a href="#" class="social-btn-white"><font-awesome-icon icon="star" /></a>
                <a href="#" class="social-btn-white"><font-awesome-icon icon="heart" /></a>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="col-lg-7 bg-white p-5">
            <form class="row g-4">
              <div class="col-md-6">
                <label class="form-label fw-bold text-dark small uppercase">First Name</label>
                <input type="text" class="form-control border-0 bg-light py-3 px-4" placeholder="First Name" />
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold text-dark small uppercase">Last Name</label>
                <input type="text" class="form-control border-0 bg-light py-3 px-4" placeholder="Last Name" />
              </div>
              <div class="col-12">
                <label class="form-label fw-bold text-dark small uppercase">Email Address</label>
                <input type="email" class="form-control border-0 bg-light py-3 px-4" placeholder="email@example.com" />
              </div>
              <div class="col-12">
                <label class="form-label fw-bold text-dark small uppercase">Subject</label>
                <select class="form-select border-0 bg-light py-3 px-4">
                  <option selected disabled>Choose a subject</option>
                  <option>Special Cake Order</option>
                  <option>Branch Inquiry</option>
                  <option>Catering Services</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div class="col-12">
                <label class="form-label fw-bold text-dark small uppercase">Message</label>
                <textarea class="form-control border-0 bg-light py-3 px-4" rows="4" placeholder="Tell us how we can help..."></textarea>
              </div>
              <div class="col-12 pt-3">
                <button class="btn btn-bakery-primary w-100 py-3 fw-bold uppercase letter-spacing-1">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Instagram Section -->
    <section id="instagram" class="py-5" style="background-color: #ffffff;">
      <div class="container py-5 text-center">
        <div class="mb-5">
          <h2 class="display-5 fw-bold mb-3" style="color: var(--bakery-dark)">Follow Our Journey</h2>
          <a href="https://www.instagram.com/cakeboxeatery/" target="_blank" class="text-decoration-none fs-4 fw-bold" style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
             @cakeboxeatery
          </a>
        </div>
        
        <div class="row g-3">
          <div v-for="i in 4" :key="i" class="col-6 col-md-3">
            <a href="https://www.instagram.com/cakeboxeatery/" target="_blank" class="insta-grid-item">
              <img :src="`https://images.unsplash.com/photo-${[ '1578985545062-69928b1d9587', '1513104890138-7c749659a591', '1509440159591-90679b8d039a', '1551024601-bec78aea704b' ][i-1]}?w=400&h=400&fit=crop`" class="img-fluid rounded-4 shadow-sm" alt="Instagram Post" />
              <div class="insta-overlay rounded-4">
                <font-awesome-icon icon="camera" class="text-white fs-4" />
              </div>
            </a>
          </div>
        </div>
        
        <div class="mt-5">
          <a href="https://www.instagram.com/cakeboxeatery/" target="_blank" class="btn btn-bakery-primary px-5 py-3">
            View on Instagram
          </a>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Quote -->
    <section class="quote-section py-5 text-center">
      <div class="container py-5">
         <font-awesome-icon icon="coffee" class="fs-1 mb-4 opacity-50 text-white" />
         <h2 class="display-6 fst-italic text-white lh-base opacity-90 max-w-800 mx-auto">
           "Where every cake tells a story and every bite brings a smile."
         </h2>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-carousel-section {
  height: calc(100vh - 105px);
  position: relative;
  overflow: hidden;
  background: #000;
}

.carousel-item {
  transition: transform 1.2s cubic-bezier(0.7, 0, 0.3, 1), opacity 1.2s ease-in-out;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%);
  z-index: 1;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  padding: 0;
}

.hero-slogan {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 500;
  color: #ffffff;
  font-size: 3.5rem;
  text-transform: none;
  letter-spacing: 0.5px;
  line-height: 1.1;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}

.hero-title-main {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 2.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: -5px;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}

.btn-hero-order-red {
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 14px 45px;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
}

.btn-hero-order-red:hover {
  background-color: #d40000;
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.5s;
}

.carousel-indicators [data-bs-target] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1.5px solid transparent;
  transition: all 0.3s ease;
}

.carousel-indicators .active {
  background-color: var(--bakery-secondary);
  border-color: #fff;
  transform: scale(1.2);
}

.bg-dark-50 {
  background-color: rgba(0, 0, 0, 0.2) !important;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 991px) {
  .hero-carousel-section {
    height: calc(100vh - 65px);
  }
  .display-1 {
    font-size: 3.5rem;
  }
}

.hero-description {
  max-width: 500px;
  line-height: 1.6;
}

.price-badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background-color: white;
  color: var(--bakery-primary);
  font-weight: 800;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 5;
}

.dot-veg {
  width: 10px; height: 10px; border-radius: 50%; background: #2d6a4f; display: inline-block; border: 1.5px solid #fff; box-shadow: 0 0 0 1px #2d6a4f;
}
.dot-non-veg {
  width: 10px; height: 10px; border-radius: 50%; background: #c1121f; display: inline-block; border: 1.5px solid #fff; box-shadow: 0 0 0 1px #c1121f;
}

.icon-circle {
  width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
}

.branch-icon-wrap {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: var(--bakery-secondary);
  color: var(--bakery-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.insta-grid-item {
  position: relative;
  display: block;
  overflow: hidden;
  transition: all 0.3s ease;
}

.insta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.insta-grid-item:hover .insta-overlay {
  opacity: 1;
}

.insta-grid-item:hover img {
  transform: scale(1.1);
}

.insta-grid-item img {
  transition: transform 0.5s ease;
}

.quote-section {
  background-color: var(--bakery-primary);
  color: white;
}

/* Stylish Section Dividers */
.section-divider {
  position: relative;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(17, 43, 39, 0.1) 20%, rgba(17, 43, 39, 0.1) 80%, transparent);
  margin: 0 auto;
  width: 80%;
}

.section-divider::after {
  content: '◆';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f8faf9; /* matches bakery-light-bg */
  padding: 0 15px;
  color: rgba(17, 43, 39, 0.2);
  font-size: 0.8rem;
  letter-spacing: 2px;
}
</style>
