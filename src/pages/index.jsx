import Hero from "@/components/Hero";
import Comment from "@/components/Comment";

const Home = () => {
  return (
    <>
      <Comment start={"HERO"} end={"/HERO"}>
        <Hero />
      </Comment>
    </>
  );
};

export default Home;
