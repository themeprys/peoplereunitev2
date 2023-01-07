<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <HeaderMaster />
    <FooterMaster />
    <!-- <Prompt /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderMaster from 'components/Master/HeaderMaster';
import FooterMaster from 'components/Master/FooterMaster';
// import Prompt from 'components/Prompt';

export default {
  // name: 'LayoutName',
  components: {
    HeaderMaster,
    FooterMaster,
    // Prompt
  }
}
</script>
