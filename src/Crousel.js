import Carousel from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Crousel() {
  const items = [
    { id: 1, title: 'One' },
    { id: 2, title: 'Two' },
    { id: 3, title: 'Three' },
    { id: 4, title: 'Four' },
    { id: 5, title: 'Five' },
    { id: 6, title: 'Six' },
    { id: 7, title: 'Seven' },
    { id: 8, title: 'Eight' },
    { id: 9, title: 'Nine' },
    { id: 10, title: 'Ten' },
  ];
  return (
    <>
      <div className="crouselContainer">
        <Carousel breakPoints={breakPoints}>
          {items.map(item => (
            <Item key={item.id}>{item.title}</Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Crousel;
