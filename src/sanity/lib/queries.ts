import { groq } from "next-sanity";

const getViewPorts = () => {
  return groq`*[_type == "viewport"]`;
};

const getViewPortByRegion = () => {
  return groq`*[_type == "viewport" && dimensionValue.current == $region] | order(_createdAt desc)[0]`;
};

const getCampaignIdsByAdjacency = () => {
  return groq`*[_type == "campaign" && campaignType == "adjacencyOriented" && adjacencyName == $adjacency]{_id}`;
};

const getCampaignByID = () => {
  return groq`*[_type == "campaign" && _id == $campaignID] | order(_createdAt desc)[0]`;
};

export {
  getViewPorts,
  getViewPortByRegion,
  getCampaignIdsByAdjacency,
  getCampaignByID,
};
