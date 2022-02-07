// @ts-expect-error
import Instagram from '../../../../assets/images/socialNetwork/sn-instagram.svg?component';
// @ts-expect-error
import LinkedIn from '../../../../assets/images/socialNetwork/sn-linkedin.svg?component';
// @ts-expect-error
import Youtube from '../../../../assets/images/socialNetwork/sn-youtube.svg?component';
// @ts-expect-error
import Pinterest from '../../../../assets/images/socialNetwork/sn-pinterest.svg?component';
// @ts-expect-error
import Twitter from '../../../../assets/images/socialNetwork/sn-twitter.svg?component';
// @ts-expect-error
import Facebook from '../../../../assets/images/socialNetwork/sn-facebook.svg?component';

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
