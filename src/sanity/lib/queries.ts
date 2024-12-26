import { groq } from "next-sanity";

const getViewPorts = () => {
  return groq`*[_type == "viewport"]`;
};

const getViewPortByRegion = () => {
  return groq`*[_type == "viewport" && dimensionValue.current == $region]`;
};

const getCampaignByAdjacency = () => {
  return groq`*[_type == "campaign" && campaignType == "adjacencyOriented" && adjacencyName == $adjacency]`;
};

export { getViewPorts, getViewPortByRegion, getCampaignByAdjacency };
