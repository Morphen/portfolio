import type { NextPage } from 'next'
import Image from "next/image"
import me from "../public/me.jpg"

const Home: NextPage = () => {
  return (
    <div className="md:h-[calc(100vh-93px)] h-[1500px] text-center w-full mt-[calc(9vh)]">
      <div className="bg-cover">
        <Image src={me} alt="David Rios" width={153} height={175} className="flex-row self-center rounded-[20px] " />
        <p className="mt-[21px] mb-[4px] leading-[38px] text-white text-[32px]">David Rios</p>
        <p className="leading-[19px] my-[16px] text-white text-[16px]">Fullstack Developer Portfolio</p>
        <div className="homepagePurpleBackground">
          <p className="mt-[40px] text-[18px] text-white">Hi I'm David. I'm currently studying engineering system, i'm colombian and proggaming is one of my hobbies that i really enjoy.</p>
          
        </div>
      </div>
    </div>
  )
}

export default Home
