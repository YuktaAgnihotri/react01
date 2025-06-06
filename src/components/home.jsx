import p from '../assets/p.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
function Home(){

    const mystyle ={
      position: "relative",
      zIndex: "2",
     top: "-20vw",
     width: "10vw",
    // left: "68%",
    }
    return(
      <div className='flex-col'>
        <div className='md:flex m-5 p-9 gap-20'>
        <div className='w-[60vw] object-fill'> <img src={p}   className='md:w-[60vw]' alt="imgnot" /> </div>
        <h1 className=' text-3xl  md:text-6xl font-serif ' > Creating <br/>Unique Styles </h1>
        </div>
        <div className='flex mt-7 ml-[63%] gap-5'>
             <img src= {img2} style={mystyle} ></img>
          <img src={img3} style={mystyle}></img>
        </div>
      </div>
    );
}
export default Home;