import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/logo-cultured-kid.svg'
import { BsArrowRight, BsCart2 } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'
import { IoShareOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import Drawing from '../public/assets/drawing.png'
import Marquee from "react-fast-marquee";


export default function Home() {
  const paintings = [
    {
      imageUrl: 'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
      name: 'Wallowing breeze',
      artist: 'Hettie Richards',
      type: 'oil in canvas',
      dimensions: '26in x 36in',
      year: '2008',
      price: "$620"
    },
    {
      imageUrl: 'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2',
      name: 'Wallowing breeze',
      artist: 'Hettie Richards',
      type: 'oil in canvas',
      dimensions: '26in x 36in',
      year: '2008',
      price: "$620"
    },
    {
      imageUrl: 'https://www.creativeboom.com/uploads/articles/a4/a41200a5667f1051d5d8f508d4b15ae4393b7f7d_810.jpg',
      name: 'Wallowing breeze',
      artist: 'Hettie Richards',
      type: 'oil in canvas',
      dimensions: '26in x 36in',
      year: '2008',
      price: "$620"
    },
    {
      imageUrl: 'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935',
      name: 'Wallowing breeze',
      artist: 'Hettie Richards',
      type: 'oil in canvas',
      dimensions: '26in x 36in',
      year: '2008',
      price: "$620"
    },
    {
      imageUrl: 'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
      name: 'Wallowing breeze',
      artist: 'Hettie Richards',
      type: 'oil in canvas',
      dimensions: '26in x 36in',
      year: '2008',
      price: "$620"
    }
  ]

  const artists = [
    {
      name: 'Mike Lambert',
      category: 'Painter',
      address: 'Texas',
      imageUrl: 'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
    },
    {
      name: 'Albert Martins',
      category: 'Drawer',
      address: 'New York',
      imageUrl: 'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2'
    },
    {
      name: 'Mike Lambert',
      category: 'Painter',
      address: 'Texas',
      imageUrl: 'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935'
    },
    {
      name: 'Albert Martins',
      category: 'Drawer',
      address: 'New York',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      name: 'Mike Lambert',
      category: 'Painter',
      address: 'Texas',
      imageUrl: 'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
    },

  ]
  return (
    <>
      <header className="font-Vollkorn ">
        <nav className="py-10 px-10 flex justify-between ">
          <div className="w-1/5">
            <Link passHref href='/'>
              <a>
                <Image src={Logo} alt="logo" ></Image>
              </a>
            </Link>
          </div>
          <div className="flex justify-evenly my-auto w-1/2 py-2 text-lg ">
            <Link passHref href='/'>
              Paintings
            </Link>
            <Link passHref href='/'>
              Drawings
            </Link>
            <Link passHref href='/'>
              Sculptures
            </Link>
            <Link passHref href='/'>
              Artists
            </Link>
          </div>
          <div className="flex w-1/5 justify-evenly my-auto  py-3 ">
            <button><IoIosSearch className="w-5 h-5" /></button>
            <button><BsCart2 className="w-5 h-5" /></button>
            <button><AiOutlineUser className="w-5 h-5" /></button>
          </div>
        </nav>
        <div className="py-6 flex justify-between mt-5 px-10">
          <div className="w-3/5 text-center text-5xl font-thin"><h2>Featured Paintings</h2></div>
          <div className="flex justify-end "><BsArrowRight className="w-20 h-6 my-auto" /></div>
        </div>
        <div className="py-6">
          <Marquee pauseOnHover gradient={false}>
            {
              paintings.map(painting => (
                <>
                  <div className="my-6 flex justify-evenly hover:shadow-xl hover:border hover:border-black" key={painting.name}>
                    <div className=" px-2 py-2 mx-3 ">
                      <div className="w-[300px] h-[300px] relative my-auto ">
                        <Image src={painting.imageUrl} alt='painting' className="drop-shadow-lg"
                          layout='fill'
                          objectFit='contain' />
                      </div>
                      <div className="my-3">
                        <h3 className="font-bold text-lg ">{painting.name}</h3>
                        <h4 className="font-semibold text-gray-800">{painting.artist}</h4>
                        <h5 className="font-medium text-gray-600 italic">{painting.type}, {painting.year}</h5>
                        <h5 className="font-extralight text-gray-600 italic">{painting.dimensions}</h5>
                      </div>
                      <div className="p-2 justify-between flex">
                        <div className="my-auto"><h3 className="font-bold text-gray-600 my-auto "></h3>{painting.price}</div>
                        <div className="my-auto flex w-1/4 justify-between" >
                          <button className="p-1 bg-gray-200  w-7 h-7"><IoShareOutline className='w-5 h-5 text-black  my-auto' /></button>
                          <button className="p-1 bg-black  w-7 h-7"><BsCart2 className='w-5 h-5 text-white my-auto' /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            }
          </Marquee>
        </div>
      </header>
      <div className=" py-10 font-Vollkorn bg-gray-100 ">
        <div className="w-2/5 p-3 px-10  text-center">
          <h2 className="text-2xl text-gray-800">Featured Artists</h2>
        </div>
        <div className="flex flex-wrap  overflow-hidden justify-evenly py-3">
          <Marquee pauseOnHover speed={6} direction='right' gradient={false}>
            {
              artists.map(artist => (
                <div className="border flex border-gray-300 my-2 mx-2 w-1/4 overflow-hidden hover:border-gray-700 hover:shadow-md" key={artist.name}>
                  <div className="w-[200px] h-[150px] bg-blue-200 relative">
                    <Image src={artist.imageUrl} alt='painting' className="drop-shadow-lg my-auto"
                      layout='fill'
                      objectFit='cover' />
                  </div>
                  <div className="text-left px-6 py-4 h-[100px]">
                    <h2 className="font-semibold text-lg text-gray-800">{artist.name}</h2>
                    <h3 className="font-extralight text-lg text-gray-600 italic ">{artist.category} , {artist.address}</h3>
                  </div>
                </div>
              ))
            }

          </Marquee>
        </div>
      </div>
      <div className="px-10 py-10 flex align-middle content-center justify-evenly font-Vollkorn my-14">
        <div>
          <h3 className="font-extralight text-xl text-gray-600 italic">On a budget?</h3>
          <h4 className="text-4xl text-gray-800">Shop by Price</h4>
        </div>
        <div className="w-3/5 flex justify-evenly my-3">
          <button className="py-1 px-4 border border-gray-700 hover:border-2">Under $500</button>
          <button className="py-1 px-4 border border-gray-700 hover:border-2">$500 - $1000</button>
          <button className="py-1 px-4 border border-gray-700 hover:border-2">$1000 - $2000</button>
          <button className="py-1 px-4 border border-gray-700 hover:border-2">Above $2000</button>
        </div>
      </div>
      <section className="font-Vollkorn ">
        <div className="bg-gray-100 px-12 py-4">
          <div className="max-w-screen-2xl">
            <div className=" relative flex px-16 py-10">
              <div className="w-1/2 px-16 py-10 ">
                <h3 className="font-extralight text-2xl text-gray-600 italic my-2">Whats your Arts style?</h3>
                <h4 className="text-4xl text-gray-700 ">We have a good collection of paintings,drawings and sculptures for you</h4>
                <div className=" my-6">
                  <button className="py-3 px-6 border border-gray-700 ">Shop now</button>
                </div>
              </div>
              <div className=" absolute flex justify-center -top-16 right-0 bg-[url('https://www.riseart.com/fe/static/media/media-bkg.de53d520.png')] w-1/2 bg-no-repeat h-[500px] bg-contain bg-center">
                <div className="w-[450px] h-[450px]  relative my-10">
                  <Image src={Drawing} alt='painting'
                    layout='fill'
                    objectFit='contain'
                    placeholder="blur"
                    className="drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}
