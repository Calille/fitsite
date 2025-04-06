import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClassSchedule from '@/components/ClassSchedule';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Class Schedule | TP Health & Fitness Coaching',
  description: 'View our weekly class schedule and sign up for group fitness classes, including strength training, HIIT, yoga, and more.',
};

export default function SchedulePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-gradient-to-r from-black to-gray-900 text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/schedule-hero.jpg"
              alt="TP Health & Fitness Class Schedule"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Schedule</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Find the perfect class for your fitness journey with our diverse range of offerings.
            </p>
          </div>
        </section>

        {/* Schedule Component */}
        <ClassSchedule />

        {/* Additional Info Section */}
        <section className="py-16 bg-[#56b5bd] text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
                <div className="space-y-4 text-white">
                  <p>
                    Classes can be booked up to 7 days in advance through our booking system or by calling our front desk.
                  </p>
                  <p>
                    Members receive priority booking and can reserve classes up to 14 days in advance.
                  </p>
                  <p>
                    Please arrive 10-15 minutes before your class to check in and set up your equipment.
                  </p>
                  <p>
                    If you need to cancel, please do so at least 4 hours before the class to avoid late cancellation fees.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Class Policies</h2>
                <div className="space-y-4 text-white">
                  <p>
                    Bring a water bottle, towel, and appropriate footwear for all classes.
                  </p>
                  <p>
                    First-time participants are encouraged to arrive 15 minutes early for a brief orientation.
                  </p>
                  <p>
                    All fitness levels are welcome. Our instructors provide modifications for all exercises.
                  </p>
                  <p>
                    We recommend consulting with your physician before starting any new fitness program.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contact" className="btn-primary">
                Book a Class Now
              </Link>
            </div>
          </div>
        </section>

        {/* Instructor Highlight */}
        <section className="py-16 bg-[#45a4ac] text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Expert Instructors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Jason Miller',
                  role: 'HIIT & Strength Specialist',
                  image: '/instructor-1.jpg',
                  classes: ['HIIT Circuit', 'HIIT & Core']
                },
                {
                  name: 'Sarah Parker',
                  role: 'Strength Coach',
                  image: '/instructor-2.jpg',
                  classes: ['Strength Foundations', 'Full Body Strength']
                },
                {
                  name: 'Emma Lewis',
                  role: 'Yoga Instructor',
                  image: '/instructor-3.jpg',
                  classes: ['Yoga Flow', 'Recovery Yoga']
                },
                {
                  name: 'Mike Johnson',
                  role: 'CrossTraining Expert',
                  image: '/instructor-4.jpg',
                  classes: ['CrossTraining', 'Weekend Warrior']
                }
              ].map((instructor, index) => (
                <div key={index} className="bg-[#56b5bd] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 w-full">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                    <p className="text-white mb-2">{instructor.role}</p>
                    <p className="text-sm text-white mb-3">Classes:</p>
                    <ul className="text-sm text-white">
                      {instructor.classes.map((className, i) => (
                        <li key={i} className="mb-1">• {className}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 