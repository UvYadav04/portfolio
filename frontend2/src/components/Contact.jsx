import React, { useEffect, useState } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import { Link } from 'react-router-dom';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
    const [data, setdata] = useState({ name: "", email: "", mobile: "", message: "" })

    const handlemessage = async () => {
        console.log(data)
        if (data.message === "" || data.name === "" || data.email === "" || data.mobile === "") {
            alert("Fill the information properly")
            return
        }

        const response = await fetch("https://portfoliobackend-0g9j.onrender.com/message", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = response.json();
        if (!json.success) {
            alert("something went wrong try again")
        } else {
            alert("Message sent successfully")
        }
    }

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata((pdata) => {
            return { ...pdata, [name]: value }
        })
    }
    useEffect(() => {
        gsap.fromTo('.concol',
            {
                x: -500,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".concol",
                    toggleActions: "play none none none",
                    start: "top 80%",
                    // end: "bottom 60%",
                    // markers: true

                },
                x: 0,
                opacity: 1,
                duration: 1,
            }
        )

    }, [])
    return (
        <div className='conpage container-fluid p-0 '>
            <div className="row conrow mb-3 justify-content-around px-sm-4 px-1 pt-sm-4 pt-2 pb-2 mx-md-5 mx-sm-3 mx-2" id='contact'>
                <div className="col-md-5 col-sm-10 col-11 p-0 concol">
                    <h1 className='text-black text-md-start text-center mt-md-4 mt-sm-1 mt-0 fs-sm-1 fs-2'>Have a project? Let's talk</h1>

                    <div className="conifo d-md-inline d-none ">
                        <h6 className='text-start m-0'>Mob : +91 9813163920</h6>
                        <h6 className='text-start m-0'>Email : dineshnirban01@gmail.com</h6>

                        <ul className='p-0 text-start'>
                            <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://www.linkedin.com/in/dinesh-yadav-264113265/"} className='text-decoration-none text-black opacity-50'><LinkedInIcon /></Link></li>
                            <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://www.instagram.com/mr.oggiii?igsh=MXNieXpmMDBrZXJzcQ=="} className='text-decoration-none text-black opacity-50'><InstagramIcon /></Link></li>
                            <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://x.com/dineshnirban04?t=hZTTivl1xtnSlB8dvyHlPw&s=09"} className='text-decoration-none text-black opacity-50'><XIcon /></Link></li>
                            <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://www.reddit.com/u/uvyadav_04/s/O3mcaRamyH"} className='text-decoration-none text-black opacity-50'><RedditIcon /></Link></li>
                            <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://github.com/UvYadav04"} className='text-decoration-none text-black opacity-50'><GitHubIcon /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="contact col-lg-5 col-md-6 col-sm-10 col-11  p-0 d-flex justify-content-between flex-column">
                    <input type="text" name='name' placeholder='name' className=' mb-lg-3 mb-2 px-1 border-none' onChange={(e) => handlechange(e)} />
                    <input type="number" name='mobile' placeholder='mobile' className=' mb-lg-3 mb-2 px-1 border-none w-100' onChange={(e) => handlechange(e)} />
                    <input type="email" name='email' placeholder='email' className=' mb-lg-3 mb-2 px-1 border-none' onChange={(e) => handlechange(e)} />
                    <textarea name="message" id="message" placeholder='message' cols={20} rows={5} className='px-1 w-100' onChange={(e) => handlechange(e)} ></textarea>
                    <button className='text-white bg bg-black ms-auto px-2 rounded-1 mt-sm-3 mt-2' onClick={() => handlemessage()} >Send Message</button>
                </div>
            </div>
        </div>
    )
}