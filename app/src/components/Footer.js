import { Typography } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";





export default function SimpleFooter() {
  return (
    //absolute if need to fix the footer
<footer className="bottom-0 ml-12 mr-12 mb-12 w-screen grid grid-cols-6 gap-4">
  <div className="col-span-3">
    <Typography color="blue-gray" className="font-semibold text-custom-font-mono text-xl col-span-3 transition-colors hover:text-blue-500">
      Lets Connect 😃
    </Typography>
  </div>
  <div className="col-span-1">
  </div>
  <div className="col-span-2">
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <AiOutlineLinkedin className="transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl" />
      </div>
      <div className="col-span-1">
        <AiOutlineMail className="transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl" />
      </div>
      <div className="col-span-1">
        <AiFillGithub className="transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl" />
      </div>
    </div>
  </div>
</footer>

  );
}