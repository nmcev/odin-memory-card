import github from '../assets/icons/github.svg'
function Footer() {
    return (
        <>
          <small className="text-gray-100 font-custom2 text-sm font-bold flex justify-center items-center">
               Made with ❤️ by &nbsp;<b className=' font-custom3 text-xl'>Muha&nbsp;</b>
          </small>
        
           <a href="https://github.com/nmcev" className="text-gray-100 font-custom2 text-sm font-bold">
             <img src={github} alt="github icon" className=" w-4 mr-2" />
           </a>
        </>
    )
}

export default Footer;
