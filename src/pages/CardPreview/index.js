import React, { useState, useEffect } from "react";

// components
import ProfileCard from "./components/ProfileCard";

// images
import bgPattern from "src/_static/images/CardPreview/BgPatternCard.svg";
import avatar from "src/_static/images/CardPreview/image-victor.jpg";
import patternTop from "src/_static/images/CardPreview/bg-pattern-top.svg";
import patternBottom from "src/_static/images/CardPreview/bg-pattern-bottom.svg";

// styled components
import {
  CardPreviewContaner,
  CardPreviewPatternTop,
  CardPreviewPatternBottom,
} from "./styled-components";

const CardPreview = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setUser({
        bgPattern,
        avatar,
        name: "victor crest",
        age: "26",
        city: "london",
        followers: "80K",
        likes: "803K",
        photos: "1.4k",
      });
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [setUser]);

  return (
    <CardPreviewContaner>
      <CardPreviewPatternTop src={patternTop} />
      <CardPreviewPatternBottom src={patternBottom} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProfileCard user={user} />
        </>
      )}
    </CardPreviewContaner>
  );
};

export default CardPreview;
