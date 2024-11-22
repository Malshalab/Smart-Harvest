import Image from "next/image";

import understandingSustainabilityImage from '../assets/images/thumbnails/articles/understanding-the-potential-of-sustainability-turn-in-farming-review-of-sociotechnical-adoption-factors-of-agri-environmental-cropping-practices.jpeg';
import transitioningToSustainableAgriImage from '../assets/images/thumbnails/articles/transitioning-to-sustainable-agriculture-requires-growing-and-sustaining-an-ecologically-skilled-workforce.jpg';
import sustainableFarmingPracticesImage from '../assets/images/thumbnails/articles/sustainable-farming-practices-and-soil-health.jpeg';
import plasmaAgricultureImage from '../assets/images/thumbnails/articles/plasma-agriculture-a-green-technology-to-attain-the-sustainable-agriculture-goal.jpg';
import framingOfSustainableAgriImage from '../assets/images/thumbnails/articles/framing-of-sustainable-agricultural-practices-by-the-farming-press-and-its-effect-on-adoption.jpg';
import decadesMatterImage from '../assets/images/thumbnails/articles/decades-matter-agricultural-diversification-increases-financial-profitability-biodiversity-and-ecosystem-services-over-time.jpg';
import carbonEconomicsImage from '../assets/images/thumbnails/articles/carbon-economics-of-different-agricultural-practices-for-farming-soil.jpg';

import bonsucroImage from '../assets/images/thumbnails/certifications/bonsucro.jpeg';
import sanImage from '../assets/images/thumbnails/certifications/san.jpeg';
import leafImage from '../assets/images/thumbnails/certifications/leaf.jpeg';
import usdaImage from '../assets/images/thumbnails/certifications/usda.jpeg';
import ISO14001Image from '../assets/images/thumbnails/certifications/ISO14001.jpeg';


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
  bonsucro: bonsucroImage,
  san: sanImage,
  leafImage: leafImage,
  usda: usdaImage,
  ISO14001: ISO14001Image,
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
        thumbnail:(
          <iframe
            src="https://www.youtube.com/embed/65ngjdTslYY?controls=0&autoplay=1&mute=1"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ),
        title: '8 Hours of Robots Harvesting Strawberries and Tomatoes in 4K',
        resourceLocation: 'https://www.youtube.com/watch?v=65ngjdTslYY',
      },
      {
        type: contentType.videos,
        thumbnail: (
          <iframe
            src="https://www.youtube.com/embed/ol76iSC06bY?controls=0&autoplay=1&mute=1"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ),
        title: 'Smart Farm: Modern Methods For Harvesting, Sorting And Processing',
        resourceLocation: 'https://www.youtube.com/watch?v=ol76iSC06bY',
      },
      {
        type: contentType.videos,
        thumbnail: (
          <iframe
            src="https://www.youtube.com/embed/LCA0VX2jzX0?controls=0&autoplay=1&mute=1"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ),
        title: 'How Farmers Harvest Millions of Pecans',
        resourceLocation: 'https://www.youtube.com/watch?v=LCA0VX2jzX0',
      },
      {
        type: contentType.videos,
        thumbnail: (
          <iframe
            src="https://www.youtube.com/embed/wwH76bhCqh8?controls=0&autoplay=1&mute=1"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ),
        title: 'The Future Of Farming: Smart Solutions For Efficient Harvesting And Processing',
        resourceLocation: 'https://www.youtube.com/watch?v=wwH76bhCqh8',
      },
    ],
    [tabName.certification]: [
      {
        type: contentType.external,
        thumbnail: <Image src={imageMap.bonsucro} alt={'bonsucro'} />,
        title: 'LEAF Marque Certification',
        resourceLocation: 'https://leaf.eco/leafmarque/about',
      },
      {
        type: contentType.external,
        thumbnail: <Image src={imageMap.san} alt={'san'} />,
        title: 'ISO 14001 Environmental Management',
        resourceLocation: 'https://www.iso.org/standards/popular/iso-14000-family',
      },
      {
        type: contentType.external,
        thumbnail: <Image src={imageMap.leafImage} alt={'leafImage'} />,
        title: 'Bonsucro Certification',
        resourceLocation: 'https://www.fairtrade.net/en/why-fairtrade/how-we-do-it/fairtrade-standards.html',
      },
      {
        type: contentType.external,
        thumbnail: <Image src={imageMap.usda} alt={'usda'} />,
        title: 'USDA Organic Certification',
        resourceLocation: 'https://bonsucro.com/',
      },
      {
        type: contentType.external,
        thumbnail: <Image src={imageMap.ISO14001} alt={'ISO14001'} />,
        title: 'Sustainable Agriculture Network (SAN) Certification',
        resourceLocation: 'https://www.sustainableagriculture.eco/',
      },
    ],
}

export {
    tabName,
    contentType,
    tabContent,
};
