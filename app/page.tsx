
import NavBar from "./components/navBar";
import PageTransition from "./components/pageTransition";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import { cn } from "./lib/utils";

const geistSans = IBM_Plex_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function MyApp() {
  return (
    <PageTransition showButton={true}>
      <div className={cn(`${geistSans.className}  text-gray-50 bg-gray-900 h-screen w-full`)} >
      <NavBar/>

      </div>

    </PageTransition>
  );
}
export default MyApp;
