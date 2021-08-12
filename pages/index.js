import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import ChatScreen from "../components/ChatScreen";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FlemChat</title>
        <meta
          name="description"
          content="An online chat plateform named FlemChat"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <ChatScreen />
    </div>
  );
}
