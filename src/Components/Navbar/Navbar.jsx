import React, { useEffect, useState } from 'react'
import padlock from '../../assets/padlock.png'
import x from '../../assets/x-mark.png'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // const[Modal, setModal] =useState(false)
  // const toggleModal = () => {
  //   setModal(!Modal);


  //   // Add or remove the class on the body
  //   if (!isModal) {
  //     document.body.classList.add("modal-open");
  //   } else {
  //     document.body.classList.remove("modal-open");
  //   }
  // };
  // const [showModal, setShowModal] = useState(false); 
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };


  return (
    <div className={`w-full z-20 text-white fixed top-0 ${scrolled ? 'bg-lime-600' : ''}`}>
      <div className='flex justify-between py-[1rem] px-[2rem]'>
        <h1 className=''>FastFood</h1>
        <nav>
            <ul className='flex gap-[1.5rem]'>
                <li>Home</li>
                <li>Restaurants</li>
                <li>About</li>
                <li>Faq</li>
                <li>Pages</li>
                <li>Login</li>
            </ul>
        </nav>
      </div>
      <div className='dark'>
        <div className='bg-lime-600 w-[30rem] p-[12rem] absolute'>
          <img src={padlock} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
