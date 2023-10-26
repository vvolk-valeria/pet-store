import { useParams } from "react-router-dom";
import Products from './Products/Products'
import Categories from './Categories/Categories'
import Brands from './Brands/Brands.jsx'

const ContentRouter = () => {
    const { contentId } = useParams();
    console.log(contentId)

    switch (contentId) {
      case 'products':
        return <Products />;
      case 'categories':
        return <Categories />;
      case 'categories':
        return <Brands />;
      // Другие компоненты в соответствии с contentId
      default:
        return;
    }
};

export default ContentRouter;