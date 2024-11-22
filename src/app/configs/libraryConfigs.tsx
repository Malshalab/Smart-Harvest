import Image from "next/image";
import understandingSustainabilityImage from '../assets/images/thumbnails/articles/understanding-the-potential-of-sustainability-turn-in-farming-review-of-sociotechnical-adoption-factors-of-agri-environmental-cropping-practices.jpeg';
import transitioningToSustainableAgriImage from '../assets/images/thumbnails/articles/transitioning-to-sustainable-agriculture-requires-growing-and-sustaining-an-ecologically-skilled-workforce.jpg';
import sustainableFarmingPracticesImage from '../assets/images/thumbnails/articles/sustainable-farming-practices-and-soil-health.jpeg';
import plasmaAgricultureImage from '../assets/images/thumbnails/articles/plasma-agriculture-a-green-technology-to-attain-the-sustainable-agriculture-goal.jpg';
import framingOfSustainableAgriImage from '../assets/images/thumbnails/articles/framing-of-sustainable-agricultural-practices-by-the-farming-press-and-its-effect-on-adoption.jpg';
import decadesMatterImage from '../assets/images/thumbnails/articles/decades-matter-agricultural-diversification-increases-financial-profitability-biodiversity-and-ecosystem-services-over-time.jpg';
import carbonEconomicsImage from '../assets/images/thumbnails/articles/carbon-economics-of-different-agricultural-practices-for-farming-soil.jpg';

enum contentType {
  document = 'Document',
  videos = 'Video',
  webPage = 'Webpage',
  external = 'External'
}

enum tabName {
    articles = 'Articles',
    tutorials = 'Tutorials',
    videos = 'Videos',
    certification = 'Certification',
}

interface contentMetaData {
  type: contentType;
  thumbnail: JSX.Element;
  title: string;
  resourceLocation: string;
}

interface tabContentType {
  [tabName.articles]: contentMetaData[];
  [tabName.videos]: contentMetaData[];
  [tabName.tutorials]: contentMetaData[];
  [tabName.certification]: contentMetaData[];
}

const imageMap = {
  understandingSustainability: understandingSustainabilityImage,
  transitioningToSustainableAgri: transitioningToSustainableAgriImage,
  sustainableFarmingPractices: sustainableFarmingPracticesImage,
  plasmaAgriculture: plasmaAgricultureImage,
  framingOfSustainableAgri: framingOfSustainableAgriImage,
  decadesMatter: decadesMatterImage,
  carbonEconomics: carbonEconomicsImage,
};

const tabContent: tabContentType = {
    [tabName.articles]: [
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.understandingSustainability} alt={'understandingSustainability'} />,
        title: 'Sustainability in Farming Practices',
        resourceLocation: '',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.transitioningToSustainableAgri} alt={'transitioningToSustainableAgri'} />,
        title: 'Transition to Sustainable Farming',
        resourceLocation: '',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.sustainableFarmingPractices} alt={'sustainableFarmingPractices'} />,
        title: 'Soil Health & Sustainable Farming',
        resourceLocation: '',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.plasmaAgriculture} alt={'plasmaAgriculture'} />,
        title: 'Plasma Agriculture Technology',
        resourceLocation: '',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.framingOfSustainableAgri} alt={'framingOfSustainableAgri'} />,
        title: 'Framing Sustainable Practices',
        resourceLocation: '',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.decadesMatter} alt={'decadesMatter'} />,
        title: 'Decades Matter in Agriculture',
        resourceLocation: '',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.carbonEconomics} alt={'carbonEconomics'} />,
        title: 'Carbon Economics in Farming',
        resourceLocation: '',
      },
    ],
    [tabName.tutorials]: [
      {
        type: contentType.webPage,
        thumbnail: <></>,
        title: 'Tutorial 1',
        resourceLocation: '',
      },
    ],
    [tabName.videos]: [
      {
        type: contentType.videos,
        thumbnail: <></>,
        title: 'Video 1',
        resourceLocation: '',
      },
    ],
    [tabName.certification]: [
      {
        type: contentType.external,
        thumbnail: <></>,
        title: 'Certification 1',
        resourceLocation: '',
      },
    ],
}

export {
    tabName,
    contentType,
    tabContent,
};
