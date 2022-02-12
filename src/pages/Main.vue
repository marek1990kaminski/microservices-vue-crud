<template>
    <main>

        <div class='album py-5 bg-light'>
            <div class='container'>

                <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

                    <div class='col' v-for='product in products' :key='product.id'>
                        <div class='card shadow-sm'>

                            <img :src='product.image' height='180'/>

                            <div class='card-body'>
                                <p class='card-text'>{{ product.title }}</p>
                                <div class='d-flex justify-content-between align-items-center'>
                                    <div class='btn-group'>
                                        <button
                                            class='btn btn-sm btn-outline-secondary'
                                            @click='like(product.id)'
                                        >
                                            Like
                                        </button>

                                    </div>
                                    <small class='text-muted'>{{ product.likes }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<script lang='ts'>
import {onMounted, ref, Ref} from 'vue';
import {Product} from '@/types/product';
import {applicationJson} from '@/pages/admin/ProductsEdit.vue';

export default {
  name: 'Main',
  setup() {
    const products: Ref<Array<Product>> = ref<Array<Product>>([]);

    onMounted(async () => {
      const response = await fetch('http://localhost:8000/api/products');

      products.value = await response.json();
    });

    const like = async (id: number) => {
      try {
        const resp = await fetch(
          `http://localhost:8001/api/products/${id}/like/`,
          {
            method: 'POST',
            headers: {'Content-type': applicationJson}
          }
        );
        const resp2 = await resp.json();

        products.value.forEach(
          (p: Product) => {
            if (p.id === id) {
              // eslint-disable-next-line no-param-reassign, no-plusplus
              p.likes++;
            }
          }
        );
      } catch (e) {
        console.log('lol, no this time');
      }
    };

    return {
      products,
      like
    };
  }
};
</script>

<style scoped>

</style>
