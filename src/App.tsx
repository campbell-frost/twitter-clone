import { useState } from "react";
import { Tweet, TweetModel } from "./components/Tweet";

export function App() {
  const myTweets: TweetModel[] = [
    {
      content: "I love github desktop",
      name: "Alan",
      username: "aw",
      profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944",
    },
    {
      content: "I hate github desktop",
      name: "Campbell",
      username: "soup",
      profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
    },
    {
      content: "I am indifferent on github desktop",
      name: "Raiz",
      username: "RM",
      profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
    }
  ];
  const [tweets, setTweets] = useState<TweetModel[]>(myTweets);
  const [newTweetContent, setNewTweetContent] = useState("");

  function updateTweets () {
    const newTweet:TweetModel = {
      content: newTweetContent,
      name: "Campbell",
      username: "uhhsoup",
      profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
    };

    setTweets([newTweet, ...tweets]);
    setNewTweetContent("");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-96">
        <div className="flex my-4 justify-between">
          <input
            value={newTweetContent}
            onChange={(e) => setNewTweetContent(e.target.value)}
            className="bg-gray-200 p-2 rounded-s-md w-full"
          ></input>
          <button
            className="bg-blue-500 text-white p-2 rounded-e-md"
            onClick={updateTweets}
          >Post</button>
        </div>
        {tweets.map((value, index) => (
          <div key={index}>
            <Tweet tweet={value} />
          </div>
        ))}
      </div>
    </div>
  );
}