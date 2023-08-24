import { sortBy } from 'lodash';
import data from './rankings.csv';

export default sortBy(data.slice(0, 300), 'adp').map(d => ({
    name: `${d.firstName} ${d.lastName}`,
    position: d.slotName,
    adp: Number(d.adp),
}))