export default function LogoAnimateB () {
    return (
        <div className="relative flex justify-center items-center w-full py-8 scale-75 sm:scale-100 sm:py-10">
            {/* Ball 1 */}
            <div
                className="absolute w-5 h-5 bg-[rgba(0,92,92,0.99)]  rounded-full z-10 rotate-65 logo_1"
                style={{ left: "25px" }}
            ></div>
            {/* Ball 2 */}
            <div
                className="absolute w-5 h-5 bg-[rgba(0,92,92,0.90)]  rounded-full z-20 -rotate-65 logo_2"
                style={{ left: "55px" }}
            ></div>
            {/* Ball 3 */}
            <div
                className="absolute w-5 h-5 bg-[rgba(0,92,92,0.80)]  rounded-full z-10 rotate-65 logo_3"
                style={{ left: "25px" }}
            ></div>
            {/* Ball 4 */}
            <div
                className="absolute w-5 h-5 bg-[rgba(0,92,92,0.70)] rounded-full z-20 -rotate-65 logo_4"
                style={{ left: "55px" }}
            ></div>
        </div>
    );
};
