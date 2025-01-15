//Data2.js
import propertyImage1 from '../images/property1.jpg';
import propertyImage2 from '../images/property2.jpg';
import propertyImage3 from '../images/property3.jpeg';
import propertyImage4 from '../images/property4.jpg';
import propertyImage5 from '../images/property5.jpg';
import propertyImage6 from '../images/property6.jpg';
import agentImage1 from '../images/agent1.jpg';
import agentImage2 from '../images/agent2.jpg';
import agentImage3 from '../images/agent3.jpeg';
import agentImage4 from '../images/agent4.jpg';
import agentImage5 from '../images/agent5.jpeg';
import agentImage6 from '../images/agent6.jpeg';


export const categories = [
    { id: 'all', name: 'All' },
    { id: 'rent', name: 'Rent' },
    { id: 'sale', name: 'Sale' },
  ];


export const  TopProperties = [
    {
      id:1,
      image: propertyImage1,
      title: 'Luxury Apartment',
      bedrooms: 3,
      bathrooms: 2,
      size: 1500,
      location: 'Kitisuru, NRB',
      price: 350000,
      agent: { image: agentImage1, name: 'Jane Doe' },
      category: 'rent',
    description:
      'Fully furnished. Elegantly appointed condominium unit situated on premier location. The wide entry hall leads to a large living room with dining area. This expansive 2-bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartment’s Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted millwork and features incredible walk-in closet and storage space.',
 
    rooms: [
      { url: 'https://hips.hearstapps.com/hmg-prod/images/priors-crescent-living-room-haus-interiors-show-home-1602462623.jpg?crop=0.668xw:1.00xh;0.0731xw,0&resize=2048:*' },
      { url: 'https://www.decorpot.com/images/160341267511%20Effective%20Tips%20For%20Creating%20Beautiful%20Interiors%20at%20Home%20(1).jpg' },
      { url: 'https://colleenmcnally.com/wp-content/uploads/2019/06/living-room-and-kitchen-design.jpg' },
      { url: 'https://www.home-designing.com/wp-content/uploads/2022/03/modern-sofa.jpg' },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODtsAMP7p94jtlvfJm6ZwPSmw0Kk8s520fw&s' },
    ],

    },
    {
        id:2,
      image: propertyImage2,
      title: 'Modern Villa',
      bedrooms: 5,
      bathrooms: 4,
      size: 3000,
      location: 'Runda, NRB',
      price: 750000,
      agent: { image: agentImage4, name: 'John Smith' },
      category: 'sale',
    description: 'Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.',
  
  
  rooms:[
    { url: 'https://cityfurnish.com/blog/wp-content/uploads/2023/09/modren-room-home-interior-design-min-1200x675.jpg' },
    { url: 'https://www.losangeleshomes.eu/wp-content/uploads/2017/06/static1.squarespace-4.jpg' },
    { url: 'https://i.pinimg.com/736x/c2/c1/5d/c2c15d7bbbc1bc069a7cf483873c83b6.jpg' },
    { url: 'https://www.decorpot.com/images/425508365modern-home-interior-design-ideas.jpg' },
    { url: 'https://cfw42.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoidGFsYXRpYW5kcGFydG5lcnMuY29tIiwidiI6ODcyNzM4MzU5LCJpIjoiNjY5ODFiZTYtZTUxZi00YWI3LTBlZmYtZWRhMzZlNGYyMzAwIn0/wp-content/uploads/2021/03/14-things-4.jpg' },
  ],
    },
    {
        id:3,
      image: propertyImage3,
      title: 'Cozy Cottage',
      bedrooms: 2,
      bathrooms: 1,
      size: 800,
      location: 'Karen, NRB',
      price: 200000,
      agent: { image: agentImage2, name: 'Emily Clark' },
      category: 'rent',
    description: 'Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.',
  
  
  rooms:[
    { url: 'https://decoholic.org/wp-content/uploads/2022/02/beautiful-home-interiors-2.jpg' },
    { url: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2019/03/home-interior-design-color-scheme.jpg' },
    { url: 'https://dlifeinteriors.com/wp-content/uploads/2020/07/2bhk-flat-interiors-kochi-1024x682-1.jpeg' },
    { url: 'https://unitedtinyhomes.com/wp-content/uploads/2023/02/beach-feel-tiny-home-interior-idea-kitchen.jpg' },
    { url: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-trends-2022-home-libraries-1653410954.jpg' },
  ],
    },
    {
        id:4,
      image: propertyImage4,
      title: 'Penthouse Suite',
      bedrooms: 4,
      bathrooms: 3,
      size: 2500,
      location: 'Muthaiga, NRB',
      price: 900000,
      agent: { image: agentImage5, name: 'Michael Brown' },
      category: 'sale',
    description: 'Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.',
  
  rooms:[
    { url: 'https://miro.medium.com/v2/resize:fit:1400/1*lVO6pah46kCuIazZrOFiag.jpeg' },
    { url: ' https://www.decorpot.com/images/4-banner.jpg' },
    { url: 'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg' },
    { url: 'https://cityfurnish.com/blog/wp-content/uploads/2023/06/tropical-interior-design-living-room-min.jpg' },
    { url: 'https://dlifeinteriors.com/wp-content/uploads/2022/12/home-interior-project-in-bengaluru-at-Prestige-Augusta-Golf-Village.jpg' },
  ]
    },
    {
        id:5,
      image: propertyImage5,
      title: 'Family Home',
      bedrooms: 3,
      bathrooms: 2,
      size: 1800,
      location: 'Runda, NRB',
      price: 400000,
      agent: { image: agentImage3, name: 'Sarah Wilson' },
      category: 'rent',
    description: ' Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.',
   
  
  rooms:[
    { url: 'https://media.designcafe.com/wp-content/uploads/2023/09/25123644/modern-interior-design-ideas.jpg' },
    { url: 'https://i.pinimg.com/originals/85/da/5c/85da5cbf372e364d22e4527f324ff12f.jpg' },
    { url: 'https://st.hzcdn.com/simgs/pictures/living-rooms/by-j-design-group-panels-wall-paneling-miami-interior-designers-modern-j-design-group-interior-designers-miami-modern-img~6f21e3ef06e41ae1_14-9833-1-283b621.jpg' },
    { url: 'https://ellecordesign.com/wp-content/uploads/2019/01/kitchen.jpg' },
    { url: 'https://miro.medium.com/v2/resize:fit:1182/0*AafRdEniMnURKdtv.jpg' },
  ]

    },
    {
        id:6,
      image: propertyImage6,
      title: 'Urban Condo',
      bedrooms: 1,
      bathrooms: 1,
      size: 600,
      location: 'Karen, NRB',
      price: 300000,
      agent: { image: agentImage6, name: 'David Lee' },
      category: 'sale',
    description: ' Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.',
   
  
  rooms:[
    { url: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2024/03/Interior-Design-Rules-for-Styling-Your-Home-Like-a-Pro.jpg' },
    { url: ' https://modeneseinteriors.com/uploads/2022/09/lobby_view1.jpg' },
    { url: 'https://media.istockphoto.com/id/1266498393/photo/white-kitchen-design.jpg?s=612x612&w=0&k=20&c=YNRfjutwTChAPHKgWaCWXTrogNr4DWA7G_6-idtr3aM=' },
    { url: ' https://www.ultimatehomeideas.com/wp-content/uploads/2021/10/spacejoy-WQ35C1ZqCPk-unsplash.jpg' },
    { url: 'https://images.woodenstreet.de/image/data/juhi/blog%20images/06-april-2022/interior-design-ideas-of-2022-banner-6.jpg' },
  ]
    },
    
  ];
