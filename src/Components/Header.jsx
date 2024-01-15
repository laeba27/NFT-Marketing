import dot from "../assets/Dot.svg";
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
const Header = () => {
    return (
        <div className="flex pt-16 px-32 justify-between items-center">
            <div className="w-[50%]" >
                <div>
                    <h1 className="text-4xl font-[900]">DISCOVER, AND COLLECT DIGITAL ART NFTs</h1>
                    <p className="pt-5 pb-20 text-[15px] tracking-wide leading-7 text-zinc-500 font-light w-[360px]">
                        Digital marketplace or crypto collectibles and
                        non-fangibletokens(NFTs). Buy, Sell and Discover exclusive digital
                        assets
                    </p>
                </div>
                <div>
                    <button className="bg-[#3D00B7] text-white px-9 py-3 rounded-3xl">Explore Now</button>
                    <div className="flex justify-between items-center w-72 pt-8">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="text-4xl font-extrabold ">98</h1>
                                <h4 className="text-3xl">K+</h4>
                            </div>
                            <h3 className="text-gray-500">Artwork</h3>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="text-4xl font-extrabold">98</h1>
                                <h4 className="text-3xl">K+</h4>
                            </div>
                            <h3 className="text-gray-500">Artwork</h3>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="text-4xl font-extrabold">98</h1>
                                <h4 className="text-3xl">K+</h4>
                            </div>
                            <h3 className="text-gray-500">Artwork</h3>
                        </div>

                    </div>
                </div>
            </div>


            {/* second div for cards */}
            <div className=" flex  w-[50%]">
            <div className="relative"><img className="" src={card1} alt="" /></div>
            <div className="absolute right-44"><img className="" src={card2} alt="" /></div>
                
            
            </div>
        </div>
    );
};

export default Header;
