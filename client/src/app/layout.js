import './globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';


import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs"; 
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

import navLogo from '../../public/Assets/Logos/navLogo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZeroOne',
  description: 'The School of Coding | KL University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <body className={inter.className}>
        <div className="Nav">
          <div className="Nav-inner">
            <div className="logo">
              <div className="logo-in">
                <Link href='/'><Image className='logo-in-image' src={navLogo}></Image></Link>
              </div>
            </div>
            <div className="index">
              <div className="index-inner">
                <Link className='index-inner-links' href='/domains'><p>Domains</p></Link>
                <Link className='index-inner-links' href='/activities'><p>Activities</p></Link>
                <Link className='index-inner-links' href='/projects'><p>Projects</p></Link>
                <Link className='index-inner-links' href='/benefits'><p>Benefits</p></Link>
                <Link className='index-inner-links' href='/courses'><p>Courses</p></Link>
                <Link className='index-inner-links' href='/team'><p>Team</p></Link>
                <Link className='index-inner-links' href='/blogs'><p>Blogs</p></Link>
                <Link className='index-inner-links' href='/gallery'><p>Gallery</p></Link>
              </div>
            </div>
            <div className="signin">
              <div className="signin-inner">
                <Link className='signin-link' href="https://t.me/zeroOneCommunity">Participate</Link>
              </div>
            </div>

          </div>
        </div>



        {children}</body>

        <div className="Footer">
          <div className="Footer-in">
            <div className="Footer-one">
              <div className="Footer-one-in">
                <div className="Footer-one-one">
                  <Link className='Footer-foo-link'  href='/'>Privacy Policy</Link>
                  <Link className='Footer-foo-link'  href='/'>Cookie Policy</Link>
                  <Link className='Footer-foo-link' href='/'>Licience & Copyright</Link>
                </div>
                <div className="Footer-one-two">
                  <Link className='Footer-foo-link'  href='/'>Site Map</Link>
                  <Link className='Footer-foo-link'  href='mailto:2100031817@kluniversity.in'>Help</Link>
                  <Link className='Footer-foo-link'  href='mailto:deepakreddygathpa@gmail.com'>Provide Feedback</Link>
                  <Link className='Footer-foo-link' href='mailto:deepakreddygathpa@gmail.com'>Report Errors</Link>
                </div>
              </div>
            </div>

            <div className="Footer-two">
              <div className="Footer-two-in">
                <div className="Footer-two-one">
                  <div className="Footer-two-one-in">
                    <h1>The Mission Statement</h1>
                    <p>The mission of Studnet Activity Center at esteemed Koneru Lakshmaiah Education Foundation is to develop principled, innovative leaders who improve the world and to generate ideas that advance management practice.</p>

                    <h2>ZeroOne</h2>
                  </div>
                </div>
                <div className="Footer-two-two">
                  <div className="Footer-two-two-in">
                    <div className="Footer-two-two-one">
                      <div className="Footer-two-two-one-in">
                        <Link className='Footer-tti-link' href="https://www.instagram.com/zeroone_code"><BsInstagram/></Link>
                        <Link className='Footer-tti-link' href='/'><BsYoutube/></Link>
                        <Link className='Footer-tti-link' href="https://www.linkedin.com/in/deepakreddygathpa/"><BsLinkedin/></Link>
                        <Link className='Footer-tti-link' href="https://twitter.com/zeroone_codes"><BsTwitter/></Link>
                        <Link className='Footer-tti-link' href="https://github.com/DeepakReddyG"><BsGithub/></Link>
                        <Link className='Footer-tti-link' href="https://t.me/zeroOneCommunity"><BsTelegram/></Link>
                      </div>
                    </div>
                    <div className="Footer-two-two-two">
                      <div className="Footer-two-two-two-in">
                        <p>zeroonedevs@kluniversity.in</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="Footer-last">
              <div className="Footer-last-in">
                <p>Designed and Developed by <Link href="https://www.linkedin.com/in/deepakreddygathpa/">Deepak Reddy Gathpa</Link></p>
                <p>© Copyrights by ZeroOne . All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
    </html>
  )
}
