import {applicationJson} from '@/pages/admin/ProductsEdit.vue';
import {Product} from '@/types/product';
import {Ref} from 'vue';

export const getLike = (products: Ref<Array<Product>>) => async (id: number) => {
  try {
    const resp = await fetch(
      `http://localhost:8001/api/products/${id}/like/`,
      {
        method: 'POST',
        headers: {'Content-type': applicationJson}
      }
    );
    const resp2 = await resp.json();

    products.value = products.value.map(
      (p: Product) => {
        if (p.id === id) {
          p.likes += 1;
        }
        return p;
      }
    );
  } catch (e) {
    console.log('error in getLike()', e);
  }
};
