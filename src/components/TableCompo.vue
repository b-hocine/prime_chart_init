<template>
    <div>
      <DataTable :value="products" :paginator="true" :rows="10" dataKey="id"
                 :rowHover="true" filterDisplay="menu" :loading="loading"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5,10,25,50]"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name" sortable filter></Column>
        <Column field="category" header="Category" sortable filter></Column>
        <Column field="price" header="Price" sortable filter>
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
  }
  
  const products = ref<Product[]>([])
  const loading = ref(true)
  
  onMounted(async () => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    products.value = [
      { id: 1, name: 'Product 1', category: 'Electronics', price: 100 },
      { id: 2, name: 'Product 2', category: 'Clothing', price: 80 },
      { id: 3, name: 'Product 3', category: 'Electronics', price: 200 },
      { id: 4, name: 'Product 4', category: 'Furniture', price: 300 },
      // ... add more products as needed
    ]
    loading.value = false
  })
  
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }
  </script>