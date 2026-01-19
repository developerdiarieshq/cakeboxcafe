<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  {
    name: 'Cakes',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'Trending Cakes',
          items: ['Ribbon Cakes', 'Fresh Drops', 'Gourmet Cakes', 'Bento Cakes', 'Camera Cakes', 'Anime Cakes', 'Labubu Cakes', 'Cricket Cakes', 'Pinata Cakes', 'Drip Cakes']
        },
        {
          title: 'By Type',
          items: ['Bestsellers', 'Eggless Cakes', 'Photo Cakes', 'Cheese Cakes', 'Half Cakes', 'Heart Shaped Cakes', 'Rose Cakes', 'All Cakes'],
          bgColor: '#fff5f0'
        },
        {
          title: 'By Flavours',
          items: ['Chocolate Cakes', 'Butterscotch Cakes', 'Strawberry Cakes', 'Pineapple Cakes', 'Kit Kat Cakes', 'Black Forest Cakes', 'Red Velvet Cakes', 'Vanilla Cakes', 'Fruit Cakes', 'Blueberry Cakes']
        }
      ]
    }
  },
  {
    name: 'Theme Cakes',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'Kids Cakes',
          items: ['1st Birthday Cakes', 'Princess Cakes', 'Animal Cakes', 'Masha & The Bear Cakes', 'Cakes For Boys', 'Cakes For Girls', 'Number Cakes', 'Alphabet Cakes', 'Car And Vehicle Cakes', 'Baby Shark Cakes', 'Thomas And Friends Cakes', 'Winnie The Pooh Cakes', 'All Kids Cakes']
        },
        {
          title: 'Character Cakes',
          items: ['Spiderman Cakes', 'Unicorn Cakes', 'Barbie Cakes', 'Harry Potter Cakes', 'Avenger Cakes', 'Peppa Pig Cakes', 'Doraemon Cakes', 'Naruto Cakes', 'Cocomelon Cakes', 'Cartoon Cakes', 'Super Hero Cakes', 'Bluey Cakes', 'Bike Cakes', 'Iron-Man Cakes', 'Moana Cakes', 'Train Cakes', 'Transformers Cakes', 'Dragon Ball Cakes', 'Panda Cakes', 'Fish Cakes', 'Ben 10 Cakes', 'Demon Slayer Cakes'],
          bgColor: '#fff5f0'
        },
        {
          title: 'Grown Up Cakes',
          items: ['Makeup Cakes', 'Bride To Be Cakes', 'Wedding Cakes', 'Gym Cakes', 'Party Cakes', 'BTS Cakes', 'Police Cakes', 'Army Cakes']
        },
        {
          title: 'More Cakes',
          items: ['Jungle Theme Cakes', 'Cricket Cakes', 'Football Cakes', 'Basketball Cakes', 'Rainbow Cakes', 'Butterfly Cakes', 'Shinchan Cakes', 'Dinosaur Cakes', 'Pikachu Cakes', 'Hulk Cakes', 'Jungle Book Cakes', 'All Designer Cakes'],
          bgColor: '#fff5f0'
        }
      ]
    }
  },
  {
    name: 'By Relationship',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'For Him',
          items: ['Cakes For Friend', 'Cakes For Father', 'Cakes For Husband', 'Cakes For Brother', 'Cakes For Boyfriend']
        },
        {
          title: 'For Her',
          items: ['Cakes For Friend', 'Cakes For Mother', 'Cakes For Wife', 'Cakes For Girlfriend', 'Cakes For Sister'],
          bgColor: '#fff5f0'
        }
      ]
    }
  },
  {
    name: 'Desserts',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'All Desserts',
          items: ['Jar Cakes', 'Pastries', 'Cheese Cakes', 'Cup Cakes', 'Brownies', 'Cookies', 'Tea Cakes']
        }
      ]
    }
  },
  {
    name: 'Birthday',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'Birthday Cakes',
          items: ['1st Birthday Cakes', '2nd Birthday Cakes', '18th Birthday Cakes', '40th Birthday Cakes', '50th Birthday Cakes', 'Birthday Photo Cakes', 'Half Birthday Cakes'],
          bgColor: '#fffcf7'
        }
      ]
    }
  },
  {
    name: 'Anniversary',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'All Anniversary Cakes',
          items: ['1st Anniversary Cakes', '25th Anniversary Cakes', 'Anniversary Cakes For Parents', '5th Anniversary Cakes', 'Anniversary Photo Cakes', '10th Anniversary Cakes', '50th Anniversary Cakes'],
          bgColor: '#fffcf7'
        }
      ]
    }
  },
  {
    name: 'Occasions',
    path: '/',
    megaMenu: {
      columns: [
        {
          title: 'Special Occasions',
          items: ['Wedding Cakes', 'Engagement Cakes', 'Bachelor Party Cakes', 'Baby Shower Cakes', 'Catering Services'],
          bgColor: '#fffcf7'
        }
      ]
    }
  },
  { name: 'Customized Cakes', path: '/customized-cakes' },
  { name: 'Contact Us', path: '/', hash: '#contact' }
]

const menuOpen = ref(false)
const expandedItems = ref({})

const toggleExpand = (itemName) => {
  expandedItems.value[itemName] = !expandedItems.value[itemName]
}
</script>

<template>
  <div class="min-vh-100">
    <!-- Header Area -->
    <header class="fixed-top shadow-sm">
      <!-- Top Brand Nav -->
      <nav class="navbar navbar-light bg-white py-2 border-bottom">
        <div class="container d-flex justify-content-between align-items-center">
          <!-- Left: Brand & Mobile Toggle -->
          <div class="d-flex align-items-center">
            <button @click="menuOpen = !menuOpen" class="btn btn-link text-dark d-lg-none me-2 p-1 border-0 shadow-none">
              <font-awesome-icon icon="bars" class="fs-4" />
            </button>
            <router-link class="navbar-brand d-flex align-items-center" to="/">
              <img src="/logo.jpg" alt="Cake Box Cafe Logo" style="height: 40px; width: auto; object-fit: contain;" class="me-2" />
              <span class="fw-bold fs-5 d-none d-sm-inline" style="color: var(--bakery-dark); letter-spacing: -0.5px;">CAKE BOX CAFE</span>
            </router-link>
          </div>

          <!-- Right: Cart & Login -->
          <div class="d-flex align-items-center gap-3">
            <button v-if="route.path !== '/'" class="btn btn-link text-dark position-relative p-2 text-decoration-none shadow-none">
              <font-awesome-icon icon="shopping-cart" class="fs-5" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.6rem;">0</span>
            </button>
            <div v-if="route.path !== '/'" class="vr mx-2"></div>
            <button class="btn btn-bakery-primary py-1 px-3 d-flex align-items-center gap-2" style="font-size: 0.9rem;">
              <font-awesome-icon icon="user" />
              <span>Login/Signup</span>
            </button>
          </div>
        </div>
      </nav>

      <!-- Secondary Menu Nav (Desktop Only) -->
      <nav class="navbar navbar-expand-lg navbar-bakery bg-white py-0 border-top shadow-sm d-none d-lg-block">
        <div class="container hide-scrollbar">
          <ul class="navbar-nav d-flex flex-row gap-0 w-100 justify-content-between text-nowrap px-0">
            <li v-for="item in navItems" :key="item.name" class="nav-item has-mega-menu">
              <router-link class="nav-link menu-item px-2 py-2" :to="{ path: item.path, hash: item.hash }">
                {{ item.name }}
              </router-link>
              
              <!-- Mega Menu Dropdown -->
              <div v-if="item.megaMenu" class="mega-menu-container">
                <div class="d-flex flex-nowrap">
                  <div v-for="col in item.megaMenu.columns" :key="col.title" class="mega-menu-column py-3 px-2" :style="{ backgroundColor: col.bgColor || 'white' }">
                    <h6 class="mega-menu-title fw-bold mb-2 d-flex align-items-center gap-2">
                       <span class="sparkle">✨</span> {{ col.title }}
                    </h6>
                    <ul class="list-unstyled mega-menu-list mb-0">
                      <li v-for="subItem in col.items" :key="subItem" class="mb-1">
                        <a href="#" class="mega-menu-link text-decoration-none">{{ subItem }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer d-lg-none shadow-lg" :class="{ 'open': menuOpen }">
      <div class="p-4 border-bottom d-flex justify-content-between align-items-center bg-bakery-dark text-white">
        <span class="fw-bold">MENU</span>
        <button @click="menuOpen = false" class="btn btn-link text-white p-0 border-0 shadow-none">
          <font-awesome-icon icon="xmark" class="fs-4" />
        </button>
      </div>
      <div class="p-3">
        <div v-for="item in navItems" :key="item.name" class="mb-2 border-bottom pb-2">
          <div class="d-flex justify-content-between align-items-center" @click="item.megaMenu ? toggleExpand(item.name) : (menuOpen = false, $router.push(item.path))" style="cursor: pointer;">
            <div class="text-dark fw-bold fs-6 py-2 flex-grow-1">
              {{ item.name }}
            </div>
            <button v-if="item.megaMenu" class="btn btn-link text-dark p-2 border-0 shadow-none">
              <font-awesome-icon :icon="expandedItems[item.name] ? 'chevron-up' : 'chevron-down'" style="font-size: 0.8rem;" />
            </button>
          </div>
          
          <!-- Expandable sub-menu for mobile -->
          <div v-if="item.megaMenu" class="mobile-collapse" :class="{ 'expanded': expandedItems[item.name] }">
            <div class="ps-3 mt-1 pb-2">
              <div v-for="col in item.megaMenu.columns" :key="col.title" class="mb-3">
                <div class="small text-bakery-primary fw-bold mb-2 opacity-75 uppercase letter-spacing-1" style="font-size: 0.75rem;">{{ col.title }}</div>
                <div class="d-flex flex-column gap-1">
                  <a v-for="sub in col.items" :key="sub" href="#" class="text-dark text-decoration-none py-1 small opacity-75" @click="menuOpen = false">
                    {{ sub }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="menuOpen" class="drawer-overlay d-lg-none" @click="menuOpen = false"></div>

    <div :class="[route.path === '/' ? '' : 'pt-md-4']" class="content-wrapper"> <!-- Responsive Header offset -->
      <router-view></router-view>

      <!-- Shared Footer -->
      <footer class="py-5 text-white" style="background: #112b27;">
        <div class="container">
          <div class="row g-4 border-bottom pb-5 border-secondary">
            <div class="col-lg-4">
              <div class="d-flex align-items-center mb-4">
                <img src="/logo.jpg" alt="Logo" style="height: 40px;" class="me-2 rounded shadow-sm" />
                <span class="fw-bold fs-4">CAKE BOX CAFE</span>
              </div>
              <p class="text-white-50 small">
                Your destination for designer cakes, gourmet pizzas, and hand-crafted drinks. Proudly serving Sathupally with love.
              </p>
              <div class="d-flex gap-3 mt-4">
                <a href="https://www.instagram.com/cakeboxeatery/" target="_blank" class="social-btn-white"><font-awesome-icon icon="camera" /></a>
                <a href="https://wa.me/919977884479" target="_blank" class="social-btn-white text-success"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h6 class="fw-bold mb-4 text-uppercase letter-spacing-2">Quick Links</h6>
              <div class="row">
                <div class="col-6">
                  <ul class="list-unstyled x-small text-white-50">
                    <li class="mb-2"><router-link to="/" class="text-white-50 text-decoration-none">Home</router-link></li>
                    <li class="mb-2"><router-link to="/customized-cakes" class="text-white-50 text-decoration-none">Custom Cakes</router-link></li>
                    <li class="mb-2">Our Menu</li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="list-unstyled x-small text-white-50">
                    <li class="mb-2">About Us</li>
                    <li class="mb-2">Contact</li>
                    <li class="mb-2">Branches</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h6 class="fw-bold mb-4 text-uppercase letter-spacing-2">Our Branches</h6>
              <div class="mb-3">
                <p class="text-white-50 small mb-0 fw-bold">Sathupally (Main)</p>
                <p class="text-white-50 x-small mb-1">OPP GV MALL, Main Road</p>
                <p class="text-white small mb-0 fw-bold">+91 9977884479</p>
              </div>
              <div class="mb-3">
                <p class="text-white-50 small mb-0 fw-bold">Kakinada</p>
                <p class="text-white-50 x-small mb-1">Cinema Road, Main Junction</p>
                <p class="text-white small mb-0 fw-bold">+91 9977884480</p>
              </div>
              <div>
                <p class="text-white-50 small mb-0 fw-bold">Tanuku</p>
                <p class="text-white-50 x-small mb-1">RP Road, Beside Post Office</p>
                <p class="text-white small mb-0 fw-bold">+91 9977884481</p>
              </div>
            </div>
          </div>
          <div class="pt-4 text-center">
            <p class="text-white-50 x-small mb-0">&copy; 2026 Cake Box Cafe. Crafted with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.navbar-bakery .nav-link {
  color: #555 !important;
  transition: all 0.2s;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
}
.navbar-bakery .nav-link:hover, .router-link-active.menu-item {
  color: var(--bakery-primary) !important;
}

.navbar-bakery .nav-item.has-mega-menu {
  position: relative !important;
}

.mega-menu-container {
  position: absolute;
  top: 100%;
  left: 0; /* Align exactly with the start of the menu item */
  width: max-content;
  background: white;
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1000;
  border: 1px solid #eee;
  border-radius: 0 0 15px 15px;
  overflow: hidden;
}

.nav-item.has-mega-menu:hover .mega-menu-container {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

/* Ensure the last items don't go off screen by shifting them left */
.nav-item.has-mega-menu:nth-last-child(-n+4) .mega-menu-container {
  left: auto;
  right: 10px;
}

.mega-menu-column {
  border-right: 1px solid #f8f8f8;
}

.mega-menu-column:last-child {
  border-right: none;
}

.mega-menu-title {
  color: var(--bakery-primary);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.mega-menu-link {
  color: #444;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-block;
  padding: 1px 0;
  white-space: nowrap;
}

.mega-menu-link:hover {
  color: #ff0000;
  transform: translateX(3px);
}

.letter-spacing-2 {
  letter-spacing: 2px;
}

.x-small {
  font-size: 0.8rem;
}

/* Mobile Drawer Styles */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background: white;
  z-index: 2000;
  transition: left 0.3s ease;
  overflow-y: auto;
}

.mobile-drawer.open {
  left: 0;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1999;
  backdrop-filter: blur(2px);
}

@media (max-width: 991px) {
  .fixed-top {
    position: sticky;
  }
}

/* Responsive Content Spacing */
.content-wrapper {
  margin-top: 105px;
}

@media (max-width: 991px) {
  .content-wrapper {
    margin-top: 65px !important;
  }
}

/* Accordion Animation */
.mobile-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
}

.mobile-collapse.expanded {
  max-height: 2000px;
  transition: max-height 0.4s cubic-bezier(1, 0, 1, 0);
}

/* Scrollbar hide for secondary nav */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
