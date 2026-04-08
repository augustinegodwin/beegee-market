import React from 'react'
import MaxWidthContainer from '../utils/maxWidthContainer'
import SectionHeader from '../utils/sectionHeader'
import FeedbackCard from '../utils/feedbackCard'

export default function Testimonials() {
  return (
    <MaxWidthContainer>
        <div className="py-25 w-full flex flex-col justify-center gap-25">
            <SectionHeader
                title="Amazing Feedback from Begee User's "
                body='Explore what buyers, sellers and people who rent on our platform are saying about beegee'
                buttonValue='Join the textimony'
                buttonAction='/store'
            />
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
            </div>
        </div>
    </MaxWidthContainer>
  )
}
