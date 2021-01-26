import styled from "@emotion/styled";

export const ProfileCardContainer = styled.div`
  margin: auto;
  width: fit-content;
  position: relative;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

export const BgPatternCard = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ProfileCardContent = styled.main`
  text-align: center;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ProfileCardAvatar = styled.img`
  margin-top: -56px;
  border-radius: 50%;
  border: 6px solid white;
`;

export const ProfileCardUserInfo = styled.div`
  margin: 25px 0px;
  text-align: center;
`;

export const ProfileCardUserName = styled.strong`
  color: black;
  text-transform: capitalize;
`;

export const ProfileCardUserAge = styled.span`
  color: gray;
  margin-left: 10px;
`;

export const ProfileCardUserCity = styled.p`
  color: gray;
  text-transform: capitalize;
  margin-top: 10px;
`;

export const ProfileCardSeparator = styled.hr`
  border: 1px solid #eee;
`;

export const ProfileCardMeta = styled.div`
  display: flex;
  padding: 25px;
  justify-content: center;
`;

export const ProfileSocialStats = styled.div`
  flex: 1;
`;

export const ProfileStatsNumber = styled.p`
  font-weight: bold;
`;

export const ProfileStatsName = styled.small`
  color: #bbb;
  font-weight: 300;
  text-transform: capitalize;
`;
