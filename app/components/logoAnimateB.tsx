export default function LogoAnimateB () {
    return (
        <div className="relative scale-80 sm:scale-100 ">
            {/* Ball 1 */}
            <div
                className="absolute w-5 h-12 bg-[rgba(0,92,92,0.99)]  rounded-full  rotate-25 left-10 top-0"
                // style={{ left: "25px" }}
            ></div>
            {/* Ball 2 */}
            <div
                className="absolute w-5 h-12 bg-[rgba(0,92,92,0.90)]  rounded-full  -rotate-25 left-14 top-0 "
                // style={{ left: "55px" }}
            ></div>
            {/* Ball 3 */}
            <div
                className="absolute w-5 h-12 bg-[rgba(0,92,92,0.80)]  rounded-full  rotate-25 left-18 top-0"
                // style={{ left: "25px" }}
            ></div>
            {/* Ball 4 */}
            <div
                className="absolute w-5 h-12 bg-[rgba(0,92,92,0.70)] rounded-full  -rotate-25 left-22 top-0"
                // style={{ left: "55px" }}
            ></div>
        </div>
    );
};
