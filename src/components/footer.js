import React from "react"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import insta from "../images/insta.svg"

const socials = `ml-2 w-10`
const icon = `icon shadow-lg hover:shadow-sm`

const Footer = () => {
  return (
    <footer className="flex-shrink-0 flex items-end justify-between relative z-10 p-5">
      <div className="hidden md:flex w-1/2">
        © {new Date().getFullYear()}, Built by Gatsby Developer
      </div>
      <div className="w-full flex justify-center md:justify-end ml-5">
        <a href="facebook.com" className={socials}>
          <svg
            className={icon}
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
            <path
              d="M22.6454 18.667L23.1899 15.2888H19.7855V13.0965C19.7855 12.1723 20.2611 11.2714 21.7858 11.2714H23.3335V8.39522C23.3335 8.39522 21.929 8.16699 20.5862 8.16699C17.7825 8.16699 15.95 9.78501 15.95 12.7141V15.2888H12.8335V18.667H15.95V26.8337H19.7855V18.667H22.6454Z"
              fill="#340f57"
            />
          </svg>
        </a>
        <a href="twitter.com" className={socials}>
          <svg
            className={icon}
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
            <path
              d="M23.9879 13.9891C23.9983 14.1422 23.9983 14.2953 23.9983 14.4484C23.9983 19.1187 20.6301 24.5 14.474 24.5C12.5774 24.5 10.8155 23.9203 9.3335 22.9141C9.60297 22.9469 9.86203 22.9578 10.1419 22.9578C11.7068 22.9578 13.1474 22.4 14.2978 21.4485C12.8261 21.4156 11.5928 20.3984 11.1679 18.9984C11.3752 19.0312 11.5824 19.0531 11.8001 19.0531C12.1006 19.0531 12.4012 19.0093 12.681 18.9328C11.1472 18.6047 9.99675 17.1828 9.99675 15.4656V15.4219C10.4424 15.6844 10.9606 15.8484 11.5099 15.8703C10.6082 15.2359 10.0175 14.1531 10.0175 12.9281C10.0175 12.2719 10.1833 11.6703 10.4735 11.1453C12.1213 13.289 14.5983 14.689 17.3758 14.8422C17.324 14.5797 17.2929 14.3063 17.2929 14.0328C17.2929 12.0859 18.7853 10.5 20.6404 10.5C21.6042 10.5 22.4748 10.9266 23.0863 11.6156C23.8428 11.4625 24.5683 11.1672 25.2108 10.7625C24.9621 11.5828 24.4335 12.2719 23.7392 12.7094C24.4128 12.6328 25.0657 12.4359 25.6668 12.1625C25.2109 12.8625 24.6409 13.4859 23.9879 13.9891V13.9891Z"
              fill="#340f57"
            />
          </svg>
        </a>
        <a href="instagram.com" className={socials}>
          <svg
            className={icon}
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
            <path
              d="M16.9189 12.7144C14.1048 12.7144 11.835 14.8512 11.835 17.5003C11.835 20.1494 14.1048 22.2862 16.9189 22.2862C19.7329 22.2862 22.0028 20.1494 22.0028 17.5003C22.0028 14.8512 19.7329 12.7144 16.9189 12.7144ZM16.9189 20.6118C15.1004 20.6118 13.6137 19.2164 13.6137 17.5003C13.6137 15.7842 15.0959 14.3889 16.9189 14.3889C18.7418 14.3889 20.2241 15.7842 20.2241 17.5003C20.2241 19.2164 18.7374 20.6118 16.9189 20.6118V20.6118ZM23.3965 12.5187C23.3965 13.1393 22.8656 13.635 22.2107 13.635C21.5515 13.635 21.0249 13.1351 21.0249 12.5187C21.0249 11.9022 21.5559 11.4024 22.2107 11.4024C22.8656 11.4024 23.3965 11.9022 23.3965 12.5187ZM26.7636 13.6516C26.6884 12.1563 26.3256 10.8317 25.1619 9.74042C24.0027 8.64912 22.5957 8.30757 21.0072 8.2326C19.3701 8.14512 14.4632 8.14512 12.8261 8.2326C11.2421 8.3034 9.83507 8.64496 8.6714 9.73626C7.50772 10.8276 7.14933 12.1521 7.06969 13.6474C6.97677 15.1886 6.97677 19.8079 7.06969 21.349C7.14491 22.8444 7.50772 24.1689 8.6714 25.2602C9.83507 26.3515 11.2377 26.6931 12.8261 26.7681C14.4632 26.8555 19.3701 26.8555 21.0072 26.7681C22.5957 26.6972 24.0027 26.3557 25.1619 25.2602C26.3212 24.1689 26.684 22.8444 26.7636 21.349C26.8566 19.8079 26.8566 15.1928 26.7636 13.6516V13.6516ZM24.6487 23.0026C24.3036 23.819 23.6354 24.448 22.7638 24.7771C21.4585 25.2644 18.3613 25.1519 16.9189 25.1519C15.4765 25.1519 12.3748 25.2602 11.074 24.7771C10.2067 24.4522 9.53862 23.8232 9.18908 23.0026C8.6714 21.7739 8.79086 18.8582 8.79086 17.5003C8.79086 16.1424 8.67582 13.2226 9.18908 11.998C9.5342 11.1816 10.2023 10.5527 11.074 10.2236C12.3792 9.73626 15.4765 9.84872 16.9189 9.84872C18.3613 9.84872 21.463 9.74042 22.7638 10.2236C23.631 10.5485 24.2991 11.1774 24.6487 11.998C25.1664 13.2268 25.0469 16.1424 25.0469 17.5003C25.0469 18.8582 25.1664 21.7781 24.6487 23.0026Z"
              fill="#340f57"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
