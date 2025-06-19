import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DemoFit - Transform Your Body & Mind | Boutique Fitness Studio",
  description:
    "Join our boutique fitness community in Downtown District. Expert trainers, modern equipment, HIIT, yoga, strength training, and personalized wellness programs.",
}

export default function DemoFitLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/studio.jpg"
            alt="Modern fitness studio interior with cardio equipment and city views"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-amber-400">Body & Mind</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our boutique fitness community where personalized training meets holistic wellness. Discover your
            strongest, most confident self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" aria-label="Start your fitness journey - scroll to contact section">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link href="#classes" aria-label="View class schedule">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-amber-500 hover:text-black hover:border-amber-500 px-8 py-3 text-lg transition-colors"
              >
                View Classes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe fitness is more than just physical transformation. It&apos;s about building confidence, community,
              and a sustainable lifestyle that energizes every aspect of your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div
                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
                aria-hidden="true"
              >
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Wellness</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on your complete well-being, combining physical fitness with mental clarity and emotional
                balance for lasting transformation.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
                aria-hidden="true"
              >
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a supportive community where everyone celebrates each other&apos;s victories. Together, we&apos;re stronger
                and more motivated to reach our goals.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
                aria-hidden="true"
              >
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every body is unique. Our expert trainers create customized programs that adapt to your fitness level,
                goals, and lifestyle for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section id="classes" className="py-16 md:py-24" aria-labelledby="schedule-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="schedule-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Weekly Schedule
            </h2>
            <p className="text-lg text-gray-600">Find the perfect class that fits your schedule and fitness goals</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table
                className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
                role="table"
                aria-label="Weekly class schedule"
              >
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Time
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Monday
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Wednesday
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Friday
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                      6:00 AM
                    </th>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">HIIT Blast</div>
                        <div className="text-gray-500">Sarah M.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Yoga Flow</div>
                        <div className="text-gray-500">Emma L.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Strength</div>
                        <div className="text-gray-500">Mike R.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Pilates</div>
                        <div className="text-gray-500">Lisa K.</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                      9:00 AM
                    </th>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Pilates</div>
                        <div className="text-gray-500">Lisa K.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Barre</div>
                        <div className="text-gray-500">Emma L.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">HIIT Blast</div>
                        <div className="text-gray-500">Sarah M.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Yoga Flow</div>
                        <div className="text-gray-500">Emma L.</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                      6:00 PM
                    </th>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Strength</div>
                        <div className="text-gray-500">Mike R.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">HIIT Blast</div>
                        <div className="text-gray-500">Sarah M.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div className="font-medium text-amber-600">Barre</div>
                        <div className="text-gray-500">Emma L.</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="instructors-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="instructors-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Trainers
            </h2>
            <p className="text-lg text-gray-600">
              Expert instructors dedicated to helping you achieve your fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="/images/sarah.jpg"
                  alt="Sarah Martinez - HIIT Instructor demonstrating battle rope exercises"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah M.</h3>
                <p className="text-amber-600 font-medium mb-3">HIIT & Strength Specialist</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With 8+ years of experience, Sarah brings high-energy workouts that challenge and inspire. Certified
                  in NASM and specializes in functional fitness.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="/images/emma.jpg"
                  alt="Emma Lopez - Yoga and Barre Instructor in boxing stance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma L.</h3>
                <p className="text-amber-600 font-medium mb-3">Yoga & Barre Instructor</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Emma&apos;s mindful approach to movement helps students find balance and strength. 200-hour RYT certified
                  with expertise in Vinyasa and restorative yoga.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="/images/mike.jpg"
                  alt="Mike Rodriguez - Personal Trainer and Strength Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike R.</h3>
                <p className="text-amber-600 font-medium mb-3">Strength & Conditioning Coach</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Former collegiate athlete turned trainer, Mike focuses on building functional strength and proper
                  movement patterns. CSCS certified.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-gray-600">Come experience our welcoming space and vibrant community</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <address className="text-gray-600 not-italic">
                      123 Wellness Street
                      <br />
                      Downtown District
                      <br />
                      City, State 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-600 hover:text-amber-600 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 5:30 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 6:00 PM</p>
                      <p>Sunday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3">
                  Schedule a Tour
                </Button>
              </div>
            </div>

            <div className="h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DemoFit Location Map"
                aria-label="Interactive map showing DemoFit location at 123 Wellness Street, Downtown District"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">DemoFit</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                  123 Wellness Street, Downtown District
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                  <a href="mailto:hello@demofit.com" className="hover:text-white transition-colors">
                    hello@demofit.com
                  </a>
                </p>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex md:justify-end space-x-4">
                <Link
                  href="https://instagram.com/demofit"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="https://facebook.com/demofit"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="https://twitter.com/demofit"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DemoFit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
