export interface Attraction {
  name: string;
  description: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  attractions: Attraction[];
  bestTimeToVisit: string;
  currency: string;
  language: string;
}

export const destinations: Destination[] = [
  {
    id: "santorini-greece",
    name: "Santorini",
    country: "Greece",
    description: "Beautiful white buildings and stunning sunsets",
    longDescription: "Santorini is a volcanic island in the Cyclades group of the Greek islands. It's famous for its dramatic views, stunning sunsets, white-washed houses, and the beautiful blue-domed churches. The island offers a unique blend of natural beauty, ancient history, and vibrant culture.",
    price: 450,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop&crop=center",
    attractions: [
      {
        name: "Oia Village",
        description: "Famous for its stunning sunset views and white-washed buildings with blue domes",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Red Beach",
        description: "Unique beach with striking red volcanic cliffs and crystal-clear waters",
        image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Ancient Thera",
        description: "Archaeological site with ruins dating back to 9th century BC",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Fira Town",
        description: "The capital with stunning caldera views, shops, and restaurants",
        image: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=400&h=300&fit=crop&crop=center"
      }
    ],
    bestTimeToVisit: "April to October",
    currency: "Euro (€)",
    language: "Greek"
  },
  {
    id: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise with rice terraces and beaches",
    longDescription: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. It's a magical destination combining natural beauty, rich culture, and spiritual traditions.",
    price: 250,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=500&fit=crop&crop=center",
    attractions: [
      {
        name: "Tegallalang Rice Terraces",
        description: "Stunning terraced rice paddies offering spectacular views and cultural experiences",
        image: "https://images.unsplash.com/photo-1531592937781-344ad608fabf?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Uluwatu Temple",
        description: "Ancient Hindu temple perched on a cliff with ocean views and traditional Kecak dance",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Ubud Monkey Forest",
        description: "Sacred forest sanctuary home to hundreds of long-tailed macaques",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Seminyak Beach",
        description: "Popular beach destination with vibrant nightlife and surf spots",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop&crop=center"
      }
    ],
    bestTimeToVisit: "April to October",
    currency: "Indonesian Rupiah (IDR)",
    language: "Indonesian, Balinese"
  },
  {
    id: "kyoto-japan",
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples and traditional Japanese culture",
    longDescription: "Kyoto served as Japan's capital and the emperor's residence from 794 until 1868. It's renowned for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses. Kyoto is the cultural heart of Japan.",
    price: 380,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop&crop=center",
    attractions: [
      {
        name: "Fushimi Inari Shrine",
        description: "Famous shrine with thousands of vermillion torii gates winding up the mountain",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        description: "Stunning Zen temple covered in gold leaf set beside a reflective pond",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Arashiyama Bamboo Grove",
        description: "Enchanting pathway through towering bamboo stalks",
        image: "https://images.unsplash.com/photo-1536659431836-a9c184a1c835?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Gion District",
        description: "Historic geisha district with traditional tea houses and restaurants",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop&crop=center"
      }
    ],
    bestTimeToVisit: "March to May, October to November",
    currency: "Japanese Yen (¥)",
    language: "Japanese"
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    description: "Crystal clear waters and overwater bungalows",
    longDescription: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls with over 1,000 coral islands. Known for its beaches, blue lagoons, and extensive reefs, it's the ultimate luxury beach destination for honeymooners and travelers seeking paradise.",
    price: 750,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=500&fit=crop&crop=center",
    attractions: [
      {
        name: "Overwater Villas",
        description: "Luxurious bungalows built over crystal-clear lagoons with glass floor panels",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Underwater Restaurant",
        description: "Dine surrounded by marine life in one of the world's unique underwater venues",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Bioluminescent Beach",
        description: "Magical beaches that glow blue at night due to bioluminescent plankton",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Snorkeling & Diving",
        description: "World-class diving spots with manta rays, whale sharks, and colorful reefs",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center"
      }
    ],
    bestTimeToVisit: "November to April",
    currency: "Maldivian Rufiyaa (MVR)",
    language: "Dhivehi"
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    description: "Majestic mountains and pristine alpine scenery",
    longDescription: "The Swiss Alps are a mountain range in Switzerland, part of the greater Alps. They offer some of the most breathtaking scenery in the world, from snow-capped peaks to pristine lakes and charming alpine villages. A paradise for nature lovers and adventure seekers.",
    price: 520,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=500&fit=crop&crop=center",
    attractions: [
      {
        name: "Matterhorn",
        description: "One of the most iconic mountains in the world with its distinctive pyramid shape",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Jungfraujoch",
        description: "The 'Top of Europe' with stunning glacier views and ice palace",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Lake Geneva",
        description: "Beautiful lake surrounded by vineyards and the Alps",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Interlaken",
        description: "Adventure capital with paragliding, skiing, and hiking opportunities",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop&crop=center"
      }
    ],
    bestTimeToVisit: "June to September (summer), December to March (skiing)",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian"
  },
  {
    id: "dubai-uae",
    name: "Dubai",
    country: "UAE",
    description: "Modern luxury and desert adventures",
    longDescription: "Dubai is a city of superlatives and record-breaking attractions. From the world's tallest building to artificial islands and luxury shopping, Dubai seamlessly blends traditional Arabian culture with futuristic architecture and world-class entertainment.",
    price: 420,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop&crop=center",
    attractions: [
      {
        name: "Burj Khalifa",
        description: "The world's tallest building with observation decks offering panoramic views",
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Dubai Mall",
        description: "One of the world's largest malls with an aquarium and ice rink",
        image: "https://images.unsplash.com/photo-1555529669-2269763671c0?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Desert Safari",
        description: "Thrilling dune bashing, camel rides, and traditional Bedouin experiences",
        image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop&crop=center"
      },
      {
        name: "Palm Jumeirah",
        description: "Iconic artificial island with luxury hotels and waterfront dining",
        image: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=400&h=300&fit=crop&crop=center"
      }
    ],
    bestTimeToVisit: "November to March",
    currency: "UAE Dirham (AED)",
    language: "Arabic, English"
  }
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(dest => dest.id === id);
};
