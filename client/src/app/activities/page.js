"use client" 
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import './page.css'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

import workingpic from '../../../public/Assets/working.jpg';



const page = () => {
  return (
    <div className='schedulesComponent'>
       <div className="schedulesContainer">

       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slider-in">
                <div className="slider-one">
                    <div className="slider-one-in">
                        <h1>GITHUB INTRODUCTION WORKSHOP '23</h1>
                        <h2>16th July</h2>
                        <div className="slider-one-last">
                        <div className="register">
                            <Link href='/'>Register</Link>
                        </div>
                        <div className="details">
                            <Link href='/'>Details</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="slider-two">
                    <div className="slider-two-in">
                        <Image
                            src={workingpic}
                            alt='workshop-image'
                            width={500}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="slider-in">
                <div className="slider-one">
                    <div className="slider-one-in">
                        <h1>CICD with Docker and Kubernetes</h1>
                        <h2>21st July</h2>
                        <div className="slider-one-last">
                        <div className="register">
                            <Link href='/'>Register</Link>
                        </div>
                        <div className="details">
                            <Link href='/'>Details</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="slider-two">
                    <div className="slider-two-in">
                        <Image
                            src={workingpic}
                            alt='workshop-image'
                            width={500}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>





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
                <div className="eve-one-in">
                  <p>21st April 2023</p>
                  <p>Introduction to Machine Learning with Python</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vel blanditiis nostrum ducimus debitis error?</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Know more</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>


          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in">
                  <p>21st April 2023</p>
                  <p>Introduction to Machine Learning with Python</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vel blanditiis nostrum ducimus debitis error?</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Know more</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>



          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in">
                  <p>21st April 2023</p>
                  <p>Introduction to Machine Learning with Python</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vel blanditiis nostrum ducimus debitis error?</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Know more</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>



          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in">
                  <p>21st April 2023</p>
                  <p>Introduction to Machine Learning with Python</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vel blanditiis nostrum ducimus debitis error?</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Know more</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>





          <div className="eve">
            <div className="eve-in">

              <div className="eve-one">
                <div className="eve-one-in">
                  <p>21st April 2023</p>
                  <p>Introduction to Machine Learning with Python</p>
                </div>          
              </div>

              <div className="eve-two">
                <div className="eve-two-in">
                  <div className="eve-two-in-one">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vel blanditiis nostrum ducimus debitis error?</p>
                  </div>
                  <div className="eve-two-in-two">
                    <Link className='eve-two-in-two-link' href='/'>Know more</Link>
                  </div>
                </div>          
              </div>

            </div>
          </div>


        </div>
      </div>


       </div>
    </div>
  )
}

export default page