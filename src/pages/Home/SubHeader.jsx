import React from 'react';

const SubHeader = () => {
    return (
      
<div className="bg-cover bg-center  h-auto text-white py-24 px-10 mt-20 object-fill my-6" style={{ backgroundImage: `url("https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237221.jpg?w=1380&t=st=1684399687~exp=1684400287~hmac=d3d424963f28f92356da66189ee393ce4bbc32d4361fecad75bc9bc3717cd6ff")` }}>
       <div class="md:w-1/2 mx-auto text-center space-y-2">
        <p class="font-bold text-sm uppercase">Services</p>
        <p class="text-6xl font-bold">Top Toys Trend </p>
        <p class="text-3xl mb-10 leading-none">Multimedia products</p>
        <button className="btn btn-active bg-purple-800 border-none">Shop now</button>
        </div>  
    </div>
    );
};

export default SubHeader;