"use client"
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';

import '../../src/app/mobileview.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';
import { BsPeopleFill } from 'react-icons/bs'; 
import { BiChevronRight } from 'react-icons/bi';

import storiesImage from '../../public/Assets/stories.jpeg';
import picForAbout from '../../public/Assets/GroupPhoto.jpg';
import codingAndSoftwareDev from '../../public/Assets/codingAndSoftwareDev.png';
import CProgramming from '../../../client/public/Assets/Programming.png';


const page = () => {
  
  const [activeContent, setActiveContent] = useState('content1');

  const handleCardClick = (contentId) => {
    setActiveContent(contentId);
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const contentBoxes = document.querySelectorAll('.contentBox');

    cards.forEach((card) => {
      card.addEventListener('mouseover', () => {
        contentBoxes.forEach((contentBox) => {
          contentBox.classList.remove('active');
        });
        document.getElementById(card.dataset.id).classList.add('active');

        cards.forEach((c) => {
          c.classList.remove('active');
        });
        card.classList.add('active');
      });
    });
  }, []);



  return (
    <div className='HomeComponent'>
      <div className="HomeContainer">

        <div className="Home-one">
          <div className="Home-one-inner">
            <h1>Empowering aspiring developers to build, create, and inspire</h1>
            <span>we create a vibrant community of aspiring developers, building real-world projects and inspiring innovation. Shape the future of technology with hands-on experiences, collaboration, and limitless possibilities. Start your coding journey with us today!</span>
            <hr />
          </div>
        </div>

        <div className="about">
        <div className="about-in">
          <div className="about-one">
            <div className="about-one-in">
                <Image
                src={picForAbout}
                >
                </Image>
            </div>
          </div>
          <div className="about-two">
            <div className="about-two-in">
              <div className="about-two-in-header">
                <div className="about-two-in-header-in">
                  <h1>Who we are?</h1>
                </div>
                <div className="about-two-in-one">
                  <div className="about-two-in-one-in">
                    <p>Come be a part of our thriving community of budding developers. Together, we craft tangible projects, sparking innovation. Shape the tech landscape through interactive learning, teamwork, and endless prospects. Begin your coding odyssey with us today!</p>
                  </div>
                </div>
                <div className="about-two-in-two">
                  <div className="about-two-in-two-in">
                    <Link className='about-two-in-two-link' href='/team'>Learn more <BiChevronRight/> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="numbers">
        <div className="numbers-in">
          <div className="numbers-header">
            <div className="numbers-header-in">
              <h1>Our Impact in Figures</h1>
            </div>
          </div>

          <div className="numbers-one">
            <div className="numbers-one-in">
              <div className="numbers-boxes-tot">
                <div className="number-box">
                  <div className="number-box-in">
                    <div className="number-box-in-one">
                      <div className="number-box-in-one-icon">
                        <BsPeopleFill className='nbio-icon' />
                      </div>
                    </div>
                    <div className="number-box-in-two">
                      <h2>100+</h2>
                      <h1>Members</h1>
                    </div>
                  </div>
                </div>

                <div className="number-box">
                  <div className="number-box-in">
                    <div className="number-box-in-one">
                      <div className="number-box-in-one-icon">
                        <BsPeopleFill className='nbio-icon' />
                      </div>
                    </div>
                    <div className="number-box-in-two">
                      <h2>20+</h2>
                      <h1>Projects</h1>
                    </div>
                  </div>
                </div>

                <div className="number-box">
                  <div className="number-box-in">
                    <div className="number-box-in-one">
                      <div className="number-box-in-one-icon">
                        <BsPeopleFill className='nbio-icon' />
                      </div>
                    </div>
                    <div className="number-box-in-two">
                      <h2>25+</h2>
                      <h1>Workshops</h1>
                    </div>
                  </div>
                </div>

                <div className="number-box">
                  <div className="number-box-in">
                    <div className="number-box-in-one">
                      <div className="number-box-in-one-icon">
                        <BsPeopleFill className='nbio-icon' />
                      </div>
                    </div>
                    <div className="number-box-in-two">
                      <h2>5+</h2>
                      <h1>Hackathons</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



        <div className="Home-two">
          <div className="Home-two-inner">
            <div className="Home-two-one">
              <div className="Home-two-one-one">
                <h1>A Club Exclusively for Coding and <span>Software Development</span></h1>
                <h2>Transforming lines of code to limitless possibilities</h2>
              </div>
              <div className="Home-two-one-two">
                  <div className="Home-two-one-two-in">
                    <Image className='Home-two-one-two-in-image' src={codingAndSoftwareDev}></Image>
                  </div>
              </div>
            </div>
          </div>
        </div>





      
      


      




      <div className="upcoming"> 
      <div className="upcoming-header">
        <div className="upcoming-header-in">
          <h1>Upcoming Events and Activities</h1>
        </div>
      </div>
        <div className="upcoming-in">
          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in eve-one-in-ano-one">
                  <p>18th July 20203</p>
                  <p>Vim Master Class: Boost your productivity on the command line</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in ">
                  <div className="eve-two-in-one">
                    <p>Join the Ultimate Vim Master Class!
                      Are you ready to take your text editing skills to the next level? We're excited to announce the Ultimate Vim Master Class, a comprehensive session designed to help you become a Vim power user.</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Register</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>

          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in eve-one-in-ano-two">
                  <p>22nd July 20203</p>
                  <p>Vim Master Class: Boost your productivity on the command line</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Join the Ultimate Vim Master Class!
                      Are you ready to take your text editing skills to the next level? We're excited to announce the Ultimate Vim Master Class, a comprehensive session designed to help you become a Vim power user.</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Register</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>

          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in eve-one-in-ano-three">
                  <p>18th July 20203</p>
                  <p>Vim Master Class: Boost your productivity on the command line</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Join the Ultimate Vim Master Class!
                      Are you ready to take your text editing skills to the next level? We're excited to announce the Ultimate Vim Master Class, a comprehensive session designed to help you become a Vim power user.</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Register</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>


        </div>
      </div>



    <div className="stories">
      <div className="stories-in">
        <div className="stories-one">
          <div className="stories-one-in">
            <div className="soi-one">
              <h1>Classmate Stories</h1>
              {/* <Link href='/'>See all stories</Link> */}
            </div>
            <div className="soi-two">
              <Image
                src={storiesImage}
              ></Image>
            </div>
            <div className="soi-three">
              <h1>Meet Deepak Reddy Gathpa, student, developer, and Club Chair</h1>
            </div>
            <div className="soi-four">
              <p>August 14th 2023</p>
              <p>Deepak Reddy, presently engaged in the pursuit of his computer science degree at Koneru Lakshmaiah Education Foundation, is actively cultivating a coding culture within the university.</p>
            </div>
          </div>
        </div>
        <div className="stories-two">
          <div className="stories-two-in">
            <h1>In just two hours, I instructed a room of novices to create a web application from scratch. That experience affirmed my skills as a capable developer, marking a significant milestone in my journey.</h1>

            <p>Deepak Reddy Gathpa //Founder and Lead Master Trainer</p>
          </div>
        </div>
      </div>
    </div>






    <div className="socialmedia">
      <div className="socialmedia-in">
        <div className="socialmedia-header">
          <div className="socialmedia-header-in">
            <h1>Latest Social Media Feed</h1>
          </div>
        </div>

        <div className="socialmedia-one">
          <div className="socialmedia-one-in">

            <div className="socialmedia-one-one">

            <div className="smoi">
              <div className="smoi-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/Cvw5lvShaeC/" width={328} height={390}  />
              </div>
              </div>
            </div>
            
            <div className="smoi">
              <div className="smoi-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/Cvr40Ico03O/" width={328} height={390}  />
              </div>
              </div>
            </div>
            
            <div className="smoi">
              <div className="smoi-in">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TwitterEmbed url="https://twitter.com/zeroone_codes/status/1688897371575664640?ref_src=twsrc%5Etfw" width={328} height={390} />
                
                </div>
              </div>
            </div>



            </div>

          </div>
        </div>
      </div>
    </div>



  


   


    <div className="partner">
      <div className="partner-in">
        <div className="partner-header">
          <div className="partner-header-in">
            <h1>Partner with us</h1>
            <p>If you're interested in hosting hackathons, talks, and events, we offer the opportunity to collaborate with us. Together, we can support one another and foster mutual growth. Join forces and let's make a positive impact together!</p>
          </div>
        </div>
        <div className="partner-one">
          <div className="partner-one-in">
            <Link className='partner-one-in-link' href='mailto:2100031817@kluniversity.in'>Communicate | Collaborate</Link>
            
          </div>
        </div>
      </div>
    </div>















        {/* <div className='Home-seven'>
        <section className="faq container" aria-level="Frequently Asked Questions">
          <header className="faq_header">
            <h2 className="faq_header-title">Frequently Asked Questions</h2>
          </header>
          <div className="faq__body">
            <details aria-expanded="true" className="faq__panel" open>
              <summary className="faq__label">What is Artificial Intelligence?</summary>
              <div className="faq__panel-body">
                <p className="faq__panel-answer">
                  AI, or Artificial Intelligence, refers to computer systems that can perform tasks requiring human-like intelligence. It involves techniques like machine learning, natural language processing, and robotics. AI systems can learn, analyze data, recognize patterns, and make decisions. Examples include voice assistants and recommendation algorithms. AI has applications in various industries and holds potential for significant advancements. However, ethical and societal concerns must be addressed as AI continues to develop.
                </p>
              </div>
            </details>
            <details aria-expanded="false" className="faq__panel">
              <summary className="faq__label">What is ChatGPT?</summary>
              <div className="faq__panel-body">
                <p className="faq__panel-answer">
                  ChatGPT is an artificial intelligence language model developed by OpenAI. It is based on the GPT (Generative Pre-trained Transformer) architecture, specifically GPT-3.5. The model is designed to generate human-like responses to text inputs, making it suitable for conversational applications. It has been trained on a diverse range of internet text to acquire a broad understanding of language patterns, context, and common knowledge.
                </p>
              </div>
            </details>
            <details aria-expanded="false" className="faq__panel">
              <summary className="faq__label">What's the future of AI?</summary>
              <div className="faq__panel-body">
                <p className="faq__panel-answer">
                  AI's future: Advanced machine learning, automation, enhanced NLP, healthcare revolution, ethical AI, AI-robotics integration, AI-assisted creativity, personalized experiences, cybersecurity defense, and autonomous transportation. Challenges include ethics, privacy, job displacement, and responsible AI use.
                </p>
              </div>
            </details>
          </div>
        </section>
      </div> */}

      





      </div>
    </div>
  )
}

export default page