import { sortBy } from 'lodash';
import data from './rankings-1.csv';

export default sortBy(data.slice(0, 300), 'adp').map(d => ({
    id: d.id,
    name: `${d.firstName} ${d.lastName}`,
    position: d.slotName,
    adp: Number(d.adp),
}))