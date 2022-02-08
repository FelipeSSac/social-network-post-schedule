// @ts-expect-error
import Instagram from '../../../../assets/images/socialNetwork/Sn-instagram.svg?component';
// @ts-expect-error
import LinkedIn from '../../../../assets/images/socialNetwork/Sn-linkedin.svg?component';
// @ts-expect-error
import Youtube from '../../../../assets/images/socialNetwork/Sn-youtube.svg?component';
// @ts-expect-error
import Pinterest from '../../../../assets/images/socialNetwork/Sn-pinterest.svg?component';
// @ts-expect-error
import Twitter from '../../../../assets/images/socialNetwork/Sn-twitter.svg?component';
// @ts-expect-error
import Facebook from '../../../../assets/images/socialNetwork/Sn-facebook.svg?component';

import { IIconTypes } from '../interfaces/IIconTypes';

export const IconTypes: IIconTypes = {
  Instagram: {
    color: '#D60F86',
    icon: <Instagram />
  },
  Linkedin: {
    color: '#3A70DA',
    icon: <LinkedIn />
  },
  Youtube: {
    color: '',
    icon: <Youtube />
  },
  Pinterest: {
    color: '',
    icon: <Pinterest />
  },
  Twitter: {
    color: '',
    icon: <Twitter />
  },
  Facebook: {
    color: '',
    icon: <Facebook />
  },
};
