import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./Post.css";

import { LikeIcon, MessangerIcon } from "../../icons";
import CommentIcon from "../../icons/CommentIcon";
import SaveIcon from "../../icons/SaveIcon";
import SettingsIcon from "../../icons/SettingsIcon";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <div className="PostTop__User">
          <div className="User__Image">
            <img
              src={post?.userImage ? post?.userImage : ""}
              alt={post?.userName}
            />
          </div>
          <div className="User__Content">
            <p className="User__Username">{post?.userName}</p>
            <p className="User__Location">{post?.location}</p>
          </div>
        </div>
        <div className="PostActions__Settings">
          <SettingsIcon />
        </div>
      </div>
      <div className="PostContent">
        <Swiper pagination={true} modules={[Pagination]}>
          {post?.media?.map((media) => (
            <SwiperSlide>
              <img key={media?.id} src={media?.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="PostActions">
        <div onClick={() => toggleLike()} className="PostActions__Like">
          <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
        </div>

        <div className="PostActions__Comment">
          <CommentIcon />
        </div>

        <div className="PostActions__Messanger">
          <MessangerIcon />
        </div>

        <div className="PostActions__Save">
          <SaveIcon />
        </div>
      </div>

      <div>
        <p className="User__Like">Mi piace : {post?.likes.numberOfLikes}</p>
        <p className="User__Username">{post?.userName}</p>
        {/* <p className="User__Text">{post?.comments}</p> */}
      </div>
    </article>
  );
};

export default Post;
