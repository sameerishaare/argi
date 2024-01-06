import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import image1 from "../public/image1.svg";
import image2 from "../public/image2.svg";
import image3 from "../public/image3.svg";

const AboutPage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "00px" }
    );
    observer.observe(ref.current);
    observer.observe(ref1.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
        el.classList.remove("slide-out");
      });
      ref1.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
        el.classList.remove("slide-out");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
        el.classList.add("slide-out");
      });
      ref1.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
        el.classList.add("slide-out");
      });
    }
  }, [isIntersecting]);
  return (
    <div
      id="about-us"
      className="flex flex-col md:flex-row gap-4 m-4
         py-10 relative"
    >
      <svg
        className="absolute top-[-1.9rem] left-[-1.9rem] max-md:top-[-3.5rem] max-md:left-[-3.5rem] max-md:scale-75"
        xmlns="http://www.w3.org/2000/svg"
        width="228"
        height="271"
        viewBox="0 0 228 271"
        fill="none"
      >
        <g clipPath="url(#clip0_61_1145)">
          <path
            d="M8.92019 35.9561L11.6037 44.3085C12.2689 46.3796 28.458 95.3062 77.0024 119.153C99.385 130.148 124.705 133.941 152.634 130.532C168.759 128.426 184.592 124.495 199.832 118.814L204.402 117.152L208.084 107.847L205.883 103.491C183.446 59.0915 153.602 31.0429 117.179 20.1243C64.7047 4.39332 18.455 30.4715 16.5115 31.5891L8.92019 35.9561ZM170.837 86.9568L51.523 41.0872C67.1727 36.8652 88.7421 34.1654 111.215 40.9638C134.034 47.8664 154.005 63.2995 170.837 86.9568ZM44.3745 61.557L162.492 106.967C133.668 112.76 108.204 110.34 86.5185 99.6865C66.4114 89.809 52.8967 74.4959 44.3745 61.557Z"
            fill="#F4F4F4"
          />
          <path
            d="M-0.659697 35.5236L-6.16022 42.3466C-7.52417 44.0382 -39.4881 84.3989 -32.7716 138.146C-29.6748 162.928 -18.9552 186.228 -0.792252 207.77C9.80924 220.133 21.7747 231.252 34.8749 240.914L38.7685 243.835L48.5549 241.826L50.9842 237.596C75.7428 194.477 82.7894 154.103 71.9285 117.595C56.282 64.9982 9.14803 40.5124 7.14916 39.4953L-0.659697 35.5236ZM45.5663 199.167L18.4217 74.0423C30.5291 84.8478 44.6118 101.449 51.2614 124.007C58.0138 146.914 56.0838 172.105 45.5663 199.167ZM-2.58617 79.2596L24.2861 203.129C3.6426 182.142 -8.30236 159.473 -11.3026 135.463C-14.0845 113.201 -8.71337 93.4878 -2.58617 79.2596Z"
            fill="#F4F4F4"
          />
        </g>
        <defs>
          <clipPath id="clip0_61_1145">
            <rect
              width="245.791"
              height="242.719"
              fill="white"
              transform="translate(-46 29.7812) rotate(-6.95953)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="absolute bottom-[-1rem] right-[-1rem] z-[-1] max-md:bottom-[-3.5rem] max-md:right-[-3.5rem] max-md:scale-75"
        xmlns="http://www.w3.org/2000/svg"
        width="429"
        height="365"
        viewBox="0 0 429 365"
        fill="none"
      >
        <path
          d="M5.33529e-05 346.602C0.000401744 352.454 0.295736 358.301 0.88488 364.123L18.3093 362.353C17.7798 357.12 17.5144 351.863 17.5142 346.602C17.5142 261.715 86.575 192.654 171.462 192.654C197.637 192.689 223.374 199.38 246.252 212.097C269.13 224.815 288.398 243.142 302.245 265.355C294.02 276.083 287.196 287.816 281.937 300.27C281.185 302.047 280.467 303.835 279.783 305.632C279.262 304.258 278.723 302.888 278.148 301.529C267.76 276.901 249.17 256.625 225.533 244.142C201.896 231.66 174.669 227.74 148.471 233.048C122.273 238.355 98.7182 252.564 81.8038 273.262C64.8894 293.96 55.657 319.872 55.6735 346.602C55.6732 352.699 56.1494 358.787 57.098 364.809L74.3972 362.076C73.5915 356.957 73.187 351.784 73.1875 346.602C73.1958 320.544 83.5534 295.555 101.983 277.132C120.412 258.708 145.404 248.359 171.462 248.359C197.521 248.359 222.513 258.708 240.942 277.132C259.371 295.555 269.729 320.544 269.737 346.602C269.738 351.621 269.358 356.633 268.602 361.594L269.371 361.712C269.369 361.982 269.366 362.252 269.366 362.522H274.667L285.915 364.243C286.002 363.671 286.082 363.096 286.161 362.522H286.88C286.88 283.997 350.764 220.112 429.29 220.112V202.598C387.822 202.545 347.965 218.653 318.179 247.503L317.471 154.683C325.219 156.673 333.185 157.691 341.184 157.712C352.348 157.786 363.407 155.545 373.661 151.129C396.217 141.273 413.201 120.944 424.139 90.7062L425.211 87.743L422.119 82.06L419.047 81.3512C388.312 74.2594 362.346 77.0513 341.827 89.6409C342.969 85.2435 343.725 80.7546 344.084 76.2254C346.033 51.497 336.107 26.6445 314.581 2.3587L312.49 0H306.021L303.93 2.3587C282.601 26.422 272.865 51.0578 274.991 75.5813C275.378 80.0064 276.147 84.3897 277.289 88.6823C257.027 76.9162 231.618 74.443 201.681 81.3512L198.609 82.06L195.517 87.743L196.589 90.7062C207.528 120.944 224.511 141.273 247.068 151.129C257.322 155.545 268.38 157.786 279.545 157.712C287.614 157.691 295.648 156.656 303.459 154.632L304.094 237.943C288.025 218.298 267.788 202.471 244.849 191.609C221.91 180.747 196.843 175.122 171.462 175.14C148.941 175.122 126.636 179.545 105.825 188.156C85.0147 196.766 66.1058 209.395 50.1806 225.321C34.2553 241.246 21.6261 260.155 13.0156 280.966C4.40516 301.776 -0.0177198 324.081 5.33529e-05 346.602ZM217.82 104.057L290.917 142.823C280.526 144.305 266.449 144.348 252.537 138.228C238.41 132.013 226.783 120.55 217.82 104.057ZM297.054 130.217L224.755 91.875C243.669 90.422 259.802 93.9373 272.881 102.403C285.025 110.264 292.551 121.198 297.054 130.217ZM303.118 109.945C296.885 101.531 290.204 89.2567 288.937 74.2175C287.636 58.7717 292.191 43.0095 302.486 27.183L303.118 109.945ZM329.811 142.823L402.909 104.057C393.946 120.55 382.318 132.013 368.192 138.228C354.279 144.348 340.202 144.306 329.811 142.823ZM323.675 130.217C328.178 121.198 335.704 110.264 347.848 102.403C360.927 93.9373 377.06 90.4216 395.974 91.8748L323.675 130.217ZM317.128 109.743L316.503 27.8645C326.763 43.7688 331.339 59.6052 330.116 75.1245C328.968 89.6857 322.909 101.528 317.128 109.743Z"
          fill="#F4F4F4"
        />
      </svg>
      <div className="flex-col justify-center items-center p-4 mr-[2rem] scale-90 relative">
        <div className="w-[32rem] h-[20.5rem] absolute border-[1.991px] border-[#036B46] scale-90 top-[5.5rem] left-[4rem] z-[-10] max-md:left-[4.5rem] max-md:h-[9.6rem] max-md:w-[15rem] max-md:scale-125"></div>
        <div
          ref={ref1}
          className="ml-[8rem] max-md:ml-[1.5rem] max-md:scale-75 max-md:mt-[-3rem]"
        >
          <div>
            <Image
              src={"/image1.webp"}
              alt="Picture of the author"
              width={350}
              className="rounded-2xl"
              height={350}
            />
          </div>
        </div>
        <div ref={ref} className="flex mt-3">
          <div className="m-3 mt-5 rounded-md mr-[3rem] max-md:mt-10 max-md:ml-[-1rem] max-md:scale-[120%]">
            <Image
              src={"/image2.webp"}
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-2xl max-md:rounded-md"
              loading="lazy"
            />
          </div>
          <div className="m-3 rounded-md max-md:scale-[120%] max-md:mr-[-3rem]">
            <Image
              src={"/image3.webp"}
              alt="Picture of the author"
              width={300}
              className="rounded-2xl max-md:rounded-md"
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="basis-3/6 mt-9 max-md:mt-2">
        <div className="mb-2 text-2xl text-[#036B46]">ABOUT US</div>
        <div className="mb-1.5 font-bold text-[2rem] text-[#343736] mt-3 leading-[3.25rem] max-md:hidden">
          {" "}
          &quot;Empowering agriculture with precision and innovation,
          <span className="text-[#036B46] italic ">
            {" "}
            Agrity Crop Science
            <br />{" "}
          </span>
          pioneers sustainable growth for a<br /> flourishing tomorrow.&quot;
        </div>

        <div className="mb-1.5 font-bold text-[2rem] text-[#343736] mt-3 leading-[3.25rem] max-md:text-[1.5rem] max-md:leading-[2.5rem] md:hidden">
          {" "}
          &quot;Empowering agriculture with precision and innovation,
          <span className="text-[#036B46] italic ">
            {" "}
            <br />
            Agrity Crop Science{" "}
          </span>
          pioneers sustainable growth for a<br /> flourishing tomorrow.&quot;
        </div>

        <div className="text-xl text-[#646464] font-thin max-md:hidden">
          &quot;Welcome to Agrity Crop Science, a pioneering force in
          agropharma. At the intersection of agriculture and pharmaceutical
          innovation, we cultivate sustainable growth for farmers worldwide. Our
          commitment to excellence, cutting-edge solutions, and a passion for
          greener futures define us as leaders in agropharma, nurturing the
          roots of prosperity in every field we touch.&quot;
        </div>

        <div className="text-xl text-[#646464] font-thin md:hidden max-md:text-lg max-md:font-[100]">
          &quot;Welcome to Agrity Crop Science, a pioneering force in
          agropharma. At the intersection of agriculture and pharmaceutical
          innovation, we cultivate sustainable growth for farmers worldwide. Our
          commitment to excellence, cutting-edge solutions, and a passion for
          greener futures define us as leaders in agropharma, nurturing the
          roots of prosperity in every field we touch.&quot;
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
