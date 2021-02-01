import { NavigationLink } from "./styled-components";

const BaseLink = (props) => {
  const { label, url } = props;
  return <NavigationLink to={url}>{label}</NavigationLink>;
};

export default BaseLink;
