export const languages = [
  {
    // https://en.wikipedia.org/wiki/Dyula_language
    displayName: 'Dioula',
    altName: 'Dyula',
    // ISO 639-2
    code: 'dyu',
    iso: 'bf-DYU'
  },
  {
    // https://en.wikipedia.org/wiki/Mossi_language
    displayName: 'Mooré',
    altName: 'Mossi',
    // ISO 639-2
    code: 'mos',
    iso: 'bf-MOS'
  },
  {
    // https://de.wikipedia.org/wiki/Fulfulde
    displayName: 'Fulfudé',
    altname: 'Fula',
    // ISO 639-2
    code: 'ful',
    iso: 'bf-FUL'
  }
]

export const categories = [
  {
    id: 'agricolture'
  },
  {
    id: 'society'
  },
  {
    id: 'best-practice'
  },
  {
    id: 'innovation'
  }
]

export const i18n = {
  dyu: {
    welcome: 'Aw dansè',
    agricolture: 'kɛnyɛrɛye baaraw',
    society: 'jamakulu',
    'best-practice': 'kɛwaleɲumanw',
    innovation: 'kokuraw dilanni',
    audio: {
      welcome: '/media/dyu/Aw dansè.mp3',
      agricolture: '/media/dyu/Kɛnyɛrɛye baaraw.mp3',
      society: '/media/dyu/Jamakulu.mp3',
      'best-practice': '/media/dyu/Kɛwaleɲumanw.mp3',
      innovation: '/media/dyu/Kokuraw dilanni.mp3',
      information: '/media/dyu/Kunnafoniw.mp3'
    }
  },
  mos: {
    welcome: 'Ne-y waongo',
    agricolture: 'Naafa Noug-touumdé',
    society: 'Niinsaal Zamaana',
    'best-practice': 'Tuum soõman',
    innovation: 'Tuum Paala',
    audio: {
      welcome: '/media/mos/Ne-y waongo.mp3',
      agricolture: '/media/mos/Naafa Noug-touumdé.mp3',
      society: '/media/mos/Niinsaal Zamaana.mp3',
      'best-practice': '/media/mos/Tuum soõman.mp3',
      innovation: '/media/mos/Tuum Paala.mp3',
      information: '/media/mos/Kibaya.mp3'
    }
  },
  ful: {
    welcome: 'Fôfô',
    agricolture: 'jaagagol',
    society: 'jamaa',
    'best-practice': 'golle lobbe',
    innovation: 'heydinetinegol',
    audio: {
      welcome: '/media/ful/fôfô.mp3',
      agricolture: '/media/ful/Jaagagol.mp3',
      society: '/media/ful/Jamaa.mp3',
      'best-practice': '/media/ful/Golle lobbe.mp3',
      innovation: '/media/ful/Heydinetinegol.mp3',
      information: '/media/ful/Kibaru.mp3'
    }
  }
}
