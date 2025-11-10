"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Bell, Crown, Heart, MessageCircle, Package, Sparkles, Star, TrendingUp, Users, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SneakerVault"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Step Into Style"
          description="Discover the latest collection of premium sneakers for every occasion and lifestyle"
          tag="New Collection"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Shop Collection",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g0f008688e8747d5955ca1a07e5df71486457d8533fa1434778a19889f4285b56164b68d739930868d8e9c67cde7b346b04b4c4c21e6cfa6d6d955b393ba017f1_1280.jpg",
              imageAlt: "Modern white sneakers"
            },
            {
              imageSrc: "https://pixabay.com/get/g79b0a7df775c0fe3e35167419f57706b8119863e2254367b9209b5247b8dfc9510a962dc6361e2c51ba1736e40e80d50bf69ae5caa68977f5a5bc10aea1318d0_1280.png",
              imageAlt: "Colorful running shoes"
            },
            {
              imageSrc: "https://pixabay.com/get/g5daab9bdc36e1bf577d68b525638a4af6c6020eafa15de074a8c9a70e509da3d724100c257be42a3dbfd394acabacaa91a8061f32ffe97dada40f6e0a9014895_1280.jpg",
              imageAlt: "Black basketball sneakers"
            },
            {
              imageSrc: "https://pixabay.com/get/gfe9d334baa1ce44b5033f23ff35dc6062bcebf7e7740a3fdb7589af3a054adb2d4172d868c42937b2fbd5387a6b4353f174c3cf05ae610b79a3c170aa026a113_1280.jpg",
              imageAlt: "Lifestyle casual sneakers"
            },
            {
              imageSrc: "https://pixabay.com/get/g613751a7ef193742291f9f494efc0190c331038e8a39e7fac44744f4ba67ec8427eec04d9afbdef251eb5d630ee3a39e28d070f8cbd80ca2b72d43c64aed1661_1280.jpg",
              imageAlt: "Premium leather sneakers"
            },
            {
              imageSrc: "https://pixabay.com/get/gde68eb642f054bd6fe09db08343355d7a786e894887f1ca351aa9ad5ed10bbba21b3e673f9b7be2fe7f5fa6e94c4cf377fa5b2c988df79fdeab0087549013b06_1280.jpg",
              imageAlt: "Sport training shoes"
            },
            {
              imageSrc: "https://pixabay.com/get/gf1391c6aeff5915b664ee0f3e0943dd990d655ca4cda5bca562dff720d8b61a11c62ac5a575abca5035930f61fd36c3ed40b571edd02d6780eb621af8f8a96d0_1280.jpg",
              imageAlt: "Retro vintage sneakers"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose SneakerVault"
          description="We're passionate about bringing you the finest selection of sneakers from top brands worldwide"
          tag="Our Story"
          tagIcon={Heart}
          buttons={[
            {
              text: "View Collection",
              href: "products"
            }
          ]}
          bulletPoints={[
            {
              title: "Authentic Quality",
              description: "Every pair is guaranteed authentic and sourced directly from authorized retailers",
              icon: Shield
            },
            {
              title: "Expert Curation",
              description: "Our team hand-picks the latest releases and timeless classics for our collection",
              icon: Star
            },
            {
              title: "Customer First",
              description: "Dedicated support team and hassle-free returns to ensure your satisfaction",
              icon: Users
            }
          ]}
          imageSrc="https://pixabay.com/get/g9f8c31fc151a63984b86ca7a3a52f78fea787f0d7dfd576e781696c8d263fa85a44e803c0c6b2f4276e10f7d76f6201a887dec5a5c1d63b4357002b5498d850d_1280.jpg"
          imageAlt="Sneaker store display"
          textboxLayout="default"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardThree
          title="What Makes Us Different"
          description="Discover the features that set SneakerVault apart from other sneaker retailers"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Ultimate Comfort",
              description: "Premium cushioning and ergonomic design for all-day comfort and performance",
              imageSrc: "https://pixabay.com/get/g849322e0e0ea558039e6313787e68aa88b48fb8f8d83b833987f4caacf985c8b10721c2b094a789d2d44f692fba9f540401f41c988118e1a711f05e1d942d215_1280.jpg",
              imageAlt: "Comfortable sneaker sole technology"
            },
            {
              id: "02",
              title: "Trendy Styles",
              description: "Stay ahead of fashion trends with our curated selection of the latest designs",
              imageSrc: "https://pixabay.com/get/g163a463b1e658d8e519e854d2d9cacd89d1f2a07aa4be5af99cafc6ab4f4829c1d2963684c0c34029b9c8f5320133827ed080ab594199fae6758cb24c6f2020a_1280.jpg",
              imageAlt: "Stylish fashion sneakers"
            },
            {
              id: "03",
              title: "Built to Last",
              description: "Quality materials and construction ensure your sneakers will go the distance",
              imageSrc: "https://pixabay.com/get/gbcf0712e95ca410f6ad0f318d8d4a4b9b8196cceb83adab98ecf13c28401dcf42a06346252a103ede09e503e6e7b6ec02d34a96b071e04906a0dcd61f8fd6525_1280.jpg",
              imageAlt: "Durable athletic shoe construction"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Sneakers"
          description="Check out our top-rated sneakers loved by customers worldwide"
          tag="Best Sellers"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "AirTech",
              name: "CloudWalk Pro",
              price: "$149.99",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://pixabay.com/get/gb2768595386837829f1c91433482ee30028651662488bbceeac8de658a4d4eecc514bf3819fe65bb42c70de8a10d359cee7042a3d68af7434b1a3bca29b51eb8_1280.jpg",
              imageAlt: "AirTech CloudWalk Pro sneakers"
            },
            {
              id: "2",
              brand: "UrbanFlex",
              name: "Street Legend High",
              price: "$179.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://pixabay.com/get/g0cd918c8a694b8360bd5872dbf3cf5c62fc1247945deae87c43e6d1f0b6f87e1b880c8d18f37739f9b53d7e1c864346fb69e64dd2203d1c902fd080bc461c7ba_1280.jpg",
              imageAlt: "UrbanFlex Street Legend High sneakers"
            },
            {
              id: "3",
              brand: "SpeedCore",
              name: "RunMax Elite",
              price: "$159.99",
              rating: 4,
              reviewCount: "3.1k",
              imageSrc: "https://pixabay.com/get/g7f375a7aaad94b57c8ab81e8a5ad0e1667637f8894d96727caee212a5fedca494dee2784e024ad37b10a02ae2a57d5e51999ca6de87c11b3d5c8f562f9aa83de_1280.jpg",
              imageAlt: "SpeedCore RunMax Elite sneakers"
            },
            {
              id: "4",
              brand: "ClassicStep",
              name: "Minimalist White",
              price: "$89.99",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://pixabay.com/get/ge3099fd8b441a1b869d3064b16e65327249c8b0e88107550a0c545330590c2d0b00c22428946fd4ca121d72d5055223e0e72b6617bcd2ce93b0b7627aa3579b8_1280.jpg",
              imageAlt: "ClassicStep Minimalist White sneakers"
            },
            {
              id: "5",
              brand: "LifeStyle",
              name: "Casual Comfort",
              price: "$119.99",
              rating: 4,
              reviewCount: "987",
              imageSrc: "https://pixabay.com/get/gd08a2ecaab7da5057f7784298a62d8af857c04e4d83cac6308573bc05f65e5bb415ed0ff495c6cab9c4f086d0ab0390cbe117f3e89358d55a7f9b27a0a88f724_1280.jpg",
              imageAlt: "LifeStyle Casual Comfort sneakers"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Plans"
          description="Join SneakerVault membership for exclusive access to limited releases and special discounts"
          tag="Membership"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Essential",
              badgeIcon: Package,
              price: "Free",
              subtitle: "Perfect for casual sneaker lovers",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://signup.example.com"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Access to public releases",
                "Basic customer support",
                "Standard shipping rates",
                "Return policy protection"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$9.99/mo",
              subtitle: "Best for sneaker enthusiasts",
              buttons: [
                {
                  text: "Start Premium",
                  href: "https://premium.example.com"
                },
                {
                  text: "Compare Plans",
                  href: "pricing"
                }
              ],
              features: [
                "Early access to limited releases",
                "10% discount on all purchases",
                "Priority customer support",
                "Free shipping on orders over $75",
                "Exclusive member events"
              ]
            },
            {
              id: "vip",
              badge: "VIP Access",
              badgeIcon: Crown,
              price: "$24.99/mo",
              subtitle: "For serious collectors and resellers",
              buttons: [
                {
                  text: "Join VIP",
                  href: "https://vip.example.com"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "First access to all limited drops",
                "15% discount on all purchases",
                "Dedicated VIP support line",
                "Free shipping on all orders",
                "Private VIP events and previews",
                "Personalized sneaker recommendations"
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Don't just take our word for it - hear from sneakerheads who love shopping with us"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Sneaker Collector",
              company: "Chicago, IL",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gab285e7228761290068f0e539f17730fe24b6e6ee292432f975aa5c5412e95060fa9b546fee323d2b28f5d45531e2f5fd9a6159ad46b646dba0bae6472c1e3ad_1280.jpg",
              imageAlt: "Portrait of Marcus Johnson"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Fashion Blogger",
              company: "Los Angeles, CA",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g335c45403731c4c9aa6b23dce981eae95ac5e79718de2a71030d3e0df13e1dea042d5f88186ca1c646139e7644abea59bc2682a4cf15e7ce8f5c6aa582f5d9cf_1280.jpg",
              imageAlt: "Portrait of Sarah Chen"
            },
            {
              id: "3",
              name: "Alex Rodriguez",
              role: "Professional Athlete",
              company: "Miami, FL",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga8f590bec3a868895ec34d219d7a174d5be4870a98eb87e8b2e814570e653c7c0375e89af318731bd5da0d400eec1fe89d484d4f9e27ba5a02c35ceb21e551f5_1280.jpg",
              imageAlt: "Portrait of Alex Rodriguez"
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "Style Influencer",
              company: "New York, NY",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7ec420ce3a536ca6c39f0185c5fca6225bd4f8ee49a238985970b8921f714d293adc3e8430d7435e7f03ef173ef677711c43add77b676a9fc518126ad28c1f3e_1280.jpg",
              imageAlt: "Portrait of Emma Williams"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about shopping with SneakerVault"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Are all sneakers authentic?",
              content: "Yes, we guarantee 100% authenticity on all our products. Every sneaker is sourced directly from authorized retailers and brand partners."
            },
            {
              id: "2",
              title: "What is your return policy?",
              content: "We offer a 30-day return policy for unworn items in original packaging. Returns are free for members, with a small handling fee for non-members."
            },
            {
              id: "3",
              title: "How long does shipping take?",
              content: "Standard shipping takes 3-5 business days. Premium members get free expedited shipping (1-2 business days) on orders over $75."
            },
            {
              id: "4",
              title: "Do you offer size exchanges?",
              content: "Yes! We offer one free size exchange within 14 days of purchase for unworn items. Just contact our customer service team to arrange the exchange."
            },
            {
              id: "5",
              title: "How do I get early access to limited releases?",
              content: "Join our Premium or VIP membership to get early or first access to limited releases. VIP members get first priority on all exclusive drops."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Never Miss a Drop"
          description="Subscribe to our newsletter for exclusive access to new releases, member-only deals, and sneaker culture updates"
          tagIcon={Bell}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails. You can unsubscribe anytime."
          imageSrc="https://pixabay.com/get/g01070f0b178a7840ec841a04a1c0bcecf5bb5eae6e6f1ee7d014fc7e2102493a9a88a096ae54f5adbf00d8f58eee0b77f8b283e235b36b4bc92e832becc94cca_1280.jpg"
          imageAlt="Colorful sneaker wall display"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SneakerVault"
          copyrightText="© 2025 | SneakerVault"
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "New Arrivals",
                  href: "new"
                },
                {
                  label: "Best Sellers",
                  href: "bestsellers"
                },
                {
                  label: "Sale Items",
                  href: "sale"
                },
                {
                  label: "Brands",
                  href: "brands"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Size Guide",
                  href: "size-guide"
                },
                {
                  label: "Shipping Info",
                  href: "shipping"
                },
                {
                  label: "Returns",
                  href: "returns"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Press",
                  href: "press"
                },
                {
                  label: "Blog",
                  href: "blog"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}