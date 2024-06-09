import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="flex flex-col gap-y-4 pb-12">
      <p className="text-center text-neutral-500">
        Made by <span className="underline">Barkhatov Andrew</span>
      </p>
      <div className="flex justify-center gap-x-4">
        <FaLinkedin size={24} className="cursor-pointer hover:fill-amber-300" />
        <FaTelegramPlane size={24} className="cursor-pointer hover:fill-amber-300" />
        <FaGithub size={24} className="cursor-pointer hover:fill-amber-300" />
      </div>
    </div>
  )
}
