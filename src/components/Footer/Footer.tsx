import logo from "../../img/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="col-span-4 px-3 py-2 bg-[#e5593f]">
      <div className="flex items-center justify-between">
        <a href="#">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto mr-4 block cursor-pointer"
          />
        </a>
        <p className="text-sm">© Copyright 2024.</p>
        <p className="text-sm">
          Created by{" "}
          <a
            href="https://github.com/orchaiTea"
            target="_black"
            className="text-gray-800 hover:underline"
          >
            Pushkar Tripathi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
