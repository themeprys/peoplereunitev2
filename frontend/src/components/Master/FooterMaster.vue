<template>
    <div>
        <q-footer reveal v-if="$q.platform.is.desktop" class="q-pa-md">
            <div class="text-center">Some Rights Reserved <i class="fab fa-creative-commons"></i> People Reunite 2017 - 2023</div>
        </q-footer>
        <q-footer reveal bordered class="bg-primary text-white" v-if="$q.platform.is.mobile">
            <div class="q-gutter-y-md">
                <q-tabs class="text-white">
                    <q-route-tab exact class="text-lowercase" label="Home" to="/" icon="fab fa-houzz" />
                    <q-route-tab exact class="text-lowercase" label="News" to="/news" icon="fas fa-bolt" />
                    <q-route-tab exact class="text-lowercase" label="Review" to="/review" icon="fas fa-fire" />
                    <q-tab exact @click="drawer = !drawer" class="text-lowercase" label="More" icon="fas fa-bars" />
                </q-tabs>
            </div>
        </q-footer>
        <q-drawer v-model="drawer" :breakpoint="500" overlay bordered>
            <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
                <q-list>
                    <template v-for="(menuItem, index) in menuList">
                  <q-item :key="index" :to="menuItem.to" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                    <q-item-section avatar>
                      <q-icon :name="menuItem.icon" />
                    </q-item-section>
                    <q-item-section>
                      {{ menuItem.label }}
                    </q-item-section>
                  </q-item>
                  <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                  </template>
                </q-list>
             </q-scroll-area>
          <q-img class="absolute-top" src="~assets/bg.jpg" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <q-icon name="fa fa-podcast" />
              </q-avatar>
              <div class="text-weight-bold">#peoplereunite</div>
              <div>Your Daily Music News Feed</div>
            </div>
          </q-img>        
        </q-drawer>
</div>
</template>

<script>
const menuList = [{
        icon: 'fab fa-houzz',
        label: 'Beranda',
        to: '/',
        separator: false
    },

    {
        icon: 'fas fa-bolt',
        label: 'News',
        to: '/news',
        separator: false
    },
    {
        icon: 'fas fa-fire',
        label: 'Review',
        to: '/review',
        separator: false
    },
    {
        icon: 'fas fa-feather-alt',
        label: 'Feature Story',
        to: '/story',
        separator: false
    },
    {
        icon: 'fas fa-coffee',
        label: 'Essay',
        to: '/essay',
        separator: true
    },
    // {
    //   icon: 'fa fa-users',
    //   label: 'Kontributor',
    //   to: '/kontributor',    
    //   separator: false
    // },
    // {
    //   icon: 'comment',
    //   label: 'Kirim Naskah',
    //   to: '/kirim-naskah',    
    //   separator: false
    // },
    {
        icon: 'fas fa-podcast',
        label: 'Tentang Kami',
        to: '/about',
        separator: false
    },    
    {
        icon: 'fas fa-envelope',
        label: 'Berlangganan',
        to: '/subscribe',
        separator: false
    },     
    {
        icon: 'info',
        label: 'Ketentuan Layanan',
        to: '/ketentuan-layanan',
        separator: false
    },
    {
        icon: 'fab fa-creative-commons',
        label: 'Lisensi',
        to: '/lisensi',
        separator: false
    }
]

export default {
    data() {
        return {
            drawer: false,
            menuList
        }
    }
}
</script>