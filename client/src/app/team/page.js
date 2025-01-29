"use client"
import React, {useState} from 'react';

import './page.css'; 

import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from 'react-icons/bs';
import { GrFormView } from 'react-icons/gr';
import { GrHide } from 'react-icons/gr';

import './page.css';


const page = () => {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const [isExpandedOne, setIsExpandedOne] = useState(false);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);
  const [isExpandedThree, setIsExpandedThree] = useState(false);
  const [isExpandedFour, setIsExpandedFour] = useState(false);
  const [isExpandedFive, setIsExpandedFive] = useState(false);
  const [isExpandedSix, setIsExpandedSix] = useState(false);

  const toggleExpandOne = () => {
    setIsExpandedOne(!isExpandedOne);
  };

  const toggleExpandTwo = () => {
    setIsExpandedTwo(!isExpandedTwo);
  };

  const toggleExpandThree = () => {
    setIsExpandedThree(!isExpandedThree);
  };

  const toggleExpandFour = () => {
    setIsExpandedFour(!isExpandedFour);
  };

  const toggleExpandFive = () => {
    setIsExpandedFive(!isExpandedFive);
  };
  const toggleExpandSix = () => {
    setIsExpandedSix(!isExpandedSix);
  };



  return (
    <div className='teamComponent'>
        <div className="teamContainer">
          <div className="team-header">
            <div className="team-header-in">
              <h1>Meet Our Extraordinary Cohort</h1>
              <p>Unite and witness the power of excellence. Our extraordinary cohort is a collective of talent, passion, and innovation. Together, we conquer challenges, fuel growth, and create remarkable achievements. Join us on this incredible journey as we make a lasting impact, driven by the strength of our remarkable team.</p>
            </div>
          </div>

        <div className="chiefs-header">
          <div className="chiefs-header-in">
            <h1>Expert Advisory Board <button className="expand-button" onClick={toggleExpandOne}>
                {isExpandedOne ? 'hide' : 'view'} 
              </button> </h1>
          </div>
        </div>

        {isExpandedOne && (

        <div className="team-1 py-4 md:py-1">
      <div className="container mx-auto px-4">
      <div className="md:flex md:-mx-4 md:mt-0 md:mb-6 team-list flex-wrap gap-y-10">

        <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Lalith Kumar Uppada</h5>
                <span className="text-sm text-gray-500 font-medium">Department of CSE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Advisor</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Parth Deepak Thakkar</h5>
                <span className="text-sm text-gray-500 font-medium">Department of ECE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Advisor</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </div>
      )}

        <div className="chiefs-header">
          <div className="chiefs-header-in">
            <h1>Governing Panel <button className="expand-button" onClick={toggleExpandTwo}>
                {isExpandedTwo ? 'hide' : 'view'} 
              </button></h1>
          </div>
        </div>
        {isExpandedTwo && (

        <div className="team-1 py-4 md:py-1">
      <div className="container mx-auto px-4">
      <div className="md:flex md:-mx-4 md:mt-0 md:mb-6 team-list flex-wrap gap-y-10">

        <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Deepak Reddy Gathpa</h5>
                <span className="text-sm text-gray-500 font-medium">Department of CSE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Governer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sreyanth Tata</h5>
                <span className="text-sm text-gray-500 font-medium">Department of ECE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Secretary</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>


          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </div>
        )}

        <div className="chiefs-header">
          <div className="chiefs-header-in">
            <h1>Board of Directors <button className="expand-button" onClick={toggleExpandThree}>
                {isExpandedThree ? 'hide' : 'view'} 
              </button></h1>
          </div>
        </div>
        {isExpandedThree && (


        <div className="team-1 py-4 md:py-1">
      <div className="container mx-auto px-4">
      <div className="md:flex md:-mx-4 md:mt-0 md:mb-6 team-list flex-wrap gap-y-10">

        <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Deepak Reddy Gathpa</h5>
                <span className="text-sm text-gray-500 font-medium">Department of CSE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Governer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sreyanth Tata</h5>
                <span className="text-sm text-gray-500 font-medium">Department of ECE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Secretary</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>


          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </div>
        )}

        <div className="chiefs-header">
          <div className="chiefs-header-in">
            <h1>Student Ambassadors <button className="expand-button" onClick={toggleExpandFour}>
                {isExpandedFour ? 'hide' : 'view'} 
              </button></h1>
          </div>
        </div>

        {isExpandedFour && (

        <div className="team-1 py-4 md:py-1">
      <div className="container mx-auto px-4">
      <div className="md:flex md:-mx-4 md:mt-0 md:mb-6 team-list flex-wrap gap-y-10">

        <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Deepak Reddy Gathpa</h5>
                <span className="text-sm text-gray-500 font-medium">Department of CSE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Governer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sreyanth Tata</h5>
                <span className="text-sm text-gray-500 font-medium">Department of ECE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Secretary</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>


          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </div>
        )}


        <div className="chiefs-header">
          <div className="chiefs-header-in">
            <h1>Project Leads <button className="expand-button" onClick={toggleExpandFive}>
                {isExpandedFive ? 'hide' : 'view'} 
              </button></h1>
          </div>
        </div>
        {isExpandedFive && (

        <div className="team-1 py-4 md:py-1">
      <div className="container mx-auto px-4">
      <div className="md:flex md:-mx-4 md:mt-0 md:mb-6 team-list flex-wrap gap-y-10">

        <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Deepak Reddy Gathpa</h5>
                <span className="text-sm text-gray-500 font-medium">Department of CSE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Governer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sreyanth Tata</h5>
                <span className="text-sm text-gray-500 font-medium">Department of ECE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Secretary</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>


          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </div>
        )}

        <div className="chiefs-header">
          <div className="chiefs-header-in">
            <h1>Official Members <button className="expand-button" onClick={toggleExpandSix}>
                {isExpandedSix ? 'hide' : 'view'} 
              </button></h1>
          </div>
        </div>
        {isExpandedSix && (

        <div className="team-1 py-4 md:py-1">
      <div className="container mx-auto px-4">
      <div className="md:flex md:-mx-4 md:mt-0 md:mb-6 team-list flex-wrap gap-y-10">

        <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Deepak Reddy Gathpa</h5>
                <span className="text-sm text-gray-500 font-medium">Department of CSE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Governer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sreyanth Tata</h5>
                <span className="text-sm text-gray-500 font-medium">Department of ECE</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Secretary</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>


          <div className="md:w-1/3 md:px-4 mt-10 md:mt-0 rounded-lg">
            <div className="bg-white border rounded-lg border-solid max-w-sm mx-auto team-profile">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <h5 className="mt-4 mb-1 text-gray-500 text-xl font-medium">Sujith Reddy G</h5>
                <span className="text-sm text-gray-500 font-medium">Department of AIDS</span> <br />
                <span className="text-sm text-xl text-gray-700 font-medium">Communications Officer</span>
              </div>
              <div className="flex border-t border-solid divide-x">
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsLinkedin/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300 flex justify-center items-center">
                    <BsInstagram/>
                </a>
                <a href="#" class="text-xl text-gray-600 text-center py-3 flex-grow hover:text-rgb-66-133-244 transition-colors duration-300 flex justify-center items-center">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </div>
        )}
        


        </div>
    </div>
  )
}

export default page