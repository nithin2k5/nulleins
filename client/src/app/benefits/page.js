import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import studentLeads from '../../../public/Assets/StudentLeads.png';
import benefits_image_two from '../../../public/Assets/benefits_image_two.png';
import benefits_image_three from '../../../public/Assets/benefits_image_three.png';
import benefits_image_four from '../../../public/Assets/benefits_image_four.png';
import benefits_image_five from '../../../public/Assets/benefits_image_five.png';
import benefits_image_six from '../../../public/Assets/benefits_image_six.png';


import './page.css';
import './mobileview.css';

const page = () => {
  return (
    <div className='benefitsComponent'>
        <div className="benefitsContainer">
            <div className="benefits-one">
                <div className="benefits-one-in">
                    <div className="benefits-one-one">
                        <h1>Expand your network through community</h1>
                        <p>Leverage the collective knowledge of the GitHub student community so you can develop the skills needed for future careers in tech.</p>

                        <Link className='benefits-one-one-link' href='/'>Learn More</Link>
                    </div>
                    <div className="benefits-one-two">
                        <div className="benefits-one-two-in">
                           <div className="benefits-one-two-in-image">
                                <Image
                                    src={benefits_image_five}
                                >
                                </Image>
                           </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="benefits-two">
                <div className="benefits-two-in">
                    <div className="benefits-two-one">
                    <Image
                                    src={benefits_image_two}
                                >
                                </Image>
                    </div>
                    <div className="benefits-two-two">
                        <div className="benefits-two-two-in">
                            <h1>Attend curated events by our community</h1>
                            <p>Discover in-person and virtual events ranging from local hackathons to online tech talks covering everything from DevRel and cybersecurity to sharpening skill sets for your career as a professional developer.</p>
                            <Link className='benefits-one-one-link' href='/'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="benefits-two benefit-three">
                <div className="benefits-two-in benefit-three-in">
                    <div className="benefits-two-one">
                    <Image
                                    src={benefits_image_three}
                                >
                                </Image>

                    </div>
                    <div className="benefits-two-two">
                        <div className="benefits-two-two-in">
                            <h1>Attend curated events by our community</h1>
                            <p>Discover in-person and virtual events ranging from local hackathons to online tech talks covering everything from DevRel and cybersecurity to sharpening skill sets for your career as a professional developer.</p>
                            <Link className='benefits-one-one-link' href='/'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="benefits-two">
                <div className="benefits-two-in">
                    <div className="benefits-two-one">
                    <Image
                                    src={benefits_image_four}
                                >
                                </Image>
                    </div>
                    <div className="benefits-two-two">
                        <div className="benefits-two-two-in">
                            <h1>Attend curated events by our community</h1>
                            <p>Discover in-person and virtual events ranging from local hackathons to online tech talks covering everything from DevRel and cybersecurity to sharpening skill sets for your career as a professional developer.</p>
                            <Link className='benefits-one-one-link' href='/'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="benefits-two benefits-six">
                <div className="benefits-two-in benefits-six-in">
                    <div className="benefits-two-one">
                    <Image
                                    src={benefits_image_six}
                                >
                                </Image>

                    </div>
                    <div className="benefits-two-two">
                        <div className="benefits-two-two-in">
                            <h1>Attend curated events by our community</h1>
                            <p>Discover in-person and virtual events ranging from local hackathons to online tech talks covering everything from DevRel and cybersecurity to sharpening skill sets for your career as a professional developer.</p>
                            <Link className='benefits-one-one-link' href='/'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default page