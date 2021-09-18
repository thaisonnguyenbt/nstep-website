import Benefits from 'components/content/Benefits';
import FullWidthImage from 'components/content/FullWidthImage';
import ImageTilesGrid from 'components/content/ImageTilesGrid';
import ImageTileWithDesc from 'components/content/ImageTileWithDesc';
import ImageWithInfoBox from 'components/content/ImageWithInfoBox';
import PatnerLogos from 'components/content/PatnerLogos';
import SectionHeader from 'components/content/SectionHeader';
import TeamQuotesCarousel from 'components/content/TeamQuotesCarousel';
import TwoColmuns from 'components/content/TwoColmuns';
import BlockRenderer from 'components/structure/BlockRenderer';
import LineBreak from 'components/structure/LineBreak';

const serializers = {
  types: {
    twoColums: TwoColmuns,
    block: BlockRenderer,
    lineBreak: LineBreak,
    patnerLogos: PatnerLogos,
    fullWidthImage: FullWidthImage,
    sectionHeader: SectionHeader,
    imageTilesGrid: ImageTilesGrid,
    imageTileWithDesc: ImageTileWithDesc,
    benefits: Benefits,
    teamQuotesCarousel: TeamQuotesCarousel,
    imageWithInfoBox: ImageWithInfoBox,
  },
};

export default serializers;
