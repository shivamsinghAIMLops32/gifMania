import {FaInstagram, FaLink,FaGithub} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://github.com/shivamsinghAIMLops32">
          <FaGithub size={20} />
        </a>
        <a href="/">
          <FaHome size={20} />
        </a>
        <a href="https://shivamcodecraft.netlify.app/">
          <FaLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;