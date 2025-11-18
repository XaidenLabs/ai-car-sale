import { ChevronRight, Car, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SignedOut } from "@clerk/nextjs";
import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import { HomeSearch } from "@/components/home-search";
import Link from "next/link";
import Image from "next/image";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  return (
    <div className="flex flex-col pt-20">
      {/* ========================= */}
      {/* HERO SECTION WITH GLASS + DARKER GRADIENT + TEXT STROKE */}
      {/* ========================= */}
      <section
        className="relative py-16 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #D8D1CD 0%, #B97C63 25%, #8C2D05 55%, #B14B07 75%, #0D0C0C 100%)",
        }}
      >
        {/* Subtle glassy overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            <h1
              className="text-5xl md:text-8xl mb-4 font-extrabold tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.1) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.1)",
              }}
            >
              Find your Dream Car with Antridax
            </h1>

            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 px-4 py-2 rounded-2xl inline-block shadow-md">
              Advanced AI Car Search and test drive from thousands of vehicles.
            </p>
          </div>

          {/* Search Component */}
          <HomeSearch />
        </div>
      </section>

      {/* ===================== */}
      {/* FEATURED CARS SECTION */}
      {/* ===================== */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ================== */}
      {/* BROWSE BY MAKE */}
      {/* ================== */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Make</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="h-16 w-auto mx-auto mb-2 relative">
                  <Image
                    src={
                      make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
                    }
                    alt={make.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="font-medium">{make.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================== */}
      {/* WHY CHOOSE US */}
      {/* ================== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Thousands of verified vehicles from trusted dealerships and
                private sellers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
              <p className="text-gray-600">
                Book a test drive online in minutes, with flexible scheduling
                options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Process</h3>
              <p className="text-gray-600">
                Verified listings and secure booking process for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== */}
      {/* BROWSE BY BODY TYPE */}
      {/* ================== */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Body Type</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image
                    src={
                      type.imageUrl || `/body/${type.name.toLowerCase()}.webp`
                    }
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <h3 className="text-white text-xl font-bold pl-4 pb-2 ">
                    {type.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================== */}
      {/* FAQ SECTION */}
      {/* ================== */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================== */}
      {/* CALL TO ACTION (Enhanced) */}
      {/* ================== */}
      <section
        className="relative py-20 overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #1A1716 0%, #8C2D05 40%, #B14B07 65%, #D8791F 85%, #F7A94A 100%)",
        }}
      >
        {/* Glassy overlay for depth */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[3px]"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.4) 100%)",
              WebkitBackgroundClip: "text",
              textShadow:
                "0 3px 10px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.15)",
            }}
          >
            Ready to Find Your Dream Car?
          </h2>

          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block shadow-md">
            Join thousands of satisfied customers who found their perfect
            vehicle through our platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button
              size="lg"
              asChild
              className="bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              <Link href="/cars">View All Cars</Link>
            </Button>

            <SignedOut>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#FF5C00] to-[#B14B07] hover:from-[#FF7B1F] hover:to-[#C86412] text-white font-semibold shadow-xl transition-all duration-300"
              >
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>
    </div>
  );
}
