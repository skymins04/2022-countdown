import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

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
      <div className="w-full h-full p-5">
        <h1 className={`${inter.className} text-3xl font-bold text-center`}>
          2022년 카운트다운
        </h1>
        {rawDate && (
          <>
            <div
              className={`${inter.className} text-3xl font-bold whitespace-nowrap my-10 text-center`}
            >
              {`현재시간: ${rawDate.toLocaleDateString()} ${rawDate.toLocaleTimeString()}`}
            </div>
            <div className="relative flex flex-col justify-center items-center gap-5 p-10 border-[1px] border-gray-300">
              <div className="absolute whitespace-nowrap bg-white border-[1px] border-gray-300 px-5 py-2 rounded-lg top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">
                남은시간
              </div>
              <div
                className={`${inter.className} text-5xl font-bold whitespace-nowrap`}
              >
                {getRemainingTimestamp(rawDate)}
              </div>
              <div
                className={`${inter.className} text-5xl font-bold whitespace-nowrap`}
              >
                {`${getRemainingSecond(rawDate)} 초`}
              </div>
              <div
                className={`${inter.className} text-5xl font-bold whitespace-nowrap`}
              >
                {`${getRemainingMinute(rawDate)} 분`}
              </div>
              <div
                className={`${inter.className} text-5xl font-bold whitespace-nowrap`}
              >
                {`${getRemainingHour(rawDate)} 시간`}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
