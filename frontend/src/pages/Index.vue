<template>
    <div>
        <HeadlinePost v-if="$q.platform.is.mobile"/>
        <SubheadlinePost v-if="$q.platform.is.mobile"/>
        <LatestNews v-if="$q.platform.is.mobile"/>
        <LatestReviews v-if="$q.platform.is.mobile"/>
        <LatestStory v-if="$q.platform.is.mobile"/>
        <LatestEssay v-if="$q.platform.is.mobile"/>
        <div class="q-pa-md ppl_abovethefold" v-if="$q.platform.is.desktop">
            <div class="row container">
                <div class="col-md-12">
                    <HeadlinepostDesktop />
                </div>
            </div>
        </div>


        <q-page class="q-pa-md" v-if="$q.platform.is.desktop">
            <div class="row container ppl_home">
                <template v-if="$apollo.queries.naskahs.loading">
                    <div class="col-12 col-md-4">
                        <q-card flat style="height: 250px" class="q-my-md">
                            <q-skeleton height="200px" square />
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                    <q-item-label caption>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-12 col-md-4">
                        <q-card flat style="height: 250px" class="q-my-md">
                            <q-skeleton height="200px" square />
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                    <q-item-label caption>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-12 col-md-4">
                        <q-card flat style="height: 250px" class="q-my-md">
                            <q-skeleton height="200px" square />
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                    <q-item-label caption>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-12 col-md-4">
                        <q-card flat style="height: 250px" class="q-my-md">
                            <q-skeleton height="200px" square />
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                    <q-item-label caption>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-12 col-md-4">
                        <q-card flat style="height: 250px" class="q-my-md">
                            <q-skeleton height="200px" square />
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                    <q-item-label caption>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-12 col-md-4">
                        <q-card flat style="height: 250px" class="q-my-md">
                            <q-skeleton height="200px" square />
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                    <q-item-label caption>
                                        <q-skeleton type="text" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                </template>
            <div class="col-12 col-md-4" v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <q-card flat style="min-height: 350px" class="q-my-md" >
                        <q-img
                        v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null"
                            placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite"
                            :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />
                        <q-card-section>
                            <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                            <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published | tanggalPublikasi }}</div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
    </q-page>
</div>
</template>

<script>
import { date } from 'quasar'

import { desktopsubheadlineNaskahsQuery } from 'src/graphql/queries.js'
import HeadlinePost from 'components/HeadlinePost'
import SubheadlinePost from 'components/SubheadlinePost'
import LatestNews from 'components/LatestNews'
import LatestReviews from 'components/LatestReviews'
import LatestStory from 'components/LatestStory'
import LatestEssay from 'components/LatestEssay'
import HeadlinepostDesktop from 'components/HeadlinepostDesktop'

export default {
    components: {
        HeadlinePost,
        SubheadlinePost,
        LatestNews,
        LatestReviews,
        LatestStory,
        LatestEssay,
        HeadlinepostDesktop        
    },
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
            query: desktopsubheadlineNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    },
    beforeMount() {
       this.$q.loadingBar.start()        

    },
    mounted() {
       this.$q.loadingBar.stop()

    },
}
</script>
