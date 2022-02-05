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

import { IButtonTypes } from '../interfaces/IButtonTypes';

export const ButtonTypes: IButtonTypes = {
  instagram: {
    label: 'Instagram',
    icon: <Instagram />,
  },
  linkedin: {
    label: 'Linked In',
    icon: <LinkedIn />,
  },
  youtube: {
    label: 'Youtube',
    icon: <Youtube />,
  },
  pinterest: {
    label: 'Pinterest',
    icon: <Pinterest />,
  },
  twitter: {
    label: 'Twitter',
    icon: <Twitter />,
  },
  facebook: {
    label: 'Facebook',
    icon: <Facebook />,
  },
};
