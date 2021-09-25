import ApproachPhases from 'components/content/ApproachPhases';
import Benefits from 'components/content/Benefits';
import Carousel from 'components/content/Carousel';
import FullWidthImage from 'components/content/FullWidthImage';
import HighlightBoxesBanner from 'components/content/HighlightBoxesBanner';
import IconsBanner from 'components/content/IconsBanner';
import ImageTilesGrid from 'components/content/ImageTilesGrid';
import ImageTileWithDesc from 'components/content/ImageTileWithDesc';
import ImageWithInfoBox from 'components/content/ImageWithInfoBox';
import NstepImage from 'components/content/NstepImage';
import PartnerLogos from 'components/content/PartnerLogos';
import SectionHeader from 'components/content/SectionHeader';
import TeamQuote from 'components/content/TeamQuote';
import TeamQuotesCarousel from 'components/content/TeamQuotesCarousel';
import TwoColmuns from 'components/content/TwoColmuns';
import Vacancies from 'components/content/Vacancies';
import FontLato from 'components/structure/FontLato';
import LineBreak from 'components/structure/LineBreak';
import TextCenter from 'components/structure/TextCenter';
import TextColor from 'components/structure/TextColor';
import Margin from 'components/structure/Margin';

export type SanitySerializers = {
  types?: { [key: string]: any };
  marks?: { [key: string]: any };
  list?: any;
  listItem?: any;
};

const serializers: SanitySerializers = {
  types: {
    twoColums: TwoColmuns,
    lineBreak: LineBreak,
    nstepImage: NstepImage,
    partnerLogos: PartnerLogos,
    fullWidthImage: FullWidthImage,
    sectionHeader: SectionHeader,
    imageTilesGrid: ImageTilesGrid,
    imageTileWithDesc: ImageTileWithDesc,
    benefits: Benefits,
    teamQuote: TeamQuote,
    teamQuotesCarousel: TeamQuotesCarousel,
    imageWithInfoBox: ImageWithInfoBox,
    vacancies: Vacancies,
    iconsBanner: IconsBanner,
    approachPhases: ApproachPhases,
    highlightBoxesBanner: HighlightBoxesBanner,
    carousel: Carousel,
    // eslint-disable-next-line react/display-name
  },
  marks: {
    'text-center': TextCenter,
    'font-lato': FontLato,
    textColor: TextColor,
    margin: Margin,
  },
};
export default serializers;
