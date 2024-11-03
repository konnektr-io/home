<script setup lang="ts">
defineProps<{
    products: { name: string; description: string; status: string; url: string; image: string; }[];
    getStatusSeverity: (status: string) => "success" | "warning" | "info";
    navigateToProduct: (url: string) => void;
}>()
</script>

<template>
    <div
        id="products"
        class="bg-white dark:bg-slate-800 py-24"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Our Products</h2>
                <p class="mt-4 text-slate-500 dark:text-slate-400">
                    Comprehensive solutions for your data integration needs
                </p>
            </div>
            <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                    v-for="product in products"
                    :key="product.name"
                    class="shadow-lg"
                >
                    <template #header>
                        <div class="relative h-48">
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-4 left-4">
                                <h3 class="text-xl font-semibold text-white">{{ product.name }}</h3>
                                <Tag
                                    :value="product.status"
                                    :severity="getStatusSeverity(product.status)"
                                    class="mt-2"
                                />
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <p class="text-slate-600 dark:text-slate-300">{{ product.description }}</p>
                    </template>
                    <template #footer>
                        <Button
                            v-if="product.status === 'Beta'"
                            :label="'Try ' + product.name"
                            icon="pi pi-external-link"
                            class="p-button-primary"
                            @click="() => navigateToProduct(product.url)"
                        />
                        <Button
                            v-else
                            :label="'Learn More'"
                            icon="pi pi-info-circle"
                            class="p-button-secondary"
                            disabled
                        />
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
