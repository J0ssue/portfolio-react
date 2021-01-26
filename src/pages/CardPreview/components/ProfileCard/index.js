import React from "react";

import {
  ProfileCardContainer,
  BgPatternCard,
  ProfileCardContent,
  ProfileCardAvatar,
  ProfileCardUserName,
  ProfileCardUserAge,
  ProfileCardUserCity,
  ProfileCardUserInfo,
  ProfileCardSeparator,
  ProfileCardMeta,
  ProfileSocialStats,
  ProfileStatsNumber,
  ProfileStatsName,
} from "./styled-components";

const ProfileCard = (props) => {
  const {
    bgPattern,
    avatar,
    name,
    age,
    city,
    followers,
    likes,
    photos,
  } = props.user;

  return (
    <ProfileCardContainer>
      <BgPatternCard src={bgPattern} alt="profile card background pattern" />
      <ProfileCardContent>
        <ProfileCardAvatar src={avatar} alt="victor´'s avatar" />
        <ProfileCardUserInfo>
          <ProfileCardUserName>{name}</ProfileCardUserName>
          <ProfileCardUserAge>{age}</ProfileCardUserAge>
          <ProfileCardUserCity>{city}</ProfileCardUserCity>{" "}
        </ProfileCardUserInfo>
        <ProfileCardSeparator />
        <ProfileCardMeta>
          <ProfileSocialStats>
            <ProfileStatsNumber>{followers}</ProfileStatsNumber>
            <ProfileStatsName>followers</ProfileStatsName>
          </ProfileSocialStats>
          <ProfileSocialStats>
            <ProfileStatsNumber>{likes}</ProfileStatsNumber>
            <ProfileStatsName>likes</ProfileStatsName>
          </ProfileSocialStats>
          <ProfileSocialStats>
            <ProfileStatsNumber>{photos}</ProfileStatsNumber>
            <ProfileStatsName>photos</ProfileStatsName>
          </ProfileSocialStats>
        </ProfileCardMeta>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
