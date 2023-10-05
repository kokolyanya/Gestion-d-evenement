<template>
  <Page>
    <Form :idLieu="idLieu" :idEvent="idEvent" />
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'Creer',
  components: {
    Form, Page
  },
  props : {
    idLieu: Number,
    idEvent: Number
  }
}
</script>

<style scoped>

</style>