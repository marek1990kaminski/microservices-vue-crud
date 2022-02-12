<template>
    <form @submit.prevent='submit'>
        <div class='form-group'>
            <label>Title</label>
            <input v-model='title' class='form-control mb-3' name='title'/>
        </div>
        <div class='form-group'>
            <label>Image</label>
            <input v-model='image' class='form-control mb-3' name='image'/>
        </div>
        <button class='btn btn-outline-secondary'>Save</button>
    </form>
</template>

<script lang='ts'>
import {Ref, ref} from 'vue';
import {useRouter} from 'vue-router';

export default {
  name: 'ProductsCreate',
  setup() {
    const title: Ref<string> = ref<string>('');
    const image: Ref<string> = ref<string>('');

    const router = useRouter();

    const submit = async () => {
      await fetch(
        'http://localhost:8000/api/products/',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            title: title.value,
            image: image.value
          })
        }
      );

      await router.push('/admin/products');
    };
    return {
      title,
      image,
      submit,
    };
  },
};

</script>
