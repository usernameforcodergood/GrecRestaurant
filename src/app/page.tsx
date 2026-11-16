import { getContent } from "@/content";
import { getMenuLink } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Restaurant } from "@/components/sections/Restaurant";
import { Dining } from "@/components/sections/Dining";
import { LiveMusic } from "@/components/sections/LiveMusic";
import { Gallery } from "@/components/sections/Gallery";
import { Visit } from "@/components/sections/Visit";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";

export default function HomePage() {
  const content = getContent();
  const menuLink = getMenuLink();

  return (
    <>
      <RestaurantJsonLd description={content.meta.description} />
      <Header nav={content.nav} menuLink={menuLink} />
      <main id="main">
        <Hero content={content.hero} cta={content.cta} menuLink={menuLink} />
        <Restaurant content={content.restaurant} />
        <LiveMusic content={content.music} />
        <Dining content={content.dining} cta={content.cta} menuLink={menuLink} />
        <Gallery content={content.gallery} />
        <Visit content={content.visit} cta={content.cta} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
