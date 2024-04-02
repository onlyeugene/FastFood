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

  const handleInputClick = (e) => {
    e.target.classList.toggle('bg-lime-500'); // Toggle the class to change background color
    // Disable scrolling on body
  };

  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true)
  };
  
  const handleCloseModal = () => {
    setShowModal(false); // Open the modal when "Login" is clicked
  document.body.style.overflow = 'hidden'; // Enable scrolling on body
};

  



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
                <li onClick={handleLoginClick}>Login</li>
            </ul>
        </nav>
      </div>
      {showModal && (
      <div className='dark'>
        <div className='bg-lime-600 w-[rem] p-[3rem] px-[5rem] absolute top-[20rem] left-1/3 flex flex-col items-center'>
        <img src={x} alt="close icon"  className='top-3 right-3 absolute w-[1.3rem]' onClick={handleCloseModal}/>
          <div>
            <img src={padlock} alt="padlock icon" className='w-[2.5rem] pb-5'/>
          </div>
          <form action="">
              <div className='flex flex-col gap-[1rem] '>
                <input type="username" placeholder='Username' className='outline-none py-[.3rem] px-[.5rem] pr-[8rem] border bg-transparent text-[.8rem] text-white' onClick={handleInputClick} />
                <input type="password" placeholder='Password' className='outline-none py-[.3rem] px-[.5rem] pr-[8rem] border bg-transparent text-[.8rem] text-white' onClick={handleInputClick} />
                <p className='text-[.7rem] py-1 pb-5'>Forgot Password?</p>
              </div>
              <input type="submit" placeholder='Submit'  className='outline-none py-[.3rem] px-[6.9rem] border bg-transparent text-[.8rem]'/>  
          </form>
        </div>
      </div>
      )}
    </div>
  )
}

export default Navbar
