import Fade from './Fade'
const Gallery = () => {
  return (
    <div className='mt-[90vh] mx-24 max-md:mx-5'>
        <div className="wrapper">
            <h1 className='text-5xl poppins text-right font-bold text-sky-800 max-md:text-2xl'>Your Memories</h1>
            <p className="text-xl poppins text-right text-sky-800 max-md:text-sm">your 21's memorie hehe</p>
            <Fade>
            <div className="wrapper my-10 flex flex-wrap justify-center gap-5">
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/1.jpg" alt="1" />
                <p className="py-5 max-md:text-sm">who you look huh, smh</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/2.jpg" alt="2" />
                <p className="py-5 max-md:text-sm">Sleepy gf :p</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/3.jpg" alt="3" />
                <p className="py-5 max-md:text-sm">Kemana neng? </p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/5.jpg" alt="5" />
                <p className="py-5 max-md:text-sm">"Maluuu" xD </p>
              </div>
            </div>
            </Fade>
            <Fade>
            <div className="wrapper my-10 flex flex-wrap justify-center gap-5">
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/4.jpg" alt="1" />
                <p className="py-5 max-md:text-sm">Nyari makan xD </p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/5.jpg" alt="2" />
                <p className="py-5 max-md:text-sm">smile more!</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/6.jpg" alt="3" />
                <p className="py-5 max-md:text-sm">Cewenya siapa ini?</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/7.jpg" alt="5" />
                <p className="py-5 max-md:text-sm">wink failed :p</p>
              </div>
            </div>
            </Fade>
            <Fade>
            <div className="wrapper my-10 flex flex-wrap justify-center gap-5">
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/8.jpg" alt="1" />
                <p className="py-5 max-md:text-sm">jalan ga sama aku :(</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/9.jpg" alt="2" />
                <p className="py-5 max-md:text-sm">Sleepy gf(2) :p</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/14.jpg" alt="3" />
                <p className="py-5 max-md:text-sm">Wleee :p </p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[15rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/12.jpg" alt="5" />
                <p className="py-5 max-md:text-sm">Sumpah sayang  xD </p>
              </div>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Gallery