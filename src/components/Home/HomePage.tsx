import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../Header';
import InfiniteLooper from '../Looper';

import artSvg from '../../assets/images/art.svg';
import musicSvg from '../../assets/images/music.svg';
import collectsSvg from '../../assets/images/collects.svg';
import videoSvg from '../../assets/images/video.svg';
import collectiblesSvg from '../../assets/images/collectables.svg';
import fan1 from '../../assets/images/fan1.png';
import fan2 from '../../assets/images/fan2.png';
import fan3 from '../../assets/images/fan3.png';
import fan4 from '../../assets/images/fan4.png';
import fan5 from '../../assets/images/fan5.png';
import { teams, arts, musics, collects, videos, collectibles } from '../../contant';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const HomePage: FC = () => {
  const [type, setType] = useState(1)
  const [items, setItems] = useState(arts)
  const [badgeBg, setBadgeBg] = useState("bg-[#E2B254]")

  useEffect(() => {
    switch (type) {
      case 1:
        setItems(arts)
        setBadgeBg("bg-[#E2B254]")
        break;
      case 2:
        setItems(musics)
        setBadgeBg("bg-[#6DFCB7]")
        break;
      case 3:
        setItems(collects)
        setBadgeBg("bg-[#E1EE7C]")
        break;
      case 4:
        setItems(videos)
        setBadgeBg("bg-[#FB543B]")
        break;
      case 5:
        setItems(collectibles)
        setBadgeBg("bg-[#97A4E3]")
        break;
    }
  }, [type])

  return (
    <>
      <Header />
      <div className='page-content'>
        <section className='text-center'>
          <p className='text-[#FB543B] sharp-font text-[18px] font-semibold'>THE BIGGEST TEAMS. THE BEST FAN REWARDS.</p>
          <h1 className='text-[#212121] sharp-font text-[56px] font-bold'>WELCOME TO CARLTONCOIN <span className='text-[#FB543B]'>.</span></h1>
          <div className='flex gap-[16px] justify-center my-5'>
            <button className={`flex items-center justify-center flex-col w-[130px] h-[66px] rounded-lg text-[12px] font-semibold hover:bg-[#E2B254] ${type == 1 ? "bg-[#E2B254]" : "bg-[#FDFDFD]"}`}
              onClick={() => setType(1)}>
              <img src={artSvg} />
              ART
            </button>
            <button className={`flex items-center justify-center flex-col w-[130px] h-[66px] rounded-lg text-[12px] font-semibold hover:bg-[#6DFCB7] ${type == 2 ? "bg-[#6DFCB7]" : "bg-[#FDFDFD]"}`}
              onClick={() => setType(2)}>
              <img src={musicSvg} />
              MUSIC
            </button>
            <button className={`flex items-center justify-center flex-col w-[130px] h-[66px] rounded-lg text-[12px] font-semibold hover:bg-[#E1EE7C] ${type == 3 ? "bg-[#E1EE7C]" : "bg-[#FDFDFD]"}`}
              onClick={() => setType(3)}>
              <img src={collectsSvg} />
              COLLECTS
            </button>
            <button className={`flex items-center justify-center flex-col w-[130px] h-[66px] rounded-lg text-[12px] font-semibold hover:bg-[#FB543B] ${type == 4 ? "bg-[#FB543B]" : "bg-[#FDFDFD]"}`}
              onClick={() => setType(4)}>
              <img src={videoSvg} />
              VIDEO
            </button>
            <button className={`flex items-center justify-center flex-col w-[130px] h-[66px] rounded-lg text-[12px] font-semibold hover:bg-[#97A4E3] ${type == 5 ? "bg-[#97A4E3]" : "bg-[#FDFDFD]"}`}
              onClick={() => setType(5)}>
              <img src={collectiblesSvg} />
              COLLECTIBLES
            </button>
          </div>

          <div className='flex gap-[32px] mb-10'>
            {
              items.map((e, i) => <div key={i} className='bg-[#fdfdfd] flex-1 rounded-xl pt-[16px] px-[8px] pb-[8px]'>
                <p className='sharp-font text-[#FB543B] text-[12px] font-bold mb-3'>{e.date}</p>
                <p className='monrape-font text-[15px] font-bold mb-3'>{e.title}</p>
                <div className='relative'>
                  <img src={e.image} className='rounded-xl' />
                  <span className={`sharpt-font text-[12px] ${badgeBg} font-semibold px-[16px] py-[8px] rounded-full absolute right-[4px] bottom-[4px]`}>{e.badge}</span>
                </div>
                <div className='flex items-center mt-2'>
                  <img src={e.teamImg} width={24} height={24} />
                  <span className='text-[12px] monrape-font ml-2'>{e.teamName}</span>
                </div>
              </div>)
            }
          </div>

          <div className='flex justify-center gap-[16px]'>
            <button className='primary-button'>MINT</button>
            <button className='primary-button'>SHOP</button>
          </div>
        </section>

        <section className='text-center mt-12'>
          <h2 className='text-[#212121] sharp-font text-[48px] font-medium'>70+ teams. 1 app.</h2>
          <p className='text-[#4D4D4D] manrope-font text-[24px] font-medium mb-5'>The home of fan engagement and rewards for the world’s biggest teams.</p>
          <InfiniteLooper speed={80} direction="left">
            {
              teams.map((e, i) => <img src={e} key={i} width={90} height={60} className='mx-7' />)
            }
          </InfiniteLooper>
          <button className='primary-button mt-5'>Find your team</button>
        </section>

        <section className='text-center mt-12'>
          <div className='bg-[#212121] mx-auto rounded-2xl p-[32px]'>
            <h2 className='text-[#fdfdfd] text-[48px] font-medium sharp-font'>The world’s best fan rewards</h2>
            <p className='text-[#fdfdfd] text-[22px] font-medium manrope-font'>Watch a match alongside legends. Fly with the team on an away trip.</p>
            <p className='text-[#fdfdfd] text-[22px] font-medium manrope-font'>Score in iconic stadiums. Own game-scored balls and more (much more).</p>

            <div className='flex gap-[20px] mt-8'>
              <div className='flex-1'>
                <img src={fan1} className='rounded-t-xl' />
                <div className='p-[16px] bg-[#0E0E0E] rounded-b-xl text-left manrope-font h-[108px]'>
                  <p className='text-[#fdfdfd] text-[20px] font-bold'>Exclusive</p>
                  <p className='text-[#fdfdfd] text-[16px]'>Unlock unprecedented fan experiences. Score goals at iconic stadiums, fly with the team and more.</p>
                </div>
              </div>

              <div className='flex-1'>
                <img src={fan2} className='rounded-t-xl' />
                <div className='p-[16px] bg-[#0E0E0E] rounded-b-xl text-left manrope-font h-[108px]'>
                  <p className='text-[#fdfdfd] text-[20px] font-bold'>Premium</p>
                  <p className='text-[#fdfdfd] text-[16px]'>Access unmatched experiences that go beyond the pitch</p>
                </div>
              </div>
            </div>

            <div className='flex gap-[20px] mt-8'>
              <div className='flex-1'>
                <img src={fan3} className='rounded-t-xl' />
                <div className='p-[16px] bg-[#0E0E0E] rounded-b-xl text-left manrope-font h-[108px]'>
                  <p className='text-[#fdfdfd] text-[20px] font-bold'>Tickets</p>
                  <p className='text-[#fdfdfd] text-[16px]'>Get unparalleled access to major sporting events.</p>
                </div>
              </div>

              <div className='flex-1'>
                <img src={fan4} className='rounded-t-xl' />
                <div className='p-[16px] bg-[#0E0E0E] rounded-b-xl text-left manrope-font h-[108px]'>
                  <p className='text-[#fdfdfd] text-[20px] font-bold'>Merchandise</p>
                  <p className='text-[#fdfdfd] text-[16px]'>Gear up with authentic team merchandise.</p>
                </div>
              </div>

              <div className='flex-1'>
                <img src={fan5} className='rounded-t-xl' />
                <div className='p-[16px] bg-[#0E0E0E] rounded-b-xl text-left manrope-font h-[108px]'>
                  <p className='text-[#fdfdfd] text-[20px] font-bold'>Collectibles</p>
                  <p className='text-[#fdfdfd] text-[16px]'>Own Game-Scored Balls, Matchworn Shirts, Digital Collectibles, and More.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='text-center mt-12'>
          <h2 className='text-[#212121] text-[48px] sharp-font font-medium'>Real Fans. Unreal Stories.</h2>
          <p className='text-[#4d4d4d] text-[22px] manrope-font font-semibold mb-10'>This is no fantasy game. Socios.com is real fans making a real impact and getting rewarded with unreal experiences.</p>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='w-[350px] min-h-[620px] bg-[#fdfdfd] p-[16px] rounded-3xl flex flex-col justify-between'>
                <div>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/Card6.webp' width={323} height={235} className='m-auto' />
                  <div className='manrope-font text-[18px] text-[#212121] text-left mt-4'>
                    “Thank you Socios.com for my
                    Ruben Dias signed shirt. I
                    am absolutely thrilled.”
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/CITY.svg' width={54} height={54} />
                  <div className='ml-5'>
                    <div className='flex items-center'>
                      <span className='font-bold mr-4 manrope-font '>Bertie, UK</span>
                      <img src='https://www.socios.com/wp-content/uploads/2024/02/Frame-3.webp' width={31} height={20} />
                    </div>
                    <p className='manrope-font'>Man City Fan Token Holder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[350px] min-h-[620px] bg-[#fdfdfd] p-[16px] rounded-3xl flex flex-col justify-between'>
                <div>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/Card1.webp' width={323} height={235} className='m-auto' />
                  <div className='manrope-font text-[18px] text-[#212121] text-left mt-4'>
                    "It was the most special day
                    of my life. I was so
                    excited! Thank you
                    Socios.com."
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/ASR.svg' width={54} height={54} />
                  <div className='ml-5'>
                    <div className='flex items-center'>
                      <span className='font-bold mr-4 manrope-font '>Nabe, Japan</span>
                      <img src='https://www.socios.com/wp-content/uploads/2024/02/Frame-4.webp' width={31} height={20} />
                    </div>
                    <p className='manrope-font'>AS Roma Fan Token Holder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[350px] min-h-[620px] bg-[#fdfdfd] p-[16px] rounded-3xl flex flex-col justify-between'>
                <div>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/Card2.webp' width={323} height={235} className='m-auto' />
                  <div className='manrope-font text-[18px] text-[#212121] text-left mt-4'>
                    "Still speechless after my
                    “Live the dream” experience
                    !!! Thank you socios.com. It
                    has been something that I’ll
                    always bring in my heart!"

                  </div>
                </div>
                <div className='flex items-center'>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/ACM-1.svg' width={54} height={54} />
                  <div className='ml-5'>
                    <div className='flex items-center'>
                      <span className='font-bold mr-4 manrope-font '>Fabricio, Italy</span>
                      <img src='https://www.socios.com/wp-content/uploads/2024/02/Frame-5.webp' width={31} height={20} />
                    </div>
                    <p className='manrope-font'>AC Milan Fan Token Holder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[350px] min-h-[620px] bg-[#fdfdfd] p-[16px] rounded-3xl flex flex-col justify-between'>
                <div>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/Card3.webp' width={323} height={235} className='m-auto' />
                  <div className='manrope-font text-[18px] text-[#212121] text-left mt-4'>
                    "The last two days have been
                    a dream. Still can't believe
                    what I've experienced. It
                    doesn't feel real. Juventus
                    doesn't come here often, but
                    thanks to Socios.com, I was
                    able to take this experience
                    to the next level. I'm
                    forever thankful."
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src='https://www.socios.com/wp-content/uploads/2024/01/Token-JUV.svg' width={54} height={54} />
                  <div className='ml-5'>
                    <div className='flex items-center'>
                      <span className='font-bold mr-4 manrope-font '>Martina, Usa</span>
                      <img src='https://www.socios.com/wp-content/uploads/2024/02/Frame-2.webp' width={31} height={20} />
                    </div>
                    <p className='manrope-font'>Juventus Fan Token Holder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[350px] min-h-[620px] bg-[#fdfdfd] p-[16px] rounded-3xl flex flex-col justify-between'>
                <div>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/Card4.webp' width={323} height={235} className='m-auto' />
                  <div className='manrope-font text-[18px] text-[#212121] text-left mt-4'>
                    "Thank you for such a
                    wonderful night. Result was
                    unfortunate but it did not
                    put me down. I had my
                    expectations high but they
                    were still absolutely
                    smashed. Red carpets, gold
                    elevators, amazing food and
                    drinks, players families..
                    was truly a VIP experience."
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src='https://www.socios.com/wp-content/uploads/2024/01/FCB.svg' width={54} height={54} />
                  <div className='ml-5'>
                    <div className='flex items-center'>
                      <span className='font-bold mr-4 manrope-font'>Rian, Ireland</span>
                      <img src='https://www.socios.com/wp-content/uploads/2024/02/Frame-2-1.webp' width={31} height={20} />
                    </div>
                    <p className='manrope-font'>FC Barcelona Fan Token Holder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[350px] min-h-[620px] bg-[#fdfdfd] p-[16px] rounded-3xl flex flex-col justify-between'>
                <div>
                  <img src='https://www.socios.com/wp-content/uploads/2024/02/Card5.webp' width={323} height={235} className='m-auto' />
                  <div className='manrope-font text-[18px] text-[#212121] text-left mt-4'>
                    “This is the biggest benefit
                    and I'm not talking just
                    about the tickets. I saw my
                    team become Brazilian
                    Champion for the first time
                    in 50 years. There's no
                    price on this opportunity I
                    had thanks to Socios.com"
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src='https://www.socios.com/wp-content/uploads/2024/01/GALO.svg' width={54} height={54} />
                  <div className='ml-5'>
                    <div className='flex items-center'>
                      <span className='font-bold mr-4 manrope-font'>Paulo, Brazil</span>
                      <img src='https://www.socios.com/wp-content/uploads/2024/02/Frame-2-1.webp' width={31} height={20} />
                    </div>
                    <p className='manrope-font'>Atletico Fan Token Holder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default HomePage;
