import {ChainId} from '@bgd-labs/js-utils';
import {NetworkAddresses} from '../types';

export const scrollAddresses: NetworkAddresses = {
  name: 'Scroll',
  chainId: ChainId.scroll,
  addresses: {
    TRANSPARENT_PROXY_FACTORY: '0xFa2eeb2d0054C3Db2A606E2cd9EE111b62707D1e',
    PROXY_ADMIN: '0x782559e349b084bB7C07c08404aE6E3436cDAE2E',
    PROTOCOL_GUARDIAN: '0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7',
  },
};
