'use client'
import UserName from "@/app/authed/(clerk)/useUser";

function UserAvatar ( ) {
 
    return (
      <div className="post-header flex items-center mb-4">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="User Avatar"
            className="post-avatar rounded-full w-10 h-10 mr-2"
          />
          <div>
            <p className="post-author font-bold text-sm"> 
              company name
            </p>
            <p className="post-time text-gray-500 text-xs">
              2 hours ago
            </p>
          </div>
      </div>
    )
}

export default function FacebookPost({ generatedPost , LoggedInAs }) {
    return (
      <div className=" bg-white rounded-lg shadow-md p-5">

        <UserAvatar />

        <div className="post-content mb-4">
          <p className="text-base">
            { generatedPost }
          </p>
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Post Image"
            className="post-image mt-4 rounded-md"
          />
        </div>

        <div className="post-reactions flex mb-4 flex-wrap">
          <div className="reaction-container flex items-center mr-4">
            <span className="reaction-icon" role="img" aria-label="Thumbs Up">
              &#128077;
            </span>
            <span className="reaction-count ml-1 pr-3">42</span> Likes
          </div>
          <div className="reaction-container flex items-center mr-4">
            <span className="reaction-icon mr-2" role="img" aria-label="Heart">
              &#128151;
            </span>
            <span className="reaction-count ml-1 pr-3" >10</span> Loves
          </div>
          <div className="reaction-container flex items-center mr-4">
            <span className="reaction-icon mr-2" role="img" aria-label="Laughing">
              &#128514;
            </span>
            <span className="reaction-count ml-1 pr-3">8</span> Haha
          </div>
          <div className="reaction-container flex items-center mr-4">
            <span className="reaction-icon mr-2 " role="img" aria-label="Wow">
              &#128562;
            </span>
            <span className="reaction-count ml-1 pr-3">5</span> Wow
          </div>
        </div>

        <div className="post-comments mb-4">
          <div className="post-comment flex items-center mb-2">
            <img
              src="https://source.unsplash.com/random/30x30"
              alt="Comment Avatar"
              className="post-comment-avatar rounded-full w-6 h-6 mr-2"
            />
            <p className="post-comment-author font-bold text-sm">Jane Smith</p>
            <p className="post-comment-text text-sm ml-2">Nice post!</p>
          </div>
          <div className="post-comment flex items-center mb-2">
            <img
              src="https://source.unsplash.com/random/30x30"
              alt="Comment Avatar"
              className="post-comment-avatar rounded-full w-6 h-6 mr-2"
            />
            <p className="post-comment-author font-bold text-sm">Mark Johnson</p>
            <p className="post-comment-text text-sm ml-2">Great job!</p>
          </div>
        </div>

        <div className="post-actions flex items-center text-lg flex-wrap">
          <div className="action-container flex items-center mr-4">
            <span className="action-icon" role="img" aria-label="Like">
              &#128077;
            </span>
            Like
          </div>
          <div className="action-container flex items-center mr-4">
            <span className="action-icon" role="img" aria-label="Comment">
              &#128172;
            </span>
            Comment
          </div>
          <div className="action-container flex items-center mr-4">
            <span className="action-icon" role="img" aria-label="Share">
              &#128256;
            </span>
            Share
          </div>
        </div>
      </div>
    );
  }
  