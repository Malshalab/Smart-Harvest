import Image from "next/image";

import understandingSustainabilityImage from '../assets/images/thumbnails/articles/understanding-the-potential-of-sustainability-turn-in-farming-review-of-sociotechnical-adoption-factors-of-agri-environmental-cropping-practices.jpeg';
import transitioningToSustainableAgriImage from '../assets/images/thumbnails/articles/transitioning-to-sustainable-agriculture-requires-growing-and-sustaining-an-ecologically-skilled-workforce.jpeg';
import sustainableFarmingPracticesImage from '../assets/images/thumbnails/articles/sustainable-farming-practices-and-soil-health.jpeg';
import plasmaAgricultureImage from '../assets/images/thumbnails/articles/plasma-agriculture-a-green-technology-to-attain-the-sustainable-agriculture-goal.jpeg';
import framingOfSustainableAgriImage from '../assets/images/thumbnails/articles/framing-of-sustainable-agricultural-practices-by-the-farming-press-and-its-effect-on-adoption.jpeg';
import decadesMatterImage from '../assets/images/thumbnails/articles/decades-matter-agricultural-diversification-increases-financial-profitability-biodiversity-and-ecosystem-services-over-time.jpeg';
import carbonEconomicsImage from '../assets/images/thumbnails/articles/carbon-economics-of-different-agricultural-practices-for-farming-soil.jpeg';

import sanImage from '../assets/images/thumbnails/certifications/san.jpeg';
import usdaImage from '../assets/images/thumbnails/certifications/usda.jpeg';
import ISO14001Image from '../assets/images/thumbnails/certifications/ISO14001.jpeg';

import automatingHarvestingImage from '../assets/images/thumbnails/tutorials/automatingHarvesting.jpeg'; 
import efficientStorageImage from '../assets/images/thumbnails/tutorials/efficientStorage.jpeg'; 
import smartWaterImage from '../assets/images/thumbnails/tutorials/smartWater.jpeg'; 
import predictiveAnalysisImage from '../assets/images/thumbnails/tutorials/predictiveAnalysis.jpeg'; 
import droneTechnologyImage from '../assets/images/thumbnails/tutorials/droneTechnology.jpeg'; 
import ioTSensorsImage from '../assets/images/thumbnails/tutorials/ioTSensors.jpeg'; 

import AutomatingHarvestingTutorial from "../assets/webPageContent/AutomatingHarvestingTutorial";
import DroneTechTutorial from "../assets/webPageContent/DroneTechTutorial";
import EfficientStorageTutorial from "../assets/webPageContent/EfficientStorageTutorial";
import IoTSensorsTutorial from "../assets/webPageContent/IoTSensorsTutorial";
import PredictiveAnalysisTutorial from "../assets/webPageContent/PredictiveAnalysisTutorial";
import SmartWaterTutorial from "../assets/webPageContent/SmartWaterTutorial";

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

export interface contentMetaData {
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
  san: sanImage,
  usda: usdaImage,
  ISO14001: ISO14001Image,
  automatingHarvesting: automatingHarvestingImage,
  efficientStorage: efficientStorageImage,
  smartWater: smartWaterImage,
  predictiveAnalysis: predictiveAnalysisImage,
  droneTechnology: droneTechnologyImage,
  ioTSensors: ioTSensorsImage,
};

const tutorialContentMap = {
  'automatingHarvestingTutorial': <AutomatingHarvestingTutorial />,
  'droneTechTutorial': <DroneTechTutorial />,
  'efficientStorageTutorial': <EfficientStorageTutorial />,
  'ioTSensorsTutorial': <IoTSensorsTutorial />,
  'predictiveAnalysisTutorial': <PredictiveAnalysisTutorial />,
  'smartWaterTutorial': <SmartWaterTutorial />
}

const tabContent: tabContentType = {
    [tabName.articles]: [
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.understandingSustainability} alt={'understandingSustainability'} />,
        title: 'Sustainability in Farming Practices',
        resourceLocation: '/assets/documents/Understanding the potential of sustainability turn in farming- review of sociotechnical adoption factors of agri-environmental cropping practices.pdf',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.transitioningToSustainableAgri} alt={'transitioningToSustainableAgri'} />,
        title: 'Transition to Sustainable Farming',
        resourceLocation: '/assets/documents/Transitioning to Sustainable Agriculture Requires Growing and Sustaining an Ecologically Skilled Workforce.pdf',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.sustainableFarmingPractices} alt={'sustainableFarmingPractices'} />,
        title: 'Soil Health & Sustainable Farming',
        resourceLocation: '/assets/documents/Sustainable farming practices and soil health.pdf',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.plasmaAgriculture} alt={'plasmaAgriculture'} />,
        title: 'Plasma Agriculture Technology',
        resourceLocation: '/assets/documents/Plasma Agriculture- A green technology to attain the sustainable agriculture goal.pdf',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.framingOfSustainableAgri} alt={'framingOfSustainableAgri'} />,
        title: 'Framing Sustainable Practices',
        resourceLocation: '/assets/documents/Framing of sustainable agricultural practices by the farming press and its effect on adoption.pdf',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.decadesMatter} alt={'decadesMatter'} />,
        title: 'Decades Matter in Agriculture',
        resourceLocation: '/assets/documents/Decades matter- Agricultural diversification increases financial profitability, biodiversity, and ecosystem services over time.pdf',
      },
      {
        type: contentType.document,
        thumbnail: <Image src={imageMap.carbonEconomics} alt={'carbonEconomics'} />,
        title: 'Carbon Economics in Farming',
        resourceLocation: '/assets/documents/Carbon Economics of Different Agricultural Practices for Farming Soil.pdf',
      },
    ],
    [tabName.tutorials]: [
      {
        type: contentType.webPage,
        thumbnail: <Image src={imageMap.ioTSensors} alt={'ioTSensors'} />,
        title: 'Using IoT Sensors for Smart Harvest',
        resourceLocation: 'ioTSensorsTutorial',
      },
      {
        type: contentType.webPage,
        thumbnail: <Image src={imageMap.droneTechnology} alt={'droneTechnology'} />,
        title: 'Drone Technology for Crop Monitoring',
        resourceLocation: 'droneTechTutorial',
      },
      {
        type: contentType.webPage,
        thumbnail: <Image src={imageMap.automatingHarvesting} alt={'automatingHarvesting'} />,
        title: 'Automating Harvesting with Robotics',
        resourceLocation: 'automatingHarvestingTutorial',
      },
      {
        type: contentType.webPage,
        thumbnail: <Image src={imageMap.efficientStorage} alt={'efficientStorage'} />,
        title: 'Efficient Storage After Harvesting',
        resourceLocation: 'efficientStorageTutorial',
      },
      {
        type: contentType.webPage,
        thumbnail: <Image src={imageMap.smartWater} alt={'smartWater'} />,
        title: 'Smart Water Management During Harvest',
        resourceLocation: 'smartWaterTutorial',
      },
      {
        type: contentType.webPage,
        thumbnail: <Image src={imageMap.predictiveAnalysis} alt={'predictiveAnalysis'} />,
        title: 'Predictive Analytics for Harvest Scheduling',
        resourceLocation: 'predictiveAnalysisTutorial',
      },
    ],
    [tabName.videos]: [
      {
        type: contentType.videos,
        thumbnail:(
          <video loop muted autoPlay>
            <source src="/assets/videos/eightHoursRobot.mp4" type="video/mp4" />
          </video>
        ),
        title: '8 Hours of Robots Harvesting Strawberries and Tomatoes in 4K',
        resourceLocation: 'https://www.youtube.com/embed/65ngjdTslYY?mute=1',
      },
      {
        type: contentType.videos,
        thumbnail: (
          <video loop muted autoPlay>
            <source src="/assets/videos/smartFarming.mp4" type="video/mp4" />
          </video>
        ),
        title: 'Smart Farm: Modern Methods For Harvesting, Sorting And Processing',
        resourceLocation: 'https://www.youtube.com/embed/ol76iSC06bY?mute=1',
      },
      {
        type: contentType.videos,
        thumbnail: (
          <video loop muted autoPlay>
            <source src="/assets/videos/harvestPecans.mp4" type="video/mp4" />
          </video>
        ),
        title: 'How Farmers Harvest Millions of Pecans',
        resourceLocation: 'https://www.youtube.com/embed/LCA0VX2jzX0?mute=1',
      },
      {
        type: contentType.videos,
        thumbnail: (
          <video loop muted autoPlay>
            <source src="/assets/videos/smartHarvesting.mp4" type="video/mp4" />
          </video>
        ),
        title: 'The Future Of Farming: Smart Solutions For Efficient Harvesting And Processing',
        resourceLocation: 'https://www.youtube.com/embed/wwH76bhCqh8?mute=1',
      },
    ],
    [tabName.certification]: [
      {
        type: contentType.external,
        thumbnail: <Image src={imageMap.san} alt={'san'} />,
        title: 'ISO 14001 Environmental Management',
        resourceLocation: 'https://www.iso.org/standards/popular/iso-14000-family',
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
    tutorialContentMap,
};
