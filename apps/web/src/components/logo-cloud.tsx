import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { ProgressiveBlur } from "./motion-primitives/progressive-blur";

export const LogoCloud = () => {
  return (
    <section className="">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6 hidden md:block">
            <p className="text-end text-sm">Powerd by the best</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={
                typeof window !== "undefined" && window.innerWidth < 468
                  ? 50
                  : 86
              }
            >
              <div className="flex">
                <img
                  className="mx-auto h-8 w-fit dark:invert dark:grayscale"
                  src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-fit dark:invert dark:grayscale"
                  src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                  alt="Column Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-7 w-fit dark:invert dark:grayscale"
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                  alt="GitHub Logo"
                  height="4"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-fit dark:invert dark:grayscale"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Hono-logo.svg/500px-Hono-logo.svg.png?20241021114523"
                  alt="HOnoJs-Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-8 w-fit dark:invert dark:grayscale"
                  src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg"
                  alt="Prisma-Logo"
                  height="28"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-fit dark:invert dark:grayscale"
                  src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                  alt="PostgreSQL-Logo"
                  height="24"
                  width="auto"
                />
              </div>

              <div className="flex">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_4)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.4284 274.26C134.876 320.593 227.925 302.666 274.258 234.219C320.593 165.771 302.666 72.7222 234.218 26.3885C165.77 -19.9451 72.721 -2.0181 26.3873 66.4297C-19.9465 134.877 -2.01938 227.927 66.4284 274.26ZM47.9555 116.67C30.8375 169.263 36.5445 221.893 59.2454 256.373C18.0412 217.361 7.27564 150.307 36.9437 92.318C55.9152 55.2362 87.5665 29.3937 122.5 18.3483C90.5911 36.7105 62.5549 71.8144 47.9555 116.67ZM175.347 283.137C211.377 272.606 244.211 246.385 263.685 208.322C293.101 150.825 282.768 84.4172 242.427 45.2673C264.22 79.7626 269.473 131.542 252.631 183.287C237.615 229.421 208.385 265.239 175.347 283.137ZM183.627 266.229C207.945 245.418 228.016 210.604 236.936 168.79C251.033 102.693 232.551 41.1978 195.112 20.6768C214.97 47.3945 225.022 99.2902 218.824 157.333C214.085 201.724 200.814 240.593 183.627 266.229ZM63.7178 131.844C49.5155 198.43 68.377 260.345 106.374 280.405C85.9962 254.009 75.5969 201.514 81.8758 142.711C86.5375 99.0536 99.4504 60.737 116.225 35.0969C92.2678 55.983 72.5384 90.4892 63.7178 131.844ZM199.834 149.561C200.908 217.473 179.59 272.878 152.222 273.309C124.853 273.742 101.797 219.039 100.724 151.127C99.6511 83.2138 120.968 27.8094 148.337 27.377C175.705 26.9446 198.762 81.648 199.834 149.561Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4">
                      <rect width="300" height="300" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="500" height="500" fill="black" />
                  <rect
                    x="69"
                    y="121"
                    width="86.9879"
                    height="259"
                    fill="white"
                  />
                  <rect
                    x="337.575"
                    y="121"
                    width="92.4247"
                    height="259"
                    fill="white"
                  />
                  <rect
                    x="427.282"
                    y="121"
                    width="83.4555"
                    height="174.52"
                    transform="rotate(90 427.282 121)"
                    fill="white"
                  />
                  <rect
                    x="430"
                    y="296.544"
                    width="83.4555"
                    height="177.238"
                    transform="rotate(90 430 296.544)"
                    fill="white"
                  />
                  <rect
                    x="252.762"
                    y="204.455"
                    width="92.0888"
                    height="96.7741"
                    transform="rotate(90 252.762 204.455)"
                    fill="white"
                  />
                </svg>
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
