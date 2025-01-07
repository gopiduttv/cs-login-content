import { groq } from "next-sanity";

const getViewPorts = () => {
  return groq`*[_type == "viewport"]`;
};

const getViewPortByRegion = () => {
  return groq`*[_type == "viewport" && dimensionValue.current == $region] | order(_createdAt desc)[0]`;
};

const getCampaignIdsByAdjacency = () => {
  return groq`*[_type == "campaign" && campaignType == "adjacencyOriented" && adjacencyName == $adjacency && _id in $campaignIds && customerType == $customerType ]`;
};

const getCampaignByID = () => {
  return groq`*[_type == "campaign" && _id == 'e8e86aa4-ed8b-4aa8-992a-cd67e72de406']{
    ...,
    'template':campaignLayoutTemplate[]-> ,
      'campaignLayoutTemplate':campaignLayoutTemplate[]->
    
  }[0]`;
};
const getBannerByID = () => {
  return groq`*[_type == "banner" && _id == $bannerID] | order(_createdAt desc)[0]`;
};


export {
  getViewPorts,
  getViewPortByRegion,
  getCampaignIdsByAdjacency,
  getCampaignByID,
  getBannerByID
};
