import { Tweet, TweetType } from "./components/Tweet";

export function App() {
  const myTweets: TweetType[] = [
    {
      tweet: {
        content: "I love github desktop",
        name: "Alan",
        username: "aw",
        profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944",
      }
    },
    {
      tweet: {
        content: "I hate github desktop",
        name: "Campbell",
        username: "soup",
        profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
      }
    },
    {
      tweet: {
        content: "I am indifferent on github desktop",
        name: "Raiz",
        username: "RM",
        profilePicture: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
      }
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {myTweets.map((value, index) => (
        <div key={index}>
          <Tweet tweet={value.tweet} />
        </div>
      ))}
    </div>
  );
}