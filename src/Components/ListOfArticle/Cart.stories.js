import React from 'react';
import { reduce } from 'lodash';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  number,
  files,
} from '@storybook/addon-knobs';
import AllArticles from './AllArticles';
import CartComponent from './ArticleComponent';
import { ListOfArticles } from '../../mockData/dataOfListArticles';

storiesOf('All Articles', module)
  .add('default', () => (
    <AllArticles ListOfArticles={ListOfArticles} />
  ))
  .addDecorator(withKnobs)
  .add('cart with dynamic variable', () => (
    <AllArticles
      ListOfArticles={[{
        image: '/images/photo/Bitmap_6.png',
        title: 'Ed-55 Relaxed tapered',
        color: '63 Rainbow Selvage - HR- 5',
        prix: '$ 100.00',
      }]}
    />
  ));

storiesOf('anly Cart Story', module)
  .addDecorator(withKnobs)
  .add('with dynamic variables', () => {
    const cartTest = {};
    cartTest.image = files('image', '/images/photo/Bitmap_3.png');
    cartTest.title = text('Title', 'Blitz dog shirt');
    cartTest.color = text('Color', 'White');
    cartTest.prix = number('prix', '$ 40.00');

    return (
      <CartComponent article={cartTest} />
    );
  });

storiesOf('Story of list Cart ', module)
  .addDecorator(withKnobs)
  .add('with dynamic variables', () => {
    const cartInfo = {};
    const nbOfCart = number('number Of Cart', '1');
    const listOfCart = reduce(new Array(nbOfCart), (acc) => {
      cartInfo.image = text('image', '/images/photo/Bitmap_3.png');
      cartInfo.title = text('Title', 'Blitz dog shirt');
      cartInfo.color = text('Color', 'White');
      cartInfo.prix = number('prix', '$ 40.00');
      acc.push(cartInfo);

      return acc;
    }, []).sort();

    return (
      <AllArticles ListOfArticles={listOfCart} />
    );
  });
