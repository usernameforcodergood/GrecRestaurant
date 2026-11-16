/**
 * Central image registry.
 *
 * Every photograph on the site is referenced from here, so replacing a
 * photo means dropping a new file into /public/images/** and updating
 * one entry. `source` documents provenance for each image.
 *
 * All current photos come from Grec's own official Facebook page
 * (facebook.com/grecrestaurant). TODO: obtain the original high-resolution
 * files from the restaurant and confirm usage rights with the photographer.
 */

export type ImageCategory = "interior" | "music" | "evenings" | "food";

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position focal point, e.g. "50% 40%" */
  focal?: string;
  category: ImageCategory;
  source: string;
}

const FB = "Grec — official Facebook page";

export const images = {
  heroInterior: {
    src: "/images/hero/grec-interior-tables.jpg",
    alt: "Η σάλα του Grec με τα ξύλινα τραπέζια, τους πέτρινους τοίχους και τις παλιές αφίσες",
    width: 1333,
    height: 2000,
    focal: "50% 66%",
    category: "interior",
    source: FB,
  },
  salonPosters: {
    src: "/images/interior/grec-salon-posters.jpg",
    alt: "Πέτρινος τοίχος με vintage ελληνικές αφίσες πάνω από στρωμένο τραπέζι και πράσινη ξύλινη επένδυση",
    width: 1010,
    height: 901,
    focal: "50% 50%",
    category: "interior",
    source: FB,
  },
  throughWindow: {
    src: "/images/interior/grec-through-window.jpg",
    alt: "Παρέες στα τραπέζια και μουσικοί, όπως φαίνονται από το παράθυρο του μαγαζιού",
    width: 1367,
    height: 1708,
    focal: "45% 78%",
    category: "evenings",
    source: FB,
  },
  neonSign: {
    src: "/images/interior/grec-neon-sign.jpg",
    alt: "Η κόκκινη επιγραφή νέον «Μουσική ταβέρνα» στην πρόσοψη του Grec τη νύχτα",
    width: 1367,
    height: 1708,
    focal: "50% 35%",
    category: "interior",
    source: FB,
  },
  ladadikaNight: {
    src: "/images/interior/grec-ladadika-night.jpg",
    alt: "Το Grec στα Λαδάδικα το βράδυ, με φαναράκια και την επιγραφή νέον",
    width: 1367,
    height: 1708,
    focal: "50% 40%",
    category: "interior",
    source: FB,
  },
  festiveLights: {
    src: "/images/interior/grec-festive-lights.jpg",
    alt: "Η σάλα του Grec στολισμένη με λαμπάκια, θέα από τη σκάλα",
    width: 1365,
    height: 1706,
    focal: "50% 50%",
    category: "interior",
    source: FB,
  },
  musiciansStairs: {
    src: "/images/music/grec-musicians-stairs.jpg",
    alt: "Δύο μουσικοί του Grec με μπουζούκι στην ξύλινη σκάλα του μαγαζιού",
    width: 801,
    height: 1001,
    focal: "50% 35%",
    category: "music",
    source: FB,
  },
  bandStage: {
    src: "/images/music/grec-trio-live.jpg",
    alt: "Η κομπανία του Grec στη σκηνή: μπουζούκι, τραγουδίστρια και κιθάρα",
    width: 1448,
    height: 1086,
    focal: "50% 40%",
    category: "music",
    source: "Supplied by the site owner (Nov 2026)",
  },
  bouzouki: {
    src: "/images/music/grec-bouzouki-closeup.jpg",
    alt: "Κοντινό σε χέρια που παίζουν μπουζούκι μπροστά στο μικρόφωνο",
    width: 1365,
    height: 1706,
    focal: "50% 50%",
    category: "music",
    source: FB,
  },
  zeibekiko: {
    src: "/images/music/grec-zeibekiko.jpg",
    alt: "Θαμώνας χορεύει ζεϊμπέκικο ανάμεσα στα τραπέζια",
    width: 1252,
    height: 1565,
    focal: "50% 35%",
    category: "evenings",
    source: FB,
  },
  zeibekikoFloor: {
    src: "/images/music/grec-zeibekiko-floor.jpg",
    alt: "Ζεϊμπέκικο στο πάτωμα της σάλας και η παρέα χειροκροτεί",
    width: 1367,
    height: 1708,
    focal: "50% 55%",
    category: "evenings",
    source: FB,
  },
  guestsClapping: {
    src: "/images/music/grec-guests-clapping.jpg",
    alt: "Παρέες χειροκροτούν στα τραπέζια κατά τη διάρκεια της ζωντανής μουσικής",
    width: 1367,
    height: 1708,
    focal: "50% 40%",
    category: "evenings",
    source: FB,
  },
  fullHouse: {
    src: "/images/music/grec-full-house.jpg",
    alt: "Γεμάτη σάλα με κόσμο που διασκεδάζει στο Grec",
    width: 1367,
    height: 1708,
    focal: "50% 45%",
    category: "evenings",
    source: FB,
  },
  guestBaglamas: {
    src: "/images/music/grec-guest-baglamas.jpg",
    alt: "Μουσικός δείχνει σε χαμογελαστή θαμώνα πώς να κρατήσει τον μπαγλαμά",
    width: 1080,
    height: 1350,
    focal: "50% 50%",
    category: "music",
    source: FB,
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

export const brand = {
  logo: { src: "/images/brand/grec-logo.png", width: 830, height: 550 },
  logoCream: { src: "/images/brand/grec-logo-cream.png", width: 830, height: 550 },
  /** Small, pre-cropped copies served as-is in the header (no image-optimizer round-trip). */
  headerLogo: { src: "/images/brand/grec-logo-header.png", width: 288, height: 188 },
  headerLogoCream: { src: "/images/brand/grec-logo-cream-header.png", width: 288, height: 188 },
} as const;

/**
 * Gallery order — leads with photos not shown elsewhere on the page,
 * followed by a few section favourites so each category stays full.
 * Add food photography here (category "food") once supplied.
 */
export const galleryOrder: ImageKey[] = [
  "fullHouse",
  "neonSign",
  "festiveLights",
  "salonPosters",
  "zeibekikoFloor",
  "guestBaglamas",
  "heroInterior",
  "bandStage",
  "bouzouki",
];
