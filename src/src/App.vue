<script setup lang="ts">
// import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import Button from 'primevue/button'
// import Card from 'primevue/card'
// import Tag from 'primevue/tag'

/* // Navigation state
const isMenuOpen = ref(false)

// Navigation items
const navigationItems = [
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
] */

// Products data
/* const products = [
  {
    name: 'OntoManager',
    description: 'Powerful ontology management platform for structured knowledge representation',
    status: 'Beta',
    url: 'ontomanager.konnektr.io',
    image: '/product-ontomanager.jpg' // You'll need to source an appropriate image
  },
  {
    name: 'Flows',
    description: 'Low-code data integration tool leveraging ontologies for improved data quality',
    status: 'Coming Soon',
    url: '#',
    image: '/product-flows.jpg'
  },
  {
    name: 'Knowledge Graph Manager',
    description: 'Manage instances of your data models with powerful visualization tools',
    status: 'Planned',
    url: '#',
    image: '/product-knowledge-graph.jpg'
  }
] */

// Features data
/* const features = [
  {
    icon: 'pi pi-database',
    title: 'Data Quality',
    description: 'Ensure consistency and accuracy across your data landscape'
  },
  {
    icon: 'pi pi-sitemap',
    title: 'Seamless Integration',
    description: 'Connect different data sources with minimal effort'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Scalable Solutions',
    description: 'Grow your data infrastructure without compromises'
  }
]
 */
/* const navigateToProduct = (url: string) => {
  window.open(url, '_blank')
}
 */
// Methods
/* const navigateToApp = () => {
  window.open('https://ontomanager.konnektr.io', '_blank')
}
 */
/* const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Beta':
      return 'success'
    case 'Coming Soon':
      return 'warning'
    default:
      return 'info'
  }
} */

const handleContact = () => {
  // Implement contact functionality
  window.location.href = 'mailto:info@konnektr.io'
}

// SEO and Meta tags
useHead({
  title: 'Konnektr - Connecting Worlds Through Better Data Integration',
  meta: [
    {
      name: 'description',
      content: 'Konnektr provides powerful tools for data integration, ontology management, and knowledge representation.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-200 dark:bg-slate-900">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-200 text-white">
      <div class="absolute inset-0 z-0">
        <!-- <img
          src="/hero-pattern.svg"
          class="w-full h-full object-cover opacity-10"
          alt="Background pattern"
        /> -->
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 relative z-10">
        <div class="text-center">
          <h1 class="tracking-tight font-bold sm:text-5xl md:text-6xl">
            <span class="block text-[10rem] jersey-10-regular">
              <span class="text-slate-300">K</span>onnektr</span>
            <span class="block text-slate-900 text-2xl sm:text-3xl mt-3">
              Coming soon ...
            </span>
          </h1>
          <!-- <p class="mt-3 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empower your organization with seamless data integration, enhanced data quality, and connected domain
            knowledge.
          </p>
          <div class="mt-8">
            <Button
              label="Get Started"
              icon="pi pi-arrow-right"
              class="p-button-primary p-button-lg"
              @click="navigateToApp"
            />
          </div> -->
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <!-- <Products.vue
      :products="products"
      :getStatusSeverity="getStatusSeverity"
      :navigateToProduct="navigateToProduct"
    /> -->

    <!-- Features Section -->
    <!-- <div class="bg-slate-900 text-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Why Choose Konnektr?</h2>
          <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="text-center"
            >
              <div class="flex justify-center">
                <i
                  :class="feature.icon"
                  class="text-4xl text-konnektr-primary"
                ></i>
              </div>
              <h3 class="mt-4 text-xl font-semibold">{{ feature.title }}</h3>
              <p class="mt-2 text-slate-300">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- About Section -->
    <div
      id="about"
      class="bg-slate-200 dark:bg-slate-800 py-24"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">About Konnektr</h2>
            <p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
              We're building the future of data integration and knowledge management. Our mission is to help
              organizations
              connect their data worlds and unlock the full potential of their information.
            </p>
            <div class="mt-8">
              <Button
                label="Contact Us"
                severity="primary"
                @click="handleContact"
              />
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <!-- <img
              src="/about-illustration.svg"
              alt="About Konnektr"
              class="rounded-lg shadow-xl"
            /> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!--           <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul class="mt-4 space-y-4">
              <li
                v-for="product in products"
                :key="product.name"
              >
                <a
                  :href="product.url"
                  class="text-slate-300 hover:text-white"
                >
                  {{ product.name }}
                </a>
              </li>
            </ul>
          </div> -->
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul class="mt-4 space-y-4">
              <li><a
                  href="#about"
                  class="text-slate-300 hover:text-white"
                >About</a></li>
              <li><a
                  href="#contact"
                  class="text-slate-300 hover:text-white"
                  @click="handleContact"
                >Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-slate-700 pt-8 text-center">
          <p class="text-slate-400">
            © {{ new Date().getFullYear() }} Konnektr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
