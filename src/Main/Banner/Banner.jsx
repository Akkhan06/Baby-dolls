import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] rounded-xl ">
        <div id="slide1" className="carousel-item relative w-full rounded-xl ">
          <img src='https://img.freepik.com/free-vector/plain-background-with-little-girl-jumping_1308-42197.jpg?w=1380&t=st=1684383844~exp=1684384444~hmac=9b35d9f29e1c9ce84befcf8732a0e0eaa985cb795f681c9fef639cbf9edd6123' className="w-full" />
          <div className="absolute md:w-3/4 mx-auto text-white h-full flex items-center right-0 left-0 ">
            <div className="md:w-1/3 ml-10"><h2 className="text-2xl md:text-5xl font-bold">A Wonderland of Baby Dolls</h2> 
            <p className="py-4 w-2/3 md:w-auto">A Wonderland of Baby Dolls: Step into a whimsical realm where enchanting and lifelike baby dolls await</p>

            <button className="btn btn-warning text-white">Discover More</button>
           </div>
          </div>

          <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn md:btn-circle btn-sm">❮</a> 
      <a href="#slide2" className="btn md:btn-circle btn-sm">❯</a>
    </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full rounded-xl">
        <img src='https://img.freepik.com/free-vector/plain-background-with-woman-pink-jacket_1308-44121.jpg?w=1380&t=st=1684384751~exp=1684385351~hmac=4b4727236387e94926af96098f9a91ea51024232f911086ccfe9dd82832494e0' className="w-full" />
        <div className="absolute ml-10 md:w-3/4 mx-auto text-white h-full flex items-center justify-end right-0 left-0 ">
            <div className="w-2/3 md:w-1/3 ml-10"><h2 className="text-2xl md:text-6xl font-bold">The Perfect Playmates for Little Ones</h2> 
            <p className="py-4 md:w-auto">The Perfect Playmates for Little Ones: Discover a collection of delightful baby dolls that are ideal</p>

            <button className="btn btn-warning text-white">Discover More</button>
           </div>
          </div>

          <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn md:btn-circle btn-sm">❮</a> 
            <a href="#slide3" className="btn md:btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full rounded-xl">
        <img src='https://img.freepik.com/free-vector/background-template-design-with-happy-girl-pink-pajamas_1308-42324.jpg?t=st=1684386534~exp=1684387134~hmac=3d3ac86b712eb6c8b587fa9cc2ebf6b8e0289cc18f9a40d58b258089467a6af1' className="w-full" />
        <div className="absolute ml-10 md:w-3/4 mx-auto text-white h-full flex items-center justify-end right-0 left-0 ">
            <div className="w-2/3 md:w-1/3 ml-10"><h2 className="text-2xl md:text-6xl font-bold">A Magical World of Baby Doll Delights</h2> 
            <p className="py-4 md:w-auto">A Magical World of Baby Doll Delights: Enter a realm filled with enchanting dolls, pure joy guaranteed</p>

            <button className="btn btn-warning text-white">Discover More</button>
           </div>
          </div>

          <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn md:btn-circle btn-sm">❮</a> 
            <a href="#slide4" className="btn md:btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full rounded-xl">
        <img src='https://img.freepik.com/free-vector/background-template-design-with-happy-girl_1308-43898.jpg?t=st=1684384751~exp=1684385351~hmac=2fe6bb4d747152bf396d306e92a83d4cb5e0ccab7c1574f75265b002117e0282' className="w-full" />
          <div className="absolute md:w-3/4 mx-auto text-black h-full flex items-center right-0 left-0 ">
            <div className="md:w-1/3 ml-10"><h2 className="text-2xl md:text-6xl  font-bold">Adorable Baby Dolls for Every Child</h2> 
            <p className="py-4 text-white w-2/3 md:w-auto">Adorable Baby Dolls for Every Child: Discover lovable companions that bring smiles to all children</p>

            <button className="btn btn-warning text-white">Discover More</button>
            </div>
          </div>

          <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn md:btn-circle btn-sm">❮</a> 
            <a href="#slide1" className="btn md:btn-circle btn-sm">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;