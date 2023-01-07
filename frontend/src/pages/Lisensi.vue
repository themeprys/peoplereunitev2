<template>
    <q-page padding>
        <div class="q-px-md">
            <h1 class="text-h5">Lisensi</h1>
            <p>peoplereunite melindungi hak cipta konten dengan menggunakan lisensi Creative Commons Atribusi-NonKomersial-TanpaTurunan 3.0 Tanpa Adaptasi. Dalam artian seluruh konten di situs peoplereunite boleh disebarluaskan dan dipublikasikan ulang di internet
                selama tidak untuk tujuan komersial, adaptasi dan plagiarisme, atau penerbitan bunga rampai tanpa seizin kontributor/ penulis/ author yang bersangkutan.<strong><br /></strong></p>
            <h1 class="text-h5">Credits</h1>
            <p>Situs peoplereunite dirancang menggunakan beberapa library open source, antara lain:</p>
            <ul>
                <li>StrapiJs. <a href="https://github.com/strapi/strapi/blob/master/LICENSE" target="_blank">Copyright (c) 2015-present Strapi Solutions SAS</a></li>
                <li>Quasar Framework. <a href="https://github.com/quasarframework/quasar#license" target="_blank">MIT License - Copyright (c) 2015-present Razvan Stoenescu</a></li>
                <li>GraphQl. <a href="https://github.com/graphql/graphql-js/blob/main/LICENSE" target="_blank">MIT License Copyright (c) GraphQL Contributors</a></li>
            </ul>
        </div>
    
    </q-page>
</template>

<script>
export default {
    name: 'LisensiPage',
    meta: {
        title: 'Lisensi - People Reunite',
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

}
</script>