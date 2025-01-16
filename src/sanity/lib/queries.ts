import { groq } from "next-sanity";

const getViewPorts = () => {
  return groq`*[_type == "viewport"]`;
};

const getViewPortByRegion = () => {
  return groq`*[_type == "viewport" && dimensionValue.current == $region] | order(_createdAt desc)[0]`;
};

const getViewPortByProductRegion = () => {
  return groq`*[_type == "viewport" && dimensionValue.current == $productRegion] | order(_createdAt desc)[0]`;
};

const getCampaignIdsByAdjacency = () => {
  return groq`*[_type == "campaign" && campaignType == "adjacencyOriented" && adjacencyName == $adjacency && _id in $campaignIds && customerType == $customerType ]`;
};

const getAllCampaignsByLayout = () => {
  return groq`*[_type == "campaign" && selectedLayout == $layout]`;
};

const getCampaignByID = () => {
  return groq`*[_type == "campaign" &&  _id == $campaignID]{
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
        },
   "templateLogo":templateLogo.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        "backgroundImage": backgroundImage.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
    campaignCarousalImage[]{
    speakerName,
      speakerDesignation,
   'image':speakerImage.asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
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
  getViewPortByProductRegion,
  getCampaignIdsByAdjacency,
  getCampaignByID,
  getBannerByID,
  getCampaignLayoutByID,
  getAllCampaignsByLayout,
};
