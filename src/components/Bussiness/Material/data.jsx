const data = Array.from({ length: 34 }, (_, i) => ({
    // id: i + 1,
    src: `/products/material${i+1}.jpeg`,
    width: 180,
    height: 180,
    caption: `Item ${i}`,
  }));

//   var itemData = [
    
//   ];
//   for (let i = 1; i <= 34; i++) {
//     itemData.push({
//       id: i,
//       img: `${process.env.PUBLIC_URL}/products/material${i}.jpeg`,
//       title: `Item ${i}`,
//       description: `Description for item ${i}`,
//     })
// }
  export default data