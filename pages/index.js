import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="tutorials-list">
      <article onClick={() => router.push('/intro')}>
        <h3>Intro to Swimming</h3>
        <p>Learn about the sport of swimming, how it got started, and who's involved.</p>
      </article>
      <article onClick={() => router.push('/science')}>
        <h3>Science of Swimming</h3>
        <p>Discover the science behind swimming, including hydrodynamics, treading, and more.</p>
      </article>
      <article onClick={() => router.push('/techniques')}>
        <h3>Swimming Techniques</h3>
        <p>Explore the different techniques behind the sport, including the 4 strokes.</p>
      </article>
      <article onClick={() => router.push('/technologies')}>
        <h3>Swimming Technology</h3>
        <p>Learn about all the different pieces of technology both at a casual and competitive level.</p>
      </article>
      <article onClick={() => router.push('/competitive')}>
        <h3>Competitive Swimming</h3>
        <p>Delve into the professional side of swimming, and some of the popular competitors known around the word.</p>
      </article>
    </div>
  );
}
