
import { NavItem, ServiceItem, ValueItem, Page } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Etusivu', page: Page.HOME },
  { label: 'Palvelut', page: Page.SERVICES },
  { label: 'Meistä', page: Page.ABOUT },
  { label: 'Blogi', page: Page.BLOG },
  { label: 'Liity jäseneksi', page: Page.JOIN },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Yhteiskuntaorientaatio',
    description: 'Laadukkaat kurssit ja materiaalit uuteen yhteiskuntaan perehtymiseen. Räätälöimme sisällöt vastaamaan kohderyhmän tarpeita.',
    longDescription: 'Tarjoamme monikielistä yhteiskuntaorientaatiota, joka on suunniteltu edistämään kotoutumista ja vahvistamaan yksilön ymmärrystä suomalaisesta yhteiskunnasta. Koulutuksemme kattavat kaikki elämän osa-alueet asumisesta työntekoon ja oikeusjärjestelmään.',
    features: [
      'Kotoutumislain (681/2023) mukainen sisältö',
      'Monikieliset asiantuntijakouluttajat',
      'Räätälöidyt oppimateriaalit',
      'Osallistavat opetusmenetelmät',
      'Sekä lähi- että verkko-opetus'
    ],
    icon: 'groups',
    color: 'primary',
    tag: 'Tieto'
  },
  {
    title: 'Konsultointi',
    description: 'Asiantuntija-apu organisaatioille kotoutumisprosessien ja monikulttuurisuustaitojen kehittämiseen.',
    longDescription: 'Tuemme kuntia, hyvinvointialueita ja yrityksiä monimuotoisuuden johtamisessa ja kotoutumispalveluiden strategisessa kehittämisessä. Autamme luomaan kestäviä ja inhimillisiä prosesseja, jotka hyödyttävät koko yhteiskuntaa.',
    features: [
      'Palveluprosessien auditointi',
      'Moninaisuus- ja inkluusiostrategiat',
      'Kulttuurien välinen viestintä',
      'Alueellinen kotoutumisen suunnittelu',
      'Työyhteisöjen monikulttuurisuusvalmennus'
    ],
    icon: 'diversity_3',
    color: 'accent',
    tag: 'Taito'
  },
  {
    title: 'Koulutus',
    description: 'Ammattilaisten osaamisen vahvistaminen ja asiantuntijavalmennukset kotoutumisen kentällä toimiville.',
    longDescription: 'Tarjoamme syventävää koulutusta ammattilaisille, jotka työskentelevät kotoutumisen, ohjauksen ja neuvonnan parissa. Valmennuksemme perustuvat uusimpaan tutkimustietoon ja käytännön kokemukseen.',
    features: [
      'Asiantuntijaluennot ja -webinaarit',
      'Työnohjauksellinen valmennus',
      'Kotoutumisalan mentorointi',
      'Uusimman lainsäädännön läpikäynti',
      'Pedagogiset työkalut ohjaustyöhön'
    ],
    icon: 'school',
    color: 'primary',
    tag: 'Tulevaisuus'
  }
];

export const VALUES: ValueItem[] = [
  {
    title: 'Sitoutunut omistajuus',
    description: 'Osuuskunnan jäsenet ovat asiantuntijoita, jotka omistavat yrityksensä. Tämä takaa poikkeuksellisen motivaation.',
    icon: 'handshake',
    bgClass: 'bg-secondary text-primary',
    iconClass: 'text-primary'
  },
  {
    title: 'Eettisyys ja kohtaaminen',
    description: 'Arvomme ohjaavat toimintaamme kaikessa: oikeudenmukaisuus ja inhimillinen kohtaaminen ovat keskiössä.',
    icon: 'spa',
    bgClass: 'bg-accent/10 text-accent',
    iconClass: 'text-accent'
  },
  {
    title: 'Jatkuva uudistuminen',
    description: 'Kehitämme osaamistamme modernilla otteella tarjotaksemme aina ajankohtaisinta ja toimivinta tietoa.',
    icon: 'rocket_launch',
    bgClass: 'bg-slate-900 text-white',
    iconClass: 'text-white'
  }
];

export const IMAGES = {
  HERO_COLLAB: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjReG4PjVVzfEPZC3L6EX9rrFxFOQUo0GJ9vOUj_6OjKWY0zAMeHHuIkTpxEtv-MXcXtcFfRx6QYvPCKjJijJuBM1nj1pujBrn-SaKc8qx2PbDd9HAExNAdF0CUD-6wC2mkMcb00G5O2FXGsc2b6BGIOqqoCUM9N-ithKgfSiPnl_vA7HMF0ydRKI9iKaPzc4TeeDaewXAGu0RN9Zd10j933LkXyit_O-yz4mXh0asADVC3V5HDHDJ7oEjg3cb4_1ouB0NUXLGsEJ5",
  EXPERTISE_MEETING: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvleOhu-Wde1XyDRbcekQ3psIjHNmSQ1aiebrFSNHBuZQ-VXHa2Ge2WMAl4QVwKTa5pzBEDSwvUZTzcTJzLf2mKUO_1kSgK3bYV5dpUJMXoL6mxi1umwwHWD3gPaehNAMcKfD7okywL1zOrVqvF5OtaZH2VnZ2BYDWp5ficZG3X5vx-oSBA2ij34wpEjtochpTi067t-oyWauQ0vbCTQG8EG7kbeu8Xf9RYOiXd1JKnGPcVExSu3VrihdtnLz5jypwyBAlTP_oXi6j",
  TEAM_PORTRAIT: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPbkq9RBR4i19GrbMVKmDQ6PJafxU1sRGModR82NycG6A_tCyDXxSZXHkqPj23wo0Lh591J5qxNn7_u0NO8CxhVT_oeeYaeggokxkaGlcFjHkZbBIswuoGK5RVNvjbecAwVZAo5OVoENuiKcoeoEyt5AgspjnFXe-MdjYbYz4k25xkXg_dqcUUvyjr71KceboGOpYAR40YBc3x-yQPqWAYKLKiMP0_VSUq34_MDbHSQP8EUbik2sjjson7pI7uIYInQURvfO5f7e02"
};
