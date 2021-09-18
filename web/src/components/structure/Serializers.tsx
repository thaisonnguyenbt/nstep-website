import Benefits from 'components/content/Benefits';
import FullWidthImage from 'components/content/FullWidthImage';
import ImageTilesGrid from 'components/content/ImageTilesGrid';
import ImageTileWithDesc from 'components/content/ImageTileWithDesc';
import ImageWithInfoBox from 'components/content/ImageWithInfoBox';
import PartnerLogos from 'components/content/PartnerLogos';
import SectionHeader from 'components/content/SectionHeader';
import TeamQuotesCarousel from 'components/content/TeamQuotesCarousel';
import TwoColmuns from 'components/content/TwoColmuns';
import LineBreak from 'components/structure/LineBreak';
import TextCenter from 'components/structure/TextCenter';

const serializers = {
  types: {
    twoColums: TwoColmuns,
    lineBreak: LineBreak,
    partnerLogos: PartnerLogos,
    fullWidthImage: FullWidthImage,
    sectionHeader: SectionHeader,
    imageTilesGrid: ImageTilesGrid,
    imageTileWithDesc: ImageTileWithDesc,
    benefits: Benefits,
    teamQuotesCarousel: TeamQuotesCarousel,
    imageWithInfoBox: ImageWithInfoBox,
  },
  marks: {
    'text-center': TextCenter,
  },
};

export default serializers;
