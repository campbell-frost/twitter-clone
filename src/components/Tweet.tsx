import { IconDots } from "@tabler/icons-react";

export type TweetType = {
  tweet: {
    username: string;
    name: string;
    content: string;
    profilePicture: string;
    imageUrl?: string;
    stats?: {
      likes: number;
    },
  }
}

export function Tweet({ tweet }: TweetType) {
  return (
    <div className="border p-4 rounded-lg w-96 mb-4">
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
          <IconDots />
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
    </div>
  );
}