import avatarSvg from "./avatar-svgrepo-com.svg";

interface DoctorAvatarProps {
  profile_img: string;
  size?: number;
}

const DoctorAvatar: React.FC<DoctorAvatarProps> = ({
  profile_img,
  size = 100,
}) => {
  return (
    <img
      src={profile_img || avatarSvg}
      alt="Doctor Avatar"
      width={size}
      height={size}
      className="rounded-full"
    />
  );
};

export default DoctorAvatar;
