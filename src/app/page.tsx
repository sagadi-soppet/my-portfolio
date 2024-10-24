import Link from "next/link";
import { ThinOpenSans } from "./fonts/OpenSansFont";

export default function Home() {
  return (
    <div className="h-full w-full mt-10">
      <div>
        <p>
          Hi,{" "}
          <label>
            I&apos;m Sagadi Soppet, the founder of Soppet&apos;s World.
          </label>
        </p>
        <p>
          Gratitude for giving the time to visit my portfolio. Here wonders and
          the real world come collide.
        </p>
        <p>Enjoy your stay and have a good read.</p>
      </div>
      <div className={`${ThinOpenSans.className} mt-10`}>
        <table className="w-full">
          <tbody>
            <tr className="h-10">
              <td className="text-sm w-1/2 underline hover:cursor-pointer">
                <Link href="/humble-beginnings">Humble Beginnings?</Link>
              </td>
              <td className="text-sm w-1/4">@ Sagadi at Soppet&apos;s World</td>
              <td className="text-sm w-1/4">October 24, 2024 10:56PM UTC+8</td>
            </tr>
            <tr className="h-10">
              <td className="text-sm w-1/2 underline hover:cursor-pointer">
                <Link href="/dont-find-a-job-while-you-are-still-excited">
                  Don&apos;t find a job while you are excited.
                </Link>
              </td>
              <td className="text-sm w-1/4">@ Sagadi at Soppet&apos;s World</td>
              <td className="text-sm w-1/4">October 24, 2024 11:15PM UTC+8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
