import insta from '../assets/insta.png'
import facebook from '../assets/face.png'
import linkedin from '../assets/linkedin.png'
function Contact(){
    return(
        <>
        <h1 className=' ml-[20%] p-10 text-3xl  md:text-6xl font-serif'> Connect With Us </h1>
        <div className='  gap-5 ml-[20%] p-10 md:flex md:gap-10'>
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />

        </div>
        </>
        
    );
}
export default Contact;