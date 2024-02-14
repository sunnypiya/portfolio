import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { IBasicInfoProps } from "@/lib/actions/shared.types";
import {
  addUpdateBasicInfo,
  getBasicInfo,
  getUserInfo,
} from "@/lib/actions/user.action";

export default async function Home() {
  const { user: mongouser } = await getUserInfo({
    userId: "user_2X7pOs6IeFfxSIrJdiZyxjmGNTP",
  });
  const updateUserInfo: IBasicInfoProps = await getBasicInfo({
    userId: mongouser?._id,
  });
  console.log("updateUserInfo", updateUserInfo);
  return (
    <main>
      <Hero basicInfo={updateUserInfo} />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
