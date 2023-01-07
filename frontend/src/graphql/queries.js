import gql from 'graphql-tag'

export const allNaskahsQuery = gql`
    query allNaskahsQuery {
        naskahs(sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`
export const essayNaskahsQuery = gql`
query essayNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "Essay"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}
`
export const newsNaskahsQuery = gql`
query newsNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "News"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}`

export const reviewNaskahsQuery = gql`
query reviewNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "Review"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}`


export const featureNaskahsQuery = gql`
query featureNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "Feature Story"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}`

export const latestNaskahsQuery = gql`
    query latestNaskahsQuery {
        naskahs(limit: 9, sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`

export const headlineNaskahsQuery = gql`
    query headlineNaskahsQuery {
        naskahs(limit: 1, sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`
export const desktopheadlineNaskahsQuery = gql`
    query headlineNaskahsQuery {
        naskahs(limit: 1, sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`

export const desktopsubheadlineNaskahsQuery = gql`
    query desktopsubheadlineNaskahsQuery {
        naskahs(start: 1, sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`

export const subheadlineNaskahsQuery = gql`
    query subheadlineNaskahsQuery {
        naskahs(limit: 10, start: 1, sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`

export const latestnewsNaskahsQuery = gql`
query latestnewsNaskahsQuery {
  naskahs(limit: 5, sort: "Published:desc",where: {
    Kategori: {
      Judul: "News"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}`

export const latestreviewNaskahsQuery = gql`
query latestreviewNaskahsQuery {
  naskahs(limit: 5, sort: "Published:desc",where: {
    Kategori: {
      Judul: "Review"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}`

export const latestfeatureNaskahsQuery = gql`
query latestfeatureNaskahsQuery {
  naskahs(limit: 7, sort: "Published:desc",where: {
    Kategori: {
      Judul: "Feature Story"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}`

export const latestessayNaskahsQuery = gql`
query latestessayNaskahsQuery {
  naskahs(limit: 1, sort: "Published:desc",where: {
    Kategori: {
      Judul: "Essay"
    }
  }) {
    id
		Judul
    Subjudul
    slug
    Cover {
    	url
      caption
      alternativeText
    }
    Body
    MetaDescription
    Keywords
    Kanal
    KanalUrl
    Kategori {
    	Judul 
      }
		kontributors {
    	Nama
		}
    Player
    Published    
  }  
}
`