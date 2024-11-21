enum tabName {
    articles = 'Articles',
    tutorials = 'Tutorials',
    videos = 'Videos',
    certification = 'Certification',
}

const tabContent = {
    [tabName.articles]: [

    ],
    [tabName.tutorials]: [

    ],
    [tabName.videos]: [

    ],
    [tabName.certification]: [

    ],
 
}


const cards = [
    {
      src: "images/12255905_1280_720_30fps.mp4",
      type: "video",
      text: "View More Videos",
      title: "video" ,
      tags: ["videos", "informational", "green"]
    },
    {
      src: "https://assets.codepen.io/6093409/river.mp4",
      type: "video",
      text: "Explore Journals",
      title: "journals" ,
      tags: ["journals", "informational", "green"]
    },
    {
      src: "images/180026-863378301_small.mp4",
      type: "video",
      text: "Discover Certifications",
      title: "certification" ,
      tags: ["certification", "informational", "green"]
    },

    {
      src: "https://assets.codepen.io/6093409/river.mp4",
      type: "video",
      text: "Explore Journals",
      title: "journals" ,
      tags: ["journals", "informational", "green"]
    },

    {
      src: "images/12255905_1280_720_30fps.mp4",
      type: "video",
      text: "View More Videos",
      title: "video" ,
      tags: ["videos", "informational", "green"]
    },

    {
      src: "images/180026-863378301_small.mp4",
      type: "video",
      text: "Discover Certifications",
      title: "certification" ,
      tags: ["certification", "informational", "green"]
    },
];

export {
    tabName,
    tabContent,
    cards,
};