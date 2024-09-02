import Image from "next/image";

export default function Home() {
  return (
    <main>
 <nav>
  <ul className="flex justify gap: 1.25rem;" >
    <li><a href="#">HOME</a></li>
    <li><a href="#">RESTURNT</a></li>
    <li><a href="#">SERVICES</a></li>
    <li><a href="#">CART</a></li>
    <li><a href="#">CART</a></li>

  </ul>
 </nav>
      <div className=" flex  ">
        <div className="mx-[220px] mt-[100px] ">
      <h1 className="font-bold  text-6xl leading-normal"> Enjoy Delicious</h1>
       <h1 className="font-bold text-4xl leading-normal ">Food in <b className="text-[#FFC624]">Healthy Life</b></h1>
        <p className="w-5/12 text-3xl leading-normal">Tandori masala is an Indian spice blend consisting of a variety of space Tandoori masala is an Indian spice blend consisting of variety of spice</p>
        <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px]">ORDER NOW</button>
        </div>
        <div>
        <img src="/images/chicken.jpg"/>
        </div>
      </div>
      <div className="text-center font-bold">
        <p className="pt-72">Online store</p>
        <h3 className="font-bold text-4xl ">Popular Foods</h3>
      </div>
      <div className="flex mx-[220px] mt-[100px] mr-[10px] gap-44 pl-0.5" >
        <div>
          <img src="/images/fruitfood.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate"/>
          <h1 className="ml-32 ">Fruit dish</h1>
          <p className="ml-32">Dinko Food</p>
          <p className="ml-32">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className=" ml-28 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Add to Cart $696</button>
        </div>
        <div>
          <img src="/images/fruitfood.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate"/>
          <h1 className="ml-32" >Fruit dish</h1>
          <p className="ml-32">Dinko Food</p>
          <p className="ml-32">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className=" ml-32 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Add to Cart $696</button>
        </div>
        <div>
        <img src="/images/seafoof.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate" />
          <h1 className="ml-32">Sea fish dish</h1>
          <p className="ml-32">Dinko Food</p>
          <p className="ml-32">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className=" ml-32 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Add to Cart $696</button>
        </div>
        <div>
        <img src="/images/pizaa.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate"/>
          <h1 className="ml-32">Fresh Food</h1>
          <p className="ml-32">Dinko Food</p>
          <p className="ml-32">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className=" ml-32 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Add to Cart $696</button>
        </div>
      </div>
      <br></br>
      <div className="flex ml-60 mt-3.5">
          <div>
          <h1 className="font-bold text-4xl mb-1.5 my-40 text-7xl pt-72 ">Our special Offer</h1>
          <p className="w-5/12 text-3xl" >Best cooks and best delivery guys all at your service.Hot tastyfood will reach you in 60 minutes</p>
          <button className=" ml-32 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px] ">See All Menu</button>
        </div>
        <div>
          <img src="/images/Hamburger.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate" />
      </div>
      </div>
      <div className="text-center text-lg my-20 pt-72">
        <p className="text-2xl">Quality Food</p>
        <h1 className="text-5xl font-bold">Get The Best Offers</h1>
        <p className=" text-center my-20 text-lg ">The food at your doorstep.Why starve when you have us.You hunger partner.Straight out of the oven to your doorstep</p>
      </div>
      <div className="flex gap-y-2.5">
      <div className="flex ml-40">
        <div >
          <h1 className="text-2xl font-bold">Any day offer</h1>
          <p className="text-2xl font-bold">New Phenomena Burger Taste</p>
          <p className="text-[#FFC624] text-3xl font-bold w-3.5">$12.90</p>
        </div>
        <div className="text-center ">
          <img src="/images/Hamburger.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate"/>
        </div>
      </div>

      <div className="flex ml-40">
        <div >
          <h1 className="text-2xl font-bold">Any day offer</h1>
          <p className="text-2xl font-bold">New Phenomena Burger Taste</p>
          <p className="text-[#FFC624] text-3xl font-bold w-3.5">$12.90</p>
        </div>
        <div className="text-center ">
          <img src="/images/Hamburger.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate"/>
        </div>
      </div>

      <div className="flex ml-40">
        <div >
          <h1 className="text-2xl font-bold">Any day offer</h1>
          <p className="text-2xl font-bold">New Phenomena Burger Taste</p>
          <p className="text-[#FFC624] text-3xl font-bold w-3.5">$12.90</p>
        </div>
        <div className="text-center ">
          <img src="/images/Hamburger.jpg" className="w-80 h-64 rounded-full mb- w-border- border-slate"/>
        </div>
      </div>
      </div>
      <div>
        <h1 className="text-center  my-20 text-5xl font-bold pt-72">Our Services</h1>
      </div>
      <div className="flex gap-96 px-72">

        <div>
          <img src="/images/restraunt.png" className="w-40 h-52  rounded-full mb- w-border- border-slate" />
          <p className="text-2xl font-bold">55+ Restaurants</p>
        </div>

        <div>
          <img src="/images/percent.png" className="w-40 h-52  rounded-full mb- w-border- border-slate"/>
          <p className="text-2xl font-bold">Good Quality</p>
        </div>

        <div>
          <img src="/images/vectordeliver.jpeg" className="w-40 h-52 rounded-full mb- w-border- border-slate"/>
          <p className="text-2xl font-bold">Discount System</p>
        </div>

        <div>
          <img src="/images/deliver.png" className="w-40 h-52 rounded-full mb- w-border- border-slate"/>
          <p className="text-2xl font-bold">Good Quality</p>
        </div>

      </div>
      <div className="text-center  my-20 leading-10 pt-72">
        <p className="font-bold text-2xl">Testimonial</p>
        <h1 className="text-5xl font-bold">What Our Clients Are Saying</h1><br/>
        <p className="text-3xl w-9/12 ml-40"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
          <div className="flex pl-96 gap-56">
          <div>
            <img src="/images/testimony.jpg" className="w-36 h-44 rounded-full mb- w-border-"/>
          </div>
          <div>
            <img src="/images/witness.jpg" className="w-36 h-44 rounded-full mb- w-border-"/>
          </div>
          <div>
            <img src="images/testimony.jpg" className="w-36 h-44 rounded-full mb- w-border-"/>
          </div>
          <div>
            <img src="images/witness.jpg" className="w-36 h-44 rounded-full mb- w-border-"/>
          </div>
          <div>
            <img src="images/testimony.jpg" className="w-36 h-44 rounded-full mb- w-border-"/>
          </div>
          </div>
          <div className="text-center pt-16">
            <h3 className="text-5xl font-bold">Mitchell Marsh</h3>
            <p className="text-3xl">CEO,Bexon Agency</p>
          </div>
          <div className="flex gap-72 pt-64 pl-96">
            <div>
              <img src="/images/phone.png"/>
            </div>
            <div>
              <p className="text-3xl text-amber-500">Download Our App</p>
              <h2 className="text-5xl font-serif">It is all here.</h2>
              <h2 className="text-5xl font-serif">All in one App</h2>
              <p className="text-3xl w-5/12">Discover your local ,on-demand delivery or pickup from reastraunt nearby grocery and convinience stores ,and more.</p>
            </div>
          </div>
          <div className="flex gap-56 pl-96 pt-72">
            <div>
              <h1 className="text-5xl font-serif" >Subscribe Our Newsletter</h1>
              <p className="text-2xl">Subscribe our newsletter to get News</p>
            </div>
            <div>
            <input placeholder="Your Email Address...." className="text-2xl text-stone-950"/>
            </div>
            <div>
              <button className="ml-32 bg-yellow-500 text-3xl text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Subscribe</button>
            </div>
          </div>
      <div className="flex border-8 bg-black text-slate-50 ">
        <div className="px-1.5">
          <h1 className="text-3xl font-serif font-bold ">Food House</h1>
          <p className="text-2xl font-serif w-3/12">Best cooks and best delivery guys all ata our service .Hot tastyfood  will reach you in 60 mins</p>
          <div className="flex gap-1">
            <div>
              <img className="w-11"  src="/images/facebookicon.png"/>
            </div>

            <div>
              <img className="w-11" src="/images/linkedinicon.png"/>
            </div>

            <div>
              <img className="w-11" src="/images/twittericon.png"/>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Company</h1>
          <p>Career</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Press Info</p>
          <p>Features</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Fudo</h1>
          <p>Why Fudo</p>
          <p>How it works</p>
          <p>Why choose Us</p>
          <p>Client Stories</p>
          <p>Gallery</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Menu</h1>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Fast Food </p>
          <p>Drinks</p>
        </div>
      </div>
    </main>
  );
}
     
  