import apiMock from '../api-mock.json';
import {
  normalize,
  schema
} from 'normalizr';

const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({ ...value,
    categoryId: parent.id
  })
});

const category = new schema.Entity('category', {
  playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category) };

const normalizeData = normalize(apiMock, categories);

export default normalizeData;