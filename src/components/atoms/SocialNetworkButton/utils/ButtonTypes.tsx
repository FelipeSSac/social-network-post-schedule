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

import { IButtonTypes } from '../interfaces/IButtonTypes';

export const ButtonTypes: IButtonTypes = {
  Instagram: {
    label: 'Instagram',
    icon: <Instagram />,
  },
  Linkedin: {
    label: 'Linked In',
    icon: <LinkedIn />,
  },
  Youtube: {
    label: 'Youtube',
    icon: <Youtube />,
  },
  Pinterest: {
    label: 'Pinterest',
    icon: <Pinterest />,
  },
  Twitter: {
    label: 'Twitter',
    icon: <Twitter />,
  },
  Facebook: {
    label: 'Facebook',
    icon: <Facebook />,
  },
};
