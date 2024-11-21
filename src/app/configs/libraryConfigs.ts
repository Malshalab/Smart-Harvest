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
    },
    {
      src: "https://assets.codepen.io/6093409/river.mp4",
      type: "video",
      text: "Explore Journals",
    },
    {
      src: "images/180026-863378301_small.mp4",
      type: "video",
      text: "Discover Certifications",
    },

    {
      src: "https://assets.codepen.io/6093409/river.mp4",
      type: "video",
      text: "Explore Journals",
    },

    {
      src: "images/12255905_1280_720_30fps.mp4",
      type: "video",
      text: "View More Videos",
    },

    {
      src: "images/180026-863378301_small.mp4",
      type: "video",
      text: "Discover Certifications",
    },
];

export {
    tabName,
    tabContent,
    cards,
};