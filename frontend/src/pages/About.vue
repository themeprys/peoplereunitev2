<template>
  <q-page padding>
    <div class="q-px-md" style="max-width:1200px;margin:0 auto 0">
      <h1 class="text-h5">About</h1>
      <p>peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia.</p>
      <p>Digagas pertama kali pada 2017 sebagai hashtag campaign di sosial media, peoplereunite berkembang menjadi wadah berkarya sejumlah penulis, musisi dan pelaku seni di masa pandemi 2019 - 2020.</p>  
      <p>Di 2021, website peoplereunite.us dirilis sebagai wadah komunikasi yang lebih luas bagi penikmat seni pada umumnya.</p>
      <h1 class="text-h5">Kontribusi</h1>
      <p>Redaksi peoplereunite menerima sumbangan tulisan dari kontributor seputar tema musik, sastra dan seni budaya dalam format naskah berita, review, esai, puisi dan cerita pendek untuk dikurasi dan dimuat di situs ini dengan mengirimkan:</p>
      <ul>
        <li>Naskah diketik rapi dalam format doc</li>
        <li>Foto pendukung bila ada</li>
        <li>Nama Lengkap dan bio singkat</li>                        
      </ul>
      <p>Kirimkan naskah via WhatsApp di +6281290525383 atau email ke peoplereunite.us@gmail.com. Untuk saat ini kami tidak menyediakan honorarium bagi tulisan yang dimuat.</p>
      <h1 class="text-h5">Kontak Kami</h1>
      <p>Untuk keperluan korespondensi, donasi, kerjasama dan lain-lain, sila hubungi kami via WhatsApp di +6281290525383 atau klik button di bawah ini.</p>
          <q-btn color="green" icon="fab fa-whatsapp" class="full-width" label="Chat via WhatsApp" type="a" href="https://wa.me/6281290525383"/>
      <h1 class="text-h5">Alamat Surat</h1>
      <p>Jl Kalibata Utara II No 14B, Mampang Prapatan, Kota Jakarta Selatan, DKI Jakarta, 12470</p>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'AboutPage',
    meta: {
        title: 'About - People Reunite',
            meta: {
                description: { name: 'description', content: 'peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia' },
                keywords: { name: 'keywords', content: 'people reunite, jurnalisme musik, musik independen' },
                ogTitle: {property: 'og:title', content: 'People Reunite Official Site'},
                ogDescription: {property: 'og:description', content: 'peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia'},
                ogImage: {property: 'og:image', content: 'https://api.peoplereunite.id/uploads/Logo_0f8b82b57e.png'},                
                ogUrl: {property: 'og:url', content: 'https://peoplereunite.us/'},
                ogType: {property: 'og:type', content:"website"},
                ogAppId: {property: 'fb:app_id', content: '1238781586591702'},
                twitterCard: {property: 'twitter:card', content:"summary_large_image"},
                twitterUrl: {property: 'twitter:url', content: 'https://peoplereunite.us/'},
                twitterTitle: {property: 'twitter:title', content: 'People Reunite Official Site'},
                twitterDescription: {property: 'twitter:description', content: 'peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia'},
                twitterImage: {property: 'twitter:image', content: 'https://api.peoplereunite.id/uploads/Logo_0f8b82b57e.png'},
            },        

    },
    beforeMount() {
       this.$q.loadingBar.start()        

    },
    mounted() {
       this.$q.loadingBar.stop()

    },    

}
</script>