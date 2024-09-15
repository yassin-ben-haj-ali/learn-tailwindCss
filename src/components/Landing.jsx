
const Landing = () => {
  return <section className="bg-[#1c2230]">
        <div className="container">
           <div className="element-center flex-col pt-[200px]">
           <div className="w-[750px] max-w-full">
               <img src="/src/assets/images/illustration-intro.png" alt="landing-img" className="w-full h-fit"/>
           </div>
           <div className="text-white text-center">
             <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
                  All your files in one secure location,
                  <br/>
                  accessible anywhere.
             </h1>
             <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae, provident maiores doloremque nostrum error beatae suscipit necessitatibus dolore consequatur itaque cum natus ea alias illo possimus voluptates iusto perferendis.
             </p>
           </div>
           <a href="/" className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium">
              Get started
           </a>
           </div>
        </div>
        <div className="w-full h-[200px]">
            <img src="/src/assets/images/bg-curvy-desktop.svg" alt="curvy-img" className="w-full h-full" />
        </div>
    </section>
  
}

export default Landing
