import MUICarousel from 'react-material-ui-carousel';
import Image from 'next/image';
import Paper from '@mui/material/Paper';

import Styles from 'components/carousel/carousel.module.scss';

interface ItemProps {
  image: string;
  name: string;
  text: string[];
}
const Item = ({ image, name, text }: ItemProps) => (
  <Paper elevation={0} className={Styles.carouselItem}>
    <Image src={image} alt="Luos network" width={250} height={250} priority={false} />
    <div className={Styles.textContainer}>
      <h2>{name}</h2>
      {text.map((description: string, i: number) => (
        <span key={i}>{description}</span>
      ))}
    </div>
  </Paper>
);

interface CarouselProps {
  items: ItemProps[];
}
export const Carousel = ({ items }: CarouselProps) =>
  typeof window === 'undefined' ? null : (
    <MUICarousel
      navButtonsAlwaysInvisible={true}
      indicatorIconButtonProps={{
        style: {
          padding: '10px 5px',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#bd99ff',
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </MUICarousel>
  );
export default Carousel;
