import { NavLink } from "react-router-dom";
import img from "../assets/logolem.jpeg";

function Footer() {
  return (
    <footer className="shadow-inner">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="mt-3 font-medium text-sm">
            Copyright © 2024 CodingStrivers . All Rights Reserved.
          </p>
          <p className="mt-3 font-medium text-sm flex items-center gap-x-4">
            Give it a ⭐ on
            <button className="bg-black text-white p-2 rounded-md">
              <a href="https://github.com/Rohithchowk/Codebase.git">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </button>
          </p>
          {/* <p className="mt-3 font-medium text-sm">
            Created with ❤️ by{" "}
            <span className="font-bold">
              <a href="https://github.com/sohomofficial">Sohom Mondal</a>
            </span>
            .
          </p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
