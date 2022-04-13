import React from 'react'
import Aboutme from '../assets/aboutme.jpg'
import me from '../assets/me.png'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
      style={{
        backgroundImage: `url(${Aboutme})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div style={{ marginBottom: 50 }}>
          <img
            className="inline object-cover w-60 h-60 rounded-full"
            src={me}
            alt="Profile image"
          />
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Thisyahlen Nair, pleasure to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-l font-bold">
              I am passionate about developing and maintaining the user
              interface. Creating tools that improve site interaction regardless
              of the browser, managing software workflow and fixing bugs and
              testing for usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
