import Link from 'next/link'

function NotFoundPage() {
  return (
    <div className="mt-[196px] sm:mt-[214px]">
        <div className="flex justify-center items-center mx-[5%]">
            <div className="error-part flex flex-col items-center">
                <svg className="w-[200px] sm:w-[240px] md:w-[315px] h-[85px] sm:h-[130px] md:h-[135px]" width="315" height="135" viewBox="0 0 315 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_25_417" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="315" height="135">
                    <path d="M58.794 109.316H5.94366L0 100.166C8.24616 84.8633 22.9714 51.4744 44.1758 0H49.4769L70.842 10.7551L31.3247 85.3983L24.0959 96.1534L58.9547 93.9061L61.2036 64.6908L80.9623 63.2461V92.3008L100.239 91.1772V109.316H80.9623V135H58.794V109.316Z" fill="black"/>
                    <path d="M155.322 110.922C141.614 110.922 131.012 106.587 123.515 97.9191C116.019 89.1439 112.271 76.6766 112.271 60.5172C112.271 48.9596 114.412 39.2747 118.696 31.4625C122.98 23.5434 128.709 17.7111 135.885 13.9655C143.06 10.113 150.985 8.18668 159.659 8.18668C173.367 8.18668 183.862 12.4673 191.145 21.0285C198.534 29.4828 202.229 41.843 202.229 58.1094C202.229 69.6671 200.087 79.4055 195.803 87.3246C191.626 95.2438 186.004 101.183 178.936 105.143C171.868 108.995 163.996 110.922 155.322 110.922ZM157.41 100.488C163.086 100.488 167.316 97.17 170.101 90.5351C172.885 83.9001 174.277 73.7872 174.277 60.1962C174.277 50.0297 173.688 41.9501 172.51 35.9572C171.439 29.9643 169.672 25.6302 167.209 22.9548C164.746 20.1724 161.426 18.7812 157.25 18.7812C145.898 18.7812 140.222 31.9976 140.222 58.4304C140.222 73.3056 141.561 84.0606 144.238 90.6956C146.915 97.2235 151.306 100.488 157.41 100.488Z" fill="black"/>
                    <path d="M273.555 109.316H220.705L214.761 100.166C223.007 84.8633 237.732 51.4744 258.937 0H264.238L285.603 10.7551L246.086 85.3983L238.857 96.1534L273.716 93.9061L275.965 64.6908L295.723 63.2461V92.3008L315 91.1772V109.316H295.723V135H273.555V109.316Z" fill="black"/>
                    </mask>
                    <g mask="url(#mask0_25_417)">
                    <path d="M367.852 -10H764V156H367.852V-10Z" fill="url(#paint0_radial_25_417)"/>
                    <path d="M367.852 -10H0V156H367.852V-10Z" fill="url(#paint1_radial_25_417)"/>
                    </g>
                    a
                    <defs>
                    <radialGradient id="paint0_radial_25_417" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(377.562 168.801) rotate(-156.372) scale(412.111 170.438)">
                    <stop stop-color="#3762E0"/>
                    <stop offset="1" stop-color="#E63A63"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_25_417" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(377.562 168.801) rotate(-156.372) scale(412.111 170.438)">
                    <stop stop-color="#3762E0"/>
                    <stop offset="1" stop-color="#E63A63"/>
                    </radialGradient>
                    </defs>
                </svg>
                <p className="text-2xl sm:text-[48px] font-bold text-center mt-10 sm:mt-8">Page Not Found</p>
                <p className="text-base sm:text-xl font-normal w-full md:w-[755px] text-center mt-6 sm:mt-10 text-text-60 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
                <Link href='/'><button className="mt-10 sm:mt-[75px] px-8 py-3 bg-primary-20 rounded-lg text-primary font-bold leading-[150%]">back to home</button></Link>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage