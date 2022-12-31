import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [rawDate, setRawDate] = useState<Date | null>(null);

  const getRemainingTimestamp = (now: Date) => {
    const raw = Math.floor(
      new Date("2023-01-01 00:00:00").getTime() / 1000 - now.getTime() / 1000
    );
    const s = (raw % 60).toString();
    const m = (Math.floor(raw / 60) % 60).toString();
    const h = Math.floor(Math.floor(raw / 60) / 60).toString();
    return `${h.padStart(2, "0")}시간 ${m.padStart(2, "0")}분 ${s.padStart(
      2,
      "0"
    )}초`;
  };

  const getRemainingSecond = (now: Date) => {
    const raw = Math.floor(
      new Date("2023-01-01 00:00:00").getTime() / 1000 - now.getTime() / 1000
    );
    return raw;
  };

  const getRemainingMinute = (now: Date) => {
    const raw = Math.floor(
      new Date("2023-01-01 00:00:00").getTime() / 1000 - now.getTime() / 1000
    );
    return Math.floor(raw / 60);
  };

  const getRemainingHour = (now: Date) => {
    const raw = Math.floor(
      new Date("2023-01-01 00:00:00").getTime() / 1000 - now.getTime() / 1000
    );
    return Math.floor(Math.floor(raw / 60) / 60);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRawDate(() => new Date());
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>2022년 카운트다운</title>
        <meta name="description" content="2022년 카운트다운" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col justify-center items-center w-full max-w-[700px] mx-auto h-full p-5 bg-[#FEEC25]">
        <div className="w-[150vh] h-[80vh] rotate-[-3deg] rounded-[50%] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"></div>
        <h1
          className={`${inter.className} text-outline relative font-bold text-center rotate-[-2deg]`}
        >
          <div className="absolute top-[10px] left-[-170px] w-[200px] h-[200px]">
            <Image src="/asset1.png" fill={true} alt="asdf" />
          </div>
          <div className="text-5xl ml-[-100px] text-[#22A9E2]">2022-년</div>
          <div className="text-6xl mr-[-50px] text-[#FDEB30]">카운트다운</div>
        </h1>
        {rawDate && (
          <>
            <div
              className={`${inter.className} text-2xl font-bold my-10 text-center z-10`}
            >
              현재시간:
              <br />
              {`${rawDate.toLocaleDateString()} ${rawDate.toLocaleTimeString()}`}
            </div>
            <div className="relative flex flex-col justify-center items-center gap-5 p-10 border-[1px] border-gray-300 z-10">
              <div className="absolute whitespace-nowrap bg-white border-[1px] border-gray-300 px-5 py-2 rounded-lg top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">
                남은시간
              </div>
              <div
                className={`${inter.className} text-3xl font-bold whitespace-nowrap`}
              >
                {getRemainingTimestamp(rawDate)}
              </div>
              <div
                className={`${inter.className} text-3xl font-bold whitespace-nowrap`}
              >
                {`${getRemainingSecond(rawDate)} 초`}
              </div>
              <div
                className={`${inter.className} text-3xl font-bold whitespace-nowrap`}
              >
                {`${getRemainingMinute(rawDate)} 분`}
              </div>
              <div
                className={`${inter.className} text-3xl font-bold whitespace-nowrap`}
              >
                {`${getRemainingHour(rawDate)} 시간`}
              </div>
            </div>
          </>
        )}
        <div className="absolute bottom-[10px] right-[-30px] w-[200px] h-[200px] z-10">
          <Image src="/asset2.png" fill={true} alt="asdf" />
        </div>
        <div
          className={`${inter.className} text-shadow-none absolute shadow-none text-4xl font-medium px-6 py-2 rounded-[50%] bottom-[180px] right-[-15px] rotate-[10deg] bg-red-600 text-white z-10`}
        >
          즐겁다
        </div>
      </div>
      <style jsx>{`
        .text-outline {
          text-shadow: rgb(0, 0, 0) 1px 0px 0px,
            rgb(0, 0, 0) 0.540302px 0.841471px 0px,
            rgb(0, 0, 0) -0.416147px 0.909297px 0px,
            rgb(0, 0, 0) -0.989992px 0.14112px 0px,
            rgb(0, 0, 0) -0.653644px -0.756802px 0px,
            rgb(0, 0, 0) 0.283662px -0.958924px 0px,
            rgb(0, 0, 0) 0.96017px -0.279415px 0px;
        }
        .text-shadow-none {
          text-shadow: none !important;
        }
      `}</style>
    </>
  );
}
