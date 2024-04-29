import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="items-center justify-end hidden lg:flex px-12">
      <Image
        src="/logo.png"
        alt="Logo"
        width={88}
        height={88}
        className="hidden md:block"
      />
    </div>
  );
};

export default Logo;
