import { useState, useEffect } from "react";

import "./App.css";

// components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

function App() {
  const [section, setSection] = useState("home");

  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  // 1. useEffect Unlimited - Viene scatenato ogni volta che viene montato il componente
  // useEffect(() => {
  //   fetch("https://api.npoint.io/c59d0538fafba6432ffe")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // });

  // 2. useEffect Lite - Viene scatenato una sola volta
  useEffect(() => {
    fetch("https://api.npoint.io/79e8a418f7117affaa55")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => setStories(data));

    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => setUser(data));
  }, []);

  // useEffect(() => {
  //   fetch("https://api.npoint.io/5cb961331b64e6ed0258")
  //     .then((res) => res.json())
  //     .then((data) => setStories(data));
  //   // console.log("Ho invocato lo useEffect!");
  // }, []);

  // 3. useEffect Limited - Viene scatenato ogni volta che un dipendente cambia $$$
  // useEffect(() => {
  //   fetch("https://api.npoint.io/c59d0538fafba6432ffe")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));

  //   console.log("Ho invocato lo useEffect!");
  // }, [stories]);

  // 4. useEffect Resurrected - Viene scatenata una funzione di clean-up prima che lo useEffect viene ri-lanciato
  // useEffect(() => {
  //   fetch("https://api.npoint.io/c59d0538fafba6432ffe")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));

  //   console.log("Ho invocato lo useEffect!");

  //   return () => {
  //     // Clean-up function
  //     console.log("Ho invocato il return dello useEffect!");
  //   };
  // }, [stories]);

  // const onHandleClick1 = () => setStories([]);
  // const onHandleClick2 = () => setPosts([]);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1>IGTV</h1>;
      case "chats":
        return <Chats />;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
      <Stories />
    </>
  );
}

export default App;
