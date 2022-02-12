<template>

    <div class='pt-3 pb-2 mb-3 border-bottom'>
        <div class='btn-toolbar mb-2 mb-md-0'>
            <router-link
                :to='createProductLink'
                class='btn btn-sm btn-outline-secondary'
            >
                Add
            </router-link>
        </div>
    </div>

    <div class='table-responsive'>
        <table class='table table-striped table-sm'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Likes</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='product in products' :key='product.id'>
                    <td>{{ product.id }}</td>
                    <td><img :src='product.image' height=''></td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.likes }}</td>
                    <td>
                        <div class='btn-group mr-2'>
                            <a
                                href='#'
                                class='btn btn-sm btn-outline-secondary'
                                @click='del(product.id)'
                            >
                                delete
                            </a>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script lang='ts'>
import {
  onMounted, ref, Ref,
} from 'vue';
import {Product} from '@/types/product';

export const createProductLink = '/admin/products/create';

export default {
  name: 'Products',
  setup() {
    const products: Ref<Array<Product>> = ref<Array<Product>>([]);

    onMounted(async () => {
      const response: Response = await fetch('http://localhost:8000/api/products/');
      products.value = await response.json();
    });

    const del: (id: number) => Promise<void> = async (id: number) => {
      if (window.confirm('are u sure u want to delete this product')) {
        const response: Response = await fetch(
          `http://localhost:8000/api/products/${id}`,
          {method: 'DELETE'},
        );

        products.value = products.value.filter((p: Product) => p.id !== id);
      }
    };

    return {
      products,
      del,
      createProductLink,
    };
  },
};
</script>
