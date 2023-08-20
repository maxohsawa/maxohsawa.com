import { useState, useEffect } from 'react'
import CTA from '../components/CTA'
import { styled } from 'styled-components'

import testimonials from '../assets/testimonials/testimonials.json'

const CopyContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CopyHeader = styled.h2`
  text-align: center;
  margin: 25px 0 5px;
`

const CopySubHeader = styled.h3`
  text-align: center;
  padding-left: 5px;
  color: var(--secondary);
`

const Copy = styled.p`
  margin: 10px 0;
  width: auto;
  padding: 0 15px;
`

const TestimonialsContainer = styled.div`
  margin: 20px 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 18px;

  @media screen and (min-width: 481px) {
    
  }
  
  @media screen and (min-width: 769px) {
    padding: 20px 35px;
  }
  `
  
  const Testimonial = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 14rem;
  font-size: 0.9rem; 
  line-height: 1.3rem;

  @media screen and (min-width: 481px) {
    
  }
  
  @media screen and (min-width: 769px) {
    font-size: 1.1rem;
    line-height: 1.6rem;
    min-height: 18rem;
  }
`

const TestimonialNo = styled.p`
  width: 100%;
  text-align: right;
  font-size: 0.9rem;

  @media screen and (min-width: 481px) {
    
  }
  
  @media screen and (min-width: 769px) {
    font-size: 1.1rem;
  }
`

const CTACopy = styled.p`
  margin: 50px 30px 10px 30px;
  text-align: center;
`

const Experience = () => {

  const [ currentTestimonial, setTestimonial ] = useState()
  const [ testimonialNo, setTestimonialNo ] = useState()

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimonials.length)
    setTestimonial(testimonials[randomIndex])
    setTestimonialNo(randomIndex + 1)

    const testimonialInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * testimonials.length)
      setTestimonial(testimonials[randomIndex])
      setTestimonialNo(randomIndex + 1)
    }, 5000)

    return () => clearInterval(testimonialInterval)
  }, [])

  return (
    <>
      <CopyContainer>
        <CopyHeader>
          Assistant Instructor
        </CopyHeader>
        <CopySubHeader>
          Columbia University Bootcamps
        </CopySubHeader>
        <CopySubHeader>
          edX Fullstack Web Development
        </CopySubHeader>
        <TestimonialsContainer
          className='neu-less'
        >
          <Testimonial>
            {`"${currentTestimonial}"`}
          </Testimonial>
          <TestimonialNo>
            {`${testimonialNo} out of ${testimonials.length}`}
          </TestimonialNo>
        </TestimonialsContainer>
        <Copy>
          As an Assistant Instructor for the Full Stack Web Development Bootcamp through Columbia University on edX, I played a pivotal role in guiding learners through immersive, market-ready learning experiences. With a passion for education and industry expertise, I provided mentorship, facilitated discussions, and contributed to creating a transformative learning environment that empowered individuals to pursue life-changing professional pathways in the tech industry.
        </Copy>
      </CopyContainer>
      <CopyContainer>
        <CopyHeader>
          Software Engineer
        </CopyHeader>
        <CopySubHeader>
          Various Side Projects
        </CopySubHeader>
        <Copy>
          As a fledgling software engineer, I gained valuable experience working on full stack side projects that utilized React, Node, and MongoDB. One of these projects was Dotodo, a microblogging social media app akin to Twitter but with an integrated todo list feature, emphasizing users' current tasks. I also contributed to Potluck, a social media app designed to organize potluck dinner hosts and guests, with future plans to expand into other communal host-guest projects. Additionally, I worked on ShareCal, a real-time shared calendar application that utilized websockets for collaboration, enabling users to synchronize schedules seamlessly. These experiences enhanced my skills in web development and solidified my passion for full stack engineering.
        </Copy>
      </CopyContainer>

      <CopyContainer>
        <CTACopy>
          If you think I would be a good fit for your team, or you would like to collaborate with me, please find me on LinkedIn, Github, and / or Twitter!
        </CTACopy>
      </CopyContainer>
      <CTA path='/' name='About' />
    </>

  )
}

export default Experience