import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to my test store</h1>
      <p>
        Crazy drunk drivers. Pretty Mediocre photographic fakery, they cut off
        your brother's hair. Just relax now Calvin, you've got a big bruise on
        you're head. Who the hell is John F. Kennedy? No no no this sucker's
        electrical, but I need a nuclear reaction to generate the one point
        twenty-one gigawatts of electricity-
      </p>{" "}
      <p>
        {" "}
        Let's go. It's safe now. Everything's lead lined. Don't you lose those
        tapes now, we'll need a record. Wup, wup, I almost forgot my luggage.
        Who knows if they've got cotton underwear in the future. I'm allergic to
        all synthetics. He's absolutely right, Marty. the last thing you need is
        headaches. Listen, woh. Hello, uh excuse me. Sorry about your barn. No
        wait, Doc, the bruise, the bruise on your head, I know how that
        happened, you told me the whole story. you were standing on your toilet
        and you were hanging a clock, and you fell, and you hit your head on the
        sink, and that's when you came up with the idea for the flux capacitor,
        which makes time travel possible.{" "}
      </p>
      <p>
        Yeah, exactly. I don't know, I can't keep up with all of your
        boyfriends. Precisely. Watch it, Goldie. He's a peeping tom. Dad.
      </p>
    </div>
  );
};

export { Homepage };
