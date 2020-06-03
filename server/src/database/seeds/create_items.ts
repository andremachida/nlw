import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image: 'lamps.svg' },
    { title: 'Battery', image: 'battery.svg' },
    { title: 'Paper and Paperboard', image: 'paper-paperboard.svg' },
    { title: 'Eletronic Waste', image: 'eletronic.svg' },
    { title: 'Organic Waste', image: 'organic.svg' },
    { title: 'Cooking Oil', image: 'oil.svg' }
  ]);
}