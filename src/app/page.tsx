import Image from "next/image";

export default function Home() {
  return (
 <div className="   h-[800px] flex justify-center items-center bg-[url('/background.avif')]">
   {/* Background Image */}
   
 <div className="p-10 backdrop-blur-sm bg-white/30 rounded-2xl">
   <form className="flex flex-col gap-5">
    <h1 className=" font-sans font-bold text-3xl text-white ">Contact Form</h1>
    <input className="p-3 w-[350px] rounded  " type="text" placeholder="Enter Name"/>
    <input className="p-3 rounded" type="text" placeholder="Enter Email"/>
    <input className="p-3 rounded" placeholder="Enter Number" type="text"/>
     <select className="p-3.5 rounded text-gray-400 bg-white">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  <textarea className="p-3 rounded" placeholder="Message"></textarea>
    <button className="bg-blue-500 p-3 text-white font-sans font-bold hover:bg-blue-600  duration-1000">Submit</button>
   </form>
 </div>
</div>

   );
}
