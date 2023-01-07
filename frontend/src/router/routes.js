
const routes = [
  {
    path: '/',
    component: () => import('layouts/Master.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'submit', component: () => import('pages/Submit.vue') },
      { path: '/post/:slug', component: () => import('pages/Post.vue') },
      { path: 'news', component: () => import('pages/News.vue') },
      { path: 'review', component: () => import('pages/Review.vue') },
      { path: 'essay', component: () => import('pages/Essay.vue') },
      { path: 'story', component: () => import('src/pages/Story.vue') },      
      { path: 'kontributor', component: () => import('pages/Kontributor.vue') },
      { path: 'kirim-naskah', component: () => import('pages/KirimNaskah.vue') },
      { path: 'ketentuan-layanan', component: () => import('pages/KetentuanLayanan.vue') },
      { path: 'lisensi', component: () => import('pages/Lisensi.vue') },
      { path: 'kategori', component: () => import('pages/Kategori.vue') },
      { path: 'subscribe', component: () => import('src/pages/Subscribe.vue') },
      { path: 'search', component: () => import('src/pages/Search.vue') },            
      { path: 'home', component: () => import('src/pages/Home2.vue') },                  
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
