import React from 'react'
import MaxWidthContainer from '../utils/maxWidthContainer'
import SectionHeader from '../utils/sectionHeader'
import FeedbackCard from '../utils/feedbackCard'
const testimonials = [
  {
    message: "Beegee is a game changer for campus trade. Buying and selling is now so easy and stress-free. Highly recommended!",
    user: "Chinedu Okeke",
    status: "Buyer & Seller"
  },
  {
    message: "Renting out my textbooks has never been this smooth. I found reliable students to rent them almost immediately!",
    user: "Oluwatobi Adeyemi",
    status: "Renter"
  },
  {
    message: "A total lifesaver for cheap study materials. The process is fast and the deals are actually affordable for students.",
    user: "Blessing Ifeanyi",
    status: "Buyer"
  },
  {
    message: "Selling my old gadgets was a breeze. I listed my phone and got serious offers the same day. Great way to make extra cash.",
    user: "Abubakar Musa",
    status: "Seller"
  },
  {
    message: "I rented out my bike with zero worries. The system gives me peace of mind and the students here are respectful.",
    user: "Amina Yusuf",
    status: "Lender"
  },
  {
    message: "My go-to marketplace on campus. I've secured great deals on electronics and books without any stress.",
    user: "Emeka Nwosu",
    status: "Buyer & Seller"
  },
  {
    message: "Listed my dorm furniture and found a renter in no time. Simple interface and very helpful support team.",
    user: "Zainab Bello",
    status: "Renter"
  },
  {
    message: "The best platform for campus students. Whether you're buying or renting, the experience is always 10/10.",
    user: "Tunde Bakare",
    status: "Buyer & Seller"
  }
]
export default function Testimonials() {
  return (
    <MaxWidthContainer>
        <div className="py-25 w-full flex flex-col justify-center gap-25">
            <SectionHeader
                title="Amazing Feedback from Begee User's "
                body='Explore what buyers, sellers and people who rent on our platform are saying about beegee'
                buttonValue='Join the textimony'
                buttonAction='https://chat.whatsapp.com/DJ3TM9S64eW0ui5I9Zgzh6?mode=gi_t'
            />
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
                <FeedbackCard
                    key={index}
                    message={testimonial.message}
                    user={testimonial.user}
                    status={testimonial.status}
                />
            ))}
            </div>
        </div>
    </MaxWidthContainer>
  )
}
