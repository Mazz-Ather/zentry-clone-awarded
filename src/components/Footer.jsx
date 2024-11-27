import {FaCopyright} from "react-icons/fa6"

export default function Footer() {
    return (
<footer className="relative bg-gradient-to-r from-slate-700 to-slate-950 w-full px-4 py-8 mt-20  md:px-8 lg:px-16 xl:px-24 2xl:px-64">

                       


           <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
                {/* LEFT */}
              <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-7 animate-slideInLeft">
                    <a href={'/'} className="text-2xl text-white hover:text-white/50 transform hover:scale-105 duration-300 font-serif contrast-200">
                        Get Social
                    </a>
                    <p className="text-white/80 text-lg hover:translate-x-2 transition-all duration-300">3522 windinngton street 5 los angeles, california</p>
                    <a href={'mailto:mazzather@gmail.com'} className="text-white/80 text-lg hover:translate-x-2 transition-all duration-300">
                        getsocial@gmail.com
                    </a>
                    <span className="text-white/80 text-lg hover:translate-x-2 transition-all duration-300">+92-335-2861062</span>
                    <div className="flex gap-6">
                        <img src="/img/facebook.svg" alt="" width={40} height={40} className="hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer "/>
                        <img src="/img/gmail.svg" alt="" width={40} height={40} className="hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer  delay-100"/>
                        <img src="/img/instagram.svg" alt="" width={40} height={40} className="hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer  delay-200"/>
                        <img src="/img/linkedin.svg" alt="" width={40} height={40} className="hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer  delay-300"/>
                    </div>


                    {/* <div className="flex gap-6">
                        {['facebook', 'instagram', 'linkedin', 'gmail'].map((social) => (
                            <a key={social} href={`https://www.${social}.com/`} className="hover:scale-110 transition-all duration-300">
                                <img src={`/img${social}.svg`} alt={social} width={40} height={40} />
                            </a>
                        ))}
                    </div> */}
                </div>

                {/* CENTER */}
{/* CENTER */}
<div className="w-full md:w-1/2 lg:w-1/2 hidden lg:flex justify-between">
    {[
        {
            title: 'COMPANY',
            items: ['About us', 'Our Team', 'Careers', 'News', 'Contact us']
        },
        {
            title: 'FAQs',
            items: ['General FAQs', 'Pricing', 'Services', 'Support', 'Resources']
        },
        {
            title: 'HELP',
            items: ['Customer Care', 'Privacy Policy', 'Terms & Conditions', 'Shipping', 'Returns']
        }
    ].map((section) => (
        <div key={section.title} className="flex flex-col gap-7">
            <h2 className="text-white text-xl contrast-200 hover:text-white/50 transition-all duration-300">
                {section.title}
            </h2>
            <div className="flex flex-col gap-4">
                {section.items.map((item) => (
                    <a key={item} href={'/'} className="text-white/70 text-lg hover:text-white transition-all duration-300 hover:translate-x-2 ">
                        {item}
                    </a>
                ))}
            </div>
        </div>
    ))}
</div>

                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-7">
                    <h2 className="text-white/80 text-xl hover:text-white/60 transition-all duration-300">SUBSCRIBE</h2>
                    <p className="text-white/80 text-lg lg:text-xl hover:translate-x-2 transition-all duration-300">Drop Your Email To Connect</p>
                    <div className="flex flex-col sm:flex-row">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-grow text-white/80 text-lg bg-transparent border-2 border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-white transition-all duration-300" 
                        />
                        <button className="text-white/80 text-lg bg-black/70 rounded-md px-4 py-2 hover:bg-black hover:shadow-lg hover:shadow-white hover:scale-105 hover:contrast-150 transition-all duration-300">
                            JOIN
                        </button>
                    </div>
                </div>
           </div>

           {/* BOTTOM */}
           <div className="flex items-center text-white justify-center py-4 border-t border-white/20 mt-12">
           {new Date().getFullYear()}   <FaCopyright className="text-white/80 ml-2 mr-2" />
               <span className="text-white/80 text-sm capitalize">
                  get social digital marketing agency. All rights reserved.
               </span>
           </div>
        </footer>
    )
}
