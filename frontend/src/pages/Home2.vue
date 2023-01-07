<template>
    <q-page class="q-pa-md">
        <div class="row container ppl_home">
            <div class="col-12 col-md-12" v-for="naskah in naskahs" :key="naskah.id">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                            <q-card flat style="height: 350px" class="q-my-md">
                                <q-img v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null" placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite" :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />
                                <!-- <q-card-section>
                                <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                                <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published | tanggalPublikasi }}</div>
                                <q-markdown>{{ naskah.MetaDescription }}</q-markdown>
                            </q-card-section> -->
                            </q-card>
                        </router-link>
                    </div>
                    <div class="col-12 col-md-7">
                        <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                            <q-card flat style="height: 350px" class="q-my-md">
                                <!-- <q-img
                            v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null"
                                placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite"
                                :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" /> -->
                                <q-card-section>
                                    <div class="text-h2">{{ naskah.Judul }}</div>
                                    <div class="text-h5 q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published | tanggalPublikasi }}</div><hr>
                                    <q-markdown class="text-h6">{{ naskah.MetaDescription }}</q-markdown>
                                </q-card-section>
                            </q-card>
                        </router-link>
                    </div>
                </div>
                <!-- <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                        <q-card flat style="height: 350px" class="q-my-md">
                            <q-img
                            v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null"
                                placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite"
                                :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />
                            <q-card-section>
                                <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                                <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published | tanggalPublikasi }}</div>
                                <q-markdown>{{ naskah.MetaDescription }}</q-markdown>
                            </q-card-section>
                        </q-card>
                    </router-link> -->
            </div>
        </div>
    </q-page>
</template>

<script>
import { date } from 'quasar'

import { headlineNaskahsQuery } from 'src/graphql/queries.js'

export default {
    name: 'PageIndex',
    meta: {
        title: 'People Reunite - Your Daily Music News Feed',
        meta: {
            description: { name: 'description', content: 'peoplereunite adalah media berita musik, review album dan profil band indie jakarta bogor depok tangerang bekasi dan sekitarnya' },
            keywords: { name: 'keywords', content: 'people reunite, jurnalisme musik, musik indie' },
            ogTitle: { property: 'og:title', content: 'People Reunite - Your Daily Music News Feed' },
            ogDescription: { property: 'og:description', content: 'peoplereunite adalah media berita musik, review album dan profil band indie jakarta bogor depok tangerang bekasi dan sekitarnya' },
            ogImage: { property: 'og:image', content: 'https://api.peoplereunite.id/uploads/Logo_0f8b82b57e.png' },
            ogUrl: { property: 'og:url', content: 'https://peoplereunite.us/' },
            ogType: { property: 'og:type', content: "website" },
            ogAppId: { property: 'fb:app_id', content: '1238781586591702' },
            twitterCard: { property: 'twitter:card', content: "summary_large_image" },
            twitterUrl: { property: 'twitter:url', content: 'https://peoplereunite.us/' },
            twitterTitle: { property: 'twitter:title', content: 'People Reunite - Your Daily Music News Feed' },
            twitterDescription: { property: 'twitter:description', content: 'peoplereunite adalah media berita musik, review album dan profil band indie jakarta bogor depok tangerang bekasi dan sekitarnya' },
            twitterImage: { property: 'twitter:image', content: 'https://api.peoplereunite.id/uploads/Logo_0f8b82b57e.png' },
        },
    },
    data() {
        return {
            naskahs: [],
        }
    },
    apollo: {
        naskahs: {
            prefetch: true,
            query: headlineNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }
}
</script>
