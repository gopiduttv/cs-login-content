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
  return groq`*[_type == "campaign" && _id == "d9b9905c-cbe0-4c5c-ba62-840e19c4e3f9"]{
    ...,
  "campaignImage": image.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        }
  }[0]`;
};

const getBannerByID = () => {
  return groq`*[_type == "banner" && _id == $bannerID] | order(_createdAt desc)[0]`;
};

const getCampaignLayoutByID = () => {
  return groq`*[_type == "campaign" && _id == $campaignID]{ selectedLayout } | order(_createdAt desc)[0]`;
};

export {
  getViewPorts,
  getViewPortByRegion,
  getCampaignIdsByAdjacency,
  getCampaignByID,
  getBannerByID,
  getCampaignLayoutByID
};
