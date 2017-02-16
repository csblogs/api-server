import { Organisation } from 'csblogs-common';
import log from '../../log';

const PUBLIC_API_ATTRIBUTES = [
  'id',
  'name',
  'link',
  'imageURI',
  'description'
];

const DEFAULT_ORDER = [
  ['name', 'DESC']
];

export async function getAll() {
  try {
    return await Organisation.findAll({
      attributes: PUBLIC_API_ATTRIBUTES,
      order: DEFAULT_ORDER,
      raw: true
    });
  } catch (error) {
    log.error({ error: error.message }, 'Error getting list of all Organisations');
    throw error;
  }
}

export async function getById(id) {
  throw new Error(`Not Implemented getById(). Won't find ${id}`);
}
