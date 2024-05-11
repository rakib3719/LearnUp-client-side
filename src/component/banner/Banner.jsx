


import bannerImg from '../../assets/img/5437683_1-removebg-preview.png'
import useTheme from '../../hook/useTheme';

const Banner = () => {
	const {isDarkMode} = useTheme()
    return (
        <div  className=''>
 <div className={` ${!isDarkMode ? 'bg-gray-100 ': 'border text-white'}  rounded-md text-gray-800`}>
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="  text-3xl md:text-5xl font-bold leading-none sm:text-6xl">Start 
				<span className="dark:text-[#C24914]">learning </span>with us now!
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Begin your educational voyage with our comprehensive platform! Explore varied assignments 
				<br  className="hidden md:inline lg:hidden" /> tailored to improve your skills and foster success.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#C24914] dark:text-gray-50">Start Assinment</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Registration</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={bannerImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</div>
        </div>
    );
};

export default Banner;