import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Кресло Bergen',
      price: 45000,
      image: 'images/card/armchair.jpg',
      badge: 'Новинка'
    },
    {
      id: 2,
      name: 'Диван Oslo',
      price: 127000,
      image: 'images/card/sofa.jpg'
    },
    {
      id: 3,
      name: 'Стол Stockholm',
      price: 38000,
      oldPrice: 52000,
      image: 'images/card/table.jpg',
      badge: 'Скидка'
    },
    {
      id: 4,
      name: 'Светильник Nordic',
      price: 18500,
      image: 'images/card/chandelier.jpg'
    },
    {
      id: 5,
      name: 'Кресло Aarhus',
      price: 52000,
      image: 'images/card/Aarhus.jpg'
    },
    {
      id: 6,
      name: 'Стол Copenhagen',
      price: 67000,
      image: 'images/card/Copenhagen.jpg',
      badge: 'Новинка'
    },
    {
      id: 7,
      name: 'Диван Malmö',
      price: 145000,
      image: 'images/card/Malmo.jpeg'
    },
    {
      id: 8,
      name: 'Торшер Helsinki',
      price: 24000,
      oldPrice: 32000,
      image: 'images/card/Helsinki.jpg',
      badge: 'Скидка'
    },
    {
      id: 9,
      name: 'Стул Lund',
      price: 41000,
      image: 'images/card/Lund.jpg'
    },
    {
      id: 10,
      name: 'Кресло Arden',
      price: 35000,
      image: 'images/card/Arden.jpg'
    },
    {
      id: 11,
      name: 'Стул Arden Armchair',
      price: 31000,
      oldPrice: 35000,
      image: 'images/card/ArdenArmchair.jpg',
      badge: 'Скидка'
    },
    {
      id: 12,
      name: 'Кресло Atelier Chair',
      price: 27000,
      image: 'images/card/AtelierUpholsteredChair.jpg'
    },
    {
      id: 13,
      name: 'Светильник Aurora Light',
      price: 25000,
      image: 'images/card/AuroraPendantLight.jpg'
    },
    {
      id: 14,
      name: 'Диван Coastal',
      price: 45000,
      image: 'images/card/CoastalBreezeSofa.jpg',
      badge: 'Новинка'
    },
    {
      id: 15,
      name: 'Кресло Beckett',
      price: 36000,
      image: 'images/card/BeckettDiningChair.jpg'
    },
    {
      id: 16,
      name: 'Светильник Ember',
      price: 26000,
      image: 'images/card/EmberWallSconce.jpg'
    },
    {
      id: 17,
      name: 'Светильник Halo',
      price: 19000,
      oldPrice: 23000,
      image: 'images/card/HaloTableLamp.jpg',
      badge: 'Скидка'
    },
    {
      id: 18,
      name: 'Кресло Hudson',
      price: 34000,
      image: 'images/card/HudsonRecliner.jpg',
      badge: 'Новинка'
    },
    {
      id: 19,
      name: 'Кресло Rowan',
      price: 41000,
      image: 'images/card/RowanSideChair.jpg'
    },
    {
      id: 20,
      name: 'Светильник LumenArc',
      price: 23000,
      image: 'images/card/LumenArcFloorLamp.jpg',
      badge: 'Новинка'
    },
    {
      id: 21,
      name: 'Кресло Scout',
      price: 25000,
      image: 'images/card/ScoutClubChair.jpg'
    },
    {
      id: 22,
      name: 'Стол Meridian',
      price: 42000,
      image: 'images/card/MeridianConsoleTable.jpg',
      badge: 'Новинка'
    },
    {
      id: 23,
      name: 'Диван Midtown',
      price: 46000,
      image: 'images/card/MidtownSectional.jpg'
    },
    {
      id: 24,
      name: 'Напольная лампа Nimbus',
      price: 27000,
      oldPrice: 31000,
      image: 'images/card/NimbusChandelier.jpg',
      badge: 'Скидка'
    },
    {
      id: 25,
      name: 'Диван Velvet',
      price: 61000,
      image: 'images/card/VelvetHavenSofa.jpg'
    },
    {
      id: 26,
      name: 'Стол Oakview',
      price: 43000,
      image: 'images/card/OakviewDiningTable.jpg'
    },
    {
      id: 27,
      name: 'Стул Piper',
      price: 26000,
      image: 'images/card/PiperBarStool.jpg',
      badge: 'Новинка'
    }
  ])

  const getById = (id) => products.value.find(p => p.id === id)
  
  const getByIds = (ids) => products.value.filter(p => ids.includes(p.id))

  const formatPrice = (price) => {
    if (!price && price !== 0) return ''
    return price.toLocaleString('ru-RU')
  }

  return { 
    products, 
    getById, 
    getByIds,
    formatPrice 
  }
})