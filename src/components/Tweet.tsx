
import { useState } from "react";
import { HeartFilled, HeartOutlined, MessageOutlined, RetweetOutlined, ShareAltOutlined } from "@ant-design/icons"
export type TweetModel = {
  username: string;
  name: string;
  content: string;
  profilePicture: string;
  imageUrl?: string;
  stats?: {
    likes: number;
  },
}

type TweetProps = {
  tweet: TweetModel;
}

export function Tweet({ tweet }: TweetProps) {
  return (
    <div className="border p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src={tweet.profilePicture}
            width={50}
            height={50}
            className="rounded-full"
          >
          </img>
          <div className="flex flex-col ml-4">
            <p>{tweet.name}</p>
            <p>@{tweet.username}</p>
          </div>
        </div>
        <button>
        </button>
      </div>
      <div className="mt-3">
        <hr></hr>
      </div>
      <div className="mt-4">
        {tweet.imageUrl &&
          <img src={tweet.imageUrl}></img>
        }
        <p>{tweet.content}</p>
      </div>
      <TweetBar />
    </div>
  );
}

function TweetBar() {
  const [like, setLike] = useState(false)

  return (
    <div className="flex justify-between items-center mt-4">
      <button onClick={() => setLike(!like)}>
        {!like
          ? <HeartOutlined />
          : <HeartFilled />
        }
      </button>
      <button>
        <MessageOutlined />
      </button>
      <button>
        <RetweetOutlined />
      </button>
      <button>
        <ShareAltOutlined />
      </button>
    </div>
  );
}
